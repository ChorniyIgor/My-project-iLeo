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
function dotToComa(int){
  var str=int.toFixed(2)+"";
  return str.replace(".",",");
}


function calculator(){
var numberOfWords=document.getElementById('number_of_words_id').checked;
var textofInput=document.getElementById('text_input_id').checked;
var downloadFiles=document.getElementById('download_files_id').checked;







if(sourceLanguage=="Deutsch"){alert("dsf");}



if(numberOfWords){
  var words=document.getElementById('words').value;
  words=parseInt(words);
  var price=words*pricePerSymbol;
    if (isNaN(price)){document.getElementById('price').innerHTML="0 €"}
    else{
    document.getElementById('price').value=price+" €";
    }
  }
  if(textofInput){
    var words=document.getElementById('countSimbols').value;
    words=parseInt(words);
    var price=words*pricePerSymbol;
      if (isNaN(price)){document.getElementById('price').innerHTML="0 €"}
      else{
      document.getElementById('price').value=price+" €";
      }
    }
    if(downloadFiles){
      var words=document.getElementById('fileWords').value;
      words=parseInt(words);
      var price=words*pricePerSymbol;
        if (isNaN(price)){document.getElementById('price').innerHTML="0 €"}
        else{
        document.getElementById('price').value=price+" €";
        }
      }


}
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
var pricecoef1;
var pricecoef2;
var pricePer=0.10;
var pricePerSymbol;
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
      pricePerSymbol=pricePer*pricecoef1*pricecoef1;
      document.querySelector( '.price_word' ).innerHTML=dotToComa(pricePerSymbol)+' ct./Wort';
  }

}
