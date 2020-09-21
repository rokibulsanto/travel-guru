import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Logo.png';

const AppBar = () => {
    return (
        <div style={{marginLeft:'60px',marginTop:'15px'}}>
            <Navbar bg="" variant="">
                <img style={{width:'8%'}} src={logo} alt=""/>
                <Form inline>
                <FormControl style={{marginLeft:'80px',padding:'17px',marginRight:'80px'}} type="text" placeholder="Search your Destination..." className="mr-sm-2" />
                </Form>
                <Navbar className="NavElements" href="/home">News</Navbar>
                <Nav className="mr-auto">
                <Nav.Link className="NavElements"  href="/home">Destination</Nav.Link>
                <Nav.Link className="NavElements"  href="/home">Hotel</Nav.Link>
                <Nav.Link className="NavElements" href="/home">Contract</Nav.Link>
                </Nav>
                <Button style={{marginRight:'230px'}} className="btn btn-warning" variant="outline" href="/login">Log in</Button>
            </Navbar>
            </div>
    );
};

export default AppBar;