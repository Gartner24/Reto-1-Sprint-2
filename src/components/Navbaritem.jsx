import React, { Component } from 'react'
import { Button, Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { ButtonGreen } from '../styles/StylesGlobal'

export default class Navbaritem extends Component {
    render() {
        return (
            <>
                <Navbar key='md' expand='md' className="mb-3 my-5 px-5">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <Image src="https://res.cloudinary.com/gartners/image/upload/v1653626441/Reto-1-Sprint-2/logo_mojey0.svg" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-md`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                    <Image src="https://res.cloudinary.com/gartners/image/upload/v1653626441/Reto-1-Sprint-2/logo_mojey0.svg" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1" className='mx-2'>Job Search</Nav.Link>
                                    <Nav.Link href="#action2" className='mx-2'>About</Nav.Link>
                                    <Nav.Link href="#action3" className='mx-2'>Pricing</Nav.Link>
                                    <Nav.Link href="#action4" className='mx-2'>Contact</Nav.Link>
                                </Nav>
                                <Button variant="outline-success" className='mx-2'>Search</Button>
                                <ButtonGreen variant="success" className='mx-2'>Try it Free</ButtonGreen>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        )
    }
}