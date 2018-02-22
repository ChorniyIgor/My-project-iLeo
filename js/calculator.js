"use strict";
var type1=[
  "Griechisch",
  "Kroatisch",
  "Polnisch",
  "Russisch",
  "Slowakisch",
  "Slowenisch",
  "Spanisch (Argentinien)",
  "Spanisch (Mexiko)",
  "Spanisch (Spanien)",
  "Tschechisch",
  "Ukrainisch",
  "Ungarisch"
]

var type2=[
  "Bulgarisch",
  "Chinesisch (vereinfacht)",
  "Deutsch",
  "Estnisch",
  "Franz. (Belgien)",
  "Französisch",
  "Italienisch",
  "Kasachisch",
  "Lettisch",
  "Litauisch",
  "Mazedonisch",
  "Portugiesisch (Brasilien)",
  "Portugiesisch (Portugal)",
  "Rumänisch",
  "Serbisch",
  "Türkisch"
]

var type3=[
  "Arabisch",
  "Bosnisch",
  "Chinesisch (traditionell)",
  "Dänisch",
  "Finnisch",
  "Japanisch",
  "Katalanisch",
  "Koreanisch",
  "Montenegrinisch",
  "Niederländisch (Belgien)",
  "Niederländisch (Niederlande)",
  "Schwedisch"
]

/*забираємо оверлой і неактивну стилізацію кнопок*/
var showCal=1;
function showCalc(){
  if(showCal){
  var sourceLanguage=document.getElementById('source-language').value;
  var targetLanguage=document.getElementById('target-language').value;
  var orderOverloy = document.querySelector( '.hide_this_block' );
  var labelDownloadFiles = document.querySelector( '.download_files-hide' );
  var priceDiscount = document.querySelector( '.price-discount' );
  var orderBtn = document.querySelector( '.order_btn' );
  if(targetLanguage!=="error" && sourceLanguage!=="error"){
    orderOverloy.classList.add("hide-block");
    labelDownloadFiles.classList.remove("download_files-hide");
    priceDiscount .classList.remove("price-discount-hide");
    orderBtn .classList.remove("order_btn-hide");
    showCal=0;
    }
  }
}
/*----------------*/
/*заборона на вибір однакових полів*/
function daleteLang(){
    var sourceLanguage=document.getElementById('source-language').value;
    var targetLanguageList=document.getElementById('target-language');
   for (var i=1;i<=40;i++){
     targetLanguageList.options[i].style.display = "block"
      if(targetLanguageList.options[i].value==sourceLanguage){
        targetLanguageList.options[i].style.display = "none"
          $('#target-language').trigger('chosen:updated');
      };
  }
}
/*--------------------------*/
                /*розрахунок ціни за слово*/
                var pricecoef1;
                var pricecoef2;
                var pricePer=0.10;
                var pricePerWord;
                function priceCoef1(lang){
                    if(type1.indexOf(lang)!==-1){
                      pricecoef1=1;
                    };
                    if(type2.indexOf(lang)!==-1){
                      pricecoef1=1.1;
                    };
                    if(type3.indexOf(lang)!==-1){
                      pricecoef1=1.2;
                    };
                }
                function priceCoef2(lang){
                    if(type1.indexOf(lang)!==-1){
                      pricecoef2=1;
                    };
                    if(type2.indexOf(lang)!==-1){
                      pricecoef2=1.1;
                    };
                    if(type3.indexOf(lang)!==-1){
                      pricecoef2=1.2;
                    };
                }
                function pricecalc(){
                  if (pricecoef1 && pricecoef2){
                      pricePerWord=pricePer*pricecoef1*pricecoef2;
                      pricePerWord=pricePerWord.toFixed(2)
                      document.querySelector( '.price_word' ).innerHTML=dotToComa(pricePerWord)+' €/Wort';
                  }

                }
                function dotToComa(int){
                  var str=int+"";
                  return str.replace(".",",");
                }
            /*------------------------------------------------*/
            /*Підрахунок кількосі слів у текстAреа*/
                var countSimbolTa;
                  function countSimbol(t){
                  $(function(){
                    var Text=$(t).val();
                    var L=Text.length;
                    if(L>0){var noSpace=Text.match(/\S/g).length; var W=Text.match(/\S+?\s|\S+?$/g).length;}
                    else {var noSpace=0; var W=0;}
                    document.getElementById('countSimbols').value=W;
                    countSimbolTa=W;
                  });
                }
            /*-------------------------------*/
