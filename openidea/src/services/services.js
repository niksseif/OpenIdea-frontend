
//const API_ROOT = 'http://localhost:3000'

export const getHeaders = () => {
  const token = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).token : '';
  return  {
    'Content-Type': 'application/json',
    Acccepts: 'application/json',
    Authorization: `Bearer ${token}`
  }
}
