from service import app
from config import Config
import requests
import json
from pprint import pprint
from .util import Util

base_url = Config.BASE_URL

@app.route('/api/contributors/<org>/<repo>', methods=['GET'])
def contribs(org, repo):
    
    # Get Repo Contributors
    r = requests.get(url=f'{base_url}/repos/{org}/{repo}/contributors')
    if r.status_code > 300:
        return json.dumps([])
    for contrib in r.json():
        try:
            contribs.append(Util.grab_keys('id', 'login', 'contributions', d=contrib))
        except Exception as e:
            print("failed to load contributor")
    contribs = sorted(contribs, key=lambda x: x['contributions'], reverse=True)
    
    for contrib in contribs:
        contrib_internal = False
        resp = requests.get(url=f'{base_url}/users/{contrib.get("login")}/orgs')
        if resp.status_code > 300:
            continue
        for organization in resp.json():
            print(organization)
            try:
                if organization.get('login', '').lower() == org:
                    contrib_internal = True
            except:
                continue
        
        if contrib_internal:
            contrib['type'] = 'internal'
        else:
            contrib['type'] = 'external'

    return json.dumps(contribs)

    
@app.route('/api/contrib/<contrib>/orgs', methods=['GET'])
def contrib_orgs(contrib):
    r = requests.get(url=f'{base_url}/users/{contrib}/orgs')
    return json.dumps(r.json())
    