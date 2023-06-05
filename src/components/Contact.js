import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/images/contact-img.svg';

export default function Contact() {
    // Initial values for form
    const formInitialValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: ''
    };

    // State to store form values
    const [formState, setFormState] = useState(formInitialValues);

    // State to store text for submit button
    const [buttonText, setButtonText] = useState('Submit');

    // State to store form errors
    const [status, setStatus] = useState({});

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        // Prevent default behavior of form submit button (refresh page)
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formState),
        });
        setButtonText('Submit');
        let result = await response.json();
        setFormState(formInitialValues);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message send successfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong. Please try again later' });
        }
    
    };


    return (
        <section className="contact" id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact' />
                    </Col>
                    <Col md={6}>
                        <h2>Connect with me</h2>
                        <form onSubmit={handleFormSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' placeholder='First Name' value={formState.firstName} onC
                                        hange={(e) => setFormState({ ...formState, firstName: e.target.value })} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' placeholder='Last Name' value={formState.lastName} onCh
                                        ange={(e) => setFormState({ ...formState, lastName: e.target.value })} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' placeholder='Email' value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' placeholder='Phone' value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
                                </Col>
                                <Col sm={12} className='px-1'>
                                    <textarea placeholder='Message' value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
                                    <button type='submit'>{buttonText}</button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
