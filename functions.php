<?php
function f_tableExists($tablename, $database = false) {

	if(!database) {
		$res = mysql_query("SELECT DATABASE()");
		$database = mysql_result($res, 0);
	}
	
	$res = mysql_query("
		SELECT COUNT(*) AS count
		FROM information_schema.tables
		WHERE table_scheme = '$database'
		AND table_name = '$tablename'
	");
	
	return mysql_result($res, 0) == 1;
}

function f_fieldExists ($table, $column, $column_attr = "VARCHAR( 255 ) NULL" )
	$exists = false;
	$columns = mysql_query("show columns from $table");
	while($c = mysql_fetch_assoc($columns)){
		if($c['Field'] == $column){
			$exists = true;
			break;
		}
	}
	if(!$exists){
		mysql_query("ALTER TABLE '$table' ADD '$column' $column_attr");
	}
}
?>