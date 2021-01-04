import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import withAuth from 'hoc/withAuth';
import { Row, Col } from "reactstrap";
import PorfolioForm from 'components/PortfolioForm';
import { useCreatePortfolio } from 'actions/portfolios';

const PortfoliosNew = ({user, loading: userLoading}) => {
  const [createPortfolio, {data, loading, error}] = useCreatePortfolio();

  const _createPortfolio = (data) => {
    createPortfolio(data)
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header='New Portfolio'>
        <Row>
          <Col className="md-8">
            <PorfolioForm onSubmit={_createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}


export default withAuth(PortfoliosNew)('admin');
