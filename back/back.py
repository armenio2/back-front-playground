import json
from flask import Flask, request, make_response

app = Flask(__name__)


@app.route('/css', methods=['GET'])
def get_css():
    json_css = {
        "header": "green",
        "body": "orange",
        "footer": "black"
    }
    response = make_response(json.dumps(json_css))
    response.headers["Content-Type"] = "application/json"
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


def main():
    app.run()


if __name__ == '__main__':
    main()
