$(document).ready(function(){

  /* This section is for automatic typing */
  var typed = new Typed(".typed-text", {
      strings: ["Upload File with Multer", "by", "Pabon"],
      typeSpeed: 30,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      loop: true,
      startDelay: 1000,
      showCursor: false
  });
  /* End of This section is for automatic typing */

  /* Upload file via FilePond with rest call */

  FilePond.registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
    FilePondPluginImageEdit
  );

  /* Profile Picture Options */
  FilePond.create(
  	document.querySelector('#profile-picture'),
  	{
      labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
      imagePreviewHeight: 170,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 200,
      imageResizeTargetHeight: 200,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom'
  	}
  );
  /* End of Profile Picture Options */

  // Select the file input and use
  // create() to turn it into a pond
  FilePond.create(
      document.querySelector('#multiple-files')
  );

  /*Upload file via rest call*/
  FilePond.setOptions({
    server: 'https://192.168.0.109:9002/multiplefileupload'
  });

  /* Upload file via FilePond with rest call ends */

});
