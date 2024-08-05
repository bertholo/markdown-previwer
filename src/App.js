import { Col, Container, Form, Row, Card } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [text, setText] = useState('');

  const updateText = (e) => {
    setText(e.target.value);
  };

  return (
    <Container className="bg-dark ">
      <h1 className="text-center mb-4">Markdown Preview</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header className="shadow bg-primary text-center">Input Text</Card.Header>
            <Card.Body className='bg-primary-subtle'>
                <Form.Control
                  as="textarea"
                  rows={20}
                  id="editor"
                  value={text}
                  onChange={updateText}
                  placeholder="Enter Markdown here..."
                  className='bg-primary-subtle'
                />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header className="bg-success text-center">Preview</Card.Header>
            <Card.Body className="bg-success-subtle">
              <Preview markdown={text} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function Preview({ markdown }) {
  const getMarkdownText = () => {
    const rawMarkup = marked.parse(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div
      dangerouslySetInnerHTML={getMarkdownText()}
      id="preview"
    />
  );
}

export default App;
