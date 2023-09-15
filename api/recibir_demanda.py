import psycopg2
from creacion_archivos import CrearCertificacionSaldosAcreedores as CrearCertificacionSA

class RecibirDemanda():
    def __init__(self, informacion_inicial, tipo_cliente):
        self.db_config = {
            "host": "localhost",
            "database": "reto_innova",
            "user": "reto_innova2",
            "password": "123",
            "port":"5432" 
        }
    
        self.data = informacion_inicial
        InsertarDatos.insertar_datos(self)
        CrearCertificacionSA(tipo_cliente)
    
    def cargar_datos(self):
        return self.data

class InsertarDatos(RecibirDemanda):
    def __init__(self):
        self.db_config = {
            "host": "localhost",
            "database": "reto_innova",
            "user": "reto_innova2",
            "password": "123",
            "port":"5432" 
        }
    
    def insertar_datos(self):
        try:
            #Conexion a la base de datos
            self.conexion = psycopg2.connect(**self.db_config)
            self.cursor = self.conexion.cursor()
            
            #Insercion de los datos
            datos = self.cargar_datos()
            for tabla, registros in datos.items():
                print(registros)
                for registro in registros:
                
                    columnas = ', '.join((registros.keys()).lower())
                    valores = ', '.join(['%s']*len(registro))
                    print(columnas)
                    print(valores)
                    input()
                    consulta_sql = f'INSERT INTO {tabla} ({columnas}) VALUES ({valores})'
                    self.cursor.execute(consulta_sql, list(registros.values()))
            self.conexion.commit()
            self.cursor.close()
            self.conexion.close()
            print('Se insertaron los datos correctamente')
        except Exception as e:
          print(e)