import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anmol Gupta </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br /> I am 4th year UG student and currently pursuing Bachelor of Technology (BTech) from <span className="purple">Indian Institute of Technology, Kanpur.</span> 
            <br />
            I am technology enthusiast as I explored various field of technology in my follower years of my college. I explored in the field of <span className="purple">Artificial intelligence, Machine learning, Web development, Deep learning, Blockchain and Game development. </span>
            <br />
            I do <span className="purple">Competetive Programming </span> using C++, and rated <span className="purple">1200+ </span> on Codeforces.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating content for You-Tube
            </li>
            <li className="about-activity">
            <ImPointRight /> Driving Cars and Riding Bikes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anmol</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
