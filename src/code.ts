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
      scss += '$bgiSizeW: ' + frame.width + 'px;\n'
      scss += '$bgiSizeH: ' + frame.height + 'px;\n'
      for (const layer of frame.children) {
        scss += '$' + layer.name + ': ' + layer.width + 'px ' + layer.height + 'px $' + frame.name + 'URL ' + layer.x*-1 + 'px ' + layer.y*-1 + 'px $' + frame.name + '2xURL; \n'
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
