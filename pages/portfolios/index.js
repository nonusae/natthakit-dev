import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import Link from 'next/link';
import { useGetUser } from 'actions/user';
import PortfoliosApi from 'lib/api/portfolios';

const Portfolios = ({portfolios}) => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  const renderPortfolios = (portfolios) => {

    return portfolios.map(portfolio => {
        const {id, title} = portfolio.attributes
        return <li key={id} style={{'fontSize': '20px'}}>
          <Link as={`/portfolios/${id}`} href="/portfolios/[id]">
            <a>
              {title}
            </a>
          </Link>
        </li>
      }
    )
  }

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        <ul>
          {renderPortfolios(portfolios)}
        </ul>
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
