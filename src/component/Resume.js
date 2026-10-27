import { RiBookLine, RiCodeBoxLine, RiDatabase2Line, RiBriefcaseLine } from "@remixicon/react";
import { Col, Container, Row } from "react-bootstrap";

export default function Resume() {
  return (
    <section className="resume-area" id="resume">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xl={12}>
            <div className="section-title text-center" data-aos="fade-up" data-aos-delay="200">
              <p>Resume</p>
              <h2>Education &amp; Experience</h2>
            </div>
          </Col>
        </Row>

        <div className="resume-items">
          <Row>
            {/* Education + Experience */}
            <Col xl={6} md={6}>
              <div className="single-resume">
                <h2>Education</h2>
                <div className="experience-list">
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><RiBookLine /></div>
                    <div className="content">
                      <span className="years">2026 — Completed</span>
                      <h4>B.Tech — Computer Science &amp; Information Technology</h4>
                      <span className="company">HITM Group of Institutions (AKTU), Lucknow</span>
                      <p className="resume-note">CGPA: 7.2</p>
                    </div>
                  </div>
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><RiBookLine /></div>
                    <div className="content">
                      <span className="years">Dec 2020 - Jul 2023</span>
                      <h4>Diploma in Information Technology</h4>
                      <span className="company">Govt. Girls Polytechnic, Varanasi (BTEUP)</span>
                      <p className="resume-note">Percentage: 80%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-resume mt-4">
                <h2>Experience</h2>
                <div className="experience-list">
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><RiBriefcaseLine /></div>
                    <div className="content">
                      <span className="years">Aug 18, 2026 — Present</span>
                      <h4>Softosys Solution Pvt Ltd</h4>
                      <span className="company">Software Developer</span>
                      <ul>
                        <li>Building and maintaining web applications with C#, ASP.NET Core, and ASP.NET MVC</li>
                        <li>Designing REST APIs and integrating SQL Server, Oracle, and PostgreSQL databases</li>
                        <li>Contributing to retail, hospital, and banquet management systems end-to-end</li>
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><RiBriefcaseLine /></div>
                    <div className="content">
                      <span className="years">Previous Experience</span>
                      <h4>Dynamic Edge Consultant Pvt. Ltd.</h4>
                      <span className="company">Developer</span>
                      <ul>
                        <li>Developed and maintained live software systems using ASP.NET Core, C#, and SQL Server</li>
                        <li>Built retail, hospital, and banquet management modules from frontend to database</li>
                        <li>Implemented REST APIs and database operations for real business workflows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Skills Overview */}
            <Col xl={6} md={6}>
              <div className="single-resume">
                <h2>Technical Skills</h2>
                <div className="experience-list">
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><RiCodeBoxLine /></div>
                    <div className="content">
                      <h4>Backend &amp; Frameworks</h4>
                      <ul>
                        <li><strong>C#</strong> — Core language for .NET development</li>
                        <li><strong>ASP.NET Core</strong> — Web applications and REST APIs</li>
                        <li><strong>ASP.NET MVC</strong> — Structured web application architecture</li>
                        <li><strong>REST API</strong> — Design and integration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><RiDatabase2Line /></div>
                    <div className="content">
                      <h4>Databases</h4>
                      <ul>
                        <li><strong>SQL Server</strong> — Queries, stored procedures, integration</li>
                        <li><strong>Oracle</strong> — Relational data handling</li>
                        <li><strong>PostgreSQL</strong> — Open-source relational database</li>
                        <li><strong>SQL</strong> — Query writing and optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-resume mt-4">
                <h2>Soft Skills</h2>
                <div className="experience-list">
                  <div className="resume-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><RiCodeBoxLine /></div>
                    <div className="content">
                      <h4>Professional Strengths</h4>
                      <ul>
                        <li>Project Management</li>
                        <li>Public Relations &amp; Teamwork</li>
                        <li>Time Management &amp; Leadership</li>
                        <li>Effective Communication</li>
                        <li>Critical Thinking</li>
                        <li>Languages: Hindi, English</li>
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