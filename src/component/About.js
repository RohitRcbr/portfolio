import { Col, Container, Row, Modal, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiGithubFill, RiMailAddLine, RiDownloadLine } from "@remixicon/react";

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const downloadPDF = async () => {
    setIsDownloading(true);

    try {
      const response = await fetch('/Rohit_cv.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'RohitCV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();

      setIsDownloading(false);
      setShowThankYou(true);
    } catch (err) {
      alert('Download failed!');
      setIsDownloading(false);
    }
  };

  const handleClose = () => setShowThankYou(false);

  return (
    <section className="about-area" id="">
      <Container>
        <Row>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-delay="300" className="about-image-part">
              <div className="about-image-part2">
                <img src="/images/profile.png" alt="About Me" />
              </div>
              <h2>Rohit Chauhan</h2>
              <p>Fullstack Developer specializing in PHP, .NET, and modern frontend technologies based in Lucknow, UP.</p>
              <div className="about-social text-center">
                <ul>
                  <li><a href="void:"><RiFacebookCircleFill /></a></li>
                  <li><a href="mailto:rcbr786@gmail.com"><RiMailAddLine /></a></li>
                  <li><a href="linkedin.com/in/rohit-chauhan-050276184"><RiLinkedinBoxFill /></a></li>
                  <li><a href="https://github.com/RohitRcbr/" target="_blank" rel="noreferrer"><RiGithubFill /></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="about-content-part" data-aos="fade-up" data-aos-delay="200">
              <p>Hello There!</p>
              <h2>
                I'm <span>Rohit Chauhan</span>, a Fullstack Developer specializing in <span>PHP & .NET backend</span> with <span>modern frontend technologies</span>, crafting complete web solutions from database to UI.
              </h2>
              <div className="adress-field">
                <ul>
                  <li><i className="ri-circle-fill"></i>Available for Freelancing</li>
                  <li><i className="ri-circle-fill"></i>Fullstack Development</li>
                  <li><i className="ri-circle-fill"></i>PHP & .NET Backend</li>
                  <li><i className="ri-circle-fill"></i>Database Design & Optimization</li>
                </ul>
              </div>
              <div className="hero-btns">
                <Button className="theme-btn" onClick={downloadPDF} disabled={isDownloading}>
                  {isDownloading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Downloading...
                    </>
                  ) : (
                    <>
                      Download CV
                      <RiDownloadLine />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={12}>

            <div className="about-content-part-bottom" data-aos="fade-up" data-aos-delay="200">
              <div className="company-list">
                <p className="mb-0">
                  Experienced Fullstack Developer with 5 years of expertise in end-to-end web development.
                  Proficient in backend technologies including <strong>PHP</strong> and <strong>.NET</strong> frameworks,
                  with extensive database experience in <strong>MySQL</strong> and <strong>SQL Server</strong>.
                  Strong frontend skills in <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>,
                  and modern frameworks like <strong>Bootstrap</strong> and <strong>React</strong>.
                  Specialized in creating robust, scalable applications with optimized database architecture
                  and responsive user interfaces. Passionate about fullstack development best practices
                  and committed to delivering high-performance web solutions that bridge seamless user
                  experiences with efficient backend systems.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal
        show={showThankYou}
        onHide={handleClose}
        centered
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>✅ Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your PDF download has started.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}