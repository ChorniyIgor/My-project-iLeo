<?php
	
require_once("doc2txt.class.php");	
require_once("pdf/index.php");
	
class iCounter {
	static function docx2text($filename) {
		if (!file_exists($filename)) trigger_error("Not found file - {$filename}", E_USER_ERROR);
		
		$docObj = new Doc2Txt($filename);
		$txt = $docObj->convertToText();
		return $txt;
	}
	
	
	static function pdf2text($filename) {
		$parser = new \Smalot\PdfParser\Parser();
		$pdf    = $parser->parseFile($filename);
		 
		$text = $pdf->getText();
		return $text;
	}	
	
	
	static function odt2text($filename) {
		return self::getTextFromZippedXML($filename, "content.xml");
	}
	
	
	
	
	
        static function getTextFromZippedXML($archiveFile, $contentFile) {
            // Создаёт "реинкарнацию" zip-архива...
            $zip = new ZipArchive;
            // И пытаемся открыть переданный zip-файл
            if ($zip->open($archiveFile)) {
                // В случае успеха ищем в архиве файл с данными
                if (($index = $zip->locateName($contentFile)) !== false) {
                    // Если находим, то читаем его в строку
                    $content = $zip->getFromIndex($index);
                    // Закрываем zip-архив, он нам больше не нужен
                    $zip->close();
         
                    // После этого подгружаем все entity и по возможности include'ы других файлов
                    // Проглатываем ошибки и предупреждения
                    $xml = DOMDocument::loadXML($content, LIBXML_NOENT | LIBXML_XINCLUDE | LIBXML_NOERROR | LIBXML_NOWARNING);
                    // После чего возвращаем данные без XML-тегов форматирования
         
                    return strip_tags($xml->saveXML());
                }
                $zip->close();
            }
            // Если что-то пошло не так, возвращаем пустую строку
            return "";
        }	
	
	
	
	
	
	
};

function mb_str_word_count($str) {
	return count(preg_split('~[^\p{L}\p{N}\']+~u',$str));
}



?>