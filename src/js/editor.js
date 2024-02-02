let editor;

document.addEventListener("DOMContentLoaded", function() {
        
  editor = new toastui.Editor({
      el: document.querySelector('#editor'),
      height: '100%',
      initialEditType: 'wysiwyg',
      hideModeSwitch: true,
      initialValue: '',
      placeholder: 'Write something...', 
      toolbarItems: [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr'],
          ['ul', 'ol', 'task'],
          ['table']
      ]
  });

});

