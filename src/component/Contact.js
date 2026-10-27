import { RiMailLine, RiPhoneLine, RiMapPinLine, RiGlobalLine } from "@remixicon/react";
import { useRef, useState } from "react";
import { Container, Row, Col, Modal, Spinner, Button, Form } from "react-bootstrap";
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

      // ⚠️ Replace the IDs below with YOUR own EmailJS service / template / public key
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', cusForm.current, {
          publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setShowThankYou(true);
            setIsSubmitting(false);
            cusForm.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setIsSubmitting(false);
          },
        );
    } else {
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
              <div className="section-title text-center" data-aos="fade-up" data-aos-delay="200">
                <p>contact</p>
                <h2>Get in Touch with Me!</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <div className="contact-content-part" data-aos="fade-up" data-aos-delay="200">
                <div className="single-contact" data-aos="fade-up" data-aos-delay="300">
                  <div className="contact-icon"><RiPhoneLine /></div>
                  <h2>contact number:</h2>
                  <p><a href="tel:+919795718060">+91 97957 18060</a></p>
                </div>

                <div className="single-contact" data-aos="fade-up" data-aos-delay="400">
                  <div className="contact-icon"><RiMailLine /></div>
                  <h2>Email:</h2>
                  <p><a href="mailto:artigupta75993@gmail.com">artigupta75993@gmail.com</a></p>
                </div>

                <div className="single-contact" data-aos="fade-up" data-aos-delay="500">
                  <div className="contact-icon"><RiMapPinLine /></div>
                  <h2>Location:</h2>
                  <p>Ballia, Uttar Pradesh, 277001</p>
                </div>

                <div className="single-contact" data-aos="fade-up" data-aos-delay="600">
                  <div className="contact-icon"><RiGlobalLine /></div>
                  <h2>Languages:</h2>
                  <p>Hindi, English</p>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <div className="contact-form contact-form-area" data-aos="fade-up" data-aos-delay="400">
                <Form noValidate validated={validated} onSubmit={sendEmail} ref={cusForm} className="row">
                  <Form.Group as={Col} md="6" className="form-group">
                    <Form.Control required type="text" name="name" placeholder="Enter Name" />
                    <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" className="form-group">
                    <Form.Control required type="email" name="email" placeholder="Email" />
                    <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="12" className="form-group">
                    <Form.Control required type="text" name="title" placeholder="Subject" />
                    <Form.Control.Feedback type="invalid">Please enter a subject</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="12" className="form-group">
                    <Form.Control as="textarea" required name="message" rows={4} placeholder="Enter Message" />
                    <Form.Control.Feedback type="invalid">Please enter a message</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Button type="submit" className="theme-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                          Sending...
                        </>
                      ) : (
                        <>Send Message <RiMailLine /></>
                      )}
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Modal show={showThankYou} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>✅ Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>I'll get in touch with you very soon.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}