import { RiMailLine, RiPhoneLine } from "@remixicon/react";
import { useRef, useState } from "react";
import { Container, Row, Col, Modal, Spinner, Button, Form, InputGroup } from "react-bootstrap";
import emailjs from "@emailjs/browser";
export default function Contact() {
    const cusForm = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShowThankYou(false);
    const sendEmail = (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === true) {

            setValidated(true);
            emailjs
                .sendForm('service_mxplwas', 'template_ptzkjd6', cusForm.current, {
                    publicKey: '_qAy4ir8MrMazATQp',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setShowThankYou(true);
                        setIsSubmitting(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
        else {
            setValidated(true);
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contact" className="contact-area">
            <Container>
                <div className="container-inner">
                    <Row>
                        <Col xl={12} lg={12}>
                            <div className="section-title text-center wow fadeInUp delay-0-2s">
                                <p>contact</p>
                                <h2>Get in Touch with Me!</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="contact-content-part" data-aos="fade-up" data-aos-delay="200">
                                {/* <div className="single-contact"data-aos="fade-up" data-aos-delay="200">
                                <div className="contact-icon">
                                    <RiMapPinLine/>
                                </div>
                                <h2>our office:</h2>
                                <p>Tiger Khan, Bangladesh</p>
                            </div> */}
                                <div className="single-contact" data-aos="fade-up" data-aos-delay="400">
                                    <div className="contact-icon">
                                        <RiPhoneLine />
                                    </div>
                                    <h2>contact number:</h2>
                                    <p><a href="tel: +91-8417892447">+91-8417892447</a></p>
                                </div>
                                <div className="single-contact" data-aos="fade-up" data-aos-delay="600">
                                    <div className="contact-icon">
                                        <RiMailLine />
                                    </div>
                                    <h2>Email us:</h2>
                                    <p><a href="mailto: rcbr786@gmail.com">rcbr786@mail.com</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="contact-form contact-form-area" data-aos="fade-up" data-aos-delay="400">
                                <Form noValidate validated={validated} onSubmit={sendEmail} ref={cusForm}>
                                    <Row>
                                        <Form.Group as={Col} md="6" controlId="name" className="form-group">
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter Name" />
                                            <Form.Control.Feedback type="invalid">Please enter name</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="email" className="form-group">
                                            <Form.Control
                                                required
                                                type="email"
                                                placeholder="Email" />
                                            <Form.Control.Feedback type="invalid">Please Enter valid Email</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="subject" className="form-group">
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Subject" />
                                            <Form.Control.Feedback type="invalid">Enter Subject</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" controlId="message" className="form-group">
                                            <Form.Control
                                                as="textarea"
                                                required
                                                rows={4}
                                                placeholder="Enter Message" />
                                            <Form.Control.Feedback type="invalid">Please Enter Message</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>

                                            <Button type="submit" className="theme-btn" disabled={isSubmitting}>
                                                {
                                                    isSubmitting ? (
                                                        <>
                                                            <Spinner
                                                                as="span"
                                                                animation="border"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                                className="me-2"
                                                            />
                                                            Submitting...
                                                        </>
                                                    )
                                                        :
                                                        (
                                                            <>
                                                                Send Message <RiMailLine />
                                                            </>
                                                        )
                                                }
                                            </Button>
                                        </Form.Group>
                                    </Row>
                                </Form>
                                {/* <form id="contactForm" className="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" placeholder="Name" required="" data-error="Please enter your Name" />
                                        <label for="name" className="for-icon"><i className="far fa-user"></i></label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" className="form-control" placeholder="abc@gmail.com" required="" data-error="Please enter your Email" />
                                        <label for="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" id="subject" className="form-control" placeholder="Your Subject" required="" data-error="Please enter your Name" />
                                        <label for="name" className="for-icon"><i className="far fa-user"></i></label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required="" data-error="Please Write your Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-0">
                                        <button type="submit" className="theme-btn" disabled={isSubmitting}>
                                                   
                                                </button>
                                                <div id="msgSubmit" className="hidden"></div>
                                            </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <p className="input-success">We have received your mail, We will get back to you soon!</p>
                                    <p className="input-error">Sorry, Message could not send! Please try again.</p>
                                </div>
                            </div>
                        </form> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Modal
                show={showThankYou}
                onHide={handleClose}
                centered
                animation={true} // Bootstrap animation
            >
                <Modal.Header closeButton>
                    <Modal.Title>✅ Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body>We will get in touch very shortly.</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>

    );
}