<?php
$numorder = $_GET['orderNumber'];
$bdd = new PDO('mysql:host=localhost;dbname=classicmodels','root','troiswa');
$bdd->exec('SET NAMES UTF8');

$order = "SELECT products.productName,priceEach,quantityOrdered,(quantityOrdered*priceEach) as tot FROM  orderdetails INNER JOIN products ON orderdetails.productCode = products.productCode
WHERE orderNumber =? ORDER BY orderLineNumber";
$ordercom = $bdd->prepare($order);
$ordercom->execute(array($numorder));
$orderLine = $ordercom->fetchAll(PDO::FETCH_ASSOC);


$sql = "SELECT customerName,contactFirstName,contactLastName,addressLine1,addressLine2,postalCode,city FROM customers INNER JOIN orders ON customers.customerNumber = orders.customerNumber WHERE orders.orderNumber = ?";
$requete = $bdd->prepare($sql);
$requete->execute(array($numorder));
$result = $requete->fetch(PDO::FETCH_ASSOC);
// $result= $result[0];

$reqht = "SELECT SUM(priceEach * quantityOrdered) as prixtot FROM orderdetails
  where orderNumber =?";
$htprice = $bdd->prepare($reqht);
$htprice->execute(array($numorder));
$ht = $htprice->fetch(PDO::FETCH_ASSOC);
 











include 'order.phtml';
?>