import { Container, Row, Col } from "react-bootstrap";

export default function Skills(){
    return (
       <section id="skills" className="skill-area">
<Container>
    <Row className="justify-content-center">
<Col xl={12} lg={12}>
<div className="section-title text-center mb-60" data-aos="fade-up" data-aos-delay="200">
                        <p>Pro Skills</p>
                        <h2>Let’s Explore My Skills</h2>
                    </div>
</Col>
    </Row>
    <Row>
        <Col lg={12}>
        <div className="skill-items-wrap">
            <Row>
                <Col xl={3} lg={4} md={3} sm={4} xs={6}>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="200">
                                    <img src="assets/images/skills/skill1.png" alt="Skill" />
                                    <h5>Figma</h5>
                                    <span class="percent">99%</span>
                                </div>
                </Col>
                <Col xl={3} lg={4} md={3} sm={4} xs={6}>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="300">
                                    <img src="assets/images/skills/skill2.png" alt="Skill" />
                                    <h5>Tailwand</h5>
                                    <span class="percent">93%</span>
                                </div>
                </Col>
                <Col xl={3} lg={4} md={3} sm={4} xs={6}>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="400">
                                    <img src="assets/images/skills/skill3.png" alt="Skill" />
                                    <h5>Photoshop</h5>
                                    <span class="percent">53%</span>
                                </div>
                </Col>
                <Col xl={3} lg={4} md={3} sm={4} xs={6}>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="500">
                                    <img src="assets/images/skills/skill4.png" alt="Skill" />
                                    <h5>WordPress</h5>
                                    <span class="percent">74%</span>
                                </div>
                </Col>
                <Col xl={3} lg={4} md={3} sm={4} xs={6}>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="200">
                                    <img src="assets/images/skills/skill5.png" alt="Skill" />
                                    <h5>Angular</h5>
                                    <span class="percent">95%</span>
                                </div>
                </Col>
                <Col xl={3} lg={4} md={3} sm={4} xs={6}>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="300">
                                    <img src="assets/images/skills/skill6.png" alt="Skill" />
                                    <h5>Webflow</h5>
                                    <span class="percent">96%</span>
                                </div>
                </Col>
                <Col xl={3} lg={4} md={3} sm={4} xs={6}>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="400">
                                    <img src="assets/images/skills/skill7.png" alt="Skill" />
                                    <h5>Python</h5>
                                    <span class="percent">52%</span>
                                </div>
                </Col>
                <Col xl={3} lg={4} md={3} sm={4} xs={6}>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="500">
                                    <img src="assets/images/skills/skill8.png" alt="Skill" />
                                    <h5>Sketch</h5>
                                    <span class="percent">84%</span>
                                </div>
                </Col>
            </Row>
        </div>
        </Col>
    </Row>
</Container>
       </section>
    );
}