<?php
	// логирование ошибок и подключение к базе данных
	require_once($_SERVER["DOCUMENT_ROOT"]. "/config.php");

	// проверка базы на налицие данных, хранящихся более 14 дней
	$tables = "";
	$all_tables = mysqli_query($conn, "SHOW TABLES");
	$table_names = [];
	$target_date = date("Y-m-d H:i:s", strtotime("-14 days"));
	$current_date = date("Y-m-d");

	// дамп таблиц
	while ($table_name = mysqli_fetch_array($all_tables)) {
		if ($table_name[0] != "admin" && $table_name[0] != "telephoneList" && $table_name[0] != "securitylevels") {
			exec("mkdir -p ./dumps/$table_name[0] && mysqldump -h localhost -P 1500 -uroot -p1KOMUnsC0m usersinfodb $table_name[0] > ./dumps/$table_name[0]/$current_date.sql");

			$table_names[] = $table_name[0];
		}
	}

	// удаление старых клиентов
	foreach ($table_names as $table) {
        // mysqli_query($conn, "DELETE FROM $table WHERE last_visit = '$target_date'");
        
        $tables .= $table. ", ";
	}
	
	file_put_contents("database_cleanup.log", $current_date. ": ". rtrim($tables, ", "). "\n", FILE_APPEND);
	mysqli_close($conn);
?>