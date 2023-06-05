import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2 className="title">Skills</h2>
                            <p>
                                Experienced with the latest cutting edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                            </p>
                            <Carousel className="skill-slider" responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                                <div className="skill-item">
                                    <img src={meter1} alt="Image1" />
                                    <h3>HTML</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter2} alt="Image2" />
                                    <h3>CSS</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter3} alt="Image3" />
                                    <h3>JavaScript</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter1} alt="Image4" />
                                    <h3>React</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter2} alt="Image5" />
                                    <h3>Node</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter3} alt="Image6" />
                                    <h3>Python</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter1} alt="Image7" />
                                    <h3>MongoDB</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter2} alt="Image8" />
                                    <h3>SQL</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter3} alt="Image9" />
                                    <h3>PostgreSQL</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter1} alt="Image10" />
                                    <h3>Flutter</h3>
                                </div>
                                <div className="skill-item">
                                    <img src={meter2} alt="Image11" />
                                    <h3>Git</h3>
                                </div>
                            </Carousel>
                        </div>

                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="Image12" className="background-color-sharp" />
        </section>
    )
}
