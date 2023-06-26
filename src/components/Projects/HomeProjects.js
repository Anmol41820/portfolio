import React from 'react';
import { Container, Row, Col, TabContainer, Tab,Nav } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import "./project.css";

import restorent from "../../Assets/Projects/restorent.png";
import attendance from "../../Assets/Projects/attendance.png";
import todo from "../../Assets/Projects/todo.png";
import vr from "../../Assets/Projects/vr.png";
import upload from "../../Assets/Projects/upload.png";
import road from "../../Assets/Projects/road.png";
import john from "../../Assets/Projects/john.png";
import car from "../../Assets/Projects/car.png";
import cancer from "../../Assets/Projects/cancer.png";
import drum from "../../Assets/Projects/drum.png";
import simon from "../../Assets/Projects/simon.png";
import tindog from "../../Assets/Projects/tindog.png";

function HomeProjects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            

            {/* <div class="pj-container">
                <div class="p-box">
                    <div class="p-imgbx">
                        <img src="attendance.png" alt=''/>
                    </div>
                    <div class="p-contentbx">
                        <h4>Machine Learning</h4>
                        <p>•Developed a mini compiler for JAVA language using C++ language</p>
                        <a href="/project" target="_blank">Projects </a>
                    </div>
                </div>
            </div> */}

            <Col>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-palls mb-10 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Machine Learning</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Web Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Game Development</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={attendance}
                                    isBlog={false}
                                    title="Microsoft Intern Engage | Facial Recognition and Student Attendance System"
                                    description="Application takes all the student data including photo and store in the database of MySQL. Attendance is marked automatically. It also constains few games to enjoy - Making the sketch automatically and Facial emotion using your face via camera instantaneous."
                                    ghLink="https://github.com/Anmol41820/Attendance-system-Facial-Recognition-/tree/master"
                                    />
                                </Col>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={cancer}
                                    isBlog={false}
                                    title="Analysis and Recognition of Cancer Regions"
                                    description="This is an UGP i.e, Undergraduate project, worked under prof. of IIT Kanpur Prof. Tushar Sandhan. Deal with HAM10000 datasets for various type of cancer detection and recognition. Use TensorFlow and Pytorch in the project"
                                    ghLink="https://github.com/Anmol41820/Attendance-system-Facial-Recognition-/tree/master"
                                    
                                    />
                                </Col>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={road}
                                    isBlog={false}
                                    title="Is-The-Road-Safe"
                                    description=" Built a Machine Learning model for the detection as well as recognition of multiple objects simultaneously using image or video. Using tensorflow and open cv libraries and Keras to use prebuild model and improve the accuracy by up to 80%."
                                    ghLink="https://github.com/Anmol41820/Road-to-safe-P-Club-/tree/master"
                                    
                                    />
                                </Col>

                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={todo}
                                    isBlog={false}
                                    title="Todo List"
                                    description="Build using React. It contains all the ’CURD’ operation in the application i.e, you can create, update, read and delete any list
                                    "
                                    ghLink="https://github.com/Anmol41820/Todo-List-Application/tree/master"
                                    demoLink="https://todolistanmol.netlify.app/"
                                                
                                    />
                                </Col>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={restorent}
                                    isBlog={false}
                                    title="Restaurant Application"
                                    description="Build using React. Build an API for it, includes food for sections like breakfast, dinner, evening and all."
                                    ghLink="https://github.com/Anmol41820/Restaurant-Application/tree/master"
                                    
                                    />
                                </Col>

                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={upload}
                                    isBlog={false}
                                    title="Uploader Web App"
                                    description="Build using python and flask framework. User uploads any file and only admin can download any file."
                                    ghLink="https://github.com/Anmol41820/Uploader-Web-App/tree/master"
                                    // demoLink="https://todolistanmol.netlify.app/"
                                    />
                                </Col>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={tindog}
                                    isBlog={false}
                                    title="TinDog Website"
                                    description="TinDog is a fictional dating website for dogs that was featured in the TV show 'The Big Bang Theory'.TinDog is portrayed as a humorous concept, where dogs can 'swipe right' to indicate interest in other dogs, and owners can then arrange playdates for their pets. Build using HTML and CSS."
                                    ghLink="https://github.com/Anmol41820/Front-End-Site/tree/main"
                                    demoLink="https://anmol41820.github.io/Front-End-Site/tinDog.html"
                                    />
                                </Col>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={drum}
                                    isBlog={false}
                                    title="DrumKit Web App"
                                    description="A drum kit app is a software application that allows users to play virtual drums on their mobile devices or computers. This apps typically simulate the experience of playing a real drum kit by providing a graphical representation of a drum. Build using HTML, CSS and Js."
                                    ghLink="https://github.com/Anmol41820/Front-End-Site/tree/main"
                                    demoLink="https://anmol41820.github.io/Front-End-Site/drum.html"
                                    />
                                </Col>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={simon}
                                    isBlog={false}
                                    title="Simon Web App"
                                    description="Simon is a classic electronic memory game that has been popular since its introduction in the late 1970s. The objective of Simon is to repeat a sequence of colored lights and sounds in the correct order. The game starts with a single light/sound, and as you progress, the sequence becomes longer and more challenging. Build using HTML, CSS and Js."
                                    ghLink="https://github.com/Anmol41820/Front-End-Site/tree/main"
                                    demoLink="https://anmol41820.github.io/Front-End-Site/simon.html"
                                    />
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={vr}
                                    isBlog={false}
                                    title="Surge Intern | Virtual Reality"
                                    description="This is an research intern under a prof. of IIT Kanpur Prof. Arjun Ramakrishnan.  Making an open-world game in which the user has to take his/her decision to make the reward maximum. Use LSL to collect data from unity and connect unity with VR. Also conducted a survey in college for feedback."
                                    ghLink="https://github.com/Anmol41820/Attendance-system-Facial-Recognition-/tree/master"
                                    
                                    />
                                </Col>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={john}
                                    isBlog={false}
                                    title="John Lemon Game"
                                    description=" A horror game built in Unity with high graphics revolution consists of a dull house with dull lighting and ghosts. Use unity as a software and C# for programming."
                                    ghLink="https://github.com/Anmol41820/evaluation-1/tree/alternate"
                                    
                                    />
                                </Col>
                                <Col md={4} className="project-card">
                                    <ProjectCard
                                    imgPath={car}
                                    isBlog={false}
                                    title="Ultimate Racer Game"
                                    description="Car racing is a popular motorsport that involves competitive racing of automobiles. It is a thrilling and high-speed sport that attracts both participants and spectators from around the world. A racing game in which users can race on the race track (realistic racing track build in unity)."
                                    ghLink="https://github.com/Anmol41820/ultimate-racer"
                                    />
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
          
          
        </Row>
      </Container>
    </Container>
  );
}

export default HomeProjects