/*Функціії виводу ціни в відповідне поле в залежності від типу вводу*/
        function pricePrintInt(){
          var value=document.getElementById('words1').value;
          if (isNaN(document.getElementById('words1').value) || document.getElementById('words1').value==""){
            document.getElementById('price').value="0,00 €"
          }
          else{
            document.getElementById('price').value=dotToComa((value*pricePerWord).toFixed(2))+" €";
          }
          if(document.querySelector('.price_word').classList.contains('hide-block')){
            document.querySelector('.price_word').classList.remove('hide-block');
          }
          if(document.querySelector('.order_data_time').classList.contains('hide-block')){
            document.querySelector('.order_data_time').classList.remove('hide-block');
          }
           dataCounter(value);
        }

        function pricePrintTextarea(){
          if (isNaN(document.getElementById('countSimbols').value) || document.getElementById('countSimbols').value=="0" || countSimbols.value==undefined  ){
            document.getElementById('price').value="0,00 €"
          }
          else{
            document.getElementById('price').value=dotToComa((countSimbolTa*pricePerWord).toFixed(2))+" €";
          }
          if(document.querySelector('.price_word').classList.contains('hide-block')){
            document.querySelector('.price_word').classList.remove('hide-block');
          }

          if(document.querySelector('.order_data_time').classList.contains('hide-block')){
            document.querySelector('.order_data_time').classList.remove('hide-block');
          }
            dataCounter(countSimbolTa);
        }

        function pricePrintFile(value){
          if(calcError){
              document.getElementById('price').value=dotToComa(pricePerWord)+' €/Wort';
            document.querySelector( '.price_word' ).classList.add('hide-block');
            document.querySelector('.order_data_time').classList.add('hide-block');
          }
          else{
            if (isNaN(document.getElementById('fileWords').value) || document.getElementById('fileWords').value=="" || isNaN(pricePerWord)){
              document.getElementById('price').value="0,00 €"
            }
            else{
              document.getElementById('price').value=dotToComa((value*pricePerWord).toFixed(2))+" €";
              if(  document.querySelector('.order_data_time').classList.contains('hide-block')){
                  document.querySelector('.order_data_time').classList.remove('hide-block');
              }
               dataCounter(value);
            }
          }
        }
/*-------------------------------------------------------------*/
/*Механізм запуску виводу ціни в залежності від вибору способу вводу*/
          function totalPrice(){
            var priseType=document.querySelector("input[name=method_of_calculation]:checked");
            var numberOfWordsId=document.getElementById('number_of_words_id');
            var textInputId=document.getElementById('text_input_id');
            var downloadFilesId=document.getElementById('download_files_id');



            if(priseType==numberOfWordsId){
              var words=document.getElementById('words1');
              words.focus();
              pricePrintInt(words.value);
            }

            if(priseType==textInputId){
              var words=document.getElementById('input_textarea');
              words.focus();
              pricePrintTextarea();
            }

            if(priseType==downloadFilesId){
              var fileWords=document.getElementById('fileWords');
              pricePrintFile(fileWords.value);
            }

          }
/*---------------------------------------------------------------------*/
/* Функція виведення на екран повідомлення про помилку підрахунку слів*/
          var calcError=0;
          function showErrorInCalc(){
            calcError=1;
             document.querySelector('.count_error').classList.remove('hide-block');
             document.querySelector('.total_prise_file').classList.add('hide-block');
             totalPrice();
          }
