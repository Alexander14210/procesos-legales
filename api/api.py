import time
from flask import Flask, redirect, url_for, request
from flask import Flask
from flask import request
from flask_mail import Mail, Message
from recibir_demanda import RecibirDemanda as rd
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
mail= Mail(app)

app.config['MAIL_SERVER']= 'smtp.gmail.com'
app.config['MAIL_PORT'] = 463
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USUARIO_COBROS")
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/email', methods=["POST"])
def handle_email(archivo_json=True, condicion=True):
    data = request.get_json()
    rd(data, condicion)
    
    # msg = Message('Pase a legal.', sender = os.getenv("MAIL_USUARIO_COBROS"), recipients = [os.getenv("MAIL_ABOGADO_INTERNO_1"), os.getenv("MAIL_ABOGADO_INTERNO_2")])
    # msg.body = "Prueba"
    # mail.send(msg)
    return 'Enviar email'

#Hacer una funcion para obtener la informacion desde la base de datos 
#una vez cargada

@app.route('/supervisor')
def hello_supervisor():
    return {'name': "SUPERVISOR"}

