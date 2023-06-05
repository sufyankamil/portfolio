import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import github from "../assets/images/mark-github.svg";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Scroll more then 50px from top of the page to change the navbar color to white
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
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
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            < Container >
                <Navbar.Brand href="#home"> <img src={logo} alt="Logo" className='logo-img' /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
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
                        <button
                            className="btn btn-primary btn-connect"
                            onClick={() => window.open('mailto:"sufyankamil@hotmail.com"   ?subject=Enquiry from Portfolio Website', '_blank')}
                        >
                            <i className="fa fa-paper-plane" aria-hidden="true"></i> Connect Me
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}
