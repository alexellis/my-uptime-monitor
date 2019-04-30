import requests

def handle(req):
    r = requests.get(req)
    return str(r.status_code)
