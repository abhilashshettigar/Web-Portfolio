import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ABHILASH SHETTIGAR </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently employed as a SDE-L3 at Coffeebeans.
            <br />
            I have completed MCA from GLS University
            <br />
            <br />
            Apart from DevOps activities, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing FPS Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Understanding Next-Gen Trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Solo Rider
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
