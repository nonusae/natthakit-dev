import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { Container } from "reactstrap";
class Index extends React.Component {
  render() {
    console.log('aaa')
    return (
      <BaseLayout>
        <Container>
          <h1>You are in Index page</h1>
        </Container>
      </BaseLayout>
      )
  }
}

export default Index;
