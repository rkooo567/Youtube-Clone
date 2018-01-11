import React, { Component } from 'react';
// Component
import { Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop='true' className='nav'>
  		<Navbar.Header>
  			<Navbar.Brand>
  				<a href="#brand">Youtube Clone</a>
  			</Navbar.Brand>
  			<Navbar.Toggle />
  		</Navbar.Header>
  	</Navbar>
    );
  }
}

export default Header;
