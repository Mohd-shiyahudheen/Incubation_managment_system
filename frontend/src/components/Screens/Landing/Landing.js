import React from 'react'
import { Card, Container, Row } from 'react-bootstrap';
import Header from '../../header/Header';
import "./Landing.css"


const Landing = () => {
  const user= localStorage.getItem("userInfo")
  console.log(user);

  return (
    <div>
      <Header />
      <div className='main'>
        <Container>
            <Row>
            {user ?
              <Card className='box mx-auto' style={{ width: "700px" }} >
                <Card.Body className='mx-auto'><h3 className='text'> Welcome to Incubation-Management </h3></Card.Body>
              </Card>
              :""
              }
            </Row>
        </Container>

      </div>
   
    </div>
  )
}

export default Landing



