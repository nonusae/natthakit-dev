import {useState} from 'react'
import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import { Row, Col, Button } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useGetUser } from 'actions/user';
import PortfoliosApi from 'lib/api/portfolios';
import PortfolioCard from 'components/portfolioCard';
import { isAuthorized } from "utils/auth0";
import { useDeletePortfolio } from 'actions/portfolios'
import { toast } from 'react-toastify';

const Portfolios = ({portfolios: initialPortfolios}) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolios)
  const { data: dataUser, loading: loadingUser } = useGetUser();
  const [deletePortfolio, {data, error}] = useDeletePortfolio();

  const _deletePortfolio = async (e, id) => {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this portfolio?');

    if (isConfirm) {
      try {
        await deletePortfolio(id)
        toast.success('Portfolio has been deleted', {autoClose: 1000})

        const newPortfolios = portfolios.filter((portfolio) => portfolio.id != id )
        setPortfolios(newPortfolios)
      } catch(_) {
        toast.error('Failed to delete portfolio', {autoClose: 2000})
      }
    }
  }

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
                <PortfolioCard {...portfolio.attributes}>
                  { dataUser && isAuthorized(dataUser, 'admin') &&
                    <>
                      <Button className='mr-2' color='warning' onClick={
                        (e) => {
                          e.stopPropagation();
                          router.push('/portfolios/[id]/edit', `/portfolios/${portfolio.attributes.id}/edit`)
                        }
                      }>Edit</Button>
                      <Button color='danger'
                        onClick={ (e) => _deletePortfolio(e, portfolio.attributes.id)}
                      >Delete</Button>
                    </>
                  }
                </PortfolioCard>
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
    props: { portfolios },
    revalidate: 1
  }
}

export default Portfolios;
