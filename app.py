import json
from flask import Flask, jsonify, send_from_directory, request, render_template
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS  # comment this on deployment
# from api.fitAPI import fitAPI

app = Flask(__name__)
app = Flask(__name__, static_url_path='',static_folder='our-react-app/public')
CORS(app)  # comment this on deployment

@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

# @app.route('/upload', methods=['POST'])
# def upload():
#     f = ''
#     if request.method == 'POST':
#         f = request.get_json()
#         print(f)
#         print(f['data'])
#         return jsonify(f=f['data'])
@app.route('/upload', methods=['POST','GET'])
def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.get_json()
        print("Working Post")
        print(json)
        return jsonify(json)
    else:
        return jsonify({"error": "Invalid content type"})

    # return jsonify({'message': f})
#    if request.method == "POST":
#        data = request.form['data']
#        print(data)
#        return jsonify(data)

# @app.route("/", methods=['GET', 'POST'])
# def YourEntryPoint():
#     if request.method == 'POST':
#         res = { 'status': 'Success' }
#     return res

cors = CORS(app, resources={'/*': {'origins': 'http://localhost:3000'}})

if __name__ == "__main__":
     app.run()

# imageURL = ""
# app = Flask(__name__, static_url_path='',
#             static_folder='our-react-app/public')
# CORS(app)  # comment this on deployment
# api = Api(app)


# @app.route("/", defaults={'path': ''}, methods=['GET', 'POST'])
# def serve(path):
#     if request.method == 'POST':
#         imageURL = request.form.get('longitude')
#         print("this is longitude {}".format(imageURL))
#     return send_from_directory(app.static_folder, 'index.html')


# api.add_resource(fitAPI, '/flask/fit')
