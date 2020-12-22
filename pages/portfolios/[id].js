import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import axios from 'axios'
import { useGetPostById } from 'actions';
import { useRouter } from "next/router";

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostById(router.query.id)

    return (<BaseLayout>
    <BasePage>
      { loading && <span>Loading</span> }
      { error && <div className="alert alert-danger">{error.message}</div> }
      { portfolio &&
        <>
          <h1>I'm portfolio page</h1>
          <h1>{portfolio.title}</h1>
          <p>Body: {portfolio.body}</p>
          <p>ID: {portfolio.id}</p>
        </>
      }
    </BasePage>
  </BaseLayout>)
}

export default Portfolio;
