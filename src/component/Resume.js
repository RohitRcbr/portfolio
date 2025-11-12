import { RiBookLine, RiCodeBoxLine, RiDatabase2Line } from "@remixicon/react";
import { Col, Container, Row } from "react-bootstrap";

export default function Resume() {
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
                    <div className="icon"><RiCodeBoxLine /></div>
                    <div className="content">
                      <span className="years">Jan 2024 - Present</span>
                      <h4>Softosys Solution Pvt Ltd</h4>
                      <span className="company">Fullstack Developer</span>
                      <ul>
                        <li>Developed and maintained fullstack applications using PHP and .NET frameworks</li>
                        <li>Designed and optimized database schemas in MySQL and SQL Server</li>
                        <li>Built RESTful APIs and integrated frontend interfaces with backend systems</li>
                        <li>Revamped legacy systems into modern, scalable fullstack solutions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><RiCodeBoxLine /></div>
                    <div className="content">
                      <span className="years">Nov 2020 - Dec 2023</span>
                      <h4>Sri Technocrat</h4>
                      <span className="company">Fullstack Developer</span>
                      <ul>
                        <li>Engineered end-to-end web applications using PHP with MySQL/SQL Server</li>
                        <li>Developed responsive frontend interfaces integrated with .NET backend services</li>
                        <li>Led the complete digital transformation of Lucknow Christian College admissions system</li>
                        <li>Optimized database performance and implemented efficient data management solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Education & Skills Section */}
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

              {/* Technical Skills */}
              <div className="single-resume mt-4">
                <h2>Technical Skills</h2>
                <div className="experience-list">
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><RiDatabase2Line /></div>
                    <div className="content">
                      <h4>Backend & Databases</h4>
                      <ul>
                        <li><strong>PHP</strong> - Laravel, CodeIgniter</li>
                        <li><strong>.NET</strong> - ASP.NET, C#</li>
                        <li><strong>MySQL</strong> - Database Design, Optimization</li>
                        <li><strong>SQL Server</strong> - Stored Procedures, Query Optimization</li>
                        <li>RESTful API Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon"><RiCodeBoxLine /></div>
                    <div className="content">
                      <h4>Frontend & Tools</h4>
                      <ul>
                        <li><strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong></li>
                        <li><strong>React</strong>, <strong>Bootstrap</strong>, jQuery</li>
                        <li>Responsive Web Design</li>
                        <li>Git, GitHub, VS Code</li>
                        <li>Agile Methodologies</li>
                      </ul>
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