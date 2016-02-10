<?php
if( isset($_POST) ){
    $email_from = "info@dboxtest.dx.am";
    $email_to = "mosesesan@hotmail.com";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject="New message from contact form";

    $email_message = "Message details below.\r\n";
    $email_message .= "Name: ".$name."\r\n";
    $email_message .= "Email: ".$email."\r\n";
    $email_message .= "Message: ".$message."\r\n";

    $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    $mail = mail($email_to, $subject, $email_message, $headers);

    if($mail){
        echo "Email sent! Thank you for using our mail form.";
        echo "<p>Click <a href='/'>here</a> to return to the main page.</p>";
    }else{
        echo "Mail sending failed.";
    }
}
?>