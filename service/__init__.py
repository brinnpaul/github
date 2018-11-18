from flask import Flask, render_template

app = Flask(__name__, static_folder="../webpack/dist")

# Config and save configs as global variables
app.config.from_object('config.Config')

from service import api

@app.route("/")
def index():
    return render_template("index.html")