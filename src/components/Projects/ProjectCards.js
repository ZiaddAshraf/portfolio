import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsStarFill } from "react-icons/bs";

function ProjectCards(props) {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <Card className="project-card-view h-100 shadow-lg">
      <div className="card-img-container">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt={`${props.title} screenshot`} 
          className="project-card-img"
          onError={handleImageError}
        />
        
        <div className="card-overlay">
          <div className="overlay-buttons">
            <Button 
              variant="light" 
              href={props.ghLink} 
              target="_blank"
              className="overlay-btn"
              size="sm"
            >
              <BsGithub />
            </Button>
            {!props.isBlog && props.demoLink && (
              <Button 
                variant="light" 
                href={props.demoLink} 
                target="_blank"
                className="overlay-btn"
                size="sm"
              >
                <CgWebsite />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Card.Title className="project-title">
            {props.title}
            {props.featured && (
              <BsStarFill className="featured-star ms-2" />
            )}
          </Card.Title>
        </div>
        
        {props.technologies && (
          <div className="mb-3">
            {props.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                bg="secondary" 
                className="me-1 mb-1 tech-badge"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        
        <Card.Text className="project-description flex-grow-1">
          {props.description}
        </Card.Text>
        
        <div className="card-actions mt-auto">
          <Button 
            variant="outline-primary" 
            href={props.ghLink} 
            target="_blank"
            className="me-2 action-btn"
            size="sm"
          >
            <BsGithub className="me-1" />
            {props.isBlog ? "Blog" : "Code"}
          </Button>
          
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="action-btn"
              size="sm"
            >
              <CgWebsite className="me-1" />
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
