<?php

if(isset($_POST['email'])) {

	$error_message = "";//Linea numero 52;
	
    $email_to = "info@labeleventos.com.ar";

    $email_subject = "Contacto desde Label Eventos";

    // Se valida que los campos del formulairo estén llenos
    if(!isset($_POST['first_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['message'])) {

		$error_message = "Debe completar todos los campos para enviar su consulta.<br />";
    }

 //En esta parte el valor "name"  sirve para crear las variables que recolectaran la información de cada campo
    $first_name = $_POST['first_name']; // requerido
    $email_from = $_POST['email']; // requerido
    $telephone = $_POST['phone']; // no requerido 
    $message = $_POST['message']; // requerido

 //En esta parte se verifica que la dirección de correo sea válida 
 $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'La dirección de correo proporcionada no es válida.<br />';
  }

//En esta parte se validan las cadenas de texto
  $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'El nombre ingresado no es válido.<br />';
  } 

  if(strlen($message) < 15) {
    $error_message .= 'Debe escribir al menos 15 caracteres para enviar un mensaje.<br />';
  }

   if(strlen($error_message) > 0) {
    echo($error_message);
  }else{
	 //Este es el cuerpo del mensaje tal y como llegará al correo

    $email_message = "Mensaje enviado:\n\n";

	function clean_string($string) {

	$bad = array("content-type","bcc:","to:","cc:","href");
	return str_replace($bad,"",$string);
	}

 
    $email_message .= "Nombre: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telefono: ".clean_string($telephone)."\n";
    $email_message .= "Mensaje: ".clean_string($message)."\n";

	//Se crean los encabezados del correo

	$headers = 'From: '.$first_name."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();

	@mail($email_to, $email_subject, $email_message, $headers); 
	}
}
	

 

?>