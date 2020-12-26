import { useGetUser } from 'actions/user';
import Redirect from 'components/shared/redirect'

const withAuth = (Component) => {
  return props => {
    const { data: dataUser, loading: loadingUser } = useGetUser();

    if(loadingUser) {
      return <p>Loading ...</p>
    }

    if (!dataUser) {
      return <Redirect ssr to='/api/v1/login' />
    } else {
      return <Component user={dataUser} loading={loadingUser} {...props}/>
    }
  }
}


export default withAuth;
