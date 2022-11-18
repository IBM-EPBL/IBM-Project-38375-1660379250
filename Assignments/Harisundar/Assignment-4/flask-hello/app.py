from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "<h1>Flask app with docker</h1>"

if __name__ == "__main __":
    app.run(debug=True, host='0.0.0.0')
