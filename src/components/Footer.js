import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MailForm from './MailForm'
import Logo from '../assets/images/logo.svg'
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon2 from '../assets/images/nav-icon2.svg'
import navIcon3 from '../assets/images/nav-icon3.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailForm />
                    <Col md={6} className="text-center text-md-right">
                        <img src={Logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-md-left">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sufyan-k-77a974110/">
                                <img src={navIcon1} alt="" />
                            </a>
                            <img src={navIcon2} alt="" />
                            <img src={navIcon3} alt="" />
                        </div>
                        <p>
                            &copy; 2021 Sufyan Kamil. All rights reserved.
                        </p>
                    </Col>


                </Row>
            </Container>
        </footer>
    )
}
