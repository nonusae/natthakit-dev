
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

  getById(id) {
    return axios.get(`${this.apiURl}/${id}`)
  }

  getAll() {
    return axios.get(this.apiURl)
  }

  getById(id) {
    return axios.get(`${this.apiURl}/${id}`)
  }

  createPortfolio(data) {
    return axios.post(this.apiURl, data, this.config);
  }
}

export default PortfoliosApi;
