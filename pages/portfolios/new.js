import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import withAuth from 'hoc/withAuth';
import { Row, Col } from "reactstrap";
import PortfolioForm from 'components/PortfolioForm';
import { useCreatePortfolio } from 'actions/portfolios';
import Redirect from 'components/shared/redirect'

const PortfoliosNew = ({user, loading: userLoading}) => {
  const [createPortfolio, {data, loading, error}] = useCreatePortfolio();

  if (data) { return <Redirect to='/portfolios' /> }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header='New Portfolio'>
        <Row>
          <Col className="md-8">
            <PortfolioForm onSubmit={createPortfolio} />
            { error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}


export default withAuth(PortfoliosNew)('admin');
