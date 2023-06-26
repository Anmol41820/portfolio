import React from 'react';
import { Container, Row, Col, TabContainer, Tab,Nav } from "react-bootstrap";
import Particle from "../Particle";
import ServiceCard from './ServiceCard';
import "../Projects/project.css";


import webs from "../../Assets/Services/web.gif";
import game from "../../Assets/Services/game.png";
import film from "../../Assets/Services/film.png";
import tech from "../../Assets/Services/tech.png";
import antaragni from "../../Assets/Services/antaragni.png";

function Service() {
  return (
    
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Services </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few services I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            
            <Col md={4} className="project-card">
                <ServiceCard
                imgPath={webs}
                title="Mentor in Association for Computing Activities(ACA) Project"
                description=""
                />
            </Col>
            <Col md={4} className="project-card">
                <ServiceCard
                imgPath={game}
                title="Secretary in Game Development Society, IIT Kanpur"
                description=""
                />
            </Col>
            <Col md={4} className="project-card">
                <ServiceCard
                imgPath={tech}
                title="Senior Executive (Design and Show Management) in Techkriti’22 (TechFest of IIT Kanpur)"
                description=""
                />
            </Col>
            <Col md={4} className="project-card">
                <ServiceCard
                imgPath={antaragni}
                title="Senior Executive (Videography) in Antaragni’21 (Cultural Fest of IIT Kanpur)"
                description=""
                />
            </Col>
            <Col md={4} className="project-card">
                <ServiceCard
                imgPath={film}
                title="Secretary in Film Club, IIT Kanpur"
                description=""
                />
            </Col>

          
          
        </Row>
      </Container>
    </Container>
    
  );
}

export default Service




