import { useEffect } from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage';
import { useGetUser } from 'actions/user';
import { Row, Col } from 'reactstrap'

const About = () => {
  const { data: dataUser, loading: loadingUser } = useGetUser();


  useEffect(() => {
    return() => {
      window.__isAboutLoaded = true;
    }
  })

  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein'
    }

    return 'fadein';
  }

  return (
    <BaseLayout
      user={dataUser}
      loading={loadingUser}
    >
      <BasePage className='about-page'>
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>My name is Natthakit and I am an experienced software engineer and freelance developer. </p>
              <p>
              I have a Master's degree in Mechatronic & Control Engineer and several years of experience working
              on a wide range of technologies and projects mainly using Ruby on Rails and React for building modern
              web applications and API.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}


export default About;
