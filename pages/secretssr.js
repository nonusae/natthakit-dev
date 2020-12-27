import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import auth0 from 'utils/auth0';

const SecretSSR = ({user}) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <div>
          <h1>
            This is Secret page - {user && user.name}
          </h1>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export const getServerSideProps = async({req, res}) => {
  const session = await auth0.getSession(req)
  if (!session || !session.user) {
    res.writeHEAD(302, {
      Location: 'api/v1/login'
    })
    res.end();
  return {props: {}};
  } else {
    return {
      props: {user: session.user}
    }
  }
}

export default SecretSSR ;
