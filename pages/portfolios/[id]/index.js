import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import { useGetUser } from 'actions/user';
import PortfoliosApi from "lib/api/portfolios";

const Portfolio = ({portfolio}) => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage header='Portfolio Detail'>
        {JSON.stringify(portfolio)}
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const json = await new PortfoliosApi().getAll();
  const portfolios = json.data.data

  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio.id}
    }
  })

  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const json = await new PortfoliosApi().getById(params.id)
  const portfolio = json.data.data.attributes;
  return { props: {portfolio} }
}

export default Portfolio;
