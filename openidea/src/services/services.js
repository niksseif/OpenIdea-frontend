// const localhost = process.env.REACT_APP_API_BASE_URL;
import jwt_decode from 'jwt-decode';

export const getHeaders = () => {
  try {
    const token = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).access_token : '';
    return {
      'Content-Type': 'application/json',
      Acccepts: 'application/json',
      Authorization: `Bearer ${token}`,
    };
  } catch (err) {
    return (err, 'This is error from get Headers function');
  }
};

// setting up the post request to the back end with assigned currentToken
// had to move the fetch to the servide file to be able to access the token from here
export const signup = async (data) => {
  const response = await fetch('https://openidea-python.herokuapp.com/register', {
    method: 'POST',
    headers:
    {
      'Content-Type': 'application/json; charset=utf-8',
      Accepts: 'application/json',

    },
    body: JSON.stringify(data),
  });
  const res = await response.json();

  // localStorage.setItem('access_token', JSON.stringify(res.access_token));
  // localStorage.setItem('currentUser.id',JSON.stringify(res.user.id))
  return res;
};
// handle login
export const handleLogin = async (data) => {
  // const token = JSON.parse(localStorage.getItem('access_token')) ? JSON.parse(localStorage.getItem('access_token')) : '';
  try {
    const response = await fetch('https://openidea-python.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Acccepts: 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      const parsedResponse = await response.json();
      console.log(parsedResponse, '<<<parsed response');
      localStorage.setItem('access_token', parsedResponse.access_token);
      localStorage.setItem('refresh_token', parsedResponse.refresh_token);
      localStorage.setItem('currentUserId', currentUserId());
      return parsedResponse;
    }
  } catch (err) {
    return (err);
  }
};
export const isLoggedIn = () => {
  if (localStorage.getItem('access_token')) {
    return true;
  }
  return false;
};
// handling current user decode
export const currentUserId = () => {
  if (isLoggedIn()) {
    const jwtToken = localStorage.getItem('access_token');
    const decoded = jwt_decode(jwtToken);
    return decoded.identity;
  }
};

export const createIdea = async (data) => {
  const response = await fetch('https://openidea-python.herokuapp.com/ideas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accepts: 'application/json',

    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  console.log(res, '<<<Res from idea creation');

  // localStorage.setItem('access_token', JSON.stringify(res.access_token));
  // localStorage.setItem('currentUser.id',JSON.stringify(res.user.id))
  return res;
};

export const logout = () => {
  window.localStorage.removeItem('access_token', 'currentUser.id');
};
