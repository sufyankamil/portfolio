import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard({ title, description, image }) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={image} alt={title} />
                <div className="proj-txtx">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    )
}
