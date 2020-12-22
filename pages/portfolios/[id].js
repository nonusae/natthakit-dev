import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';

import axios from 'axios'

import { withRouter } from "next/router";

const Portfolio = ({portfolio}) => (
  <BaseLayout>
    <BasePage>
      <h1>I'm portfolio page</h1>
      <h1>{portfolio.title}</h1>
      <p>Body: {portfolio.body}</p>
      <p>ID: {portfolio.id}</p>
    </BasePage>
  </BaseLayout>
)

Portfolio.getInitialProps = async ({query}) => {
  let post = [];
  try {
    const res = await  axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    post = res.data;
  } catch(e) {
    console.log(e);
  }

  return { portfolio: post };
}

export default withRouter(Portfolio);
