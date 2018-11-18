from service import app
from config import Config
import requests
import json
from pprint import pprint
from .util import Util

base_url = Config.BASE_URL 


@app.route('/api/orgs/<organization>/repos', methods=['GET'])
def org_repos(organization):
    url = f'{base_url}/orgs/{organization}/repos'
    r = requests.get(url=url)
    if r.status_code > 300:
        return json.dumps([])
    repos = []
    for repo in r.json():
        repos.append(Util.grab_keys('id', 'name', 'forks', 'stargazers_count', d=repo))
    repos = sorted(repos, key=lambda x: x['forks'], reverse=True)
    return json.dumps(repos)

