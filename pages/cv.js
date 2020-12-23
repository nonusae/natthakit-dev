import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import { useGetUser } from 'actions/user';

const CV = () => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage>
        <div>
          This is CV page
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default CV;
