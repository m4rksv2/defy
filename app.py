from flask import Flask, render_template, send_from_directory, url_for

app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route("/")
def home():
    return render_template("index.html")

# Optionally serve favicon or other static routes (Flask already serves /static/*)
if __name__ == "__main__":
    # debug=True for development only
    app.run(host="127.0.0.1", port=5000, debug=True)
