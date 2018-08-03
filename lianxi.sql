SET NAMES UTF8;
DROP DATABASE IF EXISTS students_file;
CREATE DATABASE students_file CHARSET=UTF8;
USE students_file;
CREATE TABLE student_basic(
	id INT PRIMARY KEY AUTO_INCREMENT,
	sname VARCHAR(16) NOT NULL COMMENT '姓名',
	sex VARCHAR(1) COMMENT '性别',
	age VARCHAR(4) COMMENT '年龄',
	education VARCHAR(16) COMMENT '学历',
	school VARCHAR(16) COMMENT '毕业学校',
	major VARCHAR(16) COMMENT '专业',
	work_experience VARCHAR(128) COMMENT '工作经验',
	phone CHAR(11) NOT NULL UNIQUE COMMENT '手机',
	QQ VARCHAR(32) UNIQUE COMMENT 'QQ',
	address VARCHAR(64) COMMENT '地址',
	linkman VARCHAR(16) NOT NULL COMMENT '紧急联系人',
	linkman_phone CHAR(11) NOT NULL UNIQUE COMMENT '紧急联系人电话'
);