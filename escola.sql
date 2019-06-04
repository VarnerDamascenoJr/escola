CREATE TABLE aluno(
id_aluno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(20) NOT NULL,
ano_de_entrada DATE NOT NULL,
nome_pai VARCHAR(20),
nome_mae VARCHAR(20) NOT NULL,
turma CHAR(2) NOT NULL,
horario VARCHAR(6) NOT NULL
);
CREATE TABLE funcionario(
id_func INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_func VARCHAR(20) NOT NULL,
ano_de_entrada DATE NOT NULL,
data_de_aniversario DATE NOT NULL
);
CREATE TABLE telefone(
id_tele INT NOT NULL PRIMARY KEY,
num_tel INT NOT NULL
);

CREATE TABLE disciplina(
id_disci INT NOT NULL PRIMARY KEY,
nome_disci VARCHAR(20) NOT NULL,
ano_de_ensino INT
);

CREATE TABLE professor(
id_prof INT NOT NULL PRIMARY KEY AUTO INCREMENT,
nome VARCHAR(20) NOT NULL,
sexo VARCHAR(4),
idade INT,
data_ingresso DATE NOT NULL
);

CREATE TABLE horario(
id_horario INT NOT NULL PRIMARY KEY AUTO INCREMENT,
turno VARCHAR(6),
hora_trabalhada INT NOT NULL  
);
