import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ServiceCard(props) {
  return (

    // <Col sm={6} md={4}>
    //     <div className="proj-imgbx">
    //         <img src={props.imgPath} alt="card-img"/>
    //         <div className="proj-txtx">
    //             <h4>{props.title}</h4>
    //             <span>{props.description}</span>
    //         </div>
    //     </div>
    // </Col>

    <Card className="proj-imgbx  project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      
      <Card.Body className="proj-txtx">
        <Card.Title style={{ fontWeight: "bold" ,fontSize: 30}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default ServiceCard


