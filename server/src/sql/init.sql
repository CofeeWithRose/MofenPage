-- drop database WEBEDITPLATFORM;
-- create database WEBEDITPLATFORM;
-- use WEBEDITPLATFORM;
drop table USER;
create table USER (
    id  varchar(50)  NOT NULL,
    userName varchar(200) NOT NULL,
    pwd varchar(200) NOT NULL
);
insert into USER (id, userName, pwd) VALUES(uuid(), 'admin', '123456');
