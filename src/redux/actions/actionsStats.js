/* eslint max-params: ["error", 6] */

import axios from 'axios';
import { PORT_EXPRESS_MONGODB_APP, URL_BASE_DEV } from './../../config';

const API_ROOT = `${URL_BASE_DEV}${PORT_EXPRESS_MONGODB_APP}/api`;

// An object with global stats
export function fetchStatsGlobal() {
  return dispatch => {
    dispatch({type: 'FETCH_STATS_GLOBAL'});
    axios.get(`${API_ROOT}/stats`)
      .then(response => {
        dispatch({type: 'FETCH_STATS_GLOBAL_FULFILLED', payload: response.data[0]});
      })
      .catch(err => {
        dispatch({type: 'FETCH_STATS_GLOBAL_REJECTED', payload: err});
      });
  };
}

// An object with repository stats
export function fetchStatsRepo(repo) {
  return dispatch => {
    dispatch({type: 'FETCH_STATS_REPO'});
    axios.get(`${API_ROOT}/stats/repository/${repo}`)
      .then(response => {
        dispatch({type: 'FETCH_STATS_REPO_FULFILLED', payload: response.data});
      })
      .catch(err => {
        dispatch({type: 'FETCH_STATS_REPO_REJECTED', payload: err});
      });
  };
}

// An object with contributors stats
export function fetchStatsContributors() {
  return dispatch => {
    dispatch({type: 'FETCH_STATS_CONTRIBUTORS'});
    axios.get(`${API_ROOT}/stats/authors`)
      .then(response => {
        dispatch({type: 'FETCH_STATS_CONTRIBUTORS_FULFILLED', payload: response.data});
      })
      .catch(err => {
        dispatch({type: 'FETCH_STATS_CONTRIBUTORS_REJECTED', payload: err});
      });
  };
}
