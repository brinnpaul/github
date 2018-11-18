import * as c from './constants';
import { CALL_API } from './middleware';

export const setOrganization = organizationName => {
  return {
    type: c.SET_ORGANIZATION_NAME,
    organizationName
  }
}

export const setRepo = repo => {
  return {
    type: c.SET_REPO_NAME,
    repoName
  }
}

export const fetchRepos = organization => ({
  [CALL_API]: {
    types: [
      c.FETCH_REPOS_REQUEST,
      c.FETCH_REPOS_SUCCESS,
      c.FETCH_REPOS_FAILURE
    ], 
    endpoint: `api/orgs/${organization}/repos`,
    method: 'GET',
    credentials: 'same-origin'
  }
});

export const fetchContributors = (organization, repo) => ({
  [CALL_API]: {
    types: [
      c.FETCH_CONTRIBUTORS_REQUEST,
      c.FETCH_CONTRIBUTORS_SUCCESS,
      c.FETCH_CONTRIBUTORS_FAILURE
    ],
    endpoint: `api/contributors/${organization}/${repo}`,
    method: 'GET', 
    credentials: 'same-origin'
  }
});