let localhost = process.env.LOCAL_HOST
// console.log(localhost);

export const getHeaders = () => {
  const token = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : '';
  return  {
    'Content-Type': 'application/json',
    Acccepts: 'application/json',
    Authorization: `Bearer ${token}`
  }
}

//setting up the post request to the back end with assigned currentToken
//had to move the fetch to the servide file to be able to access the token from here
export const signup = async (data) => {
  try {
  console.log('log before signup post', data);
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers:
    {
            "Content-Type": "application/json; charset=utf-8",
            'Acccepts': 'application/json',

        },
    body: JSON.stringify( data )
    })
    let res = await response.json()
      console.log("res in the try", res);
      // console.log('token', token);
      //window.sessionStorage.setItem('token', token)
      localStorage.setItem('token', JSON.stringify(res.token))
      return res
      }
      catch(err) {
      console.log("error from services", err)
      }


}
  //handle login

  export const handleLogin = async (data) => {
    // console.log(localStorage.getItem('token'),"<<<this is local storage");
    const token = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : '';
    try{
    console.log('hitting the handlelogin now from services before data post',data);
      let response = await fetch('http://localhost:3000/login', {
        method: "POST",
        headers:{
                "Content-Type": "application/json; charset=utf-8",
                'Acccepts': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        body: JSON.stringify(data),
      })
      console.log(response,'<<this is the response back from server');
        if (response.status === 200) {
          let parsedResponse = await response.json()
          console.log(parsedResponse,"<<<<parsed response");
          console.log(parsedResponse.token,"<<<<current token");
          console.log(parsedResponse.user.id,"<<<<user id");
          localStorage.setItem("currentToken", parsedResponse.token)
          localStorage.setItem('currentUser.id',parsedResponse.user.id)
          return parsedResponse
        }
    } catch(err){
      console.log('error from services');
      }
    }


    export const isLoggedIn = () => {
      console.log(localStorage.getItem("currentToken"),"<<<<local storage");
      if (localStorage.getItem("currentToken")) {
        return true;
      } else {
        return false;
      }

    }
