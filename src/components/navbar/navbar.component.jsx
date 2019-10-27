import React from 'react'
// import './navbar.styles.scss'
import Nav from 'react-bootstrap/Nav'

const Navigatebar = ({changeRoute}) => {
    return (
        <Nav fill variant="tabs" activeKey="search" onSelect={changeRoute}>
            <Nav.Link eventKey="search">Search</Nav.Link>
            <Nav.Link eventKey="compare">Compare</Nav.Link>
        </Nav>
    )
}

export default Navigatebar;
