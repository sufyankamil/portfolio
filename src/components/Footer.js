import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MailForm from './MailForm'
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon2 from '../assets/images/nav-icon2.svg'
import github from "../assets/images/mark-github.svg";
import VisitorCounter from './Visitor'

export default function Footer() {
    // Function to go to top of the page
    const goToTop = () => {
        window.scrollTo(0, 0);
    }

    // Function to open github profile
    const openGithub = () => {
        window.open('https://github.com/sufyankamil'
            , '_blank');
    }

    // Function to open linkedIn profile
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/sufyan-k-77a974110/'
            , '_blank');
    }

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailForm />
                    <Col md={6} className="text-center text-md-right">
                        <div className='logo-link'>
                            <p className="logo-text" onClick={goToTop}>SK</p>
                        </div>
                        <VisitorCounter />
                    </Col>
                    <Col sm={6} className="text-center text-md-left">



                        <div className="social-icon">
                            <a href={openLinkedIn}>
                                <img src={navIcon1} alt='linkedIn' onClick={openLinkedIn} />
                            </a>
                            <a href='#0'>
                                <img src={navIcon2} alt='facebook' />
                            </a>

                            <a href={openGithub}>
                                <img src={github} alt='github' onClick={openGithub} />


                                {/* <Github /> */}
                            </a>
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
