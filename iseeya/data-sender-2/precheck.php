<?php
// disable error output and connect to the database
require_once("../config.php");

if (isset($_POST["domainName"])) {
	// restricting access from countries not included in the exclusion list
	// $user_location = json_decode(file_get_contents("http://ip-api.com/json/{$user_ip}?fields=country"), true);

	// if (isset($user_location["country"]) && $user_location["country"] == "Germany" && isset($_POST["canvasFingerprint"])) {
	$user_ip = $_SERVER["REMOTE_ADDR"];
	$userRef = $_POST["userReferer"];
	$setstatus = 0;
	$user_agent = $_SERVER["HTTP_USER_AGENT"];
	$current_date = date("Y-m-d H:i:s");
	$user_fingerprint = $_POST["canvasFingerprint"];
	$requestedTableName = "`" . $_POST["domainName"] . "`";
	$generated_md5_hash = md5($user_ip . "-" . $user_fingerprint);
	$user_screen_resolution = $_POST["screenResolution"];
	$userCookie = $_POST["sameusr"];
	$sameUserFingerPrint = $userCookie;

	if (strpos($user_agent, "bot.html") === false) {
		// echo $generated_md5_hash;
		// echo $user_fingerprint;

		// fetching an existing user
		$status = mysqli_query($conn, "SELECT status, countt, sameUser FROM $requestedTableName WHERE `sameUser` = '" . $generated_md5_hash . "' OR `canvasfingerprint` = '" . $user_fingerprint . "' ORDER BY id ASC LIMIT 1");
		$count = mysqli_num_rows($status);
		$bluser = mysqli_fetch_array($status);

		if ($bluser[0] != 1) {
			// check number status
			if (!empty($count) || $count != '0') {
				// adding a new user visit to the database
				if ($bluser[2] == "") {
					$bluser[2] = $generated_md5_hash;
				}

				mysqli_query($conn, "INSERT INTO $requestedTableName (ip, canvasfingerprint, usr_hash, countt, usr_agent, scrn_sz, last_visit, sameUser, Referer) VALUES ('$user_ip', '$user_fingerprint', '$generated_md5_hash', 1, '$user_agent', '$user_screen_resolution', '$current_date', '$generated_md5_hash', '$userRef')");
				mysqli_query($conn, "UPDATE $requestedTableName SET countt = $bluser[1] + 1 WHERE sameUser = '$bluser[2]'");
			} else {
				// adding a new user to the database
				mysqli_query($conn, "INSERT INTO $requestedTableName (ip, canvasfingerprint, usr_hash, countt, usr_agent, scrn_sz, last_visit, sameUser, Referer) VALUES ('$user_ip', '$user_fingerprint', '$generated_md5_hash', 1, '$user_agent', '$user_screen_resolution', '$current_date', '$generated_md5_hash', '$userRef')");
			}
		}else{
			exit("Хьай г1укх доцче ма г1ярт");
		}
	} else {
		exit();
	}
	// }
} else {
	exit();
}

mysqli_close($conn);
