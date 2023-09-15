import json
import psycopg2


class RecibirDemanda():
    def __init__(self, informacion_inicial):
        self.data = json.load(open(informacion_inicial, 'r'))
        self.cargar_datos()
        InsertarDatos.insertar_datos()
    
    def cargar_datos(self):
        return self.data

class InsertarDatos(RecibirDemanda):
    def __init__(self):
        self.db_config = {
            "host": "localhost",
            "database": "reto_innova",
            "user": "postgres",
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
            for tabla, registros in datos.item():
                for registro in registros:
                    columnas = ', '.join(registro.key())
                    valores = ', '.join(['%s']*len(registro))
                    consulta_sql = f'INSERT INTO {tabla} ({columnas}) VALUES ({valores})'
                    self.cursor.execute(consulta_sql, list(registro.values()))
    
            self.conexion.commit()
            self.cursor.close()
            self.conexion.close()
            print('Se insertaron los datos correctamente')
    
        except Exception as e:
          print(e)
          print(hola)