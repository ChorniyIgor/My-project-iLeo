// Как только страничка загрузилась
	window.onload = function () {
		// проверяем поддерживает ли браузер FormData
			if(!window.FormData) {
				/* * если не поддерживает, то выводим
				* то выводим предупреждение вместо формы */
			
			//	var div = ge('content');
			//	div.innerHTML = "Ваш браузер не поддерживает объект FormData";
			//	div.className = 'notSupport';
			}
	}


jQuery(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	jQuery("#sendform").validate({
		submitHandler: function(form){
/*унікальний номер замовлення*/
			var date=new Date();
			document.getElementById('orderDate').value=date;
			var dateS=""+parseInt(+date);
			var num=parseInt("3"+dateS.substring(5));
			document.getElementById('orderNum').value=num;

/*-----------------------*/
			var form = document.forms.sendform,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "php/multisend.php");

			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
					    var popap=document.querySelector(".orderSuccessful");
                        var overlay=document.querySelector(".overlay");
                        (function Show(){
                                popap.classList.add("show-block");
                                overlay.classList.add("show-block");
                            })();

						//jQuery("#sendform").html('<p class="thank">Данные отправлены!<p>');
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
