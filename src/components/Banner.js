import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/images/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Resume from '../assets/images/Resume.pdf';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [toRotate] = useState(['Full Stack Developer', 'Flutter Developer']);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };

    });

    // Function to type text in banner section with animation effect
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(calculateDelta() / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    // Function to calculate delta time for typing
    const calculateDelta = () => {
        return 300 - Math.random() * 100;
    }

    // Function to download resume
    const downloadResume = () => {
        window.open(Resume, '_blank');
    }

    // Function to go to naukri profile
    const goToNaukri = () => {
        window.open('https://www.naukri.com/mnjuser/profile?id=&orgn=homepage'
            , '_blank');
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="banner-content">
                                        <span className='tagline'>
                                            Welcome to my portfolio
                                        </span>
                                        <h1>
                                            {`Hi, I am Sufyan Kamil `}
                                            <span className='wrap'>
                                                {text}
                                            </span>
                                        </h1>
                                        <p>
                                            Experienced Full Stack Developer with expertise in designing, developing, and implementing web applications. Proficient in front-end technologies like HTML, CSS, and JavaScript, Dart as well as back-end technologies like Node.js, Python, MongoDB, SQL and PostgreSQL. Skilled in working with popular frameworks such as React. Committed to creating responsive, visually appealing, and intuitive user interfaces that meet user requirements. Experienced with the latest cutting edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                                        </p>
                                        <button onClick={goToNaukri} className="btn btn-outline-primary">
                                            <i className="fa fa-paper-plane" aria-hidden="true"></i> Learn More
                                            <ArrowRightCircle size={25} />
                                        </button>
                                        <div className="banner-btn1">
                                            {/* <button className="btn btn-outline-primary">Hire Me</button> */}
                                            <button className="btn btn-primary" onClick={downloadResume}>
                                                {/* <a href={Resume} target="_blank" rel="noopener noreferrer" download>
                                                    <i className="fa fa-download" aria-hidden="true"></i> Download CV
                                                </a> */}
                                                Get CV</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
