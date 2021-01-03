import PortfoliosApi from "lib/api/portfolios";

export default async function createPortfolio(req, res) {
  try {
    const data = req.body;
    await new PortfoliosApi().createPortfolio(data);
    return res.json({'message': 'Success'})
  } catch (error) {
    return res.status(error.status || 400).end(error.message)
  }
}
