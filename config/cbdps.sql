/*
Navicat MySQL Data Transfer

Source Server         : Mysql
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : cbdps

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2019-09-07 19:50:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for appendicitis_00_info
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_00_info`;
CREATE TABLE `appendicitis_00_info` (
  `binglihao` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `hospital` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `chuanghao` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  `fenzu` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`binglihao`),
  UNIQUE KEY `binglihao` (`binglihao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_00_info
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_01_jbzl
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_01_jbzl`;
CREATE TABLE `appendicitis_01_jbzl` (
  `binglihao` int(11) NOT NULL,
  `name` text,
  `sex` text,
  `age` text,
  `nation` text,
  `birthplace` text,
  `IDNumber` text,
  `familyAddress` text,
  `familyPhoneNumber1` text,
  `familyPhoneNumber2` text,
  `contactAddress` text,
  `contactPhoneNumber1` text,
  `contactPhoneNumber2` text,
  `registrationTime` text,
  `medicalHistoryPresenter` text,
  `relationshipWithPatient_MHP` text,
  `contact` text,
  `relationshipWithPatient_con` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_01_jbzl_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_01_jbzl
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_01_jws
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_01_jws`;
CREATE TABLE `appendicitis_01_jws` (
  `binglihao` int(11) NOT NULL,
  `healthStatus` text,
  `diseaseHistory` text,
  `diseaseHistoryText` text,
  `infectiousDiseaseHistory` text,
  `infectiousDiseaseHistoryText` text,
  `vaccinationHistory` text,
  `bloodTransfusionHistory` text,
  `bloodTransfusionHistoryText` text,
  `surgicalTraumaHistory` text,
  `surgicalTraumaHistoryText` text,
  `drugAllergyHistory` text,
  `drugAllergyHistoryText` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_01_jws_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_01_jws
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_01_xbs
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_01_xbs`;
CREATE TABLE `appendicitis_01_xbs` (
  `binglihao` int(11) NOT NULL,
  `currentHistory` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_01_xbs_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_01_xbs
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_01_zs
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_01_zs`;
CREATE TABLE `appendicitis_01_zs` (
  `binglihao` int(11) NOT NULL,
  `statement` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_01_zs_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_01_zs
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_02_fzjcjg
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_02_fzjcjg`;
CREATE TABLE `appendicitis_02_fzjcjg` (
  `binglihao` int(11) NOT NULL,
  `zyfzjcjg` text,
  `zyfzjcjgtext` text,
  `yxxjg` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_02_fzjcjg_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_02_fzjcjg
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_02_ryzd
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_02_ryzd`;
CREATE TABLE `appendicitis_02_ryzd` (
  `binglihao` int(11) NOT NULL,
  `ruyuanzhenduan` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_02_ryzd_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_02_ryzd
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_02_ybcl
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_02_ybcl`;
CREATE TABLE `appendicitis_02_ybcl` (
  `binglihao` int(11) NOT NULL,
  `height` text,
  `weight` text,
  `temp` text,
  `fayu` text,
  `yingyang` text,
  `tiwei` text,
  `shenzhi` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_02_ybcl_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_02_ybcl
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_02_ybqk
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_02_ybqk`;
CREATE TABLE `appendicitis_02_ybqk` (
  `binglihao` int(11) NOT NULL,
  `mianrong` text,
  `breathFrequency` text,
  `breathRegular` text,
  `pulseFrequency` text,
  `pulseRegular` text,
  `bloodPressure` text,
  `bingqing` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_02_ybqk_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_02_ybqk
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_02_zkqk
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_02_zkqk`;
CREATE TABLE `appendicitis_02_zkqk` (
  `binglihao` int(11) NOT NULL,
  `fubuwaixing` text,
  `fubujingmai` text,
  `fushihuxi` text,
  `weichangxing` text,
  `weichangrudongbo` text,
  `fubi` text,
  `fushiyatong` text,
  `yatongbuwei` text,
  `fantiaotong` text,
  `fantiaotongbuwei` text,
  `yidongxingzhuoyin` text,
  `changrudongyin` text,
  `fubuzhongkuai` text,
  `fbzkbuwei` text,
  `fbzkdaxiao` text,
  `zhidi` text,
  `huodongdu` text,
  `yatong` text,
  `zhongkuaibianjie` text,
  `exinoutu` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_02_zkqk_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_02_zkqk
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_03_sqjc
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_03_sqjc`;
CREATE TABLE `appendicitis_03_sqjc` (
  `binglihao` int(11) NOT NULL,
  `whitecell` text,
  `zxlxbb` text,
  `crp` text,
  `as1` text,
  `as2` text,
  `as3` text,
  `as4` text,
  `as5` text,
  `as7` text,
  `as8` text,
  `yxxjg` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_03_sqjc_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_03_sqjc
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_03_sqttglmk
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_03_sqttglmk`;
CREATE TABLE `appendicitis_03_sqttglmk` (
  `binglihao` int(11) NOT NULL,
  `duomoshizhentong` text,
  `shscttgysj` text,
  `gyqpf` text,
  `shscttgyfs` text,
  `gyfsqt` text,
  `gyhpf` text,
  `kssyy` text,
  `kssyyxx` text,
  `tuoshui` text,
  `buye` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_03_sqttglmk_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_03_sqttglmk
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_04_szxx
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_04_szxx`;
CREATE TABLE `appendicitis_04_szxx` (
  `binglihao` int(11) NOT NULL,
  `sssj` text,
  `mzfs` text,
  `szqkzd` text,
  `szqkzd6` text,
  `zkfss` text,
  `qkjbmz` text,
  `fsqc` text,
  `nzqc` text,
  `fqcx` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_04_szxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_04_szxx
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_05_cyqfc
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_05_cyqfc`;
CREATE TABLE `appendicitis_05_cyqfc` (
  `binglihao` int(11) NOT NULL,
  `shzyts` text,
  `zzyts` text,
  `chuyuandaiyao` text,
  `chuyuandaiyaoxx` text,
  `kangshengsuyl` text,
  `cydyqt` text,
  `bingqingbeizhu` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_05_cyqfc_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_05_cyqfc
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_05_shfc
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_05_shfc`;
CREATE TABLE `appendicitis_05_shfc` (
  `binglihao` int(11) NOT NULL,
  `duomoshizhentong` text,
  `shscttgysj` text,
  `gyqpf` text,
  `shscttgyfs` text,
  `gyfsqt` text,
  `gyhpf` text,
  `scxchdsj` text,
  `swysj` text,
  `swyexot` text,
  `shscpbsj` text,
  `shweiguan` text,
  `shwgbcsj` text,
  `shpfqylg` text,
  `shpfqylgbcsj` text,
  `shng` text,
  `shngbcsj` text,
  `shfc` text,
  `time1st` text,
  `temperature1st` text,
  `whitecell1st` text,
  `zxlxbb1st` text,
  `crp1st` text,
  `futong1st` text,
  `exoutu1st` text,
  `time2nd` text,
  `temperature2nd` text,
  `whitecell2nd` text,
  `zxlxbb2nd` text,
  `crp2nd` text,
  `futong2nd` text,
  `exoutu2nd` text,
  `time3th` text,
  `temperature3rd` text,
  `whitecell3rd` text,
  `zxlxbb3rd` text,
  `crp3rd` text,
  `futong3rd` text,
  `exoutu3rd` text,
  `time4th` text,
  `temperature4th` text,
  `whitecell4th` text,
  `zxlxbb4th` text,
  `crp4th` text,
  `futong4th` text,
  `exoutu4th` text,
  `time5th` text,
  `temperature5th` text,
  `whitecell5th` text,
  `zxlxbb5th` text,
  `crp5th` text,
  `futong5th` text,
  `exoutu5th` text,
  `time6th` text,
  `temperature6th` text,
  `whitecell6th` text,
  `zxlxbb6th` text,
  `crp6th` text,
  `futong6th` text,
  `exoutu6th` text,
  `time7th` text,
  `temperature7th` text,
  `whitecell7th` text,
  `zxlxbb7th` text,
  `crp7th` text,
  `futong7th` text,
  `exoutu7th` text,
  `time8th` text,
  `temperature8th` text,
  `whitecell8th` text,
  `zxlxbb8th` text,
  `crp8th` text,
  `futong8th` text,
  `exoutu8th` text,
  `time9th` text,
  `temperature9th` text,
  `whitecell9th` text,
  `zxlxbb9th` text,
  `crp9th` text,
  `futong9th` text,
  `exoutu9th` text,
  `time10th` text,
  `temperature10th` text,
  `whitecell10th` text,
  `zxlxbb10th` text,
  `crp10th` text,
  `futong10th` text,
  `exoutu10th` text,
  `yxxjg` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_05_shfc_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_05_shfc
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_06_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_06_sfxx`;
CREATE TABLE `appendicitis_06_sfxx` (
  `binglihao` int(11) NOT NULL,
  `yzbfz` text,
  `yzqkgr` text,
  `yzzry` text,
  `yzzrysj` text,
  `yxxjg1st` text,
  `yzzryqita` text,
  `yzzss` text,
  `yzzsssj` text,
  `yxxjg2nd` text,
  `yzzssqt` text,
  `yzfqcynz` text,
  `yzzry2` text,
  `yzzry2sj` text,
  `yxxjg3rd` text,
  `yzzry2qita` text,
  `yzzss2` text,
  `yzzss2sj` text,
  `yxxjg4th` text,
  `yzzss2qt` text,
  `yzcnlgz` text,
  `yzzry3` text,
  `yzzry3sj` text,
  `yxxjg5th` text,
  `yzzry3qita` text,
  `yzzss3` text,
  `yzzss3sj` text,
  `yxxjg6th` text,
  `yzzss3qt` text,
  `yzbfzqita` text,
  `yybfz` text,
  `yyqkgr` text,
  `yyzry` text,
  `yyzrysj` text,
  `yxxjg7th` text,
  `yyzryqita` text,
  `yyzss` text,
  `yyzsssj` text,
  `yxxjg8th` text,
  `yyzssqt` text,
  `yyfqcynz` text,
  `yyzry2` text,
  `yyzry2sj` text,
  `yxxjg9th` text,
  `yyzry2qita` text,
  `yyzss2` text,
  `yyzss2sj` text,
  `yxxjg10th` text,
  `yyzss2qt` text,
  `yycnlgz` text,
  `yyzry3` text,
  `yyzry3sj` text,
  `yxxjg11th` text,
  `yyzry3qita` text,
  `yyzss3` text,
  `yyzss3sj` text,
  `yxxjg12th` text,
  `yyzss3qt` text,
  `yybfzqita` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_06_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_06_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_records
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_records`;
CREATE TABLE `appendicitis_records` (
  `binglihao` int(11) NOT NULL,
  `opstaff` varchar(255) DEFAULT NULL,
  `optype` varchar(255) DEFAULT NULL,
  `optime` datetime DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_records_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_records
-- ----------------------------

-- ----------------------------
-- Table structure for appendicitis_uploadrecords
-- ----------------------------
DROP TABLE IF EXISTS `appendicitis_uploadrecords`;
CREATE TABLE `appendicitis_uploadrecords` (
  `binglihao` int(11) NOT NULL,
  `tableName` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `uptime` datetime DEFAULT NULL,
  `upstaff` varchar(255) DEFAULT NULL,
  `folder` varchar(255) DEFAULT NULL,
  KEY `binglihao` (`binglihao`),
  CONSTRAINT `appendicitis_uploadrecords_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `appendicitis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appendicitis_uploadrecords
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_00_info
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_00_info`;
CREATE TABLE `cardioidanastomosis_00_info` (
  `binglihao` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `hospital` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `chuanghao` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  `fenzu` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`binglihao`),
  UNIQUE KEY `binglihao` (`binglihao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_00_info
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_01_jbzl
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_01_jbzl`;
CREATE TABLE `cardioidanastomosis_01_jbzl` (
  `binglihao` int(11) NOT NULL,
  `name` text,
  `sex` text,
  `age` text,
  `nation` text,
  `birthplace` text,
  `IDNumber` text,
  `familyAddress` text,
  `familyPhoneNumber1` text,
  `familyPhoneNumber2` text,
  `contactAddress` text,
  `contactPhoneNumber1` text,
  `contactPhoneNumber2` text,
  `registrationTime` text,
  `medicalHistoryPresenter` text,
  `relationshipWithPatient_MHP` text,
  `contact` text,
  `relationshipWithPatient_con` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_01_jbzl_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_01_jbzl
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_01_jws
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_01_jws`;
CREATE TABLE `cardioidanastomosis_01_jws` (
  `binglihao` int(11) NOT NULL,
  `healthStatus` text,
  `diseaseHistory` text,
  `diseaseHistoryText` text,
  `infectiousDiseaseHistory` text,
  `infectiousDiseaseHistoryText` text,
  `vaccinationHistory` text,
  `bloodTransfusionHistory` text,
  `bloodTransfusionHistoryText` text,
  `surgicalTraumaHistory` text,
  `surgicalTraumaHistoryText` text,
  `drugAllergyHistory` text,
  `drugAllergyHistoryText` text,
  `Family_history` text,
  `Family_history_Text` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_01_jws_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_01_jws
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_01_xbs
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_01_xbs`;
CREATE TABLE `cardioidanastomosis_01_xbs` (
  `binglihao` int(11) NOT NULL,
  `Meconium_discharge_time` text,
  `Constipation_time` text,
  `Conservative_treatment` text,
  `Conservative_treatment_time` text,
  `Frequency_of_defecation` text,
  `Defecation_traits` text,
  `Vomit` text,
  `Dirty_manure` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_01_xbs_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_01_xbs
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_02_dtqk
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_02_dtqk`;
CREATE TABLE `cardioidanastomosis_02_dtqk` (
  `binglihao` int(11) NOT NULL,
  `height` text,
  `weight` text,
  `temp` text,
  `fayu` text,
  `yingyang` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_02_dtqk_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_02_dtqk
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_02_fzjcjg
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_02_fzjcjg`;
CREATE TABLE `cardioidanastomosis_02_fzjcjg` (
  `binglihao` int(11) NOT NULL,
  `Barium_enema_examination_date` text,
  `DisplacementSegment` text,
  `Acetylcholinesterase_staining_date` text,
  `ganglionCells` text,
  `Anorectal_manometry_date` text,
  `rair` text,
  `other_date` text,
  `other_des` text,
  `other_Diagnosis` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_02_fzjcjg_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_02_fzjcjg
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_02_system_check
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_02_system_check`;
CREATE TABLE `cardioidanastomosis_02_system_check` (
  `binglihao` int(11) NOT NULL,
  `General_situation` text,
  `General_situation_text` text,
  `ComplicatedSyndrome` text,
  `ComplicatedSyndrome_text` text,
  `Head_face` text,
  `Head_face_text` text,
  `Skin_lymph_nodes` text,
  `Skin_lymph_nodes_text` text,
  `Eyes_ears_nose_throat` text,
  `Eyes_ears_nose_throat_text` text,
  `Respiratory_system` text,
  `Respiratory_system_text` text,
  `cardiovascular_system` text,
  `cardiovascular_system_text` text,
  `Reproductive_urinary_system` text,
  `Reproductive_urinary_system_text` text,
  `Musculoskeletal` text,
  `Musculoskeletal_text` text,
  `nervous_system` text,
  `nervous_system_text` text,
  `Mental_system` text,
  `Mental_system_text` text,
  `Anorectal_canal` text,
  `Anorectal_canal_text` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_02_system_check_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_02_system_check
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_04_szjl
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_04_szjl`;
CREATE TABLE `cardioidanastomosis_04_szjl` (
  `binglihao` int(11) NOT NULL,
  `sssj` text,
  `mzfs` text,
  `szqkzd` text,
  `Length_diseased_intestine` text,
  `Scope_excision` text,
  `Scope_excision_textarea` text,
  `Anastomosis_mode` text,
  `Anastomosis_mode_textarea` text,
  `intraoperative_bleeding_volume` text,
  `Remarks_illness` text,
  `pathologic_diagnosis` text,
  `pathologic_diagnosis_textarea` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_04_szjl_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_04_szjl
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_06_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_06_sfxx`;
CREATE TABLE `cardioidanastomosis_06_sfxx` (
  `binglihao` int(11) NOT NULL,
  `age_after` text,
  `Complication_after` text,
  `Complication_after_checkbox` text,
  `Complication_after_textarea` text,
  `AverageDailyStoolCount_after` text,
  `CurrentStoolCharacteristics_after` text,
  `IsDefecationStillDifficult_after` text,
  `DefecationHasConsciousness_after` text,
  `AbilityToControlStool_after` text,
  `NumberOfEpisodesOfEnteritis_after` text,
  `OtherComplications_afterOneMonth` text,
  `OtherComplications_afterOneMonth_textarea` text,
  `DefecationTraining_afterOneMonth` text,
  `DefecationTraining_afterOneMonth_select` text,
  `DefecationTrainingTime_afterOneMonth_select` text,
  `RAIRReflectionThreshold_oneMonth` text,
  `AnalRestingPressure_oneMonth` text,
  `LengthOfAnalHighPressureZone_oneMonth` text,
  `maxPressPressure_oneMonth` text,
  `firstSensoryPressure_oneMonth` text,
  `firstDefecationPressure_oneMonth` text,
  `strongDefecationPressure_oneMonth` text,
  `maxCompressionPressing_oneMonth` text,
  `readmission_after_oneMonth` text,
  `readmission_after_oneMonth_textarea` text,
  `reoperation_after_oneMonth` text,
  `reoperation_after_oneMonth_textarea` text,
  `other_oneMonth` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_06_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_06_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_06_sixmonth_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_06_sixmonth_sfxx`;
CREATE TABLE `cardioidanastomosis_06_sixmonth_sfxx` (
  `binglihao` int(11) NOT NULL,
  `age_sixMonth` text,
  `Complication_sixMonth` text,
  `Complication_sixMonth_checkbox` text,
  `Complication_sixMonth_textarea` text,
  `AverageDailyStoolCount_sixMonth` text,
  `CurrentStoolCharacteristics_sixMonth` text,
  `IsDefecationStillDifficult_sixMonth` text,
  `DefecationHasConsciousness_sixMonth` text,
  `AbilityToControlStool_sixMonth` text,
  `NumberOfEpisodesOfEnteritis_sixMonth` text,
  `OtherComplications_sixMonth` text,
  `OtherComplications_sixMonth_textarea` text,
  `DefecationTraining_sixMonth` text,
  `DefecationTraining_sixMonth_select` text,
  `DefecationTrainingTime_sixMonth_select` text,
  `RAIRReflectionThreshold_sixMonth` text,
  `AnalRestingPressure_sixMonth` text,
  `LengthOfAnalHighPressureZone_sixMonth` text,
  `maxPressPressure_sixMonth` text,
  `firstSensoryPressure_sixMonth` text,
  `firstDefecationPressure_sixMonth` text,
  `strongDefecationPressure_sixMonth` text,
  `maxCompressionPressing_sixMonth` text,
  `readmission_after_sixMonth` text,
  `readmission_after_sixMonth_textarea` text,
  `reoperation_after_sixMonth` text,
  `reoperation_after_sixMonth_textarea` text,
  `other_sixMonth` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_06_sixmonth_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_06_sixmonth_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_06_threemonth_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_06_threemonth_sfxx`;
CREATE TABLE `cardioidanastomosis_06_threemonth_sfxx` (
  `binglihao` int(11) NOT NULL,
  `age_threeMonth` text,
  `Complication_threeMonth` text,
  `Complication_threeMonth_checkbox` text,
  `Complication_threeMonth_textarea` text,
  `AverageDailyStoolCount_threeMonth` text,
  `CurrentStoolCharacteristics_threeMonth` text,
  `IsDefecationStillDifficult_threeMonth` text,
  `DefecationHasConsciousness_threeMonth` text,
  `AbilityToControlStool_threeMonth` text,
  `NumberOfEpisodesOfEnteritis_threeMonth` text,
  `OtherComplications_afterThreeMonth` text,
  `OtherComplications_afterThreeMonth_textarea` text,
  `DefecationTraining_afterThreeMonth` text,
  `DefecationTraining_afterThreeMonth_select` text,
  `DefecationTrainingTime_afterThreeMonth_select` text,
  `RAIRReflectionThreshold_threeMonth` text,
  `AnalRestingPressure_threeMonth` text,
  `LengthOfAnalHighPressureZone_threeMonth` text,
  `maxPressPressure_threeMonth` text,
  `firstSensoryPressure_threeMonth` text,
  `firstDefecationPressure_threeMonth` text,
  `strongDefecationPressure_threeMonth` text,
  `maxCompressionPressing_threeMonth` text,
  `readmission_after_threeMonth` text,
  `readmission_after_threeMonth_textarea` text,
  `reoperation_after_threeMonth` text,
  `reoperation_after_threeMonth_textarea` text,
  `other_threeMonth` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_06_threemonth_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_06_threemonth_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_06_twelvemonth_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_06_twelvemonth_sfxx`;
CREATE TABLE `cardioidanastomosis_06_twelvemonth_sfxx` (
  `binglihao` int(11) NOT NULL,
  `age_twelveMonth` text,
  `Complication_twelveMonth` text,
  `Complication_twelveMonth_checkbox` text,
  `Complication_twelveMonth_textarea` text,
  `AverageDailyStoolCount_twelveMonth` text,
  `CurrentStoolCharacteristics_twelveMonth` text,
  `IsDefecationStillDifficult_twelveMonth` text,
  `DefecationHasConsciousness_twelveMonth` text,
  `AbilityToControlStool_twelveMonth` text,
  `NumberOfEpisodesOfEnteritis_twelveMonth` text,
  `OtherComplications_twelveMonth` text,
  `OtherComplications_twelveMonth_textarea` text,
  `DefecationTraining_twelveMonth` text,
  `DefecationTraining_twelveMonth_select` text,
  `DefecationTrainingTime_twelveMonth_select` text,
  `RAIRReflectionThreshold_twelveMonth` text,
  `AnalRestingPressure_twelveMonth` text,
  `LengthOfAnalHighPressureZone_twelveMonth` text,
  `maxPressPressure_twelveMonth` text,
  `firstSensoryPressure_twelveMonth` text,
  `firstDefecationPressure_twelveMonth` text,
  `strongDefecationPressure_twelveMonth` text,
  `maxCompressionPressing_twelveMonth` text,
  `readmission_after_twelveMonth` text,
  `readmission_after_twelveMonth_textarea` text,
  `reoperation_after_twelveMonth` text,
  `reoperation_after_twelveMonth_textarea` text,
  `other_twelveMonth` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_06_twelvemonth_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_06_twelvemonth_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_records
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_records`;
CREATE TABLE `cardioidanastomosis_records` (
  `binglihao` int(11) NOT NULL,
  `opstaff` varchar(255) DEFAULT NULL,
  `optype` varchar(255) DEFAULT NULL,
  `optime` datetime DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_records_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_records
-- ----------------------------

-- ----------------------------
-- Table structure for cardioidanastomosis_uploadrecords
-- ----------------------------
DROP TABLE IF EXISTS `cardioidanastomosis_uploadrecords`;
CREATE TABLE `cardioidanastomosis_uploadrecords` (
  `binglihao` int(11) NOT NULL,
  `tableName` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `uptime` datetime DEFAULT NULL,
  `upstaff` varchar(255) DEFAULT NULL,
  `folder` varchar(255) DEFAULT NULL,
  KEY `binglihao` (`binglihao`),
  CONSTRAINT `cardioidanastomosis_uploadrecords_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `cardioidanastomosis_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cardioidanastomosis_uploadrecords
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_00_info
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_00_info`;
CREATE TABLE `megacolon_00_info` (
  `binglihao` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `hospital` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `chuanghao` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  `fenzu` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`binglihao`),
  UNIQUE KEY `binglihao` (`binglihao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_00_info
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_01_jbzl
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_01_jbzl`;
CREATE TABLE `megacolon_01_jbzl` (
  `binglihao` int(11) NOT NULL,
  `name` text,
  `sex` text,
  `age` text,
  `nation` text,
  `birthplace` text,
  `IDNumber` text,
  `familyAddress` text,
  `familyPhoneNumber1` text,
  `familyPhoneNumber2` text,
  `contactAddress` text,
  `contactPhoneNumber1` text,
  `contactPhoneNumber2` text,
  `registrationTime` text,
  `medicalHistoryPresenter` text,
  `relationshipWithPatient_MHP` text,
  `contact` text,
  `relationshipWithPatient_con` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_01_jbzl_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_01_jbzl
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_01_jws
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_01_jws`;
CREATE TABLE `megacolon_01_jws` (
  `binglihao` int(11) NOT NULL,
  `healthStatus` text,
  `diseaseHistory` text,
  `diseaseHistoryText` text,
  `infectiousDiseaseHistory` text,
  `infectiousDiseaseHistoryText` text,
  `vaccinationHistory` text,
  `bloodTransfusionHistory` text,
  `bloodTransfusionHistoryText` text,
  `surgicalTraumaHistory` text,
  `surgicalTraumaHistoryText` text,
  `drugAllergyHistory` text,
  `drugAllergyHistoryText` text,
  `Family_history` text,
  `Family_history_Text` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_01_jws_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_01_jws
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_01_xbs
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_01_xbs`;
CREATE TABLE `megacolon_01_xbs` (
  `binglihao` int(11) NOT NULL,
  `Meconium_discharge_time` text,
  `Constipation_time` text,
  `Conservative_treatment` text,
  `Conservative_treatment_time` text,
  `Frequency_of_defecation` text,
  `Defecation_traits` text,
  `Vomit` text,
  `Dirty_manure` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_01_xbs_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_01_xbs
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_01_zs
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_01_zs`;
CREATE TABLE `megacolon_01_zs` (
  `binglihao` int(11) NOT NULL,
  `statement` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_01_zs_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_01_zs
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_02_dtqk
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_02_dtqk`;
CREATE TABLE `megacolon_02_dtqk` (
  `binglihao` int(11) NOT NULL,
  `height` text,
  `weight` text,
  `temp` text,
  `fayu` text,
  `yingyang` text,
  `tiwei` text,
  `shenzhi` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_02_dtqk_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_02_dtqk
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_02_fzjcjg
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_02_fzjcjg`;
CREATE TABLE `megacolon_02_fzjcjg` (
  `binglihao` int(11) NOT NULL,
  `Barium_enema_examination_date` text,
  `Barium_enema_examination_des` text,
  `Barium_enema_examination_Diagnosis` text,
  `Acetylcholinesterase_staining_date` text,
  `Acetylcholinesterase_staining_des` text,
  `Acetylcholinesterase_staining_divide` text,
  `Anorectal_manometry_date` text,
  `Anorectal_manometry_des` text,
  `Anorectal_manometry_Diagnosis` text,
  `other_date` text,
  `other_des` text,
  `other_Diagnosis` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_02_fzjcjg_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_02_fzjcjg
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_02_ryzd
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_02_ryzd`;
CREATE TABLE `megacolon_02_ryzd` (
  `binglihao` int(11) NOT NULL,
  `ruyuanzhenduan` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_02_ryzd_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_02_ryzd
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_02_smtz
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_02_smtz`;
CREATE TABLE `megacolon_02_smtz` (
  `binglihao` int(11) NOT NULL,
  `mianrong` text,
  `breathFrequency` text,
  `breathRegular` text,
  `pulseFrequency` text,
  `pulseRegular` text,
  `bloodPressure` text,
  `bingqing` text,
  `temperature` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_02_smtz_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_02_smtz
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_02_system_check
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_02_system_check`;
CREATE TABLE `megacolon_02_system_check` (
  `binglihao` int(11) NOT NULL,
  `General_situation` text,
  `General_situation_text` text,
  `Head_face` text,
  `Head_face_text` text,
  `Skin_lymph_nodes` text,
  `Skin_lymph_nodes_text` text,
  `Eyes_ears_nose_throat` text,
  `Eyes_ears_nose_throat_text` text,
  `Respiratory_system` text,
  `Respiratory_system_text` text,
  `cardiovascular_system` text,
  `cardiovascular_system_text` text,
  `Reproductive_urinary_system` text,
  `Reproductive_urinary_system_text` text,
  `Musculoskeletal` text,
  `Musculoskeletal_text` text,
  `nervous_system` text,
  `nervous_system_text` text,
  `Mental_system` text,
  `Mental_system_text` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_02_system_check_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_02_system_check
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_02_zkqk
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_02_zkqk`;
CREATE TABLE `megacolon_02_zkqk` (
  `binglihao` int(11) NOT NULL,
  `fubuwaixing` text,
  `fubujingmai` text,
  `fushihuxi` text,
  `weichangxing` text,
  `weichangrudongbo` text,
  `fubi` text,
  `fushiyatong` text,
  `yatongbuwei` text,
  `fantiaotong` text,
  `fantiaotongbuwei` text,
  `yidongxingzhuoyin` text,
  `changrudongyin` text,
  `fubuzhongkuai` text,
  `fbzkbuwei` text,
  `fbzkdaxiao` text,
  `zhidi` text,
  `huodongdu` text,
  `yatong` text,
  `zhongkuaibianjie` text,
  `exinoutu` text,
  `Anorectal_canal` text,
  `Anorectal_canal_text` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_02_zkqk_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_02_zkqk
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_03_sqjc
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_03_sqjc`;
CREATE TABLE `megacolon_03_sqjc` (
  `binglihao` int(11) NOT NULL,
  `Colon_lavage_date` text,
  `preoperative_fasting_time` text,
  `Water_forbidden_before_operation_time` text,
  `Preoperative_nutritional_support` text,
  `Preoperative_nutritional_support_ways` text,
  `Preoperative_nutritional_support_day` text,
  `Preoperative_antibiotics` text,
  `Preoperative_antibiotics_ways` text,
  `Preoperative_antibiotics_day` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_03_sqjc_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_03_sqjc
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_04_szjl
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_04_szjl`;
CREATE TABLE `megacolon_04_szjl` (
  `binglihao` int(11) NOT NULL,
  `sssj` text,
  `mzfs` text,
  `szqkzd` text,
  `Length_diseased_intestine` text,
  `Scope_excision` text,
  `Scope_excision_textarea` text,
  `Anastomosis_mode` text,
  `Anastomosis_mode_textarea` text,
  `intraoperative_bleeding_volume` text,
  `pathologic_diagnosis` text,
  `pathologic_diagnosis_textarea` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_04_szjl_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_04_szjl
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_05_shxx
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_05_shxx`;
CREATE TABLE `megacolon_05_shxx` (
  `binglihao` int(11) NOT NULL,
  `Abdominal_drainage_tube` text,
  `Abdominal_drainage_tube_date` text,
  `Nasogastric_tube` text,
  `Nasogastric_tube_date` text,
  `Urinary_catheter` text,
  `Urinary_catheter_date` text,
  `Anal_canal` text,
  `Anal_canal_date` text,
  `analgesia` text,
  `Intervention_methods` text,
  `firstTime_leave_bed` text,
  `firstTime_eating` text,
  `pathologic_diagnosis` text,
  `proximal_neurons` text,
  `proximal_neurons_select` text,
  `Postoperative_hospital_stay` text,
  `allTime_hospital` text,
  `Remarks_illness` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_05_shxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_05_shxx
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_06_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_06_sfxx`;
CREATE TABLE `megacolon_06_sfxx` (
  `binglihao` int(11) NOT NULL,
  `age_after` text,
  `height_after` text,
  `weight_after` text,
  `Frequency_defecation_after` text,
  `character_defecation_after` text,
  `Dirty_manure_after` text,
  `common_status_after` text,
  `common_status_after_textarea` text,
  `belly_after` text,
  `belly_after_textarea` text,
  `Anorectal_canal_after` text,
  `Anorectal_canal_after_textarea` text,
  `date_inspect_zc_after` text,
  `des_zc_after` text,
  `diagnosis_zc_after` text,
  `Complication_after` text,
  `Complication_after_checkbox` text,
  `Complication_after_textarea` text,
  `Adjuvant_therapy_after` text,
  `Adjuvant_therapy_after_textarea` text,
  `readmission_after_oneMonth` text,
  `readmission_after_oneMonth_textarea` text,
  `reoperation_after_oneMonth` text,
  `reoperation_after_oneMonth_textarea` text,
  `Barium_enema_examination_date_oneMonth` text,
  `Barium_enema_examination_des_oneMonth` text,
  `Barium_enema_examination_Diagnosis_oneMonth` text,
  `other_oneMonth` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_06_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_06_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_06_sixmonth_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_06_sixmonth_sfxx`;
CREATE TABLE `megacolon_06_sixmonth_sfxx` (
  `binglihao` int(11) NOT NULL,
  `age_after_six` text,
  `height_after_six` text,
  `weight_after_six` text,
  `Frequency_defecation_after_six` text,
  `Character_defecation_after_six` text,
  `Dirty_manure_after_six` text,
  `common_status_after_six` text,
  `common_status_after_textarea_six` text,
  `belly_after_six` text,
  `belly_after_textarea_six` text,
  `Anorectal_canal_after_six` text,
  `Anorectal_canal_after_textarea_six` text,
  `date_inspect_zc_after_six` text,
  `des_zc_after_six` text,
  `diagnosis_zc_after_six` text,
  `Complication_after_six` text,
  `Complication_after_checkbox_six` text,
  `Complication_after_textarea_six` text,
  `Adjuvant_therapy_after_six` text,
  `Adjuvant_therapy_after_textarea_six` text,
  `readmission_after_sixMonth` text,
  `readmission_after_sixMonth_textarea` text,
  `reoperation_after_sixMonth` text,
  `reoperation_after_sixMonth_textarea` text,
  `reoperation_after_threeMonth_textarea` text,
  `Barium_enema_examination_date_sixMonth` text,
  `Barium_enema_examination_des_sixMonth` text,
  `Barium_enema_examination_Diagnosis_sixMonth` text,
  `other_sixMonth` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_06_sixmonth_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_06_sixmonth_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_06_threemonth_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_06_threemonth_sfxx`;
CREATE TABLE `megacolon_06_threemonth_sfxx` (
  `binglihao` int(11) NOT NULL,
  `age_after_three` text,
  `height_after_three` text,
  `weight_after_three` text,
  `Frequency_defecation_after_three` text,
  `Character_defecation_after_three` text,
  `Dirty_manure_after_three` text,
  `common_status_after_three` text,
  `common_status_after_textarea_three` text,
  `belly_after_three` text,
  `belly_after_textarea_three` text,
  `Anorectal_canal_after_three` text,
  `Anorectal_canal_after_textarea_three` text,
  `date_inspect_zc_after_three` text,
  `des_zc_after_three` text,
  `diagnosis_zc_after_three` text,
  `Complication_after_three` text,
  `Complication_after_checkbox_three` text,
  `Complication_after_textarea_three` text,
  `Adjuvant_therapy_after_three` text,
  `Adjuvant_therapy_after_textarea_three` text,
  `readmission_after_threeMonth` text,
  `readmission_after_threeMonth_textarea` text,
  `reoperation_after_threeMonth` text,
  `reoperation_after_threeMonth_textarea` text,
  `Barium_enema_examination_date_threeMonth` text,
  `Barium_enema_examination_des_threeMonth` text,
  `Barium_enema_examination_Diagnosis_threeMonth` text,
  `other_threeMonth` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_06_threemonth_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_06_threemonth_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_06_twelvemonth_sfxx
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_06_twelvemonth_sfxx`;
CREATE TABLE `megacolon_06_twelvemonth_sfxx` (
  `binglihao` int(11) NOT NULL,
  `age_after_twelve` text,
  `height_after_twelve` text,
  `weight_after_twelve` text,
  `Frequency_defecation_after_twelve` text,
  `Character_defecation_after_twelve` text,
  `Dirty_manure_after_twelve` text,
  `common_status_after_twelve` text,
  `common_status_after_textarea_twelve` text,
  `belly_after_twelve` text,
  `belly_after_textarea_twelve` text,
  `Anorectal_canal_after_twelve` text,
  `Anorectal_canal_after_textarea_twelve` text,
  `date_inspect_zc_after_twelve` text,
  `des_zc_after_twelve` text,
  `diagnosis_zc_after_twelve` text,
  `date_inspect_pd_after_twelve` text,
  `des_pd_after_twelve` text,
  `diagnosis_pd_after_twelve` text,
  `Complication_after_twelve` text,
  `Complication_after_checkbox_twelve` text,
  `Complication_after_textarea_twelve` text,
  `Adjuvant_therapy_after_twelve` text,
  `Adjuvant_therapy_after_textarea_twelve` text,
  `readmission_after_twelveMonth` text,
  `readmission_after_twelveMonth_textarea` text,
  `reoperation_after_twelveMonth` text,
  `reoperation_after_twelveMonth_textarea` text,
  `Barium_enema_examination_date_twelveMonth` text,
  `Barium_enema_examination_des_twelveMonth` text,
  `Barium_enema_examination_Diagnosis_twelveMonth` text,
  `other_twelveMonth` text,
  UNIQUE KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_06_twelvemonth_sfxx_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_06_twelvemonth_sfxx
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_records
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_records`;
CREATE TABLE `megacolon_records` (
  `binglihao` int(11) NOT NULL,
  `opstaff` varchar(255) DEFAULT NULL,
  `optype` varchar(255) DEFAULT NULL,
  `optime` datetime DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_records_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_records
-- ----------------------------

-- ----------------------------
-- Table structure for megacolon_uploadrecords
-- ----------------------------
DROP TABLE IF EXISTS `megacolon_uploadrecords`;
CREATE TABLE `megacolon_uploadrecords` (
  `binglihao` int(11) NOT NULL,
  `tableName` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `uptime` datetime DEFAULT NULL,
  `upstaff` varchar(255) DEFAULT NULL,
  `folder` varchar(255) DEFAULT NULL,
  KEY `binglihao` (`binglihao`),
  CONSTRAINT `megacolon_uploadrecords_ibfk_1` FOREIGN KEY (`binglihao`) REFERENCES `megacolon_00_info` (`binglihao`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of megacolon_uploadrecords
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `authority` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `module` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3294f77e-3416-453d-9331-9f8134187e7e', 'root', 'root', '675478140@qq.com', '18684971130', '3', '1', 'all');
INSERT INTO `user` VALUES ('c1537f00-17cd-11e9-a190-f133af42785a', 'rootadm', 'root158', '675478140@qq.com', '18684971130', '9', '1', 'all');
