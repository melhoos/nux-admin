import React from 'react';
import Page, {Pages} from '../interfaces/page';
import {Navbar, Nav} from 'react-bootstrap';
import iteraLogo from '../assets/img/Itera_logo_red.svg';
import '../styles/menu.scss';

const NavbarMenu = () => {
    const getNavItem = (page: Page, i: number) => {
        return (<Nav.Link key={i} href={page.url}> {page.name} </Nav.Link>)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Navbar.Brand href="/">
                <img
                    src={iteraLogo}
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Itera Red Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {Pages.map((p: Page, i: number) => getNavItem(p, i))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu;