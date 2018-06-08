<?php
// Definition des variables
$index = "";
$message ="";
$chemincsv;
$delimiteur = ',';
$chemin_csv = 'tasks.csv';

// ouverture du fichier
$fichier_csv = fopen($chemin_csv, 'a+');

// On crée le tableau
$tab = file($chemin_csv);

// On ferme le fichier
$fichier_csv = fclose($chemin_csv);



var_dump($tab);


?>