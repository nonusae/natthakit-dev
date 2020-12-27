import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import { authorizeUser, withAuth } from 'utils/auth0';

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

export const getServerSideProps = withAuth();

export default SecretSSR ;
