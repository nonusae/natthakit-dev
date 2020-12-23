import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import { useGetUser } from 'actions/user';

const Blogs = () => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage>
        <div>
          This is Blog page
        </div>
      </BasePage>
    </BaseLayout>
  )

}
export default Blogs;
