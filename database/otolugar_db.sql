CREATE TABLE Cliente (
  ci_id INTEGER NOT NULL,
  ci_nome VARCHAR(60),
  ci_telefone VARCHAR(11),
  ci_data_nascimento DATE,
  ci_foto_perfil VARCHAR(70),
  ci_bio VARCHAR(250),
  ci_email VARCHAR(50),
  ci_avaliacao NUMERIC(3,2),
  ci_sexo VARCHAR(25)
  );
  
  CREATE TABLE Itinerarios (
    it_id INTEGER NOT NULL,
    it_nome VARCHAR(70),
    it_descricao VARCHAR(250),
    it_avaliacao_usuarios NUMERIC(3,2),
    it_endereco VARCHAR(100),
    it_valor NUMERIC(10,2)
  );
    
CREATE TABLE oferecedor_servicos (
     of_id INTEGER NOT NULL,
     of_nome VARCHAR(60),
     of_cnpj VARCHAR(14),
     of_foto_perfil VARCHAR(70),
     of_data_nascimento DATE,
     of_bio varchar(250),
     of_email varchar(50),
     of_localizacao varchar(250),
     of_avaliacao NUMERIC(3,2),
     of_telefone VARCHAR(11),
     of_sexo VARCHAR(25)
     );

CREATE TABLE pontos (
  po_id INTEGER NOT NULL,
  po_nome VARCHAR(70),
  po_descricao VARCHAR(250),
  po_imagem VARCHAR(250),
  po_alt_imagem VARCHAR(250),
  po_avaliacao_usuarios NUMERIC(3,2),
  po_endereco VARCHAR(100),
  po_valor NUMERIC(10,2),
  fk_oferecedor_servicos_of_id INTEGER NOT NULL
  );
 
 CREATE TABLE reserva_potoci (
   reserva_potoci_id INTEGER NOT NULL,
   re_dia DATE,
   fk_cliente_ci_id INTEGER NOT NULL,
   fk_pontos_po_id INTEGER NOT NULL,
   re_info_add VARCHAR
);

CREATE TABLE reserva_ittoci (
  reserva_ittoci_id INTEGER NOT NULL,
  re_dia DATE,
  fk_cliente_ci_id integer NOT NULL,
  fk_intinerarios_it_id INTEGER NOT NULL,
  re_info_add VARCHAR(250)
 );
 
CREATE TABLE it_possui_pontos (
  it_possui_pontos_id INTEGER NOT NULL,
  fk_pontos_po_id INTEGER NOT NULL,
  fk_intinerarios_it_id INTEGER NOT NULL
);

CREATE TABLE of_possui_it (
  of_possui_it_id INTEGER NOT NULL,
  fk_oferecedor_servicos_of_id INTEGER NOT NULL,
  fk_intinerarios_it_id INTEGER NOT NULL
  );
  
alter table Cliente ADD CONSTRAINT pk_ci_id PRIMARY KEY (ci_id);
ALTER TABLE oferecedor_servicos ADD CONSTRAINT pk_of_id PRIMARY KEY (of_id);
ALTER TABLE Itinerarios ADD CONSTRAINT pk_it_id PRIMARY KEY (it_id);
ALTER TABLE reserva_potoci ADD CONSTRAINT pk_id_ci PRIMARY KEY (reserva_potoci_id);
ALTER TABLE reserva_ittoci ADD CONSTRAINT pk_reserva_ittoci_id PRIMARY KEY (reserva_ittoci_id);
ALTER TABLE pontos ADD CONSTRAINT pk_po_id PRIMARY KEY (po_id);
ALTER TABLE it_possui_pontos ADD CONSTRAINT pk_it_possui_pontos_id PRIMARY KEY (it_possui_pontos_id);
ALTER TABLE of_possui_it ADD CONSTRAINT pk_of_possui_it_id PRIMARY KEY (of_possui_it_id);

ALTER TABLE pontos 
ADD CONSTRAINT fk_oferecedor_servicos_of_id 
FOREIGN KEY (fk_oferecedor_servicos_of_id) 
REFERENCES oferecedor_servicos (of_id);

ALTER TABLE reserva_potoci 
ADD CONSTRAINT fk_cliente_ci_id
FOREIGN KEY (fk_cliente_ci_id) 
REFERENCES Cliente (ci_id);

ALTER TABLE reserva_potoci 
ADD CONSTRAINT fk_pontos_po_id
FOREIGN KEY (fk_pontos_po_id) 
REFERENCES pontos (po_id);

ALTER TABLE reserva_ittoci 
ADD CONSTRAINT fk_cliente_ci_id
FOREIGN KEY (fk_cliente_ci_id) 
REFERENCES Cliente (ci_id);

ALTER TABLE reserva_ittoci 
ADD CONSTRAINT fk_intinerarios_it_id
FOREIGN KEY (fk_intinerarios_it_id) 
REFERENCES Itinerarios (it_id);

ALTER TABLE it_possui_pontos 
ADD CONSTRAINT fk_pontos_po_id
FOREIGN KEY (fk_pontos_po_id) 
REFERENCES pontos (po_id);

ALTER TABLE it_possui_pontos 
ADD CONSTRAINT fk_intinerarios_it_id
FOREIGN KEY (fk_intinerarios_it_id) 
REFERENCES Itinerarios (it_id);

ALTER TABLE of_possui_it 
ADD CONSTRAINT fk_oferecedor_servicos_of_id
FOREIGN KEY (fk_oferecedor_servicos_of_id) 
REFERENCES oferecedor_servicos (of_id);

ALTER TABLE of_possui_it 
ADD CONSTRAINT fk_intinerarios_it_id
FOREIGN KEY (fk_intinerarios_it_id) 
REFERENCES Itinerarios (it_id);