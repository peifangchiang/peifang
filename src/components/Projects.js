import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-GoodEats.png";
import projImg2 from "../assets/img/project-MessageBoard.png";
import projImg3 from "../assets/img/project-InternationalShopping.png";
import projImg4 from "../assets/img/project-Amazon.png";
import projImg5 from "../assets/img/project-Activity+.png";

export const Projects = () => {

  const projects = [
    {
      title: "GoodEats",
      description: "GoodEats is a fullstack web app. It's built for kitchen lovers to share their recipes and stay connected. Click <a href='https://goodeats-ui.vercel.app/home'>website</a> to view app deployed on Vercel. Visit <a href='https://github.com/CKYWEB/good-eats'>GitHub</a> to learn more.",
      skills: ["React", "Node.js", "Redux", "MongoDB", "API"],
      imgUrl: projImg1,
    },
    {
      title: "Message Board",
      description: "Message Board is a Java application, focusing on implementing data structures and algorithms. Visit <a href='https://github.com/kaohenry9287/INFO6205_messageBoard'>GitHub</a> to learn more.",
      skills: ["Java", "Algorithms", "Data Structure", "JavaFX"],
      imgUrl: projImg2,
    },
    {
      title: "Amazon App Redesign",
      description: "This project incorporated X (Twitter) like functionality in Amazon, drawing users away from X, and into the Amazon ecosystem. Visit <a href='https://www.figma.com/file/NUYOaTfR0A5xGv2p4P5D7M/Pei-Fang-Chiang_Spring24?type=design&node-id=819-290&mode=design'>Figma</a> to learn more about the portfolio and high fidelity prototype.",
      skills: ["Figma", "User Experience Design", "Sprint Design", "Problem-Solving"],
      imgUrl: projImg4,
    },
    {
      title: "Activity +",
      description: "Acitity + aims to help people find events and stay connected with their community. This app is built by conducting complete design process. Visit <a href='https://www.figma.com/file/NUYOaTfR0A5xGv2p4P5D7M/Pei-Fang-Chiang_Spring24?type=design&node-id=411-686&mode=design'>prototype</a> and <a href='https://www.figma.com/file/NUYOaTfR0A5xGv2p4P5D7M/Pei-Fang-Chiang_Spring24?type=design&node-id=149-5&mode=design'>portfolio</a> to learn more.",
      skills: ["Usability Test", "UIUX", "Wireframe", "Prototype"],
      imgUrl: projImg5,
    },
    {
      title: "International Shopping Platform",
      description: "This platform is developed with Java on the back end and Swing on the front end. It enables international company to track their orders and inventory. Visit <a href='https://github.com/aed5100/final-project-tfboys3-0'>GitHub</a> to learn more.",
      skills: ["Java", "Swing", "Git"],
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <div>
          <p className="title">Projects</p>
          <Row>
            {
              projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    {...project}
                  />
                )
              })
            }
          </Row>
        </div>
      </Container>
    </section>
  )
}
