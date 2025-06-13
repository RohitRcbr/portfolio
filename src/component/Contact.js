import { RiMailLine, RiPhoneLine } from "@remixicon/react";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact(){
    return(
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
                                    <RiPhoneLine/>
                                </div>
                                <h2>contact number:</h2>
                                <p><a href="tel: +91-8417892447">+91-8417892447</a></p>
                            </div>
                            <div className="single-contact" data-aos="fade-up" data-aos-delay="600">
                                <div className="contact-icon">
                                    <RiMailLine/>
                                </div>
                                <h2>Email us:</h2>
                                <p><a href="mailto: rcbr786@gmail.com">rcbr786@mail.com</a></p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={8}>
                        <div className="contact-form contact-form-area" data-aos="fade-up" data-aos-delay="400">
						<form id="contactForm" className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" value="" placeholder="Steve Milner" required="" data-error="Please enter your Name" />
                                        <label for="name" className="for-icon"><i className="far fa-user"></i></label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" className="form-control" value="" placeholder="hello@websitename.com" required="" data-error="Please enter your Email" />
                                        <label for="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" id="subject" className="form-control" value="" placeholder="Your Subject" required="" data-error="Please enter your Name" />
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
                                        <button type="submit" className="theme-btn">
                                            Send Me Message <RiMailLine/>
                                        </button>
                                        <div id="msgSubmit" className="hidden"></div>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <p className="input-success">We have received your mail, We will get back to you soon!</p>
                                    <p className="input-error">Sorry, Message could not send! Please try again.</p>
                                </div>
                            </div>
                        </form>
                        </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>

    );
}