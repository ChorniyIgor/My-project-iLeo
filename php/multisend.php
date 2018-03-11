 <?php
ini_set('display_errors', 0);
error_reporting(0);


$domain = "http://ileoo.dev";
#$domain = "http://aleney.com/project/form1";
$to = 'maxim.demkiv@gmail.com';
#$to = 'consulented@gmail.com';
require_once("data_counter.php");

$data_res = array();

if ( isset( $_POST['sendMail'] ) ) {
    $price = substr( $_POST['price'], 0, 64 );
    $words = substr( $_POST['words'], 0, 64 );
    $pos = substr( $_POST['pos'], 0, 64 );
    $source_language = substr( $_POST['source_language'], 0, 64 );
    $target_language = substr( $_POST['target_language'], 0, 64 );
	$name	= substr( $_POST['name'], 0, 64 );
	$email	 = substr( $_POST['email'], 0, 64 );
	$orderNum = substr( $_POST['orderNum'], 0, 64 );
	$orderDate = substr( $_POST['orderDate'], 0, 64 );
	$message = substr( $_POST['message'], 0, 250 );
	$filename = array();




if($_FILES) {
	$filepath = array();

	$file2 = array();
	$i = 0;




		foreach ($_FILES["file"]["error"] as $key => $error) {
			if ($error == UPLOAD_ERR_OK) {
				$uploadfile = "download/" . basename($_FILES['file']['name']);

				$filename[$i][0] = $_FILES["file"]["tmp_name"][$key];
				$filename[$i][1] = $_FILES["file"]["name"][$key];
				$i++;
			}
		}
	};


	foreach ($_REQUEST["loaded_files"] as $filename) {
		$file_text .= "{$domain}/php/download/{$filename}\r\n";

	};


	$body = "Нове замовлення, виконане із сторінки ( ".$pos." )\r\n\r\n";
	$body .= "№ замовлення:\r\n".$orderNum."\r\n\r\n";
	$body .= "Ім'я замовника:\r\n".$name."\r\n\r\n";
	$body .= "Розмір замовлення:\r\n".$words." слів\r\n\r\n";
	$body .= "Вартість розрахована калькулятором на сайті:\r\n".$price."€\r\n\r\n";
	$body .= "E-mail:\r\n".$email."\r\n\r\n";
	$body .= "Переклад з:\r\n".$source_language."\r\n\r\n";
    $body .= "Переклад на:\r\n".$target_language."\r\n\r\n";
	$body .= "Повідомлення від клієнта:\r\n".$message."\r\n\r\n";
	$body .= "Замовлення створено клієнтом :\r\n".$orderDate;
	$body .= "\r\n\r\n" . $file_text;

	send_mail($to, $body, $email, $filename);
};

if(isset($_FILES["file"]) && $_FILES["file"]["error"] == UPLOAD_ERR_OK) {
		if ($error == UPLOAD_ERR_OK) {


			$filename = preg_replace('#\s#', '-', basename($_FILES['file']['name']));
			$ext = substr($_FILES['file']['name'], strrpos($_FILES['file']['name'], '.') + 1);
			//$filename = md5($filename . time()) . "." . $ext;
			if (file_exists("download/" . $filename)) $filename = basename($filename) . "-" . md5($filename . time()) . "." . $ext;
			$uploadfile = "download/" . $filename;


			if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {

				switch ($ext):
				case "docx";
					$text = iCounter::docx2text( $uploadfile );
					$data_res["count_word"] = mb_str_word_count($text);

				break;
				case "odt";
					$text = iCounter::odt2text( $uploadfile );
					$data_res["count_word"] = mb_str_word_count($text);

				break;
				case "pdf";
					$text = iCounter::pdf2text( $uploadfile );
					$data_res["count_word"] = mb_str_word_count($text);

				break;
				case "txt";
					$text = file_get_contents( $uploadfile );
					$data_res["count_word"] = mb_str_word_count($text);

				break;
				endswitch;


				if ($data_res["count_word"] < 2) unset($data_res["count_word"]);

				$data_res["filename"] = $filename;
			}

		}


};

// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($to, $body, $email, $filename)
{
	$subject = 'Нове замовлення із сайту iLeo';
	$boundary = "--".md5(uniqid(time())); // генерируем разделитель
	$headers = "From: ".$email."\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
	$multipart = "--".$boundary."\r\n";
	$multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

	$body = $body."\r\n\r\n";

	$multipart .= $body;
	foreach ($filename as $key => $value) {
		$fp = fopen($value[0], "r");
		$content = fread($fp, filesize($value[0]));
		fclose($fp);
		$file .= "--".$boundary."\r\n";
		$file .= "Content-Type: application/octet-stream\r\n";
		$file .= "Content-Transfer-Encoding: base64\r\n";
		$file .= "Content-Disposition: attachment; filename=\"".$value[1]."\"\r\n\r\n";
		$file .= chunk_split(base64_encode($content))."\r\n";
	}
	$multipart .= $file."--".$boundary."--\r\n";
	mail($to, $subject, $multipart, $headers);
}

echo json_encode( $data_res );
?>
