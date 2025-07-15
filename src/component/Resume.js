import { RiBookLine } from "@remixicon/react";
import { Col, Container, Row } from "react-bootstrap";

export default function Resume(){
    return (
      <section className="resume-area" id="resume">
        <Container>
            <div className="resume-items">
            <Row>
      {/* Experience Section */}
      <Col xl={6} md={6}>
        <div className="single-resume">
          <h2>Experience</h2>
          <div className="experience-list">
            <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><RiBookLine /></div>
              <div className="content">
                <span className="years">Jan 2024 - Present</span>
                <h4>Softosys Solution Pvt Ltd</h4>
                <span className="company">Front End Developer</span>
                <ul>
                  <li>Revamped legacy websites into modern responsive designs</li>
                  <li>Collaborated with backend developers for functional integration</li>
                  <li>Maintained performance and mobile optimization</li>
                </ul>
              </div>
            </div>
            <div className="resume-item" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><RiBookLine /></div>
              <div className="content">
                <span className="years">Nov 2020 - Dec 2023</span>
                <h4>Sri Technocrat</h4>
                <span className="company">Front End Developer</span>
                <ul>
                  <li>Transformed UI/UX designs into pixel-perfect interfaces</li>
                  <li>Led responsive design for multi-device compatibility</li>
                  <li>Successfully digitized Lucknow Christian College admissions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Col>

      {/* Education Section */}
      <Col xl={6} md={6}>
        <div className="single-resume">
          <h2>Education</h2>
          <div className="experience-list">
            <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><RiBookLine /></div>
              <div className="content">
                <span className="years">2018 - 2020</span>
                <h4>Diploma - Computer Science & Engineering</h4>
                <span className="company">Sri Ramswaroop Memorial University, Barabanki</span>
              </div>
            </div>
            <div className="resume-item" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><RiBookLine /></div>
              <div className="content">
                <span className="years">2016 - 2018</span>
                <h4>10+2 Intermediate - Science</h4>
                <span className="company">Rani Laxmi Bai Senior Secondary School, Lucknow</span>
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