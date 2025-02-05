import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mine.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAws, FaDocker, FaJenkins, FaCloud } from "react-icons/fa";
import { SiTerraform, SiPulumi, SiPrometheus, SiGrafana } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
           { <Col md={8} className="home-about-description">
          <p className="home-about-body">
          <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            🚀 Hey there! I’m <b className="purple">Abhilash Shettigar</b>, a
            passionate
            <b className="purple"> DevOps & Cloud Engineer</b> who loves
            building
            <b className="purple">
              {" "}
              scalable, secure, and automated cloud solutions.
            </b>
            <br />
            <br />I specialize in{" "}
            <i>
              <b className="purple">
                AWS <FaAws />, Terraform{" "}
                <SiTerraform />, and Pulumi <SiPulumi />.
              </b>
            </i>
            <br />
            <br />
            My field of interest revolves around
            <i>
              <b className="purple">
                {" "}
                Cloud Infrastructure, Automation, and Observability{" "}
              </b>
            </i>
            with expertise in{" "}
            <b className="purple">
              CI/CD pipelines, Security, and Multi-Cloud Deployments.
            </b>
            <br />
            <br />
            Whenever possible, I leverage my skills to build cutting-edge
            solutions using
            <i>
              <b className="purple">
                {" "}
                GitOps, Jenkins <FaJenkins />, Prometheus <SiPrometheus />,
                Grafana <SiGrafana />, Kubernetes and Docker <FaDocker />.
              </b>
            </i>
            <br />
            <br />
            When I’m not working on cloud infrastructure, I’m exploring new
            technologies, contributing to open source, and sharing knowledge
            with the DevOps community. Let’s connect and build something
            amazing! 🚀🔥
          </p>
          </Col> }
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abhilashshettigar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhilash-shettigar-aka0512/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
