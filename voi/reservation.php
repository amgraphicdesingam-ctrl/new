<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $to = "carmaghraouicars@gmail.com"; // بدّل الإيميل هنا
  $subject = "Nouvelle réservation - Maghraoui Cars";

  $message = "
Nom: " . $_POST['name'] . "
Téléphone: " . $_POST['phone'] . "
Email: " . $_POST['email'] . "
Véhicule: " . $_POST['car'] . "
Date début: " . $_POST['date_start'] . "
Date fin: " . $_POST['date_end'] . "
Message: " . $_POST['message'];

  $headers = "From: " . $_POST['email'];

  if (mail($to, $subject, $message, $headers)) {
    echo "✔️ Votre réservation a été envoyée avec succès.";
  } else {
    echo "❌ Erreur lors de l’envoi. Veuillez réessayer.";
  }
}
?>
