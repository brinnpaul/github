from service import app
from config import Config
import requests
import json

@app.route('/api/orgs/<organization>', methods=['GET'])
def org(organization):
    base_url = Config.BASE_URL
    r = requests.get(url=f'{base_url}/orgs/{organization}')
    if r.status_code > 300:
        return json.dumps([])
    return json.dumps(r.json())