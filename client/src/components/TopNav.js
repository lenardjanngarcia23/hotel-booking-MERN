import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const TopNav = () => {
    return (
        
        <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
        <LinkContainer to='/'>
            <Navbar.Brand>TechShop</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/register'>
                <Nav.Link>Register</Nav.Link> 
            </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default TopNav