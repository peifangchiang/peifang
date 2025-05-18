import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          setClicked(false);
        }, 1000);
      }
    }
  }, [clicked]);

  const handleButtonClick = () => {
    setClicked(true);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="px-5">Hi, I am Pei-Fang Chiang.</p>
            <p className="px-5">
              I am passionate about building software applications that address
              everyday challenges and make people's lives easier. Below you will
              find the selection of my projects.
            </p>
            <button onClick={handleButtonClick} className="px-5">
              View My Projects <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
