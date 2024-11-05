<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDeDatos = "parcial";
$conexion = new mysqli($servidor, $usuario, $password, $baseDeDatos);
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
$fecha_evento= $_POST["fecha_evento"];
$email= $_POST["email"];
$cantidad_de_persona= $_POST["cantidad_de_persona"];
$hora= $_POST["hora"];
$sql="INSERT INTO reservacion (fecha_evento, email, cantidad_de_persona, hora) VALUES ('$fecha_evento', '$email', '$cantidad_de_persona', '$hora')";
$conexion->query($sql);
echo 'Reserva exitosa';
echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laberinto Mágico</title>
    <link rel="stylesheet" href="index.html">
    <button onclick="window.location.href=\'index.html\'">Ir a la Página Principal</button>
</head>'
?>