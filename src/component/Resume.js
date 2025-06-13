import { RiBookLine } from "@remixicon/react";
import { Col, Container, Row } from "react-bootstrap";

export default function Resume(){
    return (
      <section className="resume-area" id="resume">
        <Container>
            <div className="resume-items">
                <Row>
                    <Col xl={6} md={6}>
                    <div className="single-resume">
                            <h2>Experience</h2>
                            <div className="experience-list">
                                <div className="resume-item" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon">
                                    <RiBookLine/>
                                    </div>
                                    <div className="content">
                                        <span className="years">2021 - Present</span>
                                        <h4>Moral Group of Company</h4>
                                        <span className="company"> Web Designer </span>
                                    </div>
                                </div>
                                <div className="resume-item" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon">
                                    <RiBookLine/>
                                    </div>
                                    <div className="content">
                                        <span className="years">2021 - 2023</span>
                                        <h4>Envato Theme Developer</h4>
                                        <span className="company">Web Development</span>
                                    </div>
                                </div>
                                <div className="resume-item" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon">
                                    <RiBookLine/>
                                    </div>
                                    <div className="content">
                                        <span className="years">2021 - 2022</span>
                                        <h4> Marketing Expert GRP</h4>
                                        <span className="company">Web Developer & Business Partner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} md={6}>
                    <div className="experience-list">
                            <div className="single-resume">
                                <h2>Education</h2>
                                <div className="resume-item" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon">
                                    <RiBookLine/>
                                    </div>
                                    <div className="content">
                                        <span className="years">2013 - 2015</span>
                                        <h4>Bachelor Degree of Information Technology</h4>
                                        <span className="company">State University bangladesh
                                        </span>
                                    </div>
                                </div>
                               <div className="resume-item" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon">
                                    <RiBookLine/>
                                    </div>
                                    <div className="content">
                                        <span className="years">2021 - 2024</span>
                                        <h4>Higher secoundery Education </h4>
                                        <span className="company">Premium College United VC</span>
                                    </div>
                                </div>
                               <div className="resume-item wow" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon">
                                        <RiBookLine/>
                                    </div>
                                    <div className="content">
                                        <span className="years">2021 - 2024</span>
                                        <h4>Webster College</h4>
                                        <span className="company"> UI/UX Design </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
      </section>
    );
}