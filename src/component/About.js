import { Col, Container, Row, Modal, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMailAddLine,
  RiDownloadLine,
  RiPhoneLine,
} from "@remixicon/react";

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const downloadPDF = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/Arti_Gupta_CV.pdf');
      if (!response.ok) throw new Error('CV not found');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'Arti_Gupta_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setIsDownloading(false);
      setShowThankYou(true);
    } catch (err) {
      alert('Download failed! Please try again.');
      setIsDownloading(false);
    }
  };

  const handleClose = () => setShowThankYou(false);

  return (
    <section className="about-area" id="about">
      <Container>
        <Row>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-delay="300" className="about-image-part">
              <div className="about-image-part2">
                <img src="/images/arti-profile.png" alt="Arti Gupta" />
              </div>
              <h2>Arti Gupta</h2>
              <p>Entry-level Software Developer focused on C#, ASP.NET Core, and REST APIs — building solid backend & database foundations.</p>

              <div className="about-info-list">
                <p><RiPhoneLine /> +91 97957 18060</p>
                <p><RiMailAddLine /> artigupta75993@gmail.com</p>
                <p>📍 Ballia, Uttar Pradesh, 277001</p>
              </div>

              <div className="about-social text-center">
                <ul>
                  <li><a href="mailto:artigupta75993@gmail.com" aria-label="Email"><RiMailAddLine /></a></li>
                  <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><RiLinkedinBoxFill /></a></li>
                  <li><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><RiGithubFill /></a></li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="about-content-part" data-aos="fade-up" data-aos-delay="200">
              <p>Hello There!</p>
              <h2>
                I'm <span>Arti Gupta</span>, an entry-level <span>Software Developer</span> with hands-on
                experience in <span>C#, ASP.NET Core, ASP.NET MVC</span>, and <span>REST APIs</span>, along with
                strong database skills in <span>SQL Server, Oracle, and PostgreSQL</span>.
              </h2>

              <div className="adress-field">
                <ul>
                  <li><i className="ri-circle-fill"></i>Open to full-time opportunities</li>
                  <li><i className="ri-circle-fill"></i>Backend &amp; API development</li>
                  <li><i className="ri-circle-fill"></i>Database design &amp; SQL</li>
                  <li><i className="ri-circle-fill"></i>Live project experience</li>
                </ul>
              </div>

              <div className="hero-btns">
                <Button className="theme-btn" onClick={downloadPDF} disabled={isDownloading}>
                  {isDownloading ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      Download CV <RiDownloadLine />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={12}>
            <div className="about-content-part-bottom" data-aos="fade-up" data-aos-delay="200">
              <div className="company-list">
                <h4>Professional Profile</h4>
                <p className="mb-0">
                  Entry-level Software Developer with knowledge of <strong>C#</strong>, <strong>ASP.NET Core</strong>,
                  <strong> ASP.NET MVC</strong>, <strong>REST API</strong>, <strong>SQL</strong>,
                  <strong> Oracle</strong>, and <strong>PostgreSQL</strong>. Seeking an opportunity to contribute to
                  application development while enhancing backend, API, and database development skills.
                  Hands-on experience developing live management systems across retail, healthcare, and hospitality
                  domains. Strong collaborator with solid project management, communication, and critical thinking
                  skills, based in Lucknow, Uttar Pradesh.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showThankYou} onHide={handleClose} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>✅ Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your CV download has started.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}