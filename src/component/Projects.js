import { RiArrowRightUpLine } from "@remixicon/react";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects(){
    return (
        <section id="works" className="projects-area">
            <Container>
                <div className="container-inner">
                    <Row>
                        <Col xl={12} lg={12}>
                        <div class="section-title text-center" data-aos="fade-up" data-aos-delay="200">
                            <h2>Works & Projects</h2>
                            <p>Check out some of my design projects, meticulously crafted with love and dedication,
                                each one reflecting the passion and soul I poured into every detail.</p>
                        </div>
                        </Col>
                    </Row>
                    <ul class="project-filter filter-btns-one justify-content-left pb-15" data-aos="fade-up" data-aos-delay="200">
                    <li data-filter="*" class="current">Show All</li>
                    <li data-filter=".design">Design</li>
                    <li data-filter=".branding">Branding</li>
                    <li data-filter=".marketing">Marketing</li>
                    <li data-filter=".game">Game</li>
                </ul>
                <Row className="project-masonry-active">
                    <Col lg={4} md={6} className="item branding game">
                    <div class="project-item style-two" data-aos="fade-up" data-aos-delay="300">
                            <div class="project-image">
                                <img src="assets/images/projects/work1.jpg" alt="Project"/>
                                 <a href="assets/images/projects/work1.jpg" class="details-btn work-popup"><RiArrowRightUpLine/></a>
                            </div>
                            <div class="project-content">
                                <span class="sub-title">Branding</span>
                                <h3>Mobile Application Design</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="item branding game">
                    <div class="project-item style-two" data-aos="fade-up" data-aos-delay="400">
                            <div class="project-image">
                                <img src="assets/images/projects/work2.jpg" alt="Project"/>
                                <a href="https://www.youtube.com/watch?v=qZEPs3vmYB4" class="details-btn popup-youtube"><RiArrowRightUpLine/></a>
                            </div>
                            <div class="project-content">
                                <span class="sub-title">Design</span>
                                <h3>Website Makeup Design</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="item branding game">
                    <div class="project-item style-two" data-aos="fade-up" data-aos-delay="500">
                            <div class="project-image">
                                <img src="assets/images/projects/work3.jpg" alt="Project"/>
                                <a href="assets/images/projects/work3.jpg" class="details-btn work-popup"><RiArrowRightUpLine/></a>
                            </div>
                            <div class="project-content">
                                <span class="sub-title">Graphics</span>
                                <h3>Brand Identity and Motion Design</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="item branding game">
                    <div class="project-item style-two" data-aos="fade-up" data-aos-delay="600">
                            <div class="project-image">
                                <img src="assets/images/projects/work4.jpg" alt="Project"/>
                                <a href="assets/images/projects/work4.jpg" class="details-btn work-popup"><RiArrowRightUpLine/></a>
                            </div>
                            <div class="project-content">
                                <span class="sub-title">Game</span>
                                <h3>Mobile Application Design</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="item branding game">
                    <div class="project-item style-two" data-aos="fade-up" data-aos-delay="700">
                            <div class="project-image">
                                <img src="assets/images/projects/work5.jpg" alt="Project"/>
                                <a href="assets/images/projects/work5.jpg" class="details-btn work-popup"><RiArrowRightUpLine/></a>
                            </div>
                            <div class="project-content">
                                <span class="sub-title">Branding</span>
                                <h3>Application Design</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="item branding game">
                    <div class="project-item style-two" data-aos="fade-up" data-aos-delay="800">
                            <div class="project-image">
                                <img src="assets/images/projects/work6.jpg" alt="Project"/>
                                <a href="https://www.youtube.com/watch?v=qZEPs3vmYB4" class="details-btn popup-youtube"><RiArrowRightUpLine/></a>
                            </div>
                            <div class="project-content">
                                <span class="sub-title">Design</span>
                                <h3>Website Development</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </section>
    );
}