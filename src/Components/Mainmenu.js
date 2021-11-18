import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
 
 
  
} from 'reactstrap';
 import logo from '../images/logo.svg';

const Mainmenu = (props) => {
  const [activeTab, setActiveTab] = React.useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  React.useEffect(() => {
    setActiveTab(localStorage.getItem('activetab'));
  
  }, []);
  return (
    <div className="mainmenu">
      {/* <div class="top-bar">
        <div class="container">
          <div class="content-holder d-flex justify-content-between">
            <div class="info d-flex">
              
              <div class="contact d-flex">
                <p><a href="mailto:info@company.com"> <i class="fa fa-envelope-o"></i> <span class="d-none d-md-inline">hr@Decalogueinc.com</span></a></p>
                <p> <i class="fa fa-phone text-white"></i> <span class="d-none d-md-inline">240-257-2524</span></p>
              </div>
            </div>
            <div class="CTAs">
            <Link to="/Career" className="ml-auto"> <i class="fa fa-users"></i> <span class="d-none d-md-inline">Careers</span></Link>
            <Link to="/Contact" className="ml-auto"> <i class="fa fa-address-book-o"></i> <span class="d-none d-md-inline">Contact us</span></Link>
            </div>
          </div>
        </div>
      </div> */}
      <Container>
      <Navbar  light  expand="md" fixed="top">
        <NavbarBrand href="/">

          <img alt="logo" src={logo} className="logo"/> 
          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/* <NavItem onClick={() => localStorage.setItem('activetab','home')}>
              <NavLink href="/" className={(activeTab==='home')?'active':''}>Home</NavLink>
            </NavItem> */}
             <NavItem onClick={() => localStorage.setItem('activetab','About')}>
              <NavLink href="/About" className={(activeTab==='About')?'active':''}>About</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
            About Us
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem onClick={() => localStorage.setItem('activetab','About')}>
                <NavLink href="/About" className={(activeTab==='About')?'active':''}>About us</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/News">News & Events</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/Industries">Industries</NavLink>
                </DropdownItem>
               
              
                
              </DropdownMenu>
            </UncontrolledDropdown> */}
            
           
            {/* <NavItem onClick={() => localStorage.setItem('activetab','Products')}>
              <NavLink href="/Products" className={(activeTab==='Products')?'active':''}>Products</NavLink>
            </NavItem> */}
            <NavItem onClick={() => localStorage.setItem('activetab','Services')}>
              <NavLink href="/Services" className={(activeTab==='Services')?'active':''}>Services</NavLink>
            </NavItem>
            {/* <NavItem onClick={() => localStorage.setItem('activetab','Solutions')}>
              <NavLink href="/Solutions" className={(activeTab==='Solutions')?'active':''}>Solutions</NavLink>
            </NavItem> */}
            <NavItem onClick={() => localStorage.setItem('activetab','Projects')}>
              <NavLink href="/Projects" className={(activeTab==='Projects')?'active':''}>Projects</NavLink>
            </NavItem>
            {/* <NavItem onClick={() => localStorage.setItem('activetab','Industries')}>
              <NavLink href="/Industries" className={(activeTab==='Industries')?'active':''}>Industries</NavLink>
            </NavItem>
            <NavItem onClick={() => localStorage.setItem('activetab','Ideas')}>
              <NavLink href="/Ideas" className={(activeTab==='Ideas')?'active':''}>Ideas</NavLink>
            </NavItem>
            <NavItem onClick={() => localStorage.setItem('activetab','News')}>
              <NavLink href="/News" className={(activeTab==='News')?'active':''}>News & Events</NavLink>
            </NavItem> */}
            <NavItem onClick={() => localStorage.setItem('activetab','Career')}>
              <NavLink href="/Career" className={(activeTab==='Career')?'active':''}>Careers</NavLink>
            </NavItem>
            <NavItem onClick={() => localStorage.setItem('activetab','Contact')}>
              <NavLink href="/Contact" className={(activeTab==='Contact')?'active':''}>Contact</NavLink>
            </NavItem>
          
          </Nav>
         
        </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default Mainmenu;