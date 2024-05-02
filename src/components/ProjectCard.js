import { Col, Badge } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, skills }) => {
  return (
    <Col size={12} sm={12} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={""} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <div>
            {skills.map((skill, index) => (
              <Badge key={index} pill bg="light" text="dark" className="me-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Col>
  )
}
