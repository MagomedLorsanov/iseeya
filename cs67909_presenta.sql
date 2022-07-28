-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Окт 26 2021 г., 12:27
-- Версия сервера: 5.7.33-36
-- Версия PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ck89768_presenta`
--

-- --------------------------------------------------------

--
-- Структура таблицы `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `admin`
--

INSERT INTO `admin` (`login`, `password`) VALUES
('c2c65aeb6ac8e76205a6dd551a9c7220', '90c9eceeb452f0693b3781aa996e4537');

-- --------------------------------------------------------

--
-- Структура таблицы `presentation_site`
--

CREATE TABLE IF NOT EXISTS `presentation_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` text CHARACTER SET utf8 NOT NULL,
  `canvasfingerprint` text CHARACTER SET utf8 NOT NULL,
  `usr_hash` text CHARACTER SET utf8 NOT NULL,
  `usr_agent` text NOT NULL,
  `scrn_sz` text CHARACTER SET utf8 NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `count` int(10) NOT NULL DEFAULT '0',
  `user_text` text NOT NULL,
  `last_visit` datetime NOT NULL,
  `sameUser` text CHARACTER SET utf8 NOT NULL,
  `Referer` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `presentation_site`
--

INSERT INTO `presentation_site` (`id`, `ip`, `canvasfingerprint`, `usr_hash`, `usr_agent`, `scrn_sz`, `status`, `count`, `user_text`, `last_visit`, `sameUser`, `Referer`) VALUES
(1, '188.170.189.254', '006e00ca001d00f1', '8eb4215b8fc4cf0afe5c8046b06e2573', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36', '385x854', 0, 4, 'РосКом', '2021-10-16 16:14:57', '8eb4215b8fc4cf0afe5c8046b06e2573', ''),
(2, '188.170.189.254', '006e00ca001d00f1', '8eb4215b8fc4cf0afe5c8046b06e2573', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36', '385x854', 0, 4, 'РосКом', '2021-10-16 16:15:00', '8eb4215b8fc4cf0afe5c8046b06e2573', ''),
(3, '188.170.189.254', '006e00ca001d00f1', '8eb4215b8fc4cf0afe5c8046b06e2573', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36', '385x854', 0, 4, 'РосКом', '2021-10-16 16:15:05', '8eb4215b8fc4cf0afe5c8046b06e2573', ''),
(4, '188.170.189.254', '006e00ca001d00f1', '8eb4215b8fc4cf0afe5c8046b06e2573', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36', '385x854', 0, 4, 'РосКом', '2021-10-16 16:15:19', '8eb4215b8fc4cf0afe5c8046b06e2573', ''),
(5, '85.26.186.254', '00f600c1004e0016', 'a5106c500da078c9c39a326b27e4663b', 'Mozilla/5.0 (Linux; Android 11; ONEPLUS A3010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36', '450x800', 0, 8, 'Frd', '2021-10-16 16:15:52', 'a5106c500da078c9c39a326b27e4663b', ''),
(6, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 16:16:06', '9a9841fb7058b11025bbf37ef84df038', ''),
(7, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 16:22:53', '9a9841fb7058b11025bbf37ef84df038', ''),
(8, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 16:22:54', '9a9841fb7058b11025bbf37ef84df038', ''),
(9, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 16:22:55', '9a9841fb7058b11025bbf37ef84df038', ''),
(10, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 16:22:56', '9a9841fb7058b11025bbf37ef84df038', ''),
(11, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 16:22:59', '9a9841fb7058b11025bbf37ef84df038', ''),
(12, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 16:48:46', '9a9841fb7058b11025bbf37ef84df038', ''),
(13, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 16:48:47', '9a9841fb7058b11025bbf37ef84df038', ''),
(14, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-16 17:06:16', '9a9841fb7058b11025bbf37ef84df038', ''),
(15, '85.26.186.254', '00f600c1004e0016', 'a5106c500da078c9c39a326b27e4663b', 'Mozilla/5.0 (Linux; Android 11; ONEPLUS A3010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36', '450x800', 0, 8, 'Frd', '2021-10-16 17:06:38', 'a5106c500da078c9c39a326b27e4663b', ''),
(16, '178.176.215.26', '00e7001b00610086', '970fe3d93a297335e3830254735f0f67', 'Mozilla/5.0 (Linux; Android 11; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36', '412x869', 0, 1, '', '2021-10-16 18:27:17', '970fe3d93a297335e3830254735f0f67', ''),
(17, '85.26.186.206', '00f600c1004e0016', '5752c5ead4af224573677696dd3c3e8e', 'Mozilla/5.0 (Linux; Android 11; ONEPLUS A3010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36', '450x800', 0, 8, 'Frd', '2021-10-16 20:57:27', 'a5106c500da078c9c39a326b27e4663b', ''),
(18, '188.170.172.245', '00f600c1004e0016', '9c03847d55e8b6f85f753ba935f10bc3', 'Mozilla/5.0 (Linux; Android 11; ONEPLUS A3010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36', '450x800', 0, 8, 'Frd', '2021-10-16 21:27:14', 'a5106c500da078c9c39a326b27e4663b', ''),
(23, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36', '1920x1080', 0, 79, 'лрош', '2021-10-18 09:47:17', '9a9841fb7058b11025bbf37ef84df038', ''),
(24, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36', '1920x1080', 0, 79, 'лрош', '2021-10-18 09:47:38', '9a9841fb7058b11025bbf37ef84df038', ''),
(25, '193.176.84.242', '0012009f00d00032', '40a67a9b58448c6ec9131e658ffd741b', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0', '1920x1080', 0, 1, '', '2021-10-18 09:48:22', '40a67a9b58448c6ec9131e658ffd741b', ''),
(26, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36', '1920x1080', 0, 79, 'лрош', '2021-10-18 09:48:45', '9a9841fb7058b11025bbf37ef84df038', ''),
(27, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 10:45:34', '9a9841fb7058b11025bbf37ef84df038', ''),
(28, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 13:30:40', '9a9841fb7058b11025bbf37ef84df038', ''),
(29, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 13:30:50', '9a9841fb7058b11025bbf37ef84df038', ''),
(30, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:43:51', '9a9841fb7058b11025bbf37ef84df038', ''),
(31, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:44:43', '9a9841fb7058b11025bbf37ef84df038', ''),
(32, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:46:59', '9a9841fb7058b11025bbf37ef84df038', ''),
(33, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:48:52', '9a9841fb7058b11025bbf37ef84df038', ''),
(34, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:49:24', '9a9841fb7058b11025bbf37ef84df038', ''),
(35, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:49:26', '9a9841fb7058b11025bbf37ef84df038', ''),
(36, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:50:08', '9a9841fb7058b11025bbf37ef84df038', ''),
(37, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:51:20', '9a9841fb7058b11025bbf37ef84df038', ''),
(38, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:51:30', '9a9841fb7058b11025bbf37ef84df038', ''),
(39, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:51:49', '9a9841fb7058b11025bbf37ef84df038', ''),
(40, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:51:53', '9a9841fb7058b11025bbf37ef84df038', ''),
(41, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 14:52:00', '9a9841fb7058b11025bbf37ef84df038', ''),
(42, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:13:17', '9a9841fb7058b11025bbf37ef84df038', ''),
(43, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:13:26', '9a9841fb7058b11025bbf37ef84df038', ''),
(44, '66.249.81.158', '006e005f005400e5', '270bb21fe320409f28c1d0cc776ce3eb', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4590.2 Safari/537.36 Chrome-Lighthouse', '800x600', 0, 2, '', '2021-10-18 15:16:18', '270bb21fe320409f28c1d0cc776ce3eb', ''),
(45, '66.249.93.72', '006e005f005400e5', '067318cb28cb540f6285fbf71363cdf6', 'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4590.2 Mobile Safari/537.36 Chrome-Lighthouse', '360x640', 0, 2, '', '2021-10-18 15:16:18', '270bb21fe320409f28c1d0cc776ce3eb', ''),
(46, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:38', '9a9841fb7058b11025bbf37ef84df038', ''),
(47, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:40', '9a9841fb7058b11025bbf37ef84df038', ''),
(48, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:49', '9a9841fb7058b11025bbf37ef84df038', ''),
(49, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:50', '9a9841fb7058b11025bbf37ef84df038', ''),
(50, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:50', '9a9841fb7058b11025bbf37ef84df038', ''),
(51, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:51', '9a9841fb7058b11025bbf37ef84df038', ''),
(52, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:51', '9a9841fb7058b11025bbf37ef84df038', ''),
(53, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:52', '9a9841fb7058b11025bbf37ef84df038', ''),
(54, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:52', '9a9841fb7058b11025bbf37ef84df038', ''),
(55, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:53', '9a9841fb7058b11025bbf37ef84df038', ''),
(56, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:53', '9a9841fb7058b11025bbf37ef84df038', ''),
(57, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:53', '9a9841fb7058b11025bbf37ef84df038', ''),
(58, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:53', '9a9841fb7058b11025bbf37ef84df038', ''),
(59, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:53', '9a9841fb7058b11025bbf37ef84df038', ''),
(60, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:54', '9a9841fb7058b11025bbf37ef84df038', ''),
(61, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:54', '9a9841fb7058b11025bbf37ef84df038', ''),
(62, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:54', '9a9841fb7058b11025bbf37ef84df038', ''),
(63, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:54', '9a9841fb7058b11025bbf37ef84df038', ''),
(64, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:54', '9a9841fb7058b11025bbf37ef84df038', ''),
(65, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:55', '9a9841fb7058b11025bbf37ef84df038', ''),
(66, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:26:55', '9a9841fb7058b11025bbf37ef84df038', ''),
(67, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:27:34', '9a9841fb7058b11025bbf37ef84df038', ''),
(68, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:27:44', '9a9841fb7058b11025bbf37ef84df038', ''),
(69, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:29:23', '9a9841fb7058b11025bbf37ef84df038', ''),
(70, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:29:36', '9a9841fb7058b11025bbf37ef84df038', ''),
(71, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:31:27', '9a9841fb7058b11025bbf37ef84df038', ''),
(72, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:59:45', '9a9841fb7058b11025bbf37ef84df038', ''),
(73, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 15:59:51', '9a9841fb7058b11025bbf37ef84df038', ''),
(74, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 16:52:32', '9a9841fb7058b11025bbf37ef84df038', ''),
(75, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 16:53:22', '9a9841fb7058b11025bbf37ef84df038', ''),
(76, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 16:54:47', '9a9841fb7058b11025bbf37ef84df038', ''),
(77, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 16:54:51', '9a9841fb7058b11025bbf37ef84df038', ''),
(78, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 17:01:12', '9a9841fb7058b11025bbf37ef84df038', ''),
(79, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-18 17:01:53', '9a9841fb7058b11025bbf37ef84df038', 'https://www.google.de/'),
(80, '188.170.173.30', '00cb00a50050000a', '440c902e3e5ba849cceead75d6a5c9c7', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36', '1536x864', 0, 4, 'fred', '2021-10-18 21:00:30', '440c902e3e5ba849cceead75d6a5c9c7', ''),
(81, '188.170.173.30', '00cb00a50050000a', '440c902e3e5ba849cceead75d6a5c9c7', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36', '1536x864', 0, 4, 'fred', '2021-10-18 21:00:39', '440c902e3e5ba849cceead75d6a5c9c7', ''),
(82, '188.170.173.30', '00cb00a50050000a', '440c902e3e5ba849cceead75d6a5c9c7', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36', '1536x864', 0, 4, 'fred', '2021-10-18 21:22:57', '440c902e3e5ba849cceead75d6a5c9c7', ''),
(83, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-19 10:40:39', '9a9841fb7058b11025bbf37ef84df038', ''),
(84, '188.170.172.112', '0034009900430004', '00f2d46638e3915870741c948bc8ebcf', 'Mozilla/5.0 (Linux; Android 8.0; Galaxy Nexus Build/IMM76B; UCBrowser; ru-UA) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.66 YaBrowser/21.2.6.68 Mobile Safari/537.36', '450x800', 0, 1, '', '2021-10-19 18:39:21', '00f2d46638e3915870741c948bc8ebcf', ''),
(85, '188.170.172.112', '00f600c1004e0016', '7edaffd7bf3326eb89446128d3a4db80', 'Mozilla/5.0 (Linux; Android 11; ONEPLUS A3010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36', '450x800', 0, 8, 'Frd', '2021-10-19 18:43:19', 'a5106c500da078c9c39a326b27e4663b', ''),
(86, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 18:46:59', '8e71708382e970f8da3696cdacb7e25a', ''),
(87, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 18:47:17', '8e71708382e970f8da3696cdacb7e25a', ''),
(88, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 18:47:19', '8e71708382e970f8da3696cdacb7e25a', ''),
(89, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/94.0.4606.76 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 19:34:59', '8e71708382e970f8da3696cdacb7e25a', ''),
(90, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/94.0.4606.76 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 19:35:43', '8e71708382e970f8da3696cdacb7e25a', ''),
(91, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/94.0.4606.76 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 19:38:24', '8e71708382e970f8da3696cdacb7e25a', ''),
(92, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/94.0.4606.76 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 19:38:32', '8e71708382e970f8da3696cdacb7e25a', ''),
(93, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/94 Version/11.1.1 Safari/605.1.15', '375x667', 0, 14, 'Леча', '2021-10-19 19:42:07', '8e71708382e970f8da3696cdacb7e25a', ''),
(94, '104.166.161.232', '00e1005200e8009d', '1b4cb0bd2aed4222a701ef9c47363c96', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/94 Version/11.1.1 Safari/605.1.15', '375x667', 0, 14, 'Леча', '2021-10-19 19:43:27', '8e71708382e970f8da3696cdacb7e25a', ''),
(95, '104.166.161.232', '00e1005200e8009d', '1b4cb0bd2aed4222a701ef9c47363c96', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 19:44:40', '8e71708382e970f8da3696cdacb7e25a', ''),
(96, '188.170.172.112', '00e1005200e8009d', '8e71708382e970f8da3696cdacb7e25a', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 19:51:06', '8e71708382e970f8da3696cdacb7e25a', ''),
(97, '109.70.100.24', '00e1005200e8009d', 'efb77eca363bcd625864b0ed04cb4163', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148', '375x667', 0, 14, 'Леча', '2021-10-19 19:51:40', '8e71708382e970f8da3696cdacb7e25a', ''),
(98, '188.170.172.112', '0020002300e700fd', 'e43e2a7d96edd64be9532b453049f846', 'Mozilla/5.0 (Linux; Android 11; ONEPLUS A3010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36', '450x800', 0, 8, 'Frd', '2021-10-19 21:51:04', 'a5106c500da078c9c39a326b27e4663b', 'android-app://ir.ilmili.telegraph/'),
(99, '188.170.172.112', '0020002300e700fd', 'e43e2a7d96edd64be9532b453049f846', 'Mozilla/5.0 (Linux; Android 11; ONEPLUS A3010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36', '450x800', 0, 8, 'Frd', '2021-10-19 21:51:33', 'a5106c500da078c9c39a326b27e4663b', 'android-app://ir.ilmili.telegraph/'),
(100, '188.170.172.112', '0020002300e700fd', 'e43e2a7d96edd64be9532b453049f846', 'Mozilla/5.0 (Linux; Android 11; ONEPLUS A3010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36', '450x800', 0, 8, 'Frd', '2021-10-19 21:51:34', 'a5106c500da078c9c39a326b27e4663b', 'android-app://ir.ilmili.telegraph/'),
(101, '188.0.190.96', '00e1005200e8009d', '1708323c447dcd26f0aa2d219abfe422', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 21:51:45', '8e71708382e970f8da3696cdacb7e25a', ''),
(102, '188.0.190.96', '00e1005200e8009d', '1708323c447dcd26f0aa2d219abfe422', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1', '375x667', 0, 14, 'Леча', '2021-10-19 21:51:48', '8e71708382e970f8da3696cdacb7e25a', ''),
(103, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:52:13', '6e1509b7297e140b982598d34058ecfa', ''),
(104, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:52:19', '6e1509b7297e140b982598d34058ecfa', ''),
(105, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:52:58', '6e1509b7297e140b982598d34058ecfa', ''),
(106, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:53:17', '6e1509b7297e140b982598d34058ecfa', ''),
(107, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:53:19', '6e1509b7297e140b982598d34058ecfa', ''),
(108, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:53:25', '6e1509b7297e140b982598d34058ecfa', ''),
(109, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:53:26', '6e1509b7297e140b982598d34058ecfa', ''),
(110, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:53:32', '6e1509b7297e140b982598d34058ecfa', ''),
(111, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:54:54', '6e1509b7297e140b982598d34058ecfa', ''),
(112, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:55:28', '6e1509b7297e140b982598d34058ecfa', ''),
(113, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95.0.4638.50 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:56:51', '6e1509b7297e140b982598d34058ecfa', ''),
(114, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95.0.4638.50 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:57:49', '6e1509b7297e140b982598d34058ecfa', ''),
(115, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95.0.4638.50 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 21:58:07', '6e1509b7297e140b982598d34058ecfa', ''),
(116, '188.0.190.96', '00cb00a50050000a', '4448901173aeba5cff4134e9b7ffff0d', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15', '1536x864', 0, 4, 'fred', '2021-10-19 21:59:16', '440c902e3e5ba849cceead75d6a5c9c7', ''),
(117, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95.0.4638.50 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 22:01:06', '6e1509b7297e140b982598d34058ecfa', ''),
(118, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95.0.4638.50 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 22:01:21', '6e1509b7297e140b982598d34058ecfa', ''),
(119, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95.0.4638.50 Mobile/15E148 Safari/604.1', '428x926', 0, 37, '', '2021-10-19 22:01:35', '6e1509b7297e140b982598d34058ecfa', ''),
(120, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:01:58', '6e1509b7297e140b982598d34058ecfa', ''),
(121, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:04:13', '6e1509b7297e140b982598d34058ecfa', ''),
(122, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:04:19', '6e1509b7297e140b982598d34058ecfa', ''),
(123, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:09:13', '6e1509b7297e140b982598d34058ecfa', ''),
(124, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:10:28', '6e1509b7297e140b982598d34058ecfa', ''),
(125, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:13:31', '6e1509b7297e140b982598d34058ecfa', ''),
(126, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:27:09', '6e1509b7297e140b982598d34058ecfa', ''),
(127, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:27:49', '6e1509b7297e140b982598d34058ecfa', ''),
(128, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:28:14', '6e1509b7297e140b982598d34058ecfa', ''),
(129, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:28:25', '6e1509b7297e140b982598d34058ecfa', ''),
(130, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:28:31', '6e1509b7297e140b982598d34058ecfa', ''),
(131, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:29:22', '6e1509b7297e140b982598d34058ecfa', ''),
(132, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:34:09', '6e1509b7297e140b982598d34058ecfa', ''),
(133, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:35:00', '6e1509b7297e140b982598d34058ecfa', ''),
(134, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:35:34', '6e1509b7297e140b982598d34058ecfa', ''),
(135, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:35:46', '6e1509b7297e140b982598d34058ecfa', ''),
(136, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:36:00', '6e1509b7297e140b982598d34058ecfa', ''),
(137, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:36:16', '6e1509b7297e140b982598d34058ecfa', ''),
(138, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:36:37', '6e1509b7297e140b982598d34058ecfa', ''),
(139, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:37:09', '6e1509b7297e140b982598d34058ecfa', ''),
(140, '188.170.195.25', '00bc00ee00320089', '6e1509b7297e140b982598d34058ecfa', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95 Version/11.1.1 Safari/605.1.15', '428x926', 0, 37, '', '2021-10-19 22:37:46', '6e1509b7297e140b982598d34058ecfa', ''),
(141, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:21:56', '9a9841fb7058b11025bbf37ef84df038', ''),
(144, '188.170.189.254', '009f00730087006b', '5fec757eae3c0a5a4e89e9fec04ec1b8', 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36', '360x640', 0, 5, 'Godm', '2021-10-20 10:27:48', '5fec757eae3c0a5a4e89e9fec04ec1b8', 'android-app://org.telegram.messenger/'),
(145, '188.170.189.254', '009f00730087006b', '5fec757eae3c0a5a4e89e9fec04ec1b8', 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36', '360x640', 0, 5, 'Godm', '2021-10-20 10:27:59', '5fec757eae3c0a5a4e89e9fec04ec1b8', 'android-app://org.telegram.messenger/'),
(146, '188.170.189.254', '005b0095005c00aa', 'ed30501b11c7d36911a5bd6494483036', 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36', '360x640', 0, 5, 'Godm', '2021-10-20 10:29:13', '5fec757eae3c0a5a4e89e9fec04ec1b8', ''),
(147, '85.115.248.149', '005b0095005c00aa', '17df89a3da16d487798a63f3c7b16411', 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36', '360x640', 0, 5, 'Godm', '2021-10-20 10:30:04', '5fec757eae3c0a5a4e89e9fec04ec1b8', ''),
(148, '85.115.248.149', '00bd007c00eb0032', '4cdf398a0c5b2afb49c01b992a2fa807', 'Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-G930F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.0 Chrome/59.0.3071.125 Mobile Safari/537.36', '360x640', 0, 5, 'Godm', '2021-10-20 10:32:15', '5fec757eae3c0a5a4e89e9fec04ec1b8', ''),
(149, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:18', '9a9841fb7058b11025bbf37ef84df038', ''),
(150, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:19', '9a9841fb7058b11025bbf37ef84df038', ''),
(151, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:19', '9a9841fb7058b11025bbf37ef84df038', ''),
(152, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:20', '9a9841fb7058b11025bbf37ef84df038', ''),
(153, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:21', '9a9841fb7058b11025bbf37ef84df038', ''),
(154, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:21', '9a9841fb7058b11025bbf37ef84df038', ''),
(155, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:22', '9a9841fb7058b11025bbf37ef84df038', ''),
(156, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:28', '9a9841fb7058b11025bbf37ef84df038', ''),
(157, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:30', '9a9841fb7058b11025bbf37ef84df038', ''),
(158, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:31', '9a9841fb7058b11025bbf37ef84df038', ''),
(159, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:32', '9a9841fb7058b11025bbf37ef84df038', ''),
(160, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-20 10:36:32', '9a9841fb7058b11025bbf37ef84df038', ''),
(161, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-22 11:30:25', '9a9841fb7058b11025bbf37ef84df038', ''),
(162, '188.170.189.254', '007d009c00be0056', '9a9841fb7058b11025bbf37ef84df038', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '1536x864', 0, 79, 'лрош', '2021-10-26 12:20:48', '9a9841fb7058b11025bbf37ef84df038', '');

-- --------------------------------------------------------

--
-- Структура таблицы `securitylevels`
--

CREATE TABLE IF NOT EXISTS `securitylevels` (
  `level` int(1) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`level`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `securitylevels`
--

INSERT INTO `securitylevels` (`level`, `status`) VALUES
(1, 1),
(2, 0),
(3, 0),
(4, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
