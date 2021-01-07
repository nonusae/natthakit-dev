import PortfoliosApi from 'lib/api/portfolios';
import auth0 from 'utils/auth0';

export default async function handlePortfolio(req, res) {
  if (req.method === 'GET') {
    const json = await new PortfoliosApi().getById(req.query.id);
    return res.json(json.data);
  }

  if (req.method === 'PATCH') {
    try {
      const { accessToken } = await auth0.getSession(req)
      const json = await new PortfoliosApi(accessToken).update(req.query.id, req.body)
      return res.json(json.data)
    } catch (error) {
      // Todo: Map error array
      // Todo: Map this into reusable function with create
      return res.status(error.response.status || 422).end(error.response.data.errors[0].detail)
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { accessToken } = await auth0.getSession(req)
      const json = await new PortfoliosApi(accessToken).delete(req.query.id)
      return res.json(json.data)
    } catch (error) {
      return res.status(error.response.status || 422).end(error.response.data.errors[0].detail)
    }
  }
}
