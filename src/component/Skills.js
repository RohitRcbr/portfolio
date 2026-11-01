import skills from './skills.json';
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
                  {skills.map((skill, i) => (
                    <Col xl={3} lg={3} md={3} sm={4} xs={6} key={i}>
                      <div className="skill-item" data-aos="fade-up" data-aos-delay={skill.delay}>
                      <img src={skill.image} alt={skill.name} />
                        <h5>{skill.name}</h5>
                        <span className="percent">{skill.percent}%</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}