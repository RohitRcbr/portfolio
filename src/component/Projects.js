import projects from './projects.json';
import { RiArrowRightUpLine } from "@remixicon/react";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <section id="works" className="projects-area">
      <Container>
        <div className="container-inner">
          <Row>
            <Col xl={12}>
              <div className="section-title text-center" data-aos="fade-up" data-aos-delay="200">
                <p>Live Projects</p>
                <h2>Real Systems I've Built</h2>
                <p>
                  Production-style management systems developed with ASP.NET Core, C#, and SQL Server —
                  across retail, healthcare, and hospitality domains.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="project-masonry-active">
            {projects.map((project, i) => (
              <Col lg={4} md={6} className="item" key={i}>
                <div className="project-item style-two" data-aos="fade-up" data-aos-delay={300 + i * 100}>
                  <div className="project-image">
                    <img src={`/images/projects/${project.image}`} alt={project.title} />
                    {project.url && project.url !== '#' ? (
                      <a href={project.url} className="details-btn" target="_blank" rel="noreferrer">
                        <RiArrowRightUpLine />
                      </a>
                    ) : (
                      <span className="details-btn static-badge">
                        <RiArrowRightUpLine />
                      </span>
                    )}
                  </div>
                  <div className="project-content">
                    <span className="sub-title">{project.stack}</span>
                    <h3>{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
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