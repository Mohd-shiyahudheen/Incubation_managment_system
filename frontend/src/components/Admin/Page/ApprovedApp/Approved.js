import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../../Header/Header';

const Approved = () => {
    const [state, setstate] = useState([]);
    const fetchApprovedInfo = async () => {
        const approvedInfo = await axios.get('/api/admins/approveStatus')
        setstate(approvedInfo.data)
        console.log(approvedInfo.data);
    }

    useEffect(() => {
        fetchApprovedInfo();
    }, [])
    return (
        <div>
            <Header />
            {state.length > 0 ? (
                <div className='my-5'>
                    <Container>
                        <h2>Approved-Incubation</h2>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Type</th>
                                    <th>city</th>
                                    <th>Status</th>
                                    <th>Slot Status</th>
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
                                        <td className='text-success'>{state.companystatus}</td>
                                        { }
                                        <td>
                                            {!state.bookingstatus ? (
                                                <button className='bg-info'><Link style={{ textDecoration: 'none' }} to="/admin/booking">Book Slot</Link></button>
                                            )
                                                : (<button className='bg-info'>Slot Allowcated</button>)
                                            }
                                        </td>
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
                            <Card.Body className='mx-auto'><h3 className='text-danger'>Currently no Approved applications</h3></Card.Body>
                        </Card>
                    </Row>
                </Container>
            )
            }
        </div>
    );
}

export default Approved;
