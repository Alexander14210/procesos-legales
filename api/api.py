import time
from flask import Flask, redirect, url_for, request
from flask import Flask
from flask import request
import recibir_demanda

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/email', methods=["POST"])
def handle_email(archivo_json):
    procesar_informacion = recibir_demanda.RecibirDemanda(archivo_json)
    return 'Enviar email a ' + data['abogado']

#Hacer una funcion para obtener la informacion desde la base de datos 
#una vez cargada

@app.route('/supervisor')
def hello_supervisor():
    return {'name': "SUPERVISOR"}

