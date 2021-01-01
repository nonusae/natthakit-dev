import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useGetUser } from 'actions/user';
import PortfoliosApi from 'lib/api/portfolios';
import PortfolioCard from 'components/portfolioCard';

const Portfolios = ({portfolios}) => {
  const router = useRouter();
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage
        header='Portfolio'
        className='portfolio-page'
      >
        <Row>
          { portfolios.map(portfolio => {
              return(
              <Col
                key={portfolio.attributes.id}
                md="4"
                onClick={() => {
                  router.push('/portfolios/[id]', `/portfolios/${portfolio.attributes.id}`)
                }}
                >
                <PortfolioCard {...portfolio.attributes} />
              </Col>)
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
