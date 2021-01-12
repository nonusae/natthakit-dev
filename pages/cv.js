import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import { useGetUser } from 'actions/user';
import { Row, Col } from 'reactstrap';

const CV = () => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout
      navClass='transparent'
      user={dataUser}
      loading={loadingUser}
    >
      <BasePage>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <iframe style={{width: '100%', height: '800px'}} src="/NatthakitCV.pdf" frameborder="0" />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default CV;
