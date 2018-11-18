import { combineReducers } from 'redux';
import * as c from './constants';

function organization(state = c.ORGANIZATION_INTIAL_STATE, action) {
  switch (action.type) {
    case c.SET_REPO_NAME:
      return {
        ...state,
        repoName: action.repoName
      };
    case c.SET_ORGANIZATION_NAME:
      return {
        ...state,
        organizationName: action.organizationName
      };
    default:
      return state;
  }
}

function repos(state = c.REPOS_INITIAL_STATE, action) {
  switch (action.type) {
    case c.FETCH_REPOS_REQUEST:
      return {
        ...state,
        isFetching: true, 
        error: null
      };
    case c.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        isFetching: false, 
        error: null,
        repos: action.data
      };
    case c.FETCH_REPOS_FAILURE:
      return {
        ...state,
        isFetching: false, 
        error: action.error
      };
    default:
      return state;
  }
}

function contributors(state = c.CONTRIBUTORS_INITIAL_STATE, action) {
  switch(action.type) {
    case c.FETCH_CONTRIBUTORS_REQUEST:
      return {
        ...state,
        isFetching: true, 
        error: null,
      };
    case c.FETCH_CONTRIBUTORS_SUCCESS:
      return {
        ...state,
        isFetching: false, 
        error: null,
        contributors: action.data
      };
    case c.FETCH_CONTRIBUTORS_FAILURE:
      return {
        ...state,
        isFetching: false, 
        error: action.error
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  organization,
  repos,
  contributors
});

export default reducers;