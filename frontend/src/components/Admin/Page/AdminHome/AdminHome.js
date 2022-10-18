import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';

import Header from '../../Header/Header';
import "./AdminHome.css"


const AdminHome = () => {
    return (
        <div>
            <Header/>
            <div className='admin-img'>
                <Container>
                    <Row>
                        <Card className='wlcm mx-auto' style={{ width: "700px" }} >
                            <Card.Body className='mx-auto'><h3 className='text'>Welcome to Admin-Pannel</h3></Card.Body>
                        </Card>
                    </Row>
                </Container>

            </div>
        </div>
       
    );
}

export default AdminHome;
