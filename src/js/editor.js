
const randomId = Math.random().toString(36).substring(7);
const randomIdDiv = document.querySelector('#random-id');
randomIdDiv.id = randomId;

var editor = null;

function initializeEditor(initialContent) {
  if (editor !== null) {
    editor.dispose();
  }

  require(['vs/editor/editor.main'], () => {

    // monaco.editor.defineTheme('default', {
    //   base: 'vs-dark',
    //   inherit: true,
    //   rules: [
    //       {
    //           token: "identifier",
    //           foreground: getComputedStyle(document.documentElement).getPropertyValue('--c-secondary')
    //       },
    //       {
    //           token: "keyword",
    //           foreground: getComputedStyle(document.documentElement).getPropertyValue('--c-primary')
    //       },
    //       {
    //           token: "string",
    //           foreground: getComputedStyle(document.documentElement).getPropertyValue('--c-tertiary')
    //       },
    //       {
    //           token: "number",
    //           foreground: getComputedStyle(document.documentElement).getPropertyValue('--c-variant1')
    //       },
    //       {
    //           token: "comment",
    //           fontStyle: "italic",
    //           foreground: getComputedStyle(document.documentElement).getPropertyValue('--c-variant2')
    //       },
    //       {
    //           token: "operator.sql",
    //           foreground: getComputedStyle(document.documentElement).getPropertyValue('--c-text')
    //       },
    //       {
    //           token: "string.quote",
    //           foreground: getComputedStyle(document.documentElement).getPropertyValue('--c-text')
    //       },
    //       {
    //           token: "predefined.sql",
    //           foreground: getComputedStyle(document.documentElement).getPropertyValue('--c-primary')
    //       }
    //   ],
    //   "colors": {
    //     "editor.foreground": getComputedStyle(document.documentElement).getPropertyValue('--c-bar'),
    //     "editor.background": getComputedStyle(document.documentElement).getPropertyValue('--c-bg'),
    //     "editor.selectionBackground": "#44475a",
    //     "editor.lineHighlightBackground": "#00000061",
    //   }
    // });
    // monaco.editor.setTheme('default');

    editor = monaco.editor.create(randomIdDiv, {
      value: initialContent,
      language: 'text',
      fontSize: 15,
      minimap: {
        enabled: false,
      },
      scrollbar: {
        horizontal: false,
        vertical: false,
      },
      mouseWheelZoom: true,
      automaticLayout: true,
      preserveCursor: true,
    });

  });
  
}
