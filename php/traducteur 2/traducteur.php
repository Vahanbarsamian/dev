

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>PHP</title>
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">
    <link rel="stylesheet" href="traducteur.css">
</head>
<body>
    <header>
        <h1>Traducteur Anglais - Français</h1>
        </header>
    <a href="index.html"><button type="button">Retour</button></a>
    <br>
<?php

// Le code principal de l'application se trouve dans une fonction.
function translate($word, $direction)
{
    // Le dictionnaire du traducteur.
    $dictionary =
    [
        'cat'    => 'chat',
        'dog'    => 'chien',
        'monkey' => 'singe',
        'sea'    => 'mer',
        'sun'    => 'soleil',
        'hello'  => 'bonjour'
    ];


    // Traduction du mot en -> fr ou fr -> en.
    switch($direction)
    {
        case 'toFrench':
        /*
         * Le mot spécifié est en anglais, on veut traduire vers le français.
         *
         * Il s'agit donc d'un indice dans le dictionnaire.
         * Est-ce que ce mot existe en tant qu'indice dans le dictionnaire ?
         */
        if(array_key_exists($word, $dictionary) == true)
        {
            // Oui, récupération de la valeur, de la traduction en français.
            $translatedWord = $dictionary[$word];

            $message = "Le mot '$word' se traduit par '$translatedWord'.";
        }
        else
        {
            // Non, cet indice n'existe pas.
             $message = "Je ne connais pas le mot '$word'.";
        }
        break;

        case 'toEnglish':
        /*
         * Le mot spécifié est en français, on veut traduire vers l'anglais.
         *
         * Il s'agit donc d'une valeur dans le dictionnaire.
         * Est-ce que ce mot existe en tant que valeur dans le dictionnaire ?
         */
        if(in_array($word, $dictionary) == true)
        {
            // Oui, récupération de l'indice, de la traduction en anglais.
            $translatedWord = array_search($word, $dictionary);

            $message = "Le mot '$word' se traduit par '$translatedWord'.";
        }
        else
        {
            // Non, cette valeur n'existe pas.
            $message = "Je ne connais pas le mot '$word'.";
        }
        break;

        default:
        $message = "Je ne sais traduire qu'en français et en anglais !";
    }

    echo $message;
}


/*
 * Par défaut il n'y a pas de résultat.
 *
 * Cela permettra dans le template de savoir s'il faut afficher le formulaire
 * ou le résultat.
 */
$result = null;

/*
 * Récupération des informations dans le formulaire.
 *
 *
 * PHP fournit une variable $_POST qui permet de lire les données d'un formulaire :
 *
 * Exemple HTML :
 * <input type="text" name="nom">
 * <select name="age">
 *   <option value="20">Vingt ans</option>
 *   <option value="30">Trente ans</option>
 * </select>
 *
 * $_POST['nom'] vaudra le champ de formulaire ayant pour attribut HTML name 'nom'.
 * $_POST['age'] vaudra l'option sélectionnée (20 ou 30) dans le champ de formulaire
 *               ayant pour attribut HTML 'age'.
 */

$direction = 'toFrench';
if(array_key_exists('direction', $_POST) == true)
{
    // Une direction a été spécifiée dans l'URL, récupération de la valeur.
    $direction = $_POST['direction'];
}

if(array_key_exists('word', $_POST) == true)
{
    // Récupération du mot spécifié dans l'URL.
    $word = strtolower($_POST['word']);

    // Traduction du mot dans la direction spécifiée.
    $result = translate($word, $direction);
}


// Sélection du template affichant la variable $result.
?>
</body>
</html>