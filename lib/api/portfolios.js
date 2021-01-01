
import axios from 'axios'

class PortfoliosApi {
  constructor() {
    this.apiURl = process.env.PORTFOLIO_API_URL + '/portfolios';
  }

  getAll() {
    return axios.get(this.apiURl)
  }

  getById(id) {
    return axios.get(`${this.apiURl}/${id}`)
  }
}

export default PortfoliosApi;
