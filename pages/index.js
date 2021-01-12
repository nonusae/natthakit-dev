
import { useState, useRef, useEffect } from 'react';
import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/BasePage';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import { useGetUser } from 'actions/user';

const ROLES = [
  'Developer',
  'Tech Lover',
  'Team Player',
  'Ruby on Rails',
  'React.js'];
const Index = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className='cover'>
      <BasePage indexPage title="Portfolio - Filip Jerga">
        <div className="main-section">
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="image image-1">
                        <div className="hero-section-content">
                          <h2> Full Stack Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Filip Jerga.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={ROLES}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default Index;
