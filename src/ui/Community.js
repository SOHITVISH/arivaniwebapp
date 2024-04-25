import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Row, Col, Button, Form, Card, Badge, Modal } from 'react-bootstrap';
import { BsHeartFill, BsEyeFill, BsPlusCircleFill, BsTrashFill } from 'react-icons/bs';
import Footer from '../components/Footer';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import contactHeader from '../img/contact-header.jpg';
import axios from 'axios';
import styled from 'styled-components';

const CommunityPage = () => {
  const formRef = useRef();
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const [questions, setQuestions] = useState(() => {
    const storedQuestions = localStorage.getItem('communityQuestions');
    return storedQuestions
      ? JSON.parse(storedQuestions)
      : [
          { id: 1, question: "How to install React Bootstrap?", likes: 10, views: 5, answers: [] },
          { id: 2, question: "What are the benefits of using React?", likes: 15, views: 8, answers: [] },
          { id: 3, question: "How to implement sorting in React?", likes: 8, views: 3, answers: [] }
        ];
  });
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState({});
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLike = useCallback((questionId) => {
    setQuestions(prevQuestions => prevQuestions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          likes: question.likes + 1
        };
      }
      return question;
    }));
  }, []);

  const handleAnswerDelete = useCallback((questionId, answerId) => {
    setQuestions(prevQuestions => prevQuestions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          answers: question.answers.filter(answer => answer.id !== answerId)
        };
      }
      return question;
    }));
  }, []);

  const handleQuestionDelete = useCallback((questionId) => {
    setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== questionId));
  }, []);

  const handleNewQuestionSubmit = useCallback(() => {
    if (newQuestion.trim() !== '') {
      const newId = questions.length + 1;
      const newQuestionObj = {
        id: newId,
        question: newQuestion,
        likes: 0,
        views: 0,
        answers: []
      };
      setQuestions(prevQuestions => [...prevQuestions, newQuestionObj]);
      setNewQuestion('');
      setShowModal(false);
    }
  }, [newQuestion, questions]);

  const handleNewAnswerSubmit = useCallback((questionId) => {
    const answerText = newAnswers[questionId];
    if (answerText && answerText.trim() !== '') {
      setQuestions(prevQuestions => prevQuestions.map(question => {
        if (question.id === questionId) {
          return {
            ...question,
            answers: [
              ...question.answers,
              { id: question.answers.length + 1, text: answerText }
            ]
          };
        }
        return question;
      }));
      setNewAnswers(prevAnswers => ({
        ...prevAnswers,
        [questionId]: ''
      }));
    }
  }, [newAnswers]);

  const handleAnswerChange = (questionId, text) => {
    setNewAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: text
    }));
  };

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Community"} img={contactHeader} />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Button onClick={() => setShowModal(true)} className="mb-3 mt-3" variant="info" size="sm">
              <span className="italic-font">Add Question</span>
            </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Question</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="newQuestion">
                  <Form.Label>Your Question:</Form.Label>
                  <Form.Control
                    type="text"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleNewQuestionSubmit}>
                  Add Question
                </Button>
              </Modal.Footer>
            </Modal>
            {questions.map(question => (
              <StyledCard key={question.id} md={6} lg={4} className="mb-4">
                <Card.Body>
                  <Card.Title className="question-title">{question.question}</Card.Title>
                  <Card.Text className="question-meta">
                    <StyledBadge bg="primary" onClick={() => handleLike(question.id)}>
                      <BsHeartFill /> {question.likes}
                    </StyledBadge>
                    <Badge bg="info">
                      <BsEyeFill /> {question.views}
                    </Badge>
                  </Card.Text>
                  <hr />
                  <h5>Answers:</h5>
                  {question.answers.map((answer, index) => (
                    <div key={answer.id} className="d-flex align-items-center">
                      <p className="flex-grow-1">{answer.text}</p>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleAnswerDelete(question.id, answer.id)}
                      >
                        <BsTrashFill />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="danger"
                    size="sm"
                    className="delete-question-btn"
                    onClick={() => handleQuestionDelete(question.id)}
                  >
                    <span className="italic-font">Delete Question</span>
                  </Button>
                  <Form.Group controlId={`newAnswer-${question.id}`} className="mt-3">
                    <Form.Label>Your Answer:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={newAnswers[question.id] || ''}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    size="sm"
                    className="add-answer-btn"
                    onClick={() => handleNewAnswerSubmit(question.id)}
                  >
                    Add Answer
                  </Button>
                </Card.Body>
              </StyledCard>
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

const StyledCard = styled(Card)`
  border: none;
  box-shadow: ${({ selected }) =>
    selected ? '0 5px 15px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .delete-question-btn,
  .add-answer-btn {
    margin-top: 10px;
    width: 100%;
    display: block;
    font-style: italic;
    font-size: 0.8em;
  }

  .italic-font {
    font-style: italic;
  }
`;

const StyledBadge = styled(Badge)`
  cursor: pointer;
`;

export default CommunityPage;
