CREATE TABLE clientesNaturales(
	id_cliente_natural INTEGER NOT NULL PRIMARY KEY,
	nombre VARCHAR(15) NOT NULL,
	apellido VARCHAR(15) NOT NULL,
	identificacion VARCHAR(25) NOT NULL,
	direccion TEXT
);

CREATE TABLE producto(
	id_producto INTEGER NOT NULL PRIMARY KEY,
	producto VARCHAR(50)
);


CREATE TABLE clientesJuridicos(
	id_cliente_juridico INTEGER NOT NULL PRIMARY KEY,
	nombre_empresa VARCHAR(50),
	ruc VARCHAR(15),
	direccion_empresa TEXT,
	actividad_comercial TEXT
);

CREATE TABLE abogadosExternos(
	id_abogado_externo INTEGER NOT NULL PRIMARY KEY,
	nombre_firma VARCHAR(50),
	numero_registro VARCHAR(255),
	direccion_firma TEXT,
	telefono VARCHAR(15),
	correo VARCHAR(255),
	nombre_representante_legal VARCHAR(15),
	apellido_representante_legal VARCHAR(15),
	cedula_representante_legal VARCHAR(15)
);

--Esta tabla no es necesaria, se puede crear completa dentro del programa con queries.
CREATE TABLE operacionInicial(
	id_operacion_inicial SERIAL NOT NULL PRIMARY KEY,
	fecha DATE,
	id_cliente_natural INTEGER NOT NULL,
		CONSTRAINT FK_id_cliente FOREIGN KEY (id_cliente_natural) REFERENCES clientesNaturales(id_cliente_natural),
	id_cliente_juridico INTEGER NOT NULL,
		CONSTRAINT FK_id_cliente FOREIGN KEY (id_cliente_juridico) REFERENCES clientesJuridicos(id_cliente_juridico),
	dias_mora INTEGER,
	id_producto INTEGER NOT NULL,
		CONSTRAINT FK_id_producto FOREIGN KEY (id_producto) REFERENCES producto(id_producto),
	principal_bank_capital NUMERIC,
	intereses NUMERIC,
	numero_prestamo NUMERIC,
	gastos NUMERIC,
	feci NUMERIC,
	comision_fiduciaria NUMERIC,
	saldo_total NUMERIC,
	fecha_ultimo_pago DATE,
	monto_ultimo_pago_aplicado NUMERIC,
	rango_mora_consolidado VARCHAR(15)
);

--Tabla de operacion final, Resultado del excel MASTER, todavia en proceso
CREATE TABLE operacionFinal(
	id_operacion_final SERIAL NOT NULL PRIMARY KEY 
	id_cliente UUID NOT NULL,
		CONSTRAINT FK_id_cliente FOREIGN KEY (id_cliente) REFERENCES clientesNaturales(id_cliente_natural),
)
