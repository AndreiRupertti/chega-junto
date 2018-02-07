import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: (process.env.NODE_ENV === 'production') ? `https://api-chegajunto-staging.herokuapp.com/` : `http://localhost:3000/`
    // baseURL: (process.env.NODE_ENV === 'production') ? process.env.API_URL : `http://localhost:3000/`
  })
}
