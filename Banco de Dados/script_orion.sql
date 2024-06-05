create database orion;
use orion;

create table paciente (
	idPaciente int primary key auto_increment
    ,nomePaciente varchar (70)
    ,tipoCancer varchar (45)
    ,emailPaciente varchar (60)
    ,senhaPaciente varchar (200)
    ,fotoPerfilPaciente varchar (45)
    ,dtNasc date
    );
    
create table familiar (
	idFamiliar int primary key auto_increment
    ,nomeFamiliar varchar (70)
    ,emailFamiliar varchar (60)
    ,senhaFamiliar varchar (200)
    ,parentesco varchar (45)
    ,fotoPerfilFamiliar varchar (45)
    ,idPaciente int
    ,foreign key (idPaciente) references paciente (idPaciente)
    );
    
create table consulta (
	idConsulta int primary key auto_increment
    ,dataHoraConsulta datetime
    ,logradouro varchar (70)
    ,numLogradouro varchar (10)
    ,bairro varchar (60)
    ,cep char (9)
    ,descricaoConsulta varchar (100)
    ,idPaciente int 
    ,foreign key (idPaciente) references paciente (idPaciente)
    );
    
create table medicacao (
	idMedicacao int primary key auto_increment
    ,descricaoMedicacao varchar (100)
    ,horaMedicacao time
    ,quantidadeMedicacao varchar (30)
    ,idPaciente int 
    ,foreign key (idPaciente) references paciente (idPaciente)
    );
    
insert into paciente (nomePaciente, emailPaciente, senhaPaciente, tipoCancer, dtNasc)
values 
	('Livia', 'liavia@gmail.com', sha2('123', 256), 'Mama Feminina', '1992-06-02')
    ,('Caique', 'caique@gmail.com', sha2('123', 256), 'próstata', '1980-09-08')
    ,('Luiza', 'luiza@gmail.com', sha2('123', 256), 'estômago', '2012-06-01');
    
insert into familiar (nomeFamiliar, emailFamiliar, senhaFamiliar, parentesco, idPaciente)
values
	('Marcelo', 'marcelo@gmail.com', sha2('123', 256), 'Pai', 1)
    ,('Ana', 'ana@gmail.com', sha2('123', 256), 'Esposa', 2)
    ,('Carla', 'carla@gmail.com', sha2('123', 256), 'Mãe', 3)
    ,('Haroldo', 'haroldo@gmail.com', sha2('123', 256), 'Pai', 3);
    
insert into medicacao (horaMedicacao, descricaoMedicacao, quantidadeMedicacao, idPaciente)
values
	('09:00:00', 'Citrato de Tamoxifeno', '2 comp', 3)
    ,('10:00:00', 'Irinotecan', '20 ml', 3)
    ,('14:30:00', 'Hydroxycarbamide', '1 comp', 3)
    ,('14:30:00', 'Acetato de Leuprorrelina', '2 comp', 3)
    ,('20:00:00', 'Anastrozol', '2 comp', 3)
    ,('22:00:00', 'Ciclosporina', '10 ml', 3);
    
INSERT INTO consulta (dataHoraConsulta, logradouro, numLogradouro, bairro, cep, descricaoConsulta, idPaciente)
VALUES 
    ('2024-06-17 08:00:00', 'Rua da Paz', '123', 'Centro', '12345-678', 'Consulta de rotina', 3),
    ('2024-06-17 10:00:00', 'Rua dos Sonhos', '456', 'Jardim das Flores', '54321-987', 'Consulta de acompanhamento', 3),
    ('2024-06-17 14:00:00', 'Avenida das Palmeiras', '789', 'Vila Nova', '98765-432', 'Consulta de retorno', 3),
    ('2024-06-17 16:00:00', 'Rua das Acácias', '1011', 'Bairro Novo', '13579-246', 'Consulta de emergência', 3),
    ('2024-06-20 09:00:00', 'Rua dos Girassóis', '1213', 'Jardim Primavera', '24680-135', 'Consulta de exames', 3),
    ('2024-06-28 11:00:00', 'Rua das Margaridas', '1415', 'Vila Rica', '36912-480', 'Consulta de pós-operatório', 3),
    ('2024-06-30 13:00:00', 'Avenida das Violetas', '1617', 'Bairro das Flores', '48206-937', 'Consulta de prevenção', 3),
    ('2024-06-30 15:00:00', 'Rua dos Lírios', '1819', 'Jardim América', '59371-824', 'Consulta de check-up', 3),
    ('2024-07-02 17:00:00', 'Rua das Orquídeas', '2021', 'Bairro Industrial', '60482-739', 'Consulta de avaliação', 3);
    
    
    select distinct date_format(dataHoraConsulta, '%d/%m') as 'data_consulta' from consulta where idPaciente = 3;
    
select logradouro, numLogradouro, bairro, cep, descricaoConsulta, DATE_FORMAT(dataHoraConsulta, '%Hh%i') AS horaConsulta from consulta where date_format(dataHoraConsulta, '%d/%m') = '17/06' AND idPaciente = 3;