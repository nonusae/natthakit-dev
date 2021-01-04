import PortfoliosApi from "lib/api/portfolios";
import auth0 from 'utils/auth0';

export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const json = await new PortfoliosApi(accessToken).createPortfolio(req.body);
    return res.json(json.data)
  } catch (error) {
    return res.status(error.status || 400).end(error.message)
  }
}
