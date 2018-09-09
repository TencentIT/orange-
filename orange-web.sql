-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-09 11:50:42
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `orange-web`
--
CREATE DATABASE IF NOT EXISTS `orange-web` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `orange-web`;

-- --------------------------------------------------------

--
-- 表的结构 `orange_areas`
--

CREATE TABLE `orange_areas` (
  `province` varchar(20) NOT NULL,
  `city` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `orange_index_products`
--

CREATE TABLE `orange_index_products` (
  `pid` int(20) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `price` int(100) DEFAULT NULL,
  `pic` varchar(100) DEFAULT NULL,
  `sell` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orange_index_products`
--

INSERT INTO `orange_index_products` (`pid`, `title`, `price`, `pic`, `sell`) VALUES
(1, '有货潮牌Life After Life/男MA-1飞行夹克', 1124, 'Products/p_1.jpg', '124'),
(2, 'SK-II 肌底晶透护肤礼盒（神仙水 补水保湿 精华液 乳液 套装）', 1024, 'Products/p_2.jpg', '110'),
(3, '荣耀 6 Plus (PE-TL10) 3GB内存增强版 金色 移动联通双4G手机 双卡', 4510, 'Products/p_3.jpg', '1211'),
(4, '陈克明 面条 克明面业 麦禧福面 福伴一生 五福礼盒挂面 399g*5', 1204, 'Products/p_4.jpg', '5623'),
(5, 'Orion 好丽友 熊猫派派福巧克力味4枚 100g/盒', 162, 'products/p_5.jpg', '120'),
(6, 'Olay玉兰油 新生塑颜金纯活能水', 236, 'products/p_6.jpg', '130'),
(7, '有货潮牌Life After Life/男MA-1飞行夹克', 1124, 'Products/p_7.jpg', '264'),
(8, '有货潮牌Life After Life/男MA-1飞行夹克', 1124, 'Products/p_8.jpg', '578'),
(9, 'SK-II 肌底晶透护肤礼盒（神仙水 补水保湿 精华液 乳液 套装）', 433, 'Products/p_9.jpg', '865'),
(10, '荣耀 6 Plus (PE-TL10) 3GB内存增强版 金色 移动联通双4G手机 双卡', 4510, 'Products/p_10.jpg', '231'),
(11, '陈克明 面条 克明面业 麦禧福面 福伴一生 五福礼盒挂面 399g*5', 453, 'Products/p_11.jpg', '462'),
(12, 'Orion 好丽友 熊猫派派福巧克力味4枚 100g/盒', 24, 'products/p_12.jpg', '4323'),
(13, 'Olay玉兰油 新生塑颜金纯活能水', 566, 'products/p_13.jpg', '543'),
(14, '有货潮牌Life After Life/男MA-1飞行夹克', 1124, 'Products/p_14.jpg', '454'),
(15, '有货潮牌Life After Life/男MA-1飞行夹克', 372, 'Products/p_15.jpg', '375'),
(16, 'SK-II 肌底晶透护肤礼盒（神仙水 补水保湿 精华液 乳液 套装）', 983, 'Products/p_16.jpg', '337'),
(17, '荣耀 6 Plus (PE-TL10) 3GB内存增强版 金色 移动联通双4G手机 双卡', 387, 'Products/p_17.jpg', '327'),
(18, '陈克明 面条 克明面业 麦禧福面 福伴一生 五福礼盒挂面 399g*5', 317, 'Products/p_18.jpg', '362'),
(19, 'Orion 好丽友 熊猫派派福巧克力味4枚 100g/盒', 324, 'products/p_19.jpg', '312'),
(20, 'Olay玉兰油 新生塑颜金纯活能水', 312, 'products/p_20.jpg', '634'),
(21, '有货潮牌Life After Life/男MA-1飞行夹克', 642, 'Products/p_21.jpg', '242'),
(22, '有货潮牌Life After Life/男MA-1飞行夹克', 527, 'Products/p_22.jpg', '463'),
(23, 'SK-II 肌底晶透护肤礼盒（神仙水 补水保湿 精华液 乳液 套装）', 312, 'Products/p_23.jpg', '542'),
(24, '荣耀 6 Plus (PE-TL10) 3GB内存增强版 金色 移动联通双4G手机 双卡', 654, 'Products/p_24.jpg', '410'),
(25, '陈克明 面条 克明面业 麦禧福面 福伴一生 五福礼盒挂面 399g*5', 542, 'Products/p_25.jpg', '542'),
(26, 'Orion 好丽友 熊猫派派福巧克力味4枚 100g/盒', 224, 'products/p_26.jpg', '402'),
(27, 'Olay玉兰油 新生塑颜金纯活能水', 3532, 'products/p_27.jpg', '424'),
(28, '有货潮牌Life After Life/男MA-1飞行夹克', 471, 'Products/p_28.jpg', '557');

-- --------------------------------------------------------

--
-- 表的结构 `orange_user`
--

CREATE TABLE `orange_user` (
  `uname` varchar(20) NOT NULL COMMENT '用户名',
  `upwd` varchar(20) NOT NULL COMMENT '密码',
  `rupwd` varchar(20) NOT NULL COMMENT '重复密码'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orange_user`
--

INSERT INTO `orange_user` (`uname`, `upwd`, `rupwd`) VALUES
('admin', 'admin', 'admin'),
('demo', 'demo', 'demo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orange_index_products`
--
ALTER TABLE `orange_index_products`
  ADD PRIMARY KEY (`pid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
