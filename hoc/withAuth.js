import { useGetUser } from 'actions/user';
import Redirect from 'components/shared/redirect';
import { isAuthorized } from 'utils/auth0';

const withAuth = Component => role => {
  return props => {
    const { data: dataUser, loading: loadingUser } = useGetUser();

    if(loadingUser) {
      return <p>Loading ...</p>
    }

    if (!dataUser) {
      return <Redirect ssr to='/api/v1/login' />
    } else {
      if(role && !isAuthorized(dataUser, role)) {
        return <Redirect ssr to='/api/v1/login' />
      }

      return <Component user={dataUser} loading={loadingUser} {...props}/>
    }
  }
}


export default withAuth;
