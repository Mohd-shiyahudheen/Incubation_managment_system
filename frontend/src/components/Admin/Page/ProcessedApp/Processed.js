import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Table } from 'react-bootstrap';
import Header from '../../Header/Header';

const Processed = () => {
    const [state, setstate] = useState([]);
    const fetchProcessedInfo = async () => {
        const processedInfo = await axios.get('/api/admins/processedStatus')
        setstate(processedInfo.data)
        console.log(processedInfo.data);
    }

    useEffect(() => {
        fetchProcessedInfo();
    }, [])
    return (
        <div>
            <Header />
            {state.length > 0 ? (
                <div className='my-5'>
                    <Container>
                        <h2>Rejected-Incubation</h2>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Type</th>
                                    <th>City</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.map((state, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{state.name}</td>
                                        <td>{state.company}</td>
                                        <td>{state.type}</td>
                                        <td>{state.city}</td>
                                        <td className='text-primary'>{state.companystatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            ) : (
                <Container>
                    <Row>
                        <Card className=' my-5 mx-auto' style={{ width: "700px" }} >
                            <Card.Body className='mx-auto'><h3 className='text-danger'>Currently no processed applications</h3></Card.Body>
                        </Card>
                    </Row>
                </Container>
            )
            }

        </div>
    );
}

export default Processed;
