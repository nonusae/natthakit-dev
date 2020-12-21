import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage';

class About extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <div>
            This is About page
          </div>
        </BasePage>
      </BaseLayout>    )
  }
}

export default About;
