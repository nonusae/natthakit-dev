import PortfoliosApi from "lib/api/portfolios";
import auth0 from 'utils/auth0';

export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const json = await new PortfoliosApi(accessToken).create(req.body);
    return res.json(json.data)
  } catch (error) {
    // Todo: Map error array
    return res.status(error.response.status || 422).end(error.response.data.errors[0].detail)
  }
}
