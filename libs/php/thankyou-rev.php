<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $comments = $_POST["comments"];

  $to = "stefan@cleandrabay.ie";
  $subject = "Cleandra reviews";
  $message = "Name: " . $name . "\n";
  $message .= "Email: " . $email . "\n";
  $message .= "Comments: " . $comments;

  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    header("Location: ../../thankyou.html");
    exit();
  } else {
    echo "Error sending the message. Please try again.";
  }
}
?>
