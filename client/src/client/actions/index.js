import axios from 'axios';

import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  HOP_SELECTED,
  FETCH_HOPS,
  FETCH_YEAST,
  FETCH_BREWERY
} from './types'

import {data} from '../../../data/hops.js';


// const  ROOT_URL = 'http://localhost:3090';

export function selectHops(hop) {
  return {
    type: HOP_SELECTED,
    payload: hop
  };
}

export function fetchHops() {
  return {
    type: FETCH_HOPS,
    payload: data
  };
}

export function fetchBrewery() {
  return {
    type: FETCH_BREWERY,
    payload: data
  };
}



export function fetchYeast() {
  const full = 'https://api.brewerydb.com/v2/yeasts?key=e61443089ea955edc0ad009ec7d5fc1a&format=json'

  // const ROOT_URL = 'http://api.brewerydb.com/v2/';
  // const API_KEY = 'e61443089ea955edc0ad009ec7d5fc1a';
  // const request = axios.get(`${ROOT_URL}?key=${API_KEY}`);
  const fullRequest = axios.get(full);
  // const expressRequest = axios.get('http://localhost:3000/yeast');
  
  return {
    type: FETCH_YEAST,
    payload: fullRequest
  };
}



// ----------------------- Authentication/ SignIn------------------------
export function signinUser({ email, password }) {
  return function(dispatch) {

    axios.post(`${ROOT_URL}/signin`, { email, password })
    // submit email/passowrd to the server
      .then( response => {
        // If request is good....
        // -Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })
        //-Save the JWT token
        localStorage.setItem('token', response.data.token);
        // -redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // -Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  
  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}

// export function fetchWeather(city) {
//   const API_KEY = '208678fd1ba9778a0868e3d862e5d808';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//   const url = `${ROOT_URL}&q=${city},us`;
//   const request = axios.get(url);

//   console.log('Request:', request);

//   return request
 
// }
// fetchWeather(96793);

// export function fetchHops() {
  // const API_KEY = 'e61443089ea955edc0ad009ec7d5fc1a';
  // const ROOT_URL = `http://api.brewerydb.com/v2/hops?key=${API_KEY}`;

  // http://api.brewerydb.com/v2/hops?key=e61443089ea955edc0ad009ec7d5fc1a

  // const url = ROOT_URL;
  // const url = 'http://api.brewerydb.com/v2/hops?key=e61443089ea955edc0ad009ec7d5fc1a'
  // const request = axios.get(url,{
  //     headers: { 'Access-Control-Allow-Origin': ' http://api.brewerydb.com/v2/hops?key=e61443089ea955edc0ad009ec7d5fc1a' }
  //   })
  //   .then(response => {
  //     console.log(response);
  //   })

  // console.log('Request:', request);

//   return {
//     type: FETCH_HOPS,
//     payload: request
//   }
// }

// fetchHops();

// return function(dispatch) {
//     axios.get(ROOT_URL, {
//       headers: { authorization: localStorage.getItem('token') }
//     })
//       .then(response => {
//         dispatch({
//           type: FETCH_MESSAGE,
//           payload: response.data.message
//         });
//       });
//   }


  // return function(dispatch) {
  //   axios.get(ROOT_URL, {
  //     headers: { authorization: localStorage.getItem('token') }
  //   })
  //     .then(response => {
  //       dispatch({
  //         type: FETCH_MESSAGE,
  //         payload: response.data.message
  //       });
  //     });
  // }

  // return function(dispatch) {
  //   axios.get(ROOT_URL, {
  //    headers:  Access-Control-Allow-Origin: *
  //   })
  // }