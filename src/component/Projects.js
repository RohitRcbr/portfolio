import projects from './projects.json';
import { RiArrowRightUpLine } from "@remixicon/react";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects(){
    return (
        <section id="works" className="projects-area">
      <Container>
        <div className="container-inner">
          <Row>
            <Col xl={12}>
              <div className="section-title text-center" data-aos="fade-up" data-aos-delay="200">
                <h2>Works & Projects</h2>
                <p>
                  From full-fledged company portals to scalable front-end UIs, here’s a curated list of my work—designed & developed with passion, precision, and performance.
                </p>
              </div>
            </Col>
          </Row>

          {/* <ul className="project-filter filter-btns-one justify-content-left pb-15" data-aos="fade-up" data-aos-delay="200">
            <li data-filter="*" className="current">Show All</li>
            <li data-filter=".design">Design</li>
            <li data-filter=".branding">Branding</li>
            <li data-filter=".development">Development</li>
            <li data-filter=".uiux">UI/UX</li>
          </ul> */}

          <Row className="project-masonry-active">
            {projects.map((project, i) => (
              <Col lg={4} md={6} className={`item ${project.category}`} key={i}>
                <div className="project-item style-two" data-aos="fade-up" data-aos-delay={300 + i * 100}>
                  <div className="project-image">
                    <img src={`/Images/projects/${project.image}`} alt={project.title} />
                    <a href={project.url} className="details-btn" target="_blank" rel="noreferrer">
                      <RiArrowRightUpLine />
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">{project.stack}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
    );
}