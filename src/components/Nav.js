import { Col, Container, Row } from "reactstrap"
import {NavLink }from 'react-router-dom';

const NavigationBar = () => {
    return(
        <>
            <Container className='pt-3'>
                <Row className='py-4'>
                    <Col md='2' >
                        <span className='logo'>monarchy</span>
                    </Col>
                    <Col className='pt-2' md={{ offset: 4, size: 6 }}>
                        <ul className='list-inline m-0'>
                            <li className='list-inline-item '><NavLink className='nav_item' to='/'>Home</NavLink></li>
                            <li className='list-inline-item '><NavLink className='nav_item' to='/portfolio'>Portfolio</NavLink></li>
                            <li className='list-inline-item '><NavLink className='nav_item' to='/about' >About</NavLink></li>
                            <li className='list-inline-item '><NavLink className='nav_item' to='/services' >Services</NavLink></li>
                            <li className='list-inline-item '><NavLink className='nav_item' to='/blog'>Blog</NavLink></li>
                            <li className='list-inline-item '><NavLink className='nav_item' to='/footer'>Contact</NavLink></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NavigationBar;