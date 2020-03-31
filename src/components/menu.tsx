import React, {useContext} from 'react';
import {PageContext, Pages} from '../providers/pageProvider';
import { Navbar, Nav } from 'react-bootstrap';
import iteraLogo from '../assets/img/Itera_logo_red.svg';
import '../styles/menu.scss';

const Menu = () => {
    const [pageName, setPageName] = useContext(PageContext)
    const pages = Object.keys(Pages)

    const getNavItem = (page: string, i: number) => {
        const value = (Pages as any)[page]
        return (<Nav.Link key={i} onClick={() => setPageName(value)}> {value} </Nav.Link>)
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
                    {pages.map((page: string, i: number) => getNavItem(page, i))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu