-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_academiaIng` DEFAULT CHARACTER SET utf8 ;
USE `db_academiaIng` ;

-- -----------------------------------------------------
-- Estudiantes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_academiaIng`.`estudiantes` (
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `cedula` VARCHAR(15) NULL,
  `nivIngles` VARCHAR(2) NULL,
  PRIMARY KEY (`cedula`))
-- -----------------------------------------------------
-- Docentes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_academiaIng`.`docentes` (
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `cedula` VARCHAR(15) NULL,
  PRIMARY KEY (`cedula`))
-- -----------------------------------------------------
-- Cursos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_academiaIng`.`cursos` (
  `nombre` VARCHAR(45) NULL,
  `codigo` VARCHAR(15) NULL,
  PRIMARY KEY (`codigo`))

-- -----------------------------------------------------
-- Grupo
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_academiaIng`.`grupos` (
  `grupoid` int  NOT NULL AUTO_INCREMENT,
  `estudianteid` VARCHAR(15) NULL,
  `docenteid` VARCHAR(15) NULL,
  `cursoid` VARCHAR(15) NULL,
  `aula` VARCHAR(15) NULL,
  `horario` varchar  NULL,
  PRIMARY KEY ( `grupoid` ),
  FOREIGN KEY (`estudianteid`) REFERENCES estudiantes(`cedula`),
  FOREIGN KEY (`docenteid`) REFERENCES docentes(`cedula`),
  FOREIGN KEY (`cursoid`) REFERENCES cursos(`codigo`)
  )
ENGINE = InnoDB;
Create TABLE IF NOT EXISTS `db_academiaIng`.`administradores`(
 	id Primary	NOT NULL AUTO_INCREMENT,
	cedula	varchar(20),
	contrasena	varchar(50),		
);
INSERT INTO `administradores` (`cedula`, `contrasena`) VALUES ( "45781087", "HolaComo1*");

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
