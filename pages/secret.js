import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import { useGetUser } from 'actions/user';
import Redirect from 'components/shared/redirect'


const Secret = () => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  if(loadingUser) {
    return <p>Loading ...</p>
  }

  if (!dataUser) {
    return <Redirect to='/api/v1/login' />
  } else {
    return (
      <BaseLayout user={dataUser} loading={loadingUser}>
        <BasePage>
          <div>
            <h1>
              This is Secret page
            </h1>
          </div>
        </BasePage>
      </BaseLayout>
    )
  }
}


export default Secret;
