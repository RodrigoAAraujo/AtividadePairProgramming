CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  model TEXT NOT NULL,
  "licensePlate" TEXT NOT NULL UNIQUE,
  year INTEGER NOT NULL,
  color TEXT NOT NULL,
  "createAt" TIMESTAMP DEFAULT NOW()
);

INSERT INTO cars (model, "licensePlate", year, color) VALUES ('HB20', 'ABC9090', 2001, 'AZUL');
INSERT INTO cars (model, "licensePlate", year, color) VALUES ('SONATA', 'EZD3035', 2010, 'PRETO');
INSERT INTO cars (model, "licensePlate", year, color) VALUES ('X1', 'FBI2231', 2018, 'BRANCO');
INSERT INTO cars (model, "licensePlate", year, color) VALUES ('CIVIC', 'LPA1019', 2021, 'CINZA');
INSERT INTO cars (model, "licensePlate", year, color) VALUES ('ONIX', 'HFA2713', 2023, 'AMARELO');
INSERT INTO cars (model, "licensePlate", year, color) VALUES ('EVOLUTION', 'EPR6655', 2005, 'CINZA');
INSERT INTO cars (model, "licensePlate", year, color) VALUES ('UNO', 'DMP7935', 2000, 'PRETO');
INSERT INTO cars (model, "licensePlate", year, color) VALUES ('320i', 'LAS5546', 2017, 'BRANCO');