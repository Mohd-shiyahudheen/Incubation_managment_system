import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Header from '../../header/Header'
import './Submit.css'

const Submit = () => {
    return (
        <div>
            <Header/>
            <div>
                <Container>

                    <Row>
                        <Card className=' mx-auto my-5' style={{ width: "700px" }} >
                            <Card.Body className='mx-auto'><h3 className='text-success'> <span className='text-dark'>Your Application Request Submit</span> Successfully </h3></Card.Body>
                        </Card>
                    </Row>

                </Container>

            </div>
        </div>
    )
}

export default Submit