import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, ProgressBar, Row, Table } from 'react-bootstrap';
import Header from '../../header/Header';
import './Status.css'

const Status = () => {

    const [state, setstate] = useState([]);
    let userid = localStorage.getItem('userInfo')
    console.log(userid);

    const changeStatus = async (userid) => {
        const getinfo = await axios.get(`api/users/status/${userid}`)
        setstate(getinfo.data)
        console.log(getinfo.data);
    }
    useEffect(() => {
        changeStatus(userid)

    }, []);
    return (
        <div>
            <Header />
            {state.length > 0 ? (
                <div className='my-5'>
                    <Container>
                        <h2>Status</h2>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Owner Name</th>
                                    <th>Company Name</th>
                                    <th>Type</th>
                                    <th>Application-Status </th>
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
                                        <td>
                                            {state.companystatus !== "Rejecting" ?
                                                <Table striped bordered hover variant="dark">
                                                    <thead>
                                                        <tr>
                                                            <th><span className='pending'>Pending</span><span className='pro'>Processing</span><span className='approved'>Approved</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <ProgressBar>
                                                                    <ProgressBar striped variant="success"
                                                                        now={state.companystatus === "Pending" ? 30
                                                                            : state.companystatus === "Processing" ? 50
                                                                                : 100
                                                                        }
                                                                        key={1} />

                                                                </ProgressBar>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                :
                                                <div className='btn'>
                                                    <span className='text-danger mx-auto'> Rejected</span>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            {!state.bookingstatus ? (
                                                <h6 className='text-danger'>Not Allocated</h6>
                                            ) : (
                                                <h6 className='text-success'>Allocated</h6>
                                            )}
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
                            <Card.Body className='mx-auto'><h3 className='text-danger'>Currently You dont Send any Apllication</h3></Card.Body>
                        </Card>
                    </Row>
                </Container>
            )}

        </div>
    );
}

export default Status;
