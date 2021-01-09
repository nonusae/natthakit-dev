import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Link from 'next/link';

const BsNavLink = ({title, href, className=''}) => {
  return (
    <Link href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>
        {title}
      </a>
    </Link>
  )
}

const BsNavBrand = () =>
  <Link href="/">
    <a className='navbar-brand port-navbar-brand'>
      Natthakit Iewprasert
    </a>
  </Link>

const LoginLink = () =>
  <a href="/api/v1/login" className="navbar-brand port-navbar-brand">Login</a>

const LogoutLink = () =>
  <a href="/api/v1/logout" className="navbar-brand port-navbar-brand">Logout</a>

const AdminMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Dropdown
      className= "port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle
        className='port-dropdown-toggle'
        nav
        carret
      >
        Admin
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            title='Create portfolio'
            href='/portfolio/new'
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

const Header = ({user, loading, className}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        dark
        expand="md" >
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='port-navbar-item'>
              <BsNavLink title='Home' href='/' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink title='About' href='/about' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink title='Portfolios' href='/portfolios' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink title='Blogs' href='/blogs' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink title='CV' href='/cv' />
            </NavItem>
          </Nav>

          <Nav navbar>
            {!loading &&
              <>
                { user &&
                  <>
                    <AdminMenu />
                    <NavItem className='port-navbar-item'>
                      <LogoutLink />
                    </NavItem>
                  </>
                }
                { !user &&
                  <NavItem className='port-navbar-item'>
                    <LoginLink />
                  </NavItem>
                }
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
