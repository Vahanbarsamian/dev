<?php 
//var_dump($_POST);
// Definition des variables
$message ="";
$chemincsv;
$delimiteur = ',';
$chemin_csv = 'tasks.csv';


// Verification contenu tableau


$donnees = $_POST;


if (isset($donnees['title']) && !empty($donnees['title']))
{
	if(isset($donnees['description']) || !empty($donnees['description'])){
		$donnees['description']='Tâche sans description';
	}
// Tout est rempli on ajoute dans csv

// je format ma date
	$date  = $donnees['year']."-".$donnees['month']."-".$donnees['day'];
	
	var_dump($donnees);
	unset($donnees['day']); unset($donnees['month']); unset($donnees['year']);
	$donnees['date']=$date;
// On ouvre le fichier csv
	$fichier_csv = fopen($chemin_csv, 'a+');


	//foreach ($donnees as  $value) {
		fputcsv($fichier_csv, $donnees, $delimiteur );

// On ferme le fichier csv
	fclose($fichier_csv);

} 

header('Location: index.phtml');
exit();
?>