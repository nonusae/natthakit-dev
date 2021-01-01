
import axios from 'axios'

class PortfoliosApi {
  getAll() {
    return axios.get('http://localhost:3001/api/v1/portfolios')
  }
}

export default PortfoliosApi;
