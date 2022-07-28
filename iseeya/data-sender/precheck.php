<?php
// disable error output and connect to the database
require_once("../config.php");

if (isset($_POST["domainName"])) {
	$user_ip = $_SERVER["REMOTE_ADDR"];
	$userRef = $_POST["userReferer"];
	$user_agent = $_SERVER["HTTP_USER_AGENT"];
	$current_date = date("Y-m-d H:i:s");
	$user_fingerprint = $_POST["canvasFingerprint"];
	$requestedTableName = "`" . $_POST["domainName"] . "`";
	$generated_md5_hash = md5($user_ip . "-" . $user_fingerprint);
	$user_screen_resolution = $_POST["screenResolution"];
	$userCookie = $_POST["sameusr"];

	if (strpos($user_agent, "bot.html") === false) {
		// fetching an existing user
		function checkSecurityLevelStatus($conn, $level){
			$levelStatus = mysqli_query($conn, "SELECT status FROM `securitylevels` WHERE level = $level");
			$levelStatus = mysqli_fetch_array($levelStatus);

			return $levelStatus[0];
		}

		$queryValue_2 = "";
		$queryValue_3 = "";
		$queryValue_4 = "";
		$allQueryes   = "";

		// definition of checks for each of the levels of protection
		if (checkSecurityLevelStatus($conn, 2) == 1) {
			$queryValue_2 = "OR 
					(ip = '$user_ip' 
					AND usr_agent = '$user_agent' 
					AND scrn_sz = '$user_screen_resolution')";
		}
		if (checkSecurityLevelStatus($conn, 3) == 1) {
			$queryValue_3 = "OR 
					(canvasfingerprint = '$user_fingerprint' 
					AND usr_agent = '$user_agent' 
					AND scrn_sz = '$user_screen_resolution')";
		}
		if (checkSecurityLevelStatus($conn, 4) == 1) {
			$queryValue_4 = "OR canvasfingerprint = '$user_fingerprint'";
		}

		// the request for which the number will be issued
		$allQueryes = $queryValue_2 . $queryValue_3 . $queryValue_4;
		$status = mysqli_query($conn, "SELECT status, count, sameUser, user_text FROM $requestedTableName WHERE (usr_hash = '$userCookie' ) OR (usr_hash = '$generated_md5_hash') OR (ip = '$user_ip' AND scrn_sz = '$user_screen_resolution') OR (canvasfingerprint = '$user_fingerprint' AND scrn_sz = '$user_screen_resolution') $allQueryes ORDER BY ID ASC LIMIT 1");
		$count = mysqli_num_rows($status);
		$bluser = mysqli_fetch_array($status);

		if ($bluser[0] != 1) {
			// check number status
			if (!empty($count)) {

				// adding a new user visit to the database
				if ($bluser[2] == "") {
					$bluser[2] = $generated_md5_hash;
				}

				mysqli_query($conn, "INSERT INTO $requestedTableName (ip, canvasfingerprint, usr_hash,  count, usr_agent, scrn_sz, last_visit, sameUser, Referer, user_text) VALUES ('$user_ip', '$user_fingerprint', '$generated_md5_hash', count = count + 1, '$user_agent', '$user_screen_resolution', '$current_date', '$bluser[2]', '$userRef', '$bluser[3]')");
				mysqli_query($conn, "UPDATE $requestedTableName SET count = $bluser[1] + 1 WHERE sameUser = '$bluser[2]'");
				print_r(json_encode([$bluser[2], $bluser[3]]));
			} else {
				// adding a new user to the database
				mysqli_query($conn, "INSERT INTO $requestedTableName (ip, canvasfingerprint, usr_hash,  count, usr_agent, scrn_sz, last_visit, sameUser, Referer) VALUES ('$user_ip', '$user_fingerprint', '$generated_md5_hash', 1, '$user_agent', '$user_screen_resolution', '$current_date', '$generated_md5_hash', '$userRef')");
				print_r(json_encode([$generated_md5_hash, 12]));
			}
		} else {
			exit('1');
		}
	} else {
		exit();
	}
	// }
} else {
	exit();
}

mysqli_close($conn);
