-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article` (
  `id` varchar(14) NOT NULL,
  `act_name` varchar(16) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `edit_time` datetime DEFAULT NULL,
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`id`,`act_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES ('20200111183449','ggg','ggg的新文章','GGG!嘿嘿嘿','2020-01-11 18:34:57','2020-01-11 18:34:49'),('20200111184900','test','test 新文章','test 新文章test 新文章test 新文章test 新文章',NULL,'2020-01-11 18:49:00'),('20200112160854','asd','我想新增新文章，我是asd醬','我是asd醬唷,\n晚安','2020-01-13 01:35:55','2020-01-12 16:08:54'),('20200112162100','asshole','hehe','郭家雞肉飯好吃,但糯米腸不好吃\n','2020-01-12 16:22:24','2020-01-12 16:21:00'),('20200113010205','eee','eee的新文章','我是新朋友，ㄛ~~~~~~~~~~~~`~~~~~\n睡覺ㄌㄏㄏ','2020-01-13 01:45:45','2020-01-13 01:02:05'),('5','chect','hi','我叫帥哥桑，來自台北，年齡22歲。於今年6月份畢業于桂林電子科技大學新聞出版學院，專業為市場營銷，我以前做過保險銷售和銷銷售，所以對銷售有一定的經驗。此外，我在新華書店門市工作過，對服務好顧客有一定的心得。我的英語基礎良好，已獲得了大學英語四級證書，也在外貿公司實習過。我奉行態度決定一切的原則，我相信只要踏踏實實的做好每一個細節，服務好客戶，通過自己的不懈努力，一定會在擁有出色的工作業績。請考官考慮給我提供一個試崗的機會，我有信心做好該崗位工作，願服從貴公司的安排，隨時可以就任崗位，並在貴公司做長期發展的準備，因為是貴公司給了我這樣一個機會。','2020-01-07 18:00:45','2020-01-07 18:00:45'),('6','momo','我是茉茉','我覺得茉茉很可愛，真的很可愛。雖然他來自戴筆路克星，而不是地球，他距離我們很遠很遠','2020-01-07 20:04:45','2020-01-07 20:04:45');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `member` (
  `act_name` varchar(16) NOT NULL,
  `pwd` varchar(64) NOT NULL,
  `email` varchar(200) NOT NULL,
  `rank` varchar(45) NOT NULL DEFAULT 'member',
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`act_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES ('aaa','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:42:20'),('aaaa','356dd604126e064bf8df414f902d469c010d1a5dfcdaf0dcaef24bf8b2b1cbe6','aaa@ddd.ddd','member','2020-01-11 18:29:32'),('aaaaa','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:43:24'),('aaadsa','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:43:53'),('adasg','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:44:37'),('adsa','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','asd@asd','member','2020-01-08 14:17:05'),('adsg','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:44:22'),('asd','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:41:29'),('asd@asd','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','sad@sad.sad','member','2020-01-08 15:00:38'),('asdc','efc3fc31c497d10bb079abcdfa8b0096c1b57e31601a3c35bfdd847c8e6e000e','sad@sad.sad','member','2020-01-09 12:18:38'),('asdd','251dfcdea45a7985667c611532d903e9ce966f7733c0901d7e6188d02ed289bc','asdd@sa.s','member','2020-01-11 18:09:23'),('asddd','b4191b177bba056cc5c8f2ea9b3919f43d5c04bef228f45946ec990443684db4','asdd@ss.ss','member','2020-01-11 18:11:25'),('asdq','2ecf5e978144188c15f412471b660c968c4993b7f065fc0b16dab101018c4cd3','asdq@ads.asd','member','2020-01-11 18:25:11'),('asshole','ee1757d1d70315da31f617013e9666f817666dfa60d86a76f0525e22df09e306','z125a451@yahoo.com.tw','member','2020-01-12 08:19:47'),('chect','1093','cy94295@gmail.com','member','2020-01-07 12:04:45'),('chect2','b30f81f9042c756a2438a30268597658b3acbe3dbaa012c3399a32c7caf8f99f','sad@sad.sad','member','2020-01-08 15:01:57'),('cy952950513','c2739c0fe36314653eff935fe7d1dcaa3bb3aac6017ea5de5c77642fdbf46860','cvs@dsf.sdf','member','2020-01-11 18:06:54'),('eee','49f92e1eefc0334707a5f4dcbcb4cce02ae2abb7431c51eb209645224d14d5ae','eee@eee.eee','member','2020-01-12 17:01:48'),('fdsg','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:44:15'),('ffff','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:42:58'),('ggg','8683c20c4e5aee88ba862803ddabfb46cb9ca8de9ecc22172b86bed4e8eee41e','ggg@ggg.gg','member','2020-01-09 17:27:33'),('momo','960607','momoservertw@gmail.com','member','2020-01-07 12:04:45'),('qqq','4444d60d582ac8474e1e5459b014a34c48cbb3c0c2e892541bcce2024a0e1ff0','qqq@qqq.qqq','member','2020-01-09 18:15:17'),('qwe','c2739c0fe36314653eff935fe7d1dcaa3bb3aac6017ea5de5c77642fdbf46860','qwe@as.asd','member','2020-01-11 18:13:45'),('qwer','7a2a82f20f9347c384d420fa466c592271f4a953b3b851c994e6800e3a1a9a23','qwer@sa.asd','member','2020-01-11 18:16:05'),('sadasd','2b43463bf8649c99febeb99835c224c6b676c924df08b46e59f619d79a618653','saasd@sad.sadasd','member','2020-01-08 14:37:57'),('sysadmin','8edc4e18ab2337519e0ab3ff00b6f5c145c07d20ca30c118ed93ecdc894734e9','sysadmin@sysadmin.com','member','2020-01-12 15:35:25'),('test','4099e76b62519041802a98f7f08bd5ec6ddbbe16f7f7b89aa9d13822520073a6','test@gmail.com','member','2020-01-11 10:48:42'),('wewewe','5b0e7361d7dab460eef59924886b58ee21a9ffb69896132c982d23af7f0329e1','toy9986619+wewewe@gmail.com','member','2020-01-11 12:10:42');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-13  1:49:19
