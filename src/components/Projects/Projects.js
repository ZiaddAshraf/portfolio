import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import auramac from "../../Assets/Projects/auramac.png";
import buildpro from "../../Assets/Projects/buildpro.png";
import wadidegla from "../../Assets/Projects/wadidegla.png";
import burgerbun from "../../Assets/Projects/burgerbun.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio website built with React and Bootstrap. Features responsive design, animated components, and showcases my projects and skills. Includes sections for About, Projects, and Resume with smooth navigation and particle effects."
              ghLink="https://github.com/ZiAaddd1/Portfolio-main"
              demoLink="https://ziaaddd1.github.io/Portfolio-main/"
              technologies={["React", "Bootstrap", "JavaScript", "CSS3"]}
              featured={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auramac}
              isBlog={false}
              title="AuraMac"
              description="An Angular-based web application with modern UI/UX design. Built using Angular 17 with TypeScript, featuring responsive layouts and interactive components. Includes server-side functionality and comprehensive testing setup."
              ghLink="https://github.com/ZiAaddd1/AuraMac"
              demoLink="https://ziaaddd1.github.io/AuraMac/"
              technologies={["Angular", "TypeScript", "HTML5", "SCSS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildpro}
              isBlog={false}
              title="BuildPro Construction Company"
              description="A professional construction company website template featuring modern design, responsive layout, and clean UI. Built with HTML5, CSS3, and JavaScript. Perfect for construction businesses looking for a professional web presence."
              ghLink="https://github.com/ZiAaddd1/BuildPro-Construction-Company-Website-Template"
              demoLink="https://ziaaddd1.github.io/BuildPro-Construction-Company-Website-Template"
              technologies={["HTML5", "CSS3", "JavaScript", "Responsive Design"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wadidegla}
              isBlog={false}
              title="Wadi Degla"
              description="A beautiful and responsive website featuring clean design and modern layout. Built with HTML, CSS, and JavaScript with focus on user experience and visual appeal. Includes interactive elements and smooth animations."
              ghLink="https://github.com/ZiAaddd1/Wadi-degla"
              demoLink="https://ziaaddd1.github.io/Wadi-degla/"
              technologies={["HTML5", "CSS3", "JavaScript", "UI/UX"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burgerbun}
              isBlog={false}
              title="Burger Bun"
              description="A mouth-watering restaurant website for a burger joint. Features appetizing design, menu showcase, and responsive layout. Built with HTML, CSS, and JavaScript to create an engaging user experience for food lovers."
              ghLink="https://github.com/ZiAaddd1/Burger-Bun"
              demoLink="https://ziaaddd1.github.io/Burger-Bun/"
              technologies={["HTML5", "CSS3", "JavaScript", "Restaurant UI"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
