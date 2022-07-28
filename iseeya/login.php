<?php
	// логирование ошибок и подключение к базе данных
	require_once("./config.php");

	session_start();

	$errorMessage = "";

	if (isset($_POST["submit"])) {
		if (!empty($_POST["login"]) && !empty($_POST["password"])) {
			$login = md5(preg_replace("/[^A-Za-z0-9]/", "", $_POST["login"]));
			$password = md5(preg_replace("/[^A-Za-z0-9]/", "", $_POST["password"]));
			$user_association = mysqli_query($conn, "SELECT * FROM `admin` WHERE login = '$login' AND password = '$password'");

			// ассоциация пользователя со значением в базе данных
			if (mysqli_fetch_assoc($user_association)) {
				$_SESSION["user"] = $login;

				header("Location: index.php");
				exit();
			} else {
				$errorMessage = "Incorrect data. Try again!";
			}
		} else {
			$errorMessage = "Empty values. Try again!";
		}
	}
?>

<!DOCTYPE html>
<html lang="en-EN" translate="no">
	<head>
		<!-- мета теги -->
			<meta charset="UTF-8">
			<meta name="viewport" контент="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<!-- мета теги -->

		<title>LOGIN</title>

		<!-- стили -->
			<link rel="stylesheet" href="./css/login.css">
		<!-- стили -->
	</head>

	<body>
		<!-- контент -->
			<div>
				<form action="" method="post">
					<span>
						<?php
							echo($errorMessage);
						?>

						&nbsp;
					</span>

					<input type="text" name="login" placeholder="login" required>
					<input type="password" name="password" placeholder="password" required>

					<input type="submit" name="submit" value="Log in">
				</form>
			</div>
		<!-- контент -->
	</body>
</html>