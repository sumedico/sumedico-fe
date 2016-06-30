<?php

$obj = json_decode(file_get_contents("php://input"));

$to = "lipsumlabs@germanbobr.com.ar";
$subject = $obj->subject;
$txt = wordwrap($obj->text,70);
$headers = "From: ".$obj->sender."<".$obj->senderaddr.">" . "\r\n";

mail($to,$subject,$txt,$headers);

echo('[{"result":"ok"}]');

//EOF - mail.php