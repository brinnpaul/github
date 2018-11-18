from flask import Flask, render_template
from flask_caching import Cache

app = Flask(__name__, static_folder="../webpack/dist")
cache = Cache(config={'CACHE_TYPE': 'simple'})
cache.init_app(app)

# Config and save configs as global variables
app.config.from_object('config.Config')

from service import api

@app.route("/")
def index():
    return render_template("index.html")