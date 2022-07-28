<?php
	// disable error output and connect to the database
	require_once($_SERVER["DOCUMENT_ROOT"]. "/config.php");

	// setting the "user_click" status to one
	if (isset($_POST["domainName"])) {
		$requestedTableName = "`". $_POST["domainName"]. "`";

		if (isset($_POST["sameusr"])) {
			$generated_md5_hash = $_POST["sameusr"];

			mysqli_query($conn, "UPDATE $requestedTableName SET user_click = 1 WHERE sameUser = '$generated_md5_hash' ORDER BY ID DESC LIMIT 1");
			mysqli_close($conn);
		}
	} else {
		exit();
	}
?>