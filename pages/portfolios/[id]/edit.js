import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import withAuth from 'hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from 'actions/portfolios'
import PortfolioForm from 'components/PortfolioForm';
import { Row, Col } from "reactstrap";

const PortfolioEdit = ({user}) => {
  const router = useRouter();
  const { data } = useGetPortfolio(router.query.id)

  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header='Portfolio Edit'>
        <Row>
          <Col className="md-8">
            {
              data &&
              <PortfolioForm
                initialData={data.data.attributes}
              />
            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioEdit)('admin');
