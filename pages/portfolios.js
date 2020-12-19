import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios';
import Link from 'next/link';
class Portfolios extends React.Component {

  static async getInitialProps() {
    let posts = [];
    try {
      const res = await  axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = res.data;
    } catch(e) {
      console.log(e);
    }

    return { posts: posts.slice(0, 10) };
  }

  renderPosts = posts =>
    posts.map(
      post =>
        <li key={post.id} style={{fontSize: '20px'}}>
          <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
            <a>{post.title}</a>
          </Link>
        </li>
    )

  render() {
    const { posts } = this.props
    return (
      <BaseLayout>
        <div>
          This is Protfolio page
          <ul>
            {this.renderPosts(posts)}
          </ul>
        </div>
      </BaseLayout>
    )
  }
}

export default Portfolios;
