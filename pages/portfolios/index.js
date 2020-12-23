import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import Link from 'next/link';
import { useGetPosts } from 'actions';
import { useGetUser } from 'actions/user';

const Portfolios = () => {
  const { data: posts, error, loading } = useGetPosts();
  const { data: dataUser, loading: loadingUser } = useGetUser();

  const renderPosts = (posts) => {
    return posts.map(post =>
      <li key={post.id} style={{'fontSize': '20px'}}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a>
            {post.title}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        {
          loading
          &&
          <span>Loading</span>
        }
        { posts &&
          <ul>
            {renderPosts(posts)}
          </ul>
        }
        { error &&
          <div className="alert alert-danger">{error.message}</div>
        }
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios;
