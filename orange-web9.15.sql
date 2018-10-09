-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-10-08 15:51:53
-- 服务器版本： 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `orange-web9.15`
--
-- CREATE DATABASE IF NOT EXISTS `orange-web9.15` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE DATABASE orange-web9.15;
USE `orange-web9.15`;

-- --------------------------------------------------------

--
-- 表的结构 `orange_ad_carousel`
--

CREATE TABLE `orange_ad_carousel` (
  `cid` int(11) NOT NULL,
  `img` varchar(128) NOT NULL,
  `title` varchar(64) NOT NULL,
  `href` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orange_ad_carousel`
--

INSERT INTO `orange_ad_carousel` (`cid`, `img`, `title`, `href`) VALUES
(1, 'images/ad-1.jpg', '轮播广告商品1', 'product_details.html?lid=1'),
(2, 'images/ad-2.jpg', '轮播广告商品2', 'product_details.html?lid=2'),
(3, 'images/ad-3.jpg', '轮播广告商品3', 'product_details.html?lid=3'),
(6, 'images/ad-7.jpg', '轮播广告商品7', 'product_details.html?lid=6'),
(7, 'images/ad-6.jpg', '轮播广告商品6', 'product_details.html?lid=7'),
(8, 'images/ad-8.jpg', '轮播广告商品8', 'product_details.html?lid=8'),
(9, 'images/ad-9.jpg', '轮播广告商品9', 'product_details.html?lid=9'),
(10, 'images/ad-4.jpg', '轮播广告商品4', 'product_details.html?lid=4');

-- --------------------------------------------------------

--
-- 表的结构 `orange_index_products`
--

CREATE TABLE `orange_index_products` (
  `pid` int(20) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `price` int(100) DEFAULT NULL,
  `pic` varchar(100) DEFAULT NULL,
  `sell` int(20) DEFAULT NULL,
  `href` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orange_index_products`
--

INSERT INTO `orange_index_products` (`pid`, `title`, `price`, `pic`, `sell`, `href`) VALUES
(0, NULL, NULL, NULL, NULL, 'product_details.html?lid=0'),
(1, '有货潮牌Life After Life/男MA-1飞行夹克', 1124, 'Products/p_1.png', 124, 'product_details.html?lid=1'),
(2, 'SK-II 肌底晶透护肤礼盒（神仙水 补水保湿 精华液 乳液 套装）', 1024, 'Products/p_2.png', 110, 'product_details.html?lid=1'),
(3, '荣耀 6 Plus (PE-TL10) 3GB内存增强版 金色 移动联通双4G手机 双卡', 4510, 'Products/p_3.png', 1211, 'product_details.html?lid=1'),
(4, '陈克明 面条 克明面业 麦禧福面 福伴一生 五福礼盒挂面 399g*5', 1204, 'Products/p_4.png', 5623, 'product_details.html?lid=1'),
(5, 'Orion 好丽友 熊猫派派福巧克力味4枚 100g/盒', 162, 'products/p_5.png', 120, 'product_details.html?lid=1'),
(6, 'Olay玉兰油 新生塑颜金纯活能水', 236, 'products/p_6.png', 130, 'product_details.html?lid=1'),
(7, '有货潮牌Life After Life/男MA-1飞行夹克', 1124, 'Products/p_7.png', 264, 'product_details.html?lid=1'),
(8, '有货潮牌Life After Life/男MA-1飞行夹克', 1124, 'Products/p_8.png', 578, 'product_details.html?lid=1'),
(9, 'SK-II 肌底晶透护肤礼盒（神仙水 补水保湿 精华液 乳液 套装）', 433, 'Products/p_9.png', 865, 'product_details.html?lid=1'),
(10, '荣耀 6 Plus (PE-TL10) 3GB内存增强版 金色 移动联通双4G手机 双卡', 4510, 'Products/p_10.png', 231, 'product_details.html?lid=1'),
(11, '陈克明 面条 克明面业 麦禧福面 福伴一生 五福礼盒挂面 399g*5', 453, 'Products/p_11.png', 462, 'product_details.html?lid=1'),
(12, 'Orion 好丽友 熊猫派派福巧克力味有4枚 100g/盒', 24, 'products/p_12.png', 4323, 'product_details.html?lid='),
(13, 'Olay玉兰油 新生塑颜金纯活能水', 566, 'products/p_13.png', 543, 'product_details.html?lid='),
(14, '有货潮牌Life After Life/男MA-1飞行夹克', 1124, 'Products/p_14.png', 454, 'product_details.html?lid='),
(15, '有货潮牌Life After Life/男MA-1飞行夹克', 372, 'Products/p_15.png', 375, 'product_details.html?lid='),
(16, 'SK-II 肌底晶透护肤礼盒（神仙水 补水保湿 精华液 乳液 套装）', 983, 'Products/p_16.png', 337, 'product_details.html?lid='),
(17, '荣耀 6 Plus (PE-TL10) 3GB内存增强版 金色 移动联通双4G有手机 双卡', 387, 'Products/p_17.png', 327, 'product_details.html?lid='),
(18, '陈克明 面条 克明面业 麦禧福面 福伴一生 五福礼盒挂面 399g*5', 317, 'Products/p_18.png', 362, 'product_details.html?lid='),
(19, 'Orion 好丽友 熊猫派派福巧克力味4枚 100g/盒', 324, 'products/p_19.png', 312, 'product_details.html?lid='),
(20, 'Olay玉兰油 新生塑颜金纯活能水', 312, 'products/p_20.png', 634, 'product_details.html?lid='),
(21, '有货潮牌Life After Life/男MA-1飞行夹克', 642, 'Products/p_21.png', 242, 'product_details.html?lid='),
(22, '有货潮牌Life After Life/男MA-1飞行夹克', 527, 'Products/p_22.png', 463, 'product_details.html?lid='),
(23, 'SK-II 肌底晶透护肤礼盒（神仙水 补水保湿 精华液 乳液 套装）', 312, 'Products/p_23.png', 542, 'product_details.html?lid='),
(24, '荣耀 6 Plus (PE-TL10) 3GB内存增强版 金色 移动联通双4G手机 双卡', 654, 'Products/p_24.png', 410, 'product_details.html?lid='),
(25, '陈克明 面条 克明面业 麦禧福面 福伴一生 五福礼盒挂面 399g*5', 542, 'Products/p_25.png', 542, 'product_details.html?lid='),
(26, 'Orion 好丽友 熊猫派派福巧克力味4枚 100g/盒', 224, 'products/p_26.png', 402, 'product_details.html?lid='),
(27, 'Olay玉兰油 新生塑颜金纯活能水', 3532, 'products/p_27.png', 424, 'product_details.html?lid='),
(28, '有货潮牌Life After Life/男MA-1飞行夹克', 471, 'Products/p_28.png', 557, 'product_details.html?lid=');

-- --------------------------------------------------------

--
-- 表的结构 `orange_products_ category`
--

CREATE TABLE `orange_products_ category` (
  `pid` int(20) NOT NULL,
  `product_title` varchar(40) NOT NULL COMMENT '首页侧边栏标题',
  `product_list` varchar(40) NOT NULL COMMENT '首页侧边栏box里面子目录下的文字',
  `product_subtitle` varchar(40) NOT NULL COMMENT '首页侧边栏box里面子目录下标题',
  `product_brand` varchar(40) NOT NULL COMMENT '首页侧边栏box里面子目录下的品牌图片'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orange_products_ category`
--

INSERT INTO `orange_products_ category` (`pid`, `product_title`, `product_list`, `product_subtitle`, `product_brand`) VALUES
(1, '面部护理', '茅台 五粮液 郎酒 剑南春', '面膜', 'images/logo1.jpg'),
(2, '身体护理', '面霜眼霜 面膜护肤套装', '洁面', 'images/logo1.jpg'),
(3, '香水彩妆', '卸妆 防晒BB 女士香水', '化妆水', 'images/logo3.jpg'),
(4, '身体护理', '面霜眼霜 面膜护肤套装', '洁面', 'images/logo4.jpg'),
(5, '洗发护发', '洗发护发沐浴润肤乳', '眼部护理', 'images/logo5.jpg'),
(6, '身体护理', '面霜眼霜 面膜护肤套装', '洁面', 'images/logo6.jpg'),
(7, '女性护理', '洁面坚果炒货乳液 面霜', '面膜', 'images/logo7.jpg'),
(8, '男性护理', '面霜眼霜 面膜护肤套装', '洁面', 'images/logo8.jpg'),
(9, '推荐品牌', '欧莱雅 菲诗小铺 雅诗兰黛', '面膜', 'images/logo9.jpg'),
(10, '男性护理', '面霜眼霜 面膜护肤套装', '洁面', 'images/logo10.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `orange_provincial`
--

CREATE TABLE `orange_provincial` (
  `a_id` int(11) NOT NULL DEFAULT '0',
  `Provincial` varchar(50) DEFAULT NULL,
  `area1` varchar(20) NOT NULL,
  `area2` varchar(20) NOT NULL,
  `area3` varchar(20) NOT NULL,
  `area4` varchar(20) NOT NULL,
  `area5` varchar(20) NOT NULL,
  `area6` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orange_provincial`
--

INSERT INTO `orange_provincial` (`a_id`, `Provincial`, `area1`, `area2`, `area3`, `area4`, `area5`, `area6`) VALUES
(1, '北京市', '北京市六区', '北京市五区', '北京市四区', '北京市三区', '北京市二区', '北京市一区'),
(2, '天津市', '天津市六区', '天津市五区', '天津市四区', '天津市三区', '天津市二区', '天津市一区'),
(3, '上海市', '上海市六区', '上海市五区', '上海市四区', '上海市三区', '上海市二区', '上海市一区'),
(4, '重庆市', '重庆市六区', '重庆市五区', '重庆市四区', '重庆市三区', '重庆市二区', '重庆市一区'),
(5, '河北省', '河北省六区', '河北省五区', '河北省四区', '河北省三区', '河北省二区', '河北省一区'),
(6, '山西省', '山西省六区', '山西省五区', '山西省四区', '山西省三区', '山西省二区', '山西省一区'),
(7, '台湾省', '台湾省六区', '台湾省五区', '台湾省四区', '台湾省三区', '台湾省二区', '台湾省一区'),
(8, '辽宁省', '辽宁省六区', '辽宁省五区', '辽宁省四区', '辽宁省三区', '辽宁省二区', '辽宁省一区'),
(9, '吉林省', '吉林省六区', '吉林省五区', '吉林省四区', '吉林省三区', '吉林省二区', '吉林省一区'),
(10, '黑龙江省', '黑龙江省六区', '黑龙江省五区', '黑龙江省四区', '黑龙江省三区', '黑龙江省二区', '黑龙江省一区'),
(11, '江苏省', '江苏省六区', '江苏省五区', '江苏省四区', '江苏省三区', '江苏省二区', '江苏省一区'),
(12, '浙江省', '浙江省六区', '浙江省五区', '浙江省四区', '浙江省三区', '浙江省二区', '浙江省一区'),
(13, '安徽省', '安徽省六区', '安徽省五区', '安徽省四区', '安徽省三区', '安徽省二区', '安徽省一区'),
(14, '福建省', '福建省六区', '福建省五区', '福建省四区', '福建省三区', '福建省二区', '福建省一区'),
(15, '江西省', '江西省六区', '江西省五区', '江西省四区', '江西省三区', '江西省二区', '江西省一区'),
(16, '山东省', '山东省六区', '山东省五区', '山东省四区', '山东省三区', '山东省二区', '山东省一区'),
(17, '河南省', '河南省六区', '河南省五区', '河南省四区', '河南省三区', '河南省二区', '河南省一区'),
(18, '湖北省', '湖北省六区', '湖北省五区', '湖北省四区', '湖北省三区', '湖北省二区', '湖北省一区'),
(19, '湖南省', '湖南省六区', '湖南省五区', '湖南省四区', '湖南省三区', '湖南省二区', '湖南省一区'),
(20, '广东省', '广东省六区', '广东省五区', '广东省四区', '广东省三区', '广东省二区', '广东省一区'),
(21, '甘肃省', '甘肃省六区', '甘肃省五区', '甘肃省四区', '甘肃省三区', '甘肃省二区', '甘肃省一区'),
(22, '四川省', '四川省六区', '四川省五区', '四川省四区', '四川省三区', '四川省二区', '四川省一区'),
(23, '贵州省', '贵州省六区', '贵州省五区', '贵州省四区', '贵州省三区', '贵州省二区', '贵州省一区'),
(24, '海南省', '海南省六区', '海南省五区', '海南省四区', '海南省三区', '海南省二区', '海南省一区'),
(25, '云南省', '云南省六区', '云南省五区', '云南省四区', '云南省三区', '云南省二区', '云南省一区'),
(26, '青海省', '青海省六区', '青海省五区', '青海省四区', '青海省三区', '青海省二区', '青海省一区'),
(27, '陕西省', '陕西省六区', '陕西省五区', '陕西省四区', '陕西省三区', '陕西省二区', '陕西省一区'),
(28, '广西壮族自治区', '广西壮族自治区六区', '广西壮族自治区五区', '广西壮族自治区四区', '广西壮族自治区三区', '广西壮族自治区二区', '广西壮族自治区一区'),
(29, '西藏自治区', '西藏自治区六区', '西藏自治区五区', '西藏自治区四区', '西藏自治区三区', '西藏自治区二区', '西藏自治区一区'),
(30, '宁夏回族自治区', '宁夏回族自治区六区', '宁夏回族自治区五区', '宁夏回族自治区四区', '宁夏回族自治区三区', '宁夏回族自治区二区', '宁夏回族自治区一区'),
(31, '新疆维吾尔自治区', '新疆维吾尔自治区六区', '新疆维吾尔自治区五区', '新疆维吾尔自治区四区', '新疆维吾尔自治区三区', '新疆维吾尔自治区二区', '新疆维吾尔自治区一区');

-- --------------------------------------------------------

--
-- 表的结构 `orange_user`
--

CREATE TABLE `orange_user` (
  `uid` int(20) NOT NULL,
  `uname` varchar(20) NOT NULL,
  `upwd` varchar(20) NOT NULL,
  `mail` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orange_user`
--

INSERT INTO `orange_user` (`uid`, `uname`, `upwd`, `mail`) VALUES
(1, 'admin', '123456', 'images/yzm1.png'),
(2, 'andy', '123456', 'images/yzm1.png'),
(3, 'AAAA', 'BBBB', 'images/yzm1.jpg'),
(4, 'AAAA', 'BBBB', NULL),
(5, 'aaaaaSXSX', '123456', NULL),
(6, 'dfsa', '123456', NULL),
(7, 'aaaaa', '123456', NULL),
(8, '11111111111111111111', 'fasfda', NULL),
(9, 'aaaaa1', '123456', NULL),
(10, 'dfasfdasf', 'fadsdfsa', NULL),
(11, 'fdsafda', 'fdasfd', NULL),
(12, 'dfasfda', 'fdasdfas', NULL),
(13, 'fdsadf', 'fasdfas', NULL),
(15, 'aaaaafdasdffdasfdasd', '123456', NULL),
(16, 'aaaaaaa', '123456', NULL),
(17, 'afsfdsafsafdasdf', '123456', NULL),
(18, 'demo', '', NULL),
(19, 'aaaaa000', '', NULL),
(20, 'aaaaafdsaf', '123456dfasdf', NULL),
(21, 'aaad', '123456dfasdf', NULL),
(22, 'dfadfsafsafsda', 'fdsafsa', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orange_ad_carousel`
--
ALTER TABLE `orange_ad_carousel`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `orange_index_products`
--
ALTER TABLE `orange_index_products`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `orange_products_ category`
--
ALTER TABLE `orange_products_ category`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `orange_provincial`
--
ALTER TABLE `orange_provincial`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `orange_user`
--
ALTER TABLE `orange_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `orange_user`
--
ALTER TABLE `orange_user`
  MODIFY `uid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
