import docx
from docx.shared import Pt, Cm
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT
import psycopg2

class ConsultaBD():
    def __init__(self):
        self.db_config = {
            "host": "localhost",
            "database": "reto_innova",
            "user": "postgres",
            "password": "123"
        }
    
    def extraer_datos_cliente_natural(self, condicion):
        consulta = f"""
        SELECT cn.id_cliente_natural, cn.nombre, 
        cn.apellido, cn.identificacion, cn.direccion, 
        oi.fecha, oi.saldo_total, p.producto, oi.principal_bank_capital
        oi.intereses, oi.gastos, oi.feci, oi.comision_fiduciaria, oi.saldo_total
        FROM operacionInicial as oi
        INNER JOIN clientesNaturales as cn ON oi.id_cliente_natural = cn.id_cliente_natural
        INNER JOIN producto as p ON oi.id_producto = p.id_producto
        WHERE {condicion}
 """
        conexion = psycopg2.connect(**self.db_config)
        cursor = conexion.cursor()
        cursor.execute(consulta)
        resultado = cursor.fetchall()
        return resultado
              
class CrearCertificacionSaldosAcreedores(ConsultaBD):
    def __init__(self):
        self.doc = docx

    def crear_certificacion(self):
        