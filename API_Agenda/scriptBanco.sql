create database agendab;

use agendab;

create table contato (
id int not null auto_increment primary key,
nome varchar(100) not null,
telefone varchar(15) not null,
email varchar(100) not null
);

insert into contato(nome, telefone, email) values
('Vanessa', '69992707070', 'vanessinha@gmail.com'),
('Pedrinho', '69984025038', 'pedrodograu@gmail.com'),
('Joãozinho', '69981972359', 'jzinho@gmail.com');

select *from contato;