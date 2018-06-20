<?php

$bdd = new PDO ('mysql:host=localhost;dbname=classicmodels','root','troiswa');
$bdd->exec('SET NAMES UTF8');
$sql = "SELECT  orderNumber,orderDate,shippedDate,status FROM orders ORDER BY orderDate";
$requete = $bdd->prepare($sql);
$requete->execute();
$bd = $requete->fetchAll(PDO::FETCH_ASSOC);






include 'index.phtml';
?>