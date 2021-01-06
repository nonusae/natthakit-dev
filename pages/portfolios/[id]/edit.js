import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import withAuth from 'hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio, useUpdatePortfolio } from 'actions/portfolios';
import PortfolioForm from 'components/PortfolioForm';
import { Row, Col } from "reactstrap";

const PortfolioEdit = ({user}) => {
  const [ updatePortfolio, { data, error, loading }] = useUpdatePortfolio()
  const router = useRouter();
  const { data: portfolio } = useGetPortfolio(router.query.id)

  const _updatePortfolio = (data) => (
    updatePortfolio(router.query.id, data)
  )

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
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioEdit)('admin');
