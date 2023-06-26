import React from "react";
import { Container} from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const Feedback = () => {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
        Kindly fill the <strong className="purple">feedback form </strong>
        </h1>
        
        </Container>
        <h2><a href="https://forms.gle/oTWRgTgJGWSnuCUX8">Click Me !!!</a></h2>
        <Particle />
      </Container>
    

    
  )
};

export default Feedback



