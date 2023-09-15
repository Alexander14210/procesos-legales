import time
from flask import Flask, redirect, url_for, request
from flask import Flask
from flask import request
from recibir_demanda import RecibirDemanda as rd

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/email', methods=["POST"])
def handle_email(archivo_json=True, condicion=True):
    data = request.get_json()
    rd(data, condicion)
    return 'Enviar email'

#Hacer una funcion para obtener la informacion desde la base de datos 
#una vez cargada

@app.route('/supervisor')
def hello_supervisor():
    return {'name': "SUPERVISOR"}

