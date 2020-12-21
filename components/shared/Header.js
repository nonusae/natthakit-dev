import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
      <a className='nav-link'>
        {title}
      </a>
    </Link>
  )
}
export default class Header extends React.Component {

  state = {isOpen: false}
  toggle = () => this.setState({isOpen: !this.state.isOpen})

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <BsNavLink title='Home' href='/' />
              </NavItem>
              <NavItem>
                <BsNavLink title='About' href='/about' />
              </NavItem>
              <NavItem>
                <BsNavLink title='Portfolios' href='/portfolios' />
              </NavItem>
              <NavItem>
                <BsNavLink title='Blogs' href='/blogs' />
              </NavItem>
              <NavItem>
                <BsNavLink title='CV' href='/cv' />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
