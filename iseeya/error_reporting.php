<?php
	error_reporting(E_ALL);
	ini_set("display_errors", 1);
	ini_set("display_startup_errors", 1);
	ini_set("error_reporting", E_ALL);
	set_error_handler("error_handler", E_ALL);

	// временная зона
	date_default_timezone_set("Europe/Moscow");
	
	$logFilePath = $_SERVER["DOCUMENT_ROOT"]."/logs/main.log";

	function error_handler($level, $message, $file, $line) {
		echo("
		    <span class='defaultError'>".
    			"LEVEL: ". $level. " -- ".
    			"MESSAGE: ". $message. " -- ".
    			"FILE: ". $file. " -- ".
    			"LINE: ". $line. "\n
            </span>
            
            <style>
                * {
                    overflow: hidden !important;
                }

                .wrapper {
                    opacity: 0.1 !important;
                }
                
                .defaultError {
                    top: 50%;
                	left: 50%;
                	width: 50%;
                	margin: 0 auto;
                	padding: 20px;
                	color: #cccccc;
                	cursor: text;
                	z-index: 10;
                	position: absolute;
                	font-size: 14px;
                	transform: translate(-50%, -50%);
                	text-align: center;
                	line-height: 20px;
                	background-color: #444444;
                }
            </style>
        ");
	}

	function criticalServerErrorHandler() {
	    global $logFilePath;

		$error = error_get_last();

		if (is_array($error) && in_array($error["type"], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
			while (ob_get_level()) {
				ob_end_clean();
			}

			echo("
			    <span class='criticalError'>
			        The server encountered a critical error or is under maintenance.
			        <br>
			        Come back later!
                </span>
                
                <style>
                    .criticalError {
                        width: 100%;
                        height: 90vh;
                        display: flex;
                        font-size: 18px;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                    }
                </style>
            ");

			file_put_contents(
				$logFilePath,

				date("Y-m-d H:i:s"). " -- ".
				"LEVEL: ". $error["type"]. " -- ".
				"MESSAGE: ". $error["message"]. " -- ".
				"FILE: ". $error["file"]. " -- ".
				"LINE: ". $error["line"]. "\n",

				FILE_APPEND
			);

			exit();
		}
	} register_shutdown_function("criticalServerErrorHandler");
?>