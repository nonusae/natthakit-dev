import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import { useGetUser } from 'actions/user';
import { formatDate } from 'helpers/functions';
import PortfoliosApi from "lib/api/portfolios";

const Portfolio = ({portfolio}) => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout
      navClass='transparent'
      user={dataUser}
      loading={loadingUser}>
      <BasePage
        noWrapper
        indexPage
        title={`${portfolio.title} - Filip Jerga`}
        metaDescription={portfolio.description}>
        <div className="portfolio-detail">
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              <h1 class="cover-heading">{portfolio.title}</h1>
              <p class="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
              <p class="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
              <p class="lead">{portfolio.description}</p>
              <p class="lead">
                <a href={portfolio.companyWebsite} target="_" class="btn btn-lg btn-secondary">Visit Company</a>
              </p>
            </main>
          </div>
        </div>
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
