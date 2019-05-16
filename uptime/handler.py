import requests

def handle(req):
    r = requests.get(req)
    if r.status_code == 200 or r.status_code == 301 or r.status_code == 303:
        return "up (" +str(r.status_code)+ ")"
    return "down (" +str(r.status_code)+ ")"
