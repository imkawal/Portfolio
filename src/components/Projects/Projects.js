import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="CoverYou"
              description="CoverYou is an online platform that serves as a one-stop destination for comparing and purchasing various insurance policies. With a user-friendly interface, it offers a wide range of insurance products, including health, life, motor, travel, and more."
              ghLink="https://github.com/imkawal"
              demoLink="https://coveryou.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MyCartPro"
              description="Canada based E-COMMERCE project, Get all your online fruits, vegetables, clothes, cosmetics, shoes etc. at lower price. Now MycartPro is best for online shopping 🛒🛍️."
              demoLink="https://mycartpro.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dr. Ashok Wellness Centre"
              description="Ecom Portal of Dr. Ashok (Uk Client), It also provides other medical services."
              ghLink="https://github.com/imkawal"
              demoLink="https://ecom.levnext.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MySchool AdminApp"
              description="It is a shortened app of MySchoolERP which is very helpful to watch daily attendance, staff attendance, paid vs pending fees, weekly test, results etc of school."
              ghLink="https://github.com/imkawal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="School Management System ERP"
              description="It is a School management system Software developed for managing daily schools activities and teachers can use to manage their Students, Staff, Exam, Timetable, Fee, SMS and many more features to increase and improve their management system."
             // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
               demoLink="https://myschool.levnext.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MySchool Parents App"
              description="This Mobile App is for Parents, so that they can track their ward perfomance and his/her presence."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://play.google.com/store/apps/details?id=com.levnext.myschool&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MySchool TransportApp"
              description="This app is very helpful to communicate the parents about the status of their wards that they have boarded-in or boarded-out the bus and what's the status of paid fees and pending fees of transportation app account head."
              ghLink="https://github.com/imkawal"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My School Staff App"
              description="This app is for staff members of a school through which they can mark their attendance as Present, Absent or they can also apply for the leave. They can also mark daily attendance of students through this app and they can use other features like today schedule timetable, weekly test, send Homework message etc."
             demoLink="https://play.google.com/store/apps/details?id=com.levnext.myschoolstaff&hl=en_US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="VLA Industries"
              description="E-commerce beckend designed for management of customers, orders, products, freight and Wallet transaction details.              "
             demoLink="https://vla.levnext.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LegalStix Social Media"
              description="It is Social Media Platform for lawyers, It can help lawyers to increase their connections & their networks."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://legalstix.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LegalStix Leads Management"
              description="It is a Leads Management System for LegalStix Law School."
              demoLink="https://crm.legalstixlawschool.in"
             />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
