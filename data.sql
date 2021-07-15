use qabot;
SET FOREIGN_KEY_CHECKS=0;
SET sql_mode='NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `client`;
CREATE TABLE `client`
(
    `client_id` int AUTO_INCREMENT PRIMARY KEY,
    `username` varchar(255) NOT NULL ,
    `nickname` varchar(255) ,
    `password` varchar(255) NOT NULL ,
    `email` varchar(255) NOT NULL ,
    `avatar` varchar(255) NOT NULL ,
    `theme` varchar(255) NOT NULL default 'default'

)ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `developer`;
CREATE TABLE `developer`
(
    `developer_id` int AUTO_INCREMENT PRIMARY KEY,
    `username` varchar(255) NOT NULL ,
    `password` varchar(255) NOT NULL ,
    `email` varchar(255) NOT NULL ,
    `cost` int default 0


)ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `bot`;
CREATE TABLE `bot`
(
    `bot_id` int AUTO_INCREMENT PRIMARY KEY ,
    `name` varchar(255) NOT NULL ,
    `nickname` varchar(255),
    `bot_theme` varchar(255) default 'default',
    `avatar` varchar(255) default null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO client (username, nickname, password, email, avatar, theme) VALUE ('tester','测试员','qwerty','x@qa.com','none','default');

INSERT INTO bot (name, nickname) VALUE ('bot1','Bot1');
INSERT INTO bot (name, nickname) VALUE ('bot2','Bot2');
INSERT INTO bot (name, nickname) VALUE ('bot3','Bot3');
