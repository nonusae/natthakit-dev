import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import { useGetUser } from 'actions/user';
import { useRouter } from 'next/router';

const Secret = () => {
  const { data: dataUser, loading: loadingUser } = useGetUser();
  const router = useRouter();

  if(loadingUser) {
    return <p>Loading ...</p>
  }

  if (!dataUser) {
    router.push('/api/v1/login')
    return null;
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