/*-------------------------------*/
/*Підрахунок приблизного часу виконання замовлення*/
              /*перетворення назв місяців*/
              function getmonthG(monthNum){
                var monthG= ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
                return(monthG[monthNum]);
              }
              /*---------------------------*/
              function dataCounter(wordsCount){
                wordsCount=parseInt(wordsCount);
                var dataoutput= document.querySelector('.order_data_time');
                var timeNow= new Date();
                var workTime;
                var result;
                if( wordsCount<=2500 ) {workTime=1;}
                if( (wordsCount>2500) && (wordsCount<=4000) ){workTime=2;}
                if( (wordsCount>4000) && (wordsCount<=5500) ){workTime=3;}
                if( (wordsCount>5500) && (wordsCount<=8000) ){workTime=4;}
                if( (wordsCount>8000) && (wordsCount<=10500) ){workTime=5;}
                if( (wordsCount>10500) && (wordsCount<=13000) ){workTime=6;}
                if( (wordsCount>13000) && (wordsCount<=15500) ){workTime=7;}
                if( (wordsCount>15500) && (wordsCount<=18000) ){workTime=8;}
                if( (wordsCount>18000) && (wordsCount<=20500) ){workTime=9;}
                if( (wordsCount>20500) && (wordsCount<=23000) ){workTime=10;}
                if( (wordsCount>23000) && (wordsCount<=25000) ){workTime=12;}
                if(wordsCount>25000){workTime=14;}

                timeNow.setDate(timeNow.getDate() + workTime);
                if(wordsCount=="" || wordsCount==undefined || isNaN(wordsCount)){
                  result="";
                }
                else{
                  result=timeNow.getDate()+". "+getmonthG(timeNow.getMonth())+" "+timeNow.getFullYear()+", "+(timeNow.getHours()+1)+":00";
                }
                dataoutput.innerHTML=result;
              }
/*-----------------------------------------------------------------------------*/
/*Функція перевірки введених даних в форму перед відкриттям вікна оформлення замовлення*/
              function checkInputData(){
                var priseType=document.querySelector("input[name=method_of_calculation]:checked");
                var numberOfWordsId=document.getElementById('number_of_words_id');
                var textInputId=document.getElementById('text_input_id');
                var downloadFilesId=document.getElementById('download_files_id');



                if(priseType==numberOfWordsId){
                        typeOfLoadErrorShow();
                        $(downloadFilesId).attr('checked',true);
                        check();
                        setTimeout(totalPrice, 100);
                }

                if(priseType==textInputId){
                          var countSimbols=document.getElementById('countSimbols').value;
                          if  (countSimbols<100) {
                            minimalError();
                          }
                          else {orderFormDataShow()}
                }

                if(priseType==downloadFilesId){
                          var fileWords=document.getElementById('fileWords').value;
                            if(calcError){
                            orderFormDataShow();
                          }
                          else{
                            if  (fileWords<100) {
                              minimalError();
                            }
                            else{
                              orderFormDataShow();
                            }
                          }

                }

              }
  /*-----------------------------------------------------------------------------------------------*/
/*Функція вспливання і закривання вікна помилки через малу кількість слів*/
function minimalError(){
  document.querySelector('.minimalError').classList.add('show-block');
  document.querySelector('.overlay').classList.add('show-block');
}
function minimalErrorClose(){
  document.querySelector('.minimalError').classList.remove('show-block');
  document.querySelector('.overlay').classList.remove('show-block');
}
/*--------------------------------------------------------------------------*/
/*Функція вспливання і закривання вікна помилки через недостатні дані*/
function typeOfLoadErrorShow(){
  document.querySelector('.typeOfLoadError').classList.add('show-block');
  document.querySelector('.overlay').classList.add('show-block');
}
function typeOfLoadErrorClose(){
  document.querySelector('.typeOfLoadError').classList.remove('show-block');
  document.querySelector('.overlay').classList.remove('show-block');
}
/*--------------------------------------------------------------------------*/
/*Функція вспливання і закривання вікна подяки за замовлення*/
function orderSuccessfulShow(){
  document.querySelector('.orderSuccessful').classList.add('show-block');
  document.querySelector('.overlay').classList.add('show-block');
}
function orderSuccessfulClose(){
  document.querySelector('.orderSuccessful').classList.remove('show-block');
  document.querySelector('.overlay').classList.remove('show-block');
}
/*--------------------------------------------------------------------------*/
/*Функція вспливання і закривання вікна введення даних про замовника*/
    function orderFormDataShow() {
  document.querySelector('.user_order_data').classList.add('show-block');
  document.querySelector('.overlay_user_data').classList.add('show-block');
}
function orderFormDataClose(){
  document.querySelector('.user_order_data').classList.remove('show-block');
  document.querySelector('.overlay_user_data').classList.remove('show-block');
}
/*--------------------------------------------------------------------------*/























/**/
