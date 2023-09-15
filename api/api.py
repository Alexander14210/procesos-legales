import time
from flask import Flask, redirect, url_for, request

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/email', methods=["POST"])
def handle_email():
    data = request.get_json()
    print(data)
    return 'Enviar email a ' + data['abogado']


@app.route('/supervisor')
def hello_supervisor():
    return {'name': "SUPERVISOR"}