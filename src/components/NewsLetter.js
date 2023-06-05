import React from 'react'
import { Alert, Col, Row } from 'react-bootstrap'

export default function NewsLetter({ onValidated, status, message, }) {
    const [email, setEmail] = React.useState(''); // This is the email input field value

    // Function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    }

    // Clear the input field after submission
    const clearInput = () => {
        setEmail('');
    }

    // Clear the input field after submission
    React.useEffect(() => {
        if (status === "success") {
            clearInput();
        }
    }, [status]);

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        <p>
                            Subscribe to our newsletter and we will bring you the latest news and updates.
                        </p>
                        {
                            status === "sending" && <Alert variant="info">sending...</Alert>
                        }
                        {
                            status === "error" && <Alert variant="danger" dangerouslySetInnerHTML={{ __html: message }} />
                        }
                        {
                            status === "success" && <Alert variant="success" dangerouslySetInnerHTML={{ __html: message }} />
                        }
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input type="email" id="email" value={email} placeholder="Enter your email" required
                                    onChange={(e) => setEmail(e.target.value)} />
                                <button type="Submit">Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
