
import axios from 'axios'

class PortfoliosApi {
  constructor(accessToken) {
    this.config = {}

    if (accessToken) {
      this.config.headers={
        authorization: `Bearer ${accessToken}`
      }
    }

    this.apiURl = process.env.PORTFOLIO_API_URL + '/portfolios';
  }

  getAll() {
    return axios.get(this.apiURl)
  }

  getById(id) {
    return axios.get(`${this.apiURl}/${id}`)
  }

  create(data) {
    return axios.post(this.apiURl, data, this.config);
  }

  update(id, data) {
    return axios.patch(this.apiURl + `/${id}`, data, this.config)
  }

  delete(id){
    return axios.delete(this.apiURl + `/${id}`, this.config)
  }
}

export default PortfoliosApi;
