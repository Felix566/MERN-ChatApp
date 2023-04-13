import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return (
    <Row>
      <Col md={6} className='d-flex flex-direction-column align-itens-center justify-content-center'>
        <div>
          <h1>Compartilhe o mundo com seus amigos</h1>
          <p>ChatApp permite que você se conecte com o mundo</p>
          <LinkContainer to="/chat">
            <Button variant='sucess'>
              Vamos começar <i className='fas fa-comments home-message-icon'></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className='home_bg'></Col>
    </Row>
  );
}

export default Home