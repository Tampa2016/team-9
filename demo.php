<?php

define('DB_NAME', 'Locations');
define('DB_USER', 'root');
define('DB_PASSWORD', 'code4good');
define('DB_HOST', 'localhost');

$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$link) {
	die('Could not connect: ' . mysql_error());
}

$db_selected = mysql_select_db(DB_NAME, $link);

if (!$db_selected) {
	die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
}

$value = $_POST['input1'];
$value = $_POST['input2'];

$sql = "INSERT INTO Restaurants (input1, input2) VALUES ('$value', '$value2')";

if (!mysql_query($sql)) {
	die('Error: ' . mysql_error());
	}



mysql_close();
?>


