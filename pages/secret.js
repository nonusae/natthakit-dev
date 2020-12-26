import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import withAuth from 'hoc/withAuth';


const Secret = ({user, loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <div>
          <h1>
            This is Secret page - {user.name}
          </h1>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Secret) ;
