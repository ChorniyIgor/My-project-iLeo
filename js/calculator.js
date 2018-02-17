"use strict";
function calculator(){


var numberOfWords=document.getElementById('number_of_words_id').checked;
var textofInput=document.getElementById('text_input_id').checked;
var downloadFiles=document.getElementById('download_files_id').checked;
var pricePerSymbol=0.11;
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
setInterval(calculator,100);﻿
