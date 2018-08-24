// const localhost = process.env.LOCAL_HOST;


export const getHeaders = () => {
  const token = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : '';
  return {
    'Content-Type': 'application/json',
    Acccepts: 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// setting up the post request to the back end with assigned currentToken
// had to move the fetch to the servide file to be able to access the token from here
export const signup = async (data) => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers:
    {
      'Content-Type': 'application/json; charset=utf-8',
      Acccepts: 'application/json',

    },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    localStorage.setItem('token', JSON.stringify(res.token));
    // localStorage.setItem('currentUser.id',JSON.stringify(res.user.id))
    return res;
  } catch (err) {
    return (err);
  }
};
// handle login
export const handleLogin = async (data) => {
  const token = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : '';
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Acccepts: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      const parsedResponse = await response.json();
      localStorage.setItem('currentToken', parsedResponse.token);
      localStorage.setItem('currentUser.id', parsedResponse.user.id);
      return parsedResponse;
    }
  } catch (err) {
    return (err);
  }
};


export const isLoggedIn = () => {
  if (localStorage.getItem('currentToken')) {
    return true;
  }
  return false;
};

export const logout = () => {
  window.localStorage.removeItem('currentToken', 'currentUser.id');
};
