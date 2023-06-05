import React from 'react'
import { Container, Row, Col, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/images/color-sharp2.png';
import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';
import projImg3 from '../assets/images/project-img3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'This is project 1',
            image: projImg1
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is project 2',
            image: projImg2
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'This is project 3',
            image: projImg3
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'This is project 4',
            image: projImg3
        },
        {
            id: 5,
            title: 'Project 5',
            description: 'This is project 5',
            image: projImg1
        },
        {
            id: 6,
            title: 'Project 6',
            description: 'This is project 6',
            image: projImg2
        }

    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
                                    <h2>Projects</h2>
                                    <p>
                                        Projects are the best way to highlight your skills and achievements. Show off your work with images and descriptions in this section.
                                    </p>


                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center' id='pills-tab'>
                                            <Nav.Item>
                                                <Nav.Link eventKey={"first"}>Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey={"second"}>Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey={"third"}>Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey={"first"}>
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey={"second"}>
                                                <h3>Tab 2</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey={"third"}>
                                                <h3>Tab 3</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>

                    </Col>
                </Row>
            </Container>
            <br />
            <img className='background-iamge-right' src={colorSharp2} alt='wave' />
        </section >
    )
}
