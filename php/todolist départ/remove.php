<?php
// Definition des variables
$index = "";
$message ="";
$chemincsv;
$delimiteur = ',';
$chemin_csv = 'tasks.csv';

// ouverture du fichier
$fichier_csv = fopen($chemin_csv, 'r+');

// On crée le tableau
$tab = file($chemin_csv);


foreach ($_POST as $key ) {
	unset($tab[$key]);
}
file_put_contents($chemin_csv, "");
foreach ($tab as $key => $value) {
	$ligne = explode(",",$value);
	$ligne[3] = trim($ligne[3]);
	
	fputcsv($fichier_csv, $ligne, $delimiteur );
}

// On ferme le fichier
$fichier_csv = fclose($fichier_csv);
// fopen($chemin_csv, 'a+');


// 	//foreach ($donnees as  $value) {
// 		fputcsv($fichier_csv, $tab, $delimiteur );

// // On ferme le fichier csv
// 	fclose($fichier_csv);



header('location: index.phtml');
exit();
?>