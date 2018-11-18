export const ORGANIZATION_INTIAL_STATE = {
  organizationName: 'netflix',
  repoName: 'Hystrix'
}

export const SET_ORGANIZATION_NAME = 'SET_ORGANIZATION_NAME';
export const SET_REPO_NAME = 'SET_REPO_NAME';


export const REPOS_INITIAL_STATE = {
  repos: [],
  isFetching: false,
  error: null
}

export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';


export const CONTRIBUTORS_INITIAL_STATE = {
  contributors: [],
  isFetching: false,
  error: null
}

export const FETCH_CONTRIBUTORS_REQUEST = 'FETCH_CONTRIBUTORS_REQUEST';
export const FETCH_CONTRIBUTORS_SUCCESS = 'FETCH_CONTRIBUTORS_SUCCESS';
export const FETCH_CONTRIBUTORS_FAILURE = 'FETCH_CONTRIBUTORS_FAILURE';