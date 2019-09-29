$(document).ready(function(){

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

  /* Upload file with ajax request */

  // const inputElement = document.querySelector('input[type="file"]');
  // const pond = FilePond.create( inputElement );

  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize
  );

  // Select the file input and use
  // create() to turn it into a pond
  FilePond.create(
      document.querySelector('input[type="file"]')
  );


  FilePond.setOptions({
    server: 'https://192.168.0.108:9002/multiplefileupload'
  });

  // console.log(pond);

  /* Upload file with ajax request ends */

});
