import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useGetUser } from 'actions/user';
import PortfoliosApi from 'lib/api/portfolios';
import PortfolioCard from 'components/portfolioCard';

const Portfolios = ({portfolios}) => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage className='portfolio-page'>
          <Row>
            { portfolios.map(portfolio => {
                return <Col key={portfolio.attributes.id} md="4">
                  <PortfolioCard {...portfolio.attributes} />
                </Col>
              })
            }
          </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const json = await new PortfoliosApi().getAll();
  const portfolios = json.data.data;
  return {
    props: { portfolios }
  }
}

export default Portfolios;
