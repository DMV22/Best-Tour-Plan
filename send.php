<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
$title = "GRAND HILTON HOTEL";
$body = "
<h2>A new letter</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br>
<b>Email:</b> $email<br>
<b>Message:</b><br>$message
";

// Налаштування PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Налаштування моєї почти
    $mail->Host       = 'smtp.ukr.net'; // SMTP серверу моєї почти
    $mail->Username   = 'My_Email';
    $mail->Password   = 'My_Password'; 
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('My_Email', $name); // Адрес самої почти та ім'я відправника

    // Отримувач повідомлення 
    $mail->addAddress('My_Email');  

// Відправка повідомлення 
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Перевірка відправленого повідомлення 
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Повідомлення не було надіслано. Причина помилки: {$mail->ErrorInfo}";
}

// Відображення результату
header('Location: thanks.html');