import React from 'react'
import { Container, Row, Col, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'This is project 1',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is project 2',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'This is project 3',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'This is project 4',
            image: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Projects are the best way to highlight your skills and achievements. Show off your work with images and descriptions in this section.
                        </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="tabs" defaultActiveKey="/home">
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
                                        {projects.map(project => (
                                            <Col key={project.id} md={6}>
                                                <div className="project-item">
                                                    <img src={project.image} alt={project.title} />
                                                    <h3>{project.title}</h3>
                                                    <p>{project.description}</p>
                                                </div>
                                            </Col>
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
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
