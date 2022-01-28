/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
figma.showUI(__html__, {
    width: 1000,
    height: 500
});
let error = 'Please select a frame on the page.';
let scss;
let iconList;
let cssSpriteMixin;
let loop;
scss = '';
iconList = '';
cssSpriteMixin = `@mixin cssSprite( $spriteVals ) {
  background-image: url( #{ nth( $spriteVals, 3 ) } );
  background-position: nth( $spriteVals, 4 ) nth( $spriteVals, 5 );
  @media only screen and ( -webkit-min-device-pixel-ratio: 2 ), only screen and ( min-device-pixel-ratio: 2 ) {
      background-image: url( #{ nth( $spriteVals, 6 ) } );
      background-size: $bgiSizeW $bgiSizeH;
  }
}`;
function generateScss() {
    let selectedObjects = figma.currentPage.selection;
    if (selectedObjects.length === 0) {
        figma.ui.postMessage(error);
    }
    else {
        const frame = selectedObjects[0];
        if (frame.type !== 'FRAME') {
            figma.ui.postMessage(error);
        }
        else {
            scss += 'Generated code for ' + frame.children.length + ' layers.\n\n';
            scss += cssSpriteMixin + '\n\n';
            scss += '$' + frame.name + 'Path: ' + '$' + frame.name + ';\n';
            scss += '$' + frame.name + 'URL: ' + '$' + frame.name + '$' + frame.name + 'Path + \'.png\';\n';
            scss += '$' + frame.name + 'x2URL: ' + '$' + frame.name + '$' + frame.name + 'Path + \'@2x.png\';\n\n';
            scss += '$bgiSizeW: ' + frame.width + 'px;\n';
            scss += '$bgiSizeH: ' + frame.height + 'px;\n';
            for (const layer of frame.children) {
                scss += '$' + layer.name + ': ' + layer.width + 'px ' + layer.height + 'px $' + frame.name + 'URL ' + layer.x * -1 + 'px ' + layer.y * -1 + 'px $' + frame.name + '2xURL; \n';
                iconList += '$' + layer.name + ' ' + layer.name + ', ';
            }
            scss += '$' + frame.name + 'List: ' + iconList;
            scss = scss.substring(0, scss.length - 2);
            scss += ';\n\n';
            scss += '@each $icon in $' + frame.name + 'List {\n';
            scss += '  $' + frame.name + 'Name: nth( $icon, 2 );\n';
            scss += '  $' + frame.name + 'Class: nth( $icon, 1 );\n';
            scss += '  &.#{$' + frame.name + 'Name} {\n';
            scss += '    @include cssSprite( $' + frame.name + 'Class );\n';
            scss += '  }\n';
            scss += '}\n';
            figma.ui.postMessage(scss);
        }
    }
}
generateScss();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0EsZ0NBQWdDLHdCQUF3QjtBQUN4RDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFLHdHQUF3RztBQUN4Ryw2R0FBNkc7QUFDN0csc0RBQXNEO0FBQ3RELHVEQUF1RDtBQUN2RDtBQUNBLDBMQUEwTDtBQUMxTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qiw2REFBNkQ7QUFDN0QsZ0VBQWdFO0FBQ2hFLGlFQUFpRTtBQUNqRSwyQkFBMkIsMEJBQTBCO0FBQ3JELHdFQUF3RTtBQUN4RSx3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3NzLXNwcml0ZXMvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmaWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDUwMFxufSk7XG5sZXQgZXJyb3IgPSAnUGxlYXNlIHNlbGVjdCBhIGZyYW1lIG9uIHRoZSBwYWdlLic7XG5sZXQgc2NzcztcbmxldCBpY29uTGlzdDtcbmxldCBjc3NTcHJpdGVNaXhpbjtcbmxldCBsb29wO1xuc2NzcyA9ICcnO1xuaWNvbkxpc3QgPSAnJztcbmNzc1Nwcml0ZU1peGluID0gYEBtaXhpbiBjc3NTcHJpdGUoICRzcHJpdGVWYWxzICkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoICN7IG50aCggJHNwcml0ZVZhbHMsIDMgKSB9ICk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IG50aCggJHNwcml0ZVZhbHMsIDQgKSBudGgoICRzcHJpdGVWYWxzLCA1ICk7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCAtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIgKSwgb25seSBzY3JlZW4gYW5kICggbWluLWRldmljZS1waXhlbC1yYXRpbzogMiApIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCggI3sgbnRoKCAkc3ByaXRlVmFscywgNiApIH0gKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogJGJnaVNpemVXICRiZ2lTaXplSDtcbiAgfVxufWA7XG5mdW5jdGlvbiBnZW5lcmF0ZVNjc3MoKSB7XG4gICAgbGV0IHNlbGVjdGVkT2JqZWN0cyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBpZiAoc2VsZWN0ZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShlcnJvcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZSA9IHNlbGVjdGVkT2JqZWN0c1swXTtcbiAgICAgICAgaWYgKGZyYW1lLnR5cGUgIT09ICdGUkFNRScpIHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjc3MgKz0gJ0dlbmVyYXRlZCBjb2RlIGZvciAnICsgZnJhbWUuY2hpbGRyZW4ubGVuZ3RoICsgJyBsYXllcnMuXFxuXFxuJztcbiAgICAgICAgICAgIHNjc3MgKz0gY3NzU3ByaXRlTWl4aW4gKyAnXFxuXFxuJztcbiAgICAgICAgICAgIHNjc3MgKz0gJyQnICsgZnJhbWUubmFtZSArICdQYXRoOiAnICsgJyQnICsgZnJhbWUubmFtZSArICc7XFxuJztcbiAgICAgICAgICAgIHNjc3MgKz0gJyQnICsgZnJhbWUubmFtZSArICdVUkw6ICcgKyAnJCcgKyBmcmFtZS5uYW1lICsgJyQnICsgZnJhbWUubmFtZSArICdQYXRoICsgXFwnLnBuZ1xcJztcXG4nO1xuICAgICAgICAgICAgc2NzcyArPSAnJCcgKyBmcmFtZS5uYW1lICsgJ3gyVVJMOiAnICsgJyQnICsgZnJhbWUubmFtZSArICckJyArIGZyYW1lLm5hbWUgKyAnUGF0aCArIFxcJ0AyeC5wbmdcXCc7XFxuXFxuJztcbiAgICAgICAgICAgIHNjc3MgKz0gJyRiZ2lTaXplVzogJyArIGZyYW1lLndpZHRoICsgJ3B4O1xcbic7XG4gICAgICAgICAgICBzY3NzICs9ICckYmdpU2l6ZUg6ICcgKyBmcmFtZS5oZWlnaHQgKyAncHg7XFxuJztcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgZnJhbWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBzY3NzICs9ICckJyArIGxheWVyLm5hbWUgKyAnOiAnICsgbGF5ZXIud2lkdGggKyAncHggJyArIGxheWVyLmhlaWdodCArICdweCAkJyArIGZyYW1lLm5hbWUgKyAnVVJMICcgKyBsYXllci54ICogLTEgKyAncHggJyArIGxheWVyLnkgKiAtMSArICdweCAkJyArIGZyYW1lLm5hbWUgKyAnMnhVUkw7IFxcbic7XG4gICAgICAgICAgICAgICAgaWNvbkxpc3QgKz0gJyQnICsgbGF5ZXIubmFtZSArICcgJyArIGxheWVyLm5hbWUgKyAnLCAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NzcyArPSAnJCcgKyBmcmFtZS5uYW1lICsgJ0xpc3Q6ICcgKyBpY29uTGlzdDtcbiAgICAgICAgICAgIHNjc3MgPSBzY3NzLnN1YnN0cmluZygwLCBzY3NzLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgc2NzcyArPSAnO1xcblxcbic7XG4gICAgICAgICAgICBzY3NzICs9ICdAZWFjaCAkaWNvbiBpbiAkJyArIGZyYW1lLm5hbWUgKyAnTGlzdCB7XFxuJztcbiAgICAgICAgICAgIHNjc3MgKz0gJyAgJCcgKyBmcmFtZS5uYW1lICsgJ05hbWU6IG50aCggJGljb24sIDIgKTtcXG4nO1xuICAgICAgICAgICAgc2NzcyArPSAnICAkJyArIGZyYW1lLm5hbWUgKyAnQ2xhc3M6IG50aCggJGljb24sIDEgKTtcXG4nO1xuICAgICAgICAgICAgc2NzcyArPSAnICAmLiN7JCcgKyBmcmFtZS5uYW1lICsgJ05hbWV9IHtcXG4nO1xuICAgICAgICAgICAgc2NzcyArPSAnICAgIEBpbmNsdWRlIGNzc1Nwcml0ZSggJCcgKyBmcmFtZS5uYW1lICsgJ0NsYXNzICk7XFxuJztcbiAgICAgICAgICAgIHNjc3MgKz0gJyAgfVxcbic7XG4gICAgICAgICAgICBzY3NzICs9ICd9XFxuJztcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNjc3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuZ2VuZXJhdGVTY3NzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=