import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import withAuth from 'hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio, useUpdatePortfolio } from 'actions/portfolios';
import PortfolioForm from 'components/PortfolioForm';
import { Row, Col } from "reactstrap";
import { toast } from 'react-toastify';

const PortfolioEdit = ({user}) => {
  const [ updatePortfolio, {error}] = useUpdatePortfolio()
  const router = useRouter();
  const { data: portfolio } = useGetPortfolio(router.query.id)

  const _updatePortfolio = async (data) => {
    try {
      await updatePortfolio(router.query.id, data)
      toast.success('Portfolio has been updated', {autoClose: 3000})
    } catch(_) {
      toast.error('Failed to update portfolio', {autoClose: 3000})
    }
  }

  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header='Portfolio Edit'>
        <Row>
          <Col className="md-8">
            {
              portfolio &&
              <PortfolioForm
                onSubmit={_updatePortfolio}
                initialData={portfolio.data.attributes}
              />
            }
            { error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioEdit)('admin');
