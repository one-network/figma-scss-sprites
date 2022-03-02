/*
  Copyright 2022 Roadworks Information Ltd

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

figma.showUI(__html__, {
  width: 1000,
  height: 500
})

let error: string = 'Please select a frame on the page.';
let scss: string
let iconList: string
let cssSpriteMixin: string
let loop: string

scss = ''
iconList = ''
cssSpriteMixin = `@mixin cssSprite( $spriteVals ) {
  background-image: url( #{ nth( $spriteVals, 3 ) } );
  background-position: nth( $spriteVals, 4 ) nth( $spriteVals, 5 );
  @media only screen and ( -webkit-min-device-pixel-ratio: 2 ), only screen and ( min-device-pixel-ratio: 2 ) {
    background-image: url( #{ nth( $spriteVals, 6 ) } );
    background-size: $bgiSizeW $bgiSizeH;
  }
}`

function generateScss() {
  let selectedObjects = figma.currentPage.selection
  if (selectedObjects.length === 0) {
    figma.ui.postMessage(error);
  } else {
    const frame = selectedObjects[0];
    if (frame.type !== 'FRAME') {
      figma.ui.postMessage(error)
    } else {
      scss += 'Generated code for ' + frame.children.length + ' layers.\n\n'
      scss += cssSpriteMixin + '\n\n'
      scss += '$' + frame.name + 'Path: ' + '$' + frame.name + ';\n'
      scss += '$' + frame.name + 'URL: ' + '$' + frame.name + '$' + frame.name + 'Path + \'.png\';\n'
      scss += '$' + frame.name + 'x2URL: ' + '$' + frame.name + '$' + frame.name + 'Path + \'@2x.png\';\n\n'
      scss += '$bgiSizeW: ' + Math.round(frame.width) + 'px;\n'
      scss += '$bgiSizeH: ' + Math.round(frame.height) + 'px;\n'
      for (const layer of frame.children) {
        scss += '$' + layer.name + ': ' + Math.round(layer.width) + 'px ' + Math.round(layer.height) + 'px $' + frame.name + 'URL ' + Math.round(layer.x)*-1 + 'px ' + Math.round(layer.y)*-1 + 'px $' + frame.name + '2xURL; \n'
        iconList += '$' + layer.name + ' ' + layer.name + ', '
      }
      scss += '$' + frame.name + 'List: ' + iconList
      scss = scss.substring(0, scss.length-2)
      scss += ';\n\n'
      scss += '@each $icon in $' + frame.name + 'List {\n'
      scss += '  $' + frame.name + 'Name: nth( $icon, 2 );\n'
      scss += '  $' + frame.name + 'Class: nth( $icon, 1 );\n'
      scss += '  &.#{$' + frame.name +'Name} {\n'
      scss += '    @include cssSprite( $'+ frame.name+'Class );\n'
      scss += '  }\n'
      scss += '}\n'
      figma.ui.postMessage(scss)
    }
  }
}

generateScss()
