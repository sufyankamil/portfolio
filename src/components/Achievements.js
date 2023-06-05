import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Achievements = () => {
    const achievementsData = [
        {
            title: 'Project X',
            description: 'Developed an innovative solution for Project X, resulting in a 30% increase in efficiency.',
            date: 'May 2022',
        },
        {
            title: 'Hackathon Winner',
            description: 'Won first place in the ABC Hackathon, competing against 50+ teams with our cutting-edge application.',
            date: 'March 2022',
        },
    ];

    return (
        <section className='skills' id='achievements'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2 className="title">Achievements</h2>
                            <p>
                                {achievementsData.map((achievement, index) => (
                                    <div key={index} className="achievement">
                                        <h3 className='title'>{achievement.title}</h3>
                                        <p className='desc'>{achievement.description}</p>
                                        <h5 className="date">{achievement.date}</h5>
                                    </div>
                                ))}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <h2>Achievements</h2>
            {achievementsData.map((achievement, index) => (
                <div key={index} className="achievement">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                    <p className="date">{achievement.date}</p>
                </div>
            ))} */}
        </section>
    );
};

export default Achievements;
