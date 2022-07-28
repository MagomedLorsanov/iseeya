<?php
	// disable error output and connect to the database
	require_once("../config.php");

	// setting the "user_click" status to one
	if (isset($_POST["domainName"])) {
		$requestedTableName = "`". $_POST["domainName"]. "`";

		if (isset($_POST["sameusrFinger"])) {
			$sameusrFinger = $_POST["sameusrFinger"];

			if(isset($_POST["nameUser"])){
				$nameUser = $_POST["nameUser"];
			}else{
				$nameUser = "notText";
			}
			
			mysqli_query($conn, "UPDATE $requestedTableName SET user_text = '$nameUser' WHERE sameUser = '$sameusrFinger'");
			mysqli_close($conn);
		}
	} else {
		exit();
	}
?>