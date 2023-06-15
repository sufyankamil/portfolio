import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/images/contact-img.svg';
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

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

    const [to_name, setToName] = useState('')

    const [from_name, setFromName] = useState('')

    const [phone, setPhone] = useState('')

    const [yourWebsite, setYourWebsite] = useState('')

    const [message, setMessage] = useState('')

    const [errors, setErrors] = useState({});

    // State to store text for submit button
    const [buttonText, setButtonText] = useState('Submit');

    // State to store form errors
    const [status, setStatus] = useState({});

    const form = useRef();

    // Function to handle form submission
    // const handleFormSubmit = async (e) => {
    //     // Prevent default behavior of form submit button (refresh page)
    //     e.preventDefault();
    //     setButtonText('Sending...');
    //     let response = await fetch('http://localhost:5000/contact', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(formState),
    //     });
    //     setButtonText('Submit');
    //     let result = await response.json();
    //     setFormState(formInitialValues);
    //     if (result.code === 200) {
    //         setStatus({ success: true, message: 'Message send successfully' });
    //     } else {
    //         setStatus({ success: false, message: 'Something went wrong. Please try again later' });
    //     }

    // };

    const sendEmail = (e) => {
        e.preventDefault();

        const emailContent = {
            to_name: to_name,
            from_name: from_name,
            phone: phone,
            yourWebsite: yourWebsite,
            message: message
        };

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            setButtonText('Sending...');
            emailjs
                .send('service_glxr4qz', 'template_cr9lf1s', emailContent, '3xgopIgwyiFg2JMqu')
                .then(
                    () => {
                        alert('Message successfully sent!')
                        window.location.reload(false)

                    },
                    () => {
                        alert('Failed to send the message, please try again')
                    }
                )
            setButtonText('Submit');
        } else {
            setErrors(validationErrors);
        }

    }

    const validateForm = () => {
        const errors = {};
        let formIsValid = true;

        if (!formState.firstName) {
            formIsValid = false;
            errors.firstName = '*Please enter your name.';
        }

        if (!formState.lastName) {
            formIsValid = false;
            errors.lastName = '*Please enter your last name.';
        }

        if (!formState.email) {
            formIsValid = false;
            errors.email = '*Please enter your email.';
        }

        if (typeof formState.email !== 'undefined') {
            let lastAtPos = formState.email.lastIndexOf('@');
            let lastDotPos = formState.email.lastIndexOf('.');

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    formState.email.indexOf('@@') === -1 &&
                    lastDotPos > 2 &&
                    formState.email.length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors.email = '*Please enter valid email.';
            }
        }

        if (!formState.message) {
            formIsValid = false;
            errors.message = '*Please enter your message to send.';
        }

        setStatus(errors);
        return errors;
    }


    return (
        <section className="contact" id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact' />
                    </Col>
                    <Col md={6}>
                        <h2>Connect with me</h2>
                        <div className="container">
                            <form id="contact" onSubmit={sendEmail}>
                                <div>
                                    <fieldset>
                                        <input placeholder="Your name" type="text" tabIndex="1" onChange={(e) => setToName(e.target.value)}
                                            required />
                                    </fieldset>
                                    {errors.firstName && <p className="danger">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <fieldset>
                                        <input placeholder="Your Email Address" type="email" tabIndex="2" onChange={(e) => setFromName(e.target.value)} required />
                                    </fieldset>
                                    {errors.email && <p className="danger">{errors.email}</p>}
                                </div>
                                <div>
                                    <fieldset>
                                        <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" onChange={(e) => setPhone(e.target.value)} />
                                    </fieldset>
                                    {errors.phone && <p className="danger">{errors.phone}</p>}
                                </div>
                                <div>
                                    <fieldset>
                                        <input placeholder="Your Web Site (optional)" type="url" tabIndex="4" onChange={(e) => setYourWebsite(e.target.value)}
                                        />
                                    </fieldset>
                                    {errors.yourWebsite && <p className="danger">{errors.yourWebsite}</p>}
                                </div>
                                <div>
                                    <fieldset>
                                        <textarea placeholder="Type your message here...." tabIndex="5" onChange={(e) => setMessage(e.target.value)} required></textarea>
                                    </fieldset>
                                    {errors.message && <p className="danger">{errors.message}</p>}
                                </div>
                                <fieldset>
                                    {/* <button name="submit" type="submit" id="contact-submit" onClick={sendEmail}
                                        data-submit="...Sending">{buttonText}</button> */}
                                    <button type='submit' onClick={sendEmail}>{buttonText}</button>
                                </fieldset>

                            </form>
                        </div>

                        {/* <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' placeholder='First Name' value={formState.firstName} onChange={(e) => setFromName(e.target.value)} required />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' placeholder='Last Name' value={formState.lastName} onChange={(e) => setToName(e.target.value)} required />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' placeholder='Email' value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' placeholder='Phone' value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
                                </Col>
                                <Col sm={12} className='px-1'>
                                    <textarea placeholder='Message' value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required />
                                    <button type='submit'>{buttonText}</button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
