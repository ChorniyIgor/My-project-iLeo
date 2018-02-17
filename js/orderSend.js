// Как только страничка загрузилась
	window.onload = function () {
		// проверяем поддерживает ли браузер FormData
			if(!window.FormData) {
				/* * если не поддерживает, то выводим
				* то выводим предупреждение вместо формы */
				var div = ge('content');
				div.innerHTML = "Ваш браузер не поддерживает объект FormData";
				div.className = 'notSupport';
			}
	}


jQuery(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	jQuery("#orderForm").validate({
		submitHandler: function(form){
			var form = document.forms.sendform,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "multisend.php");

			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						jQuery("#orderForm").html('<p class="thank">Данные отправлены!<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});
})

function sendSuccess(callback){
	jQuery(callback).find("form fieldset").html(thank);
	startClock();
}
