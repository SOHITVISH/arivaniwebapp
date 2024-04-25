import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card, Badge } from 'react-bootstrap';
import { BsHeartFill, BsEyeFill } from 'react-icons/bs';
import Footer from '../components/Footer';

const CommunityPage = () => {
  const [questions, setQuestions] = useState(() => {
    const storedQuestions = localStorage.getItem('communityQuestions');
    return storedQuestions ? JSON.parse(storedQuestions) : [
      { id: 1, question: "How to install React Bootstrap?", likes: 10, views: 5, answers: [] },
      { id: 2, question: "What are the benefits of using React?", likes: 15, views: 8, answers: [] },
      { id: 3, question: "What are the benefits of using React?", likes: 15, views: 8, answers: [] },
      { id: 4, question: "How to implement sorting in React?", likes: 8, views: 3, answers: [] }
    ];
  });
  const [newAnswer, setNewAnswer] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  useEffect(() => {
    localStorage.setItem('communityQuestions', JSON.stringify(questions));
  }, [questions]);

  const handleAnswerSubmit = () => {
    if (newAnswer.trim() !== '' && selectedQuestionId) {
      const updatedQuestions = questions.map(question => {
        if (question.id === selectedQuestionId) {
          return {
            ...question,
            answers: [...question.answers, newAnswer]
          };
        }
        return question;
      });
      setQuestions(updatedQuestions);
      setNewAnswer('');
      setSelectedQuestionId(null);
    }
  };

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1 className="text-center mb-4 ">Community Page</h1>
          </Col>
        </Row>
        <Row>
          {questions.map(question => (
            <Col key={question.id} md={6} lg={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{question.question}</Card.Title>
                  <Card.Text>
                    <Badge bg="info" className="me-2">
                      <BsHeartFill /> {question.likes}
                    </Badge>
                    <Badge bg="info">
                      <BsEyeFill /> {question.views}
                    </Badge>
                  </Card.Text>
                  {selectedQuestionId === question.id ? (
                    <>
                      <Form.Group>
                        <Form.Control 
                          type="text" 
                          placeholder="Your Answer..." 
                          value={newAnswer} 
                          onChange={(e) => setNewAnswer(e.target.value)} 
                        />
                      </Form.Group>
                      <Button variant="primary" onClick={handleAnswerSubmit}>Submit Answer</Button>
                    </>
                  ) : (
                    <Button variant="primary" onClick={() => setSelectedQuestionId(question.id)}>Answer</Button>
                  )}
                  <hr />
                  <h5>Answers:</h5>
                  {question.answers.map((answer, index) => (
                    <p key={index}>{answer}</p>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
  