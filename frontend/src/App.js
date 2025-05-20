import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Card, Container, Row, Col } from "react-bootstrap";
import "./App.css"; 

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "Dannel vestro",
      description: "Learn the basics of React including components, hooks, and state management.",
      duration: "6 hours",
      level: "Beginner",
      category: "Web Development",
      thumbnail: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Taylor Vistra",
      description: "Explore closures, prototypes, async programming, and more.",
      duration: "8 hours",
      level: "Advanced",
      category: "Programming",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s",
    },
  ];

  const handleShow = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedCourse(null);
    setShowModal(false);
  };

  return (
    <div className="futuristic-bg text-white min-vh-100 py-5">
      <Container>
        <h2 className="text-center futuristic-title mb-5">vsvExplore Courses</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {courses.map((course) => (
            <Col key={course.id}>
              <Card
                className="futuristic-card h-100 clickable-card"
                onClick={() => handleShow(course)}
              >
                <Card.Img variant="top" src={course.thumbnail} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>Instructor: {course.instructor}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedCourse && (
          <Modal
            show={showModal}
            onHide={handleClose}
            centered
            contentClassName="futuristic-modal"
          >
            <Modal.Header closeButton className="border-0">
              <Modal.Title>{selectedCourse.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedCourse.thumbnail}
                alt={selectedCourse.title}
                className="img-fluid rounded mb-3"
              />
              <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
              <p>{selectedCourse.description}</p>
              <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p><strong>Level:</strong> {selectedCourse.level}</p>
              <p><strong>Category:</strong> {selectedCourse.category}</p>
            </Modal.Body>
            <Modal.Footer className="border-0">
              <button className="btn btn-outline-light" onClick={handleClose}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default App;
