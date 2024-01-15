import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import social from "../../Assets/Projects/social.png";
import weather from "../../Assets/Projects/weather.png";
import task from "../../Assets/Projects/task.png";
import doc from "../../Assets/Projects/doc.png";
import travel from "../../Assets/Projects/travel.png";
import finance from "../../Assets/Projects/finance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Media mania"
              description="Media Mania is a Designed a Full Stack web application using the MERN stack to create a functional Insta clone."
              ghLink="https://github.com/yogesh087/Insta-clone"
              demoLink="https://media-mania.cyclic.cloud/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Task scheduler"
              description="Task scheduler is a MERN application serves as a digital platform for users to monitor and manage their financial activities, providing tools for budgeting, expense tracking, and income analysis.  "
              ghLink="https://github.com/yogesh087/Task-Scheduler-app"
              demoLink="https://taks.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Xchange-crypto"
              description="Designed and developed a Front End web Application  which uses ReactJS, Material UI, Axios, Chart.js to keep track of
the Cryptocurrency all overthe world."
              ghLink="https://github.com/yogesh087/Crypto-app"
              demoLink="https://xchange-crypto.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doc}
              isBlog={false}
              title="Todo"
              description="Todo is a web application built using HTML, CSS and javascript that nables users to create, organize, and prioritize their daily tasks efficiently."
              ghLink="https://github.com/yogesh087/TodoList"
              demoLink="https://public-todo.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Sorting-Algo"
              description="It is a web applictaion built using HTML ,CSS and javscript which allows the user to see and do live sorting Algorithm."
              ghLink="https://github.com/yogesh087/Sorting-algorithm"
              demoLink="https://live-sorting.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Web Application"
              description="This is a basic project built using HTML, CSS and vanilla JavaScript and uses weather api to get the details of weather of a place by entering location."
              ghLink="https://github.com/yogesh087/weather-app"
              demoLink="https://live-weathereport.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
