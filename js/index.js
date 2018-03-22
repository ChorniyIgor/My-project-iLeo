<!--Головний слайдер-->
jQuery('document').ready(function($){
  $('.upload').upload({
      action:'php/multisend.php',
      label:'',
      postKey:'file',
  }).on("filecomplete.upload", onFileComplete);
  $('#source-language').chosen();
  $('#target-language').chosen();
  $('.slider_container').slick({
        autoplay : true,
        autoplaySpeed : 4000,
        speed: 500,
        pauseOnHover:false,
        dots : true,
        arrows : true,
        responsive: [
               {
                 breakpoint: 767,
                 settings: {
                   dots : false,
                   arrows : true
                 }
               }

             ]
  });
});

<!--Компіляція файла, вивід результату у форму-->
function onFileComplete(e, file, response) {
	console.log("File Complete");
	console.info(response);
	var html = $("#queue_files").html();
	response = jQuery.parseJSON(response);

	if ( response.count_word !== undefined) {
			$("#fileWords").val( $("#fileWords").val()*1 + response.count_word*1 );
		html = html + "<p>" + file.name + ", количество слов - " + response.count_word +"</p>";
		pricePrintFile(document.getElementById('fileWords').value);
	} else {
		html = html + "<p>" + file.name + ", количество слов - не определено</p>";
		showErrorInCalc();
	};
	$("#sendform").append('<input type="hidden" name="loaded_files[]" id="loaded_files" value="'+response.filename+'" />');


	$("#queue_files").html( html );
	//console.info(file);
	//console.info(response);
};

<!--Слайдер відкликів-->
jQuery('document').ready(function($){
  $('.about-company-reviews-slider').slick({
        autoplay : false,
        autoplaySpeed : 4000,
        speed: 500,
        dots : false,
        pauseOnHover:false,
        arrows : true,
  });
});
