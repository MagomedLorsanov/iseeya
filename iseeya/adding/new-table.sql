SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE IF NOT EXISTS `SITE_TABLE_NAME` (
  `ID` int(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `ip` text CHARACTER SET utf8 NOT NULL,
  `canvasfingerprint` text CHARACTER SET utf8 NOT NULL,
  `usr_hash` text CHARACTER SET utf8 NOT NULL,
  `usr_agent` text CHARACTER SET utf8 NOT NULL,
  `scrn_sz` text CHARACTER SET utf8 NOT NULL,
  `telephone` varchar(30) CHARACTER SET utf8 NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `count` int(10) NOT NULL DEFAULT '0',
  `user_click` int(1) NOT NULL DEFAULT '0',
  `last_visit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `sameUser` text CHARACTER SET utf8 NOT NULL,
  `Referer` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;