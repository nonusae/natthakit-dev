import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import { useRouter } from "next/router";
import { useGetUser } from 'actions/user';
import PortfoliosApi from "lib/api/portfolios";

const Portfolio = ({portfolio}) => {
  const router = useRouter();
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage header='Portfolio Detail'>
        {JSON.stringify(portfolio)}
      </BasePage>
    </BaseLayout>
  )
}

export async function getServerSideProps({query}) {
  const json = await new PortfoliosApi().getById(query.id)
  const portfolio = json.data.data
  return { props: {portfolio} }
}

export default Portfolio;
