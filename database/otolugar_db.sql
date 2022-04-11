CREATE TABLE perfil (
	pf_id INTEGER UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
	pf_nome VARCHAR(50) UNIQUE,
  	PRIMARY KEY (pf_id)
);

CREATE TABLE usuario (
    us_id INTEGER NOT NULL,
    us_nome VARCHAR(60) NOT NULL,
    us_telefone VARCHAR(11),
    us_data_nascimento DATE,
    us_foto_perfil VARCHAR(70),
    us_bio VARCHAR(250),
    us_email VARCHAR(50) UNIQUE NOT NULL,
    us_avaliacao NUMERIC(3,2),
    us_sexo VARCHAR(25),
    us_senha VARCHAR(25) NOT NULL,
  	pf_id INTEGER NOT NULL,
	PRIMARY KEY (us_id),
    CONSTRAINT fk_perfil_pf_id
      FOREIGN KEY(pf_id) 
	  	REFERENCES perfil(pf_id)
);
  
CREATE TABLE itinerarios (
	it_id INTEGER UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
    it_nome VARCHAR(70),
    it_descricao VARCHAR(250),
    it_avaliacao_usuarios NUMERIC(3,2),
    it_endereco VARCHAR(100),
    it_valor NUMERIC(10,2),
  	PRIMARY KEY (it_id)
  );

CREATE TABLE pontos (
  po_id INTEGER UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
  po_nome VARCHAR(70),
  po_descricao VARCHAR(250),
  po_imagem VARCHAR(250),
  po_alt_imagem VARCHAR(250),
  po_avaliacao_usuarios NUMERIC(3,2),
  po_endereco VARCHAR(100),
  po_valor NUMERIC(10,2),
  us_id INTEGER NOT NULL,
  PRIMARY KEY (po_id),
  CONSTRAINT fk_usuario_us_id
      FOREIGN KEY(us_id) 
	  	REFERENCES usuario(us_id)
);
 
CREATE TABLE reserva_potoci (
   reserva_potoci_id INTEGER UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
   re_dia DATE,
   re_info_add VARCHAR,
	us_id INTEGER NOT NULL,
    po_id INTEGER NOT NULL,
   PRIMARY KEY (reserva_potoci_id),
   CONSTRAINT fk_usuario_us_id
      FOREIGN KEY(us_id) 
	  	REFERENCES usuario(us_id),
   CONSTRAINT fk_pontos_po_id
      FOREIGN KEY(po_id) 
	  	REFERENCES pontos(po_id)
);

CREATE TABLE reserva_ittoci (
  reserva_ittoci_id INTEGER UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
  re_dia DATE,
  re_info_add VARCHAR(250),
  us_id INTEGER NOT NULL,
  it_id INTEGER NOT NULL,
  PRIMARY KEY (reserva_ittoci_id),
  CONSTRAINT fk_usuario_us_id
      FOREIGN KEY(us_id) 
	  	REFERENCES usuario(us_id),
  CONSTRAINT fk_intinerarios_it_id
      FOREIGN KEY(it_id) 
	  	REFERENCES itinerarios(it_id)
);
 
CREATE TABLE it_possui_pontos (
  it_possui_pontos_id INTEGER UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
  po_id INTEGER NOT NULL,
  it_id INTEGER NOT NULL,
  PRIMARY KEY (it_possui_pontos_id),
  CONSTRAINT fk_pontos_po_id
      FOREIGN KEY(po_id) 
	  	REFERENCES pontos(po_id),
  CONSTRAINT fk_intinerarios_it_id
      FOREIGN KEY(it_id) 
	  	REFERENCES itinerarios(it_id)
);

CREATE TABLE of_possui_it (
  of_possui_it_id INTEGER UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
  us_id INTEGER NOT NULL,
  it_id INTEGER NOT NULL,
  PRIMARY KEY (of_possui_it_id),
  CONSTRAINT fk_usuario_us_id
      FOREIGN KEY(us_id) 
	  	REFERENCES usuario(us_id),
  CONSTRAINT fk_intinerarios_it_id
      FOREIGN KEY(it_id) 
	  	REFERENCES itinerarios(it_id)
);