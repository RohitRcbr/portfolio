import { Col, Container, Row, Modal, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinBoxFill, RiGithubFill, RiMailAddLine, RiDownloadLine } from "@remixicon/react";
export default function About(){
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
                <div data-aos="fade-up"  data-aos-delay="300" className="about-image-part">
                        <div className="about-image-part2">
							<img src="/images/profile.png" alt="About Me" />
						</div>
                        <h2>Rohit Chauhan</h2>
                        <p>I am a Web Designer, Frontend Developer based on Lucknow, UP.</p>
                        <div className="about-social text-center">
                            <ul>
                                <li><a href="#"><RiFacebookCircleFill /></a></li>
                                <li><a href="mailto:rcbr786@gmail.com"><RiMailAddLine /></a></li>
                                <li><a href="linkedin.com/in/rohit-chauhan-050276184"><RiLinkedinBoxFill /></a></li>
                                <li><a href="https://github.com/RohitRcbr/" target="_blank"><RiGithubFill /></a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg={8}>
                <div className="about-content-part" data-aos="fade-up" data-aos-delay="200">
                        <p>Hello There!</p>
                        <h2>
                            I’m <span>Rohit Chauhan</span>, a web designer, frontend developer crafting <span>user-centric design</span> with pixel-perfect precision.
                        </h2>
                        <div className="adress-field">
                            <ul>
                                <li><i className="ri-circle-fill"></i>Available for Freelancing</li>
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
            Download PDF
            <RiDownloadLine/>
            </>
        )}
      </Button>
                        </div>
                    </div>
                    <div className="about-content-part-bottom" data-aos="fade-up" data-aos-delay="200">
						<div className="company-list">
                            <div className="scroller" data-direction="left" data-speed="slow">
                                <div className="scroller__inner">
                                    <h4>Bank lotpat kora amr main kaj.</h4>
                                    <h4>Manusher taka ami mere khai</h4>
                                    <h4>Ami khuni hasinar lok</h4>
                                    <h4>Ami desh chere palaite chaichilam</h4>
                                    <h4>Kinto pari nai</h4>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </Col>
            </Row>
        </Container>
        <Modal
        show={showThankYou}
        onHide={handleClose}
        centered
        animation={true} // Bootstrap animation
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