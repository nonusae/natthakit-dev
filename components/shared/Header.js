import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import Link from 'next/link';

const BsNavLink = ({title, href}) => {
  return (
    <Link href={href}>
      <a className='nav-link port-navbar-link'>
        {title}
      </a>
    </Link>
  )
}
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand>
          <Link href="/">
            <a className='port-navbar-brand'>
              Natthakit Iewprasert
            </a>
        </Link>
        </NavbarBrand>
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
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
