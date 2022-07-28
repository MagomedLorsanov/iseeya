<?php
	// логирование ошибок и подключение к базе данных
	require_once("./config.php");
            
	// определение названия таблицы
	if (isset($_GET['table_name'])) {
		$allSites = '';
		$total = [];
		$table_names = explode(",",$_GET['table_name']);

		if (count($table_names) == 1) {
			$allSites .= "SELECT *, '$table_names[0]' as 'tablename' FROM " .$table_names[0];
		}else{
			foreach ($table_names as $table_name) {
				$allSites .= "SELECT *, '$table_name' as 'tablename' FROM `$table_name` UNION ALL ";
			}
			$allSites = preg_replace("/\s[a-z:]+\s[a-z]+\s+$/i", "", $allSites);
		}
	
		$query = mysqli_query($conn, $allSites);

		while ($row = mysqli_fetch_assoc($query)) {
			$total[] = $row;
		}
		print_r(json_encode($total));
	}

	// добавление пользовател(я/ей) в "чёрный"/"белый" список
	if (isset($_GET["sameUser"])) {
		$arr = "";
		$sts = $_GET["sts"];
		$sameUser = $_GET["sameUser"];
		printf('fwafawf');
		$table_name = explode(",",$_GET["table_name"]);


		function updateData($table, $sts, $sameUser, $conn) {
			if (is_array($sameUser)) {
				// массовое добавление
				foreach ($sameUser as $same_usr) {
					$arr .= "'". $same_usr. "',";
				} $arr = substr($arr , 0, -1);

				mysqli_query($conn, "UPDATE $table SET status = $sts WHERE sameUser IN ($arr)");
			} else {
				// одиночное добавление
				mysqli_query($conn, "UPDATE $table SET status = $sts WHERE sameUser = '$sameUser'");
			}
		}

		// условное выполнение функции добавления
			if (count($table_name) == 1) {
        updateData($table_name[0], $sts, $sameUser, $conn);
		
		} else {
			foreach ($table_name as $table) {
				updateData($table, $sts, $sameUser, $conn);
			}
		}
	}

	mysqli_close($conn);
?>