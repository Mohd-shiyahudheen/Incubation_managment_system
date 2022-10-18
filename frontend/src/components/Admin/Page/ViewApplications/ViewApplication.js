import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import {  useParams } from 'react-router-dom';
import Header from '../../Header/Header';
import './ViewApplication.css'

const ViewApplication = () => {
    let { companyId } = useParams()
    const [processing, setProcessing] = useState("");
    const [approved, setApproved] = useState("");
    const [rejecting, setRejecting] = useState("");
    const [state, setState] = useState({

        name: '',
        email: '',
        address: '', city: '', state: '', number: '',
        company: '', team: '', product: '',
        problem: '', solution: '', proposition: '', competators: '',
        revenue: '', potential: '', plan: '', type: '', proposel: ''
    })

    console.log(state, "yfghju");
    const getCompanydate = async (companyId) => {
        console.log(companyId);
        const getcompanydata = await axios.get(`/api/admins/viewcompany/${companyId}`)

        console.log(getcompanydata.data, 'dara');
        setState(getcompanydata.data)

    }
    //Status changing to process//
    const processStatus = async (companyId)=>{
        let response = await axios.put(`/api/admins/processing/${companyId}`)
        console.log(response)
       setProcessing(response)
    }
    //Approved statuse//
    const approvedStatus = async (companyId) => {
        let response = await axios.put(`/api/admins/approved/${companyId}`)
        console.log(response)
        setApproved(response)
    }
    //Rejecting status//
    const rejectingStatus = async (companyId) => {
        let response = await axios.put(`/api/admins/rejecting/${companyId}`)
        console.log(response)
        setRejecting(response)

    }
    useEffect(() => {
        getCompanydate(companyId)
    }, [])

    return (
        <>
            <Header />

            <div style={{ marginTop: '3%' }} >
                <div className="d-flex justify-content-around">
                    <Container>
                        <Card style={{ width: "100%", backgroundColor: '#f7f7f7' }}>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-md-3">
                                        <Card.Title>Company Name:</Card.Title>
                                        <Card.Text>
                                            {state.company}
                                        </Card.Text>
                                    </div>
                                    <div className="col-md-3">
                                        <Card.Title>Address:</Card.Title>
                                        <Card.Text>
                                            {state.address}
                                        </Card.Text>
                                    </div>
                                    <div className="col-md-3">
                                        <Card.Title>City:</Card.Title>
                                        <Card.Text>
                                            {state.city}
                                        </Card.Text>
                                    </div>
                                    <div className="col-md-3">
                                        <Card.Title>State:</Card.Title>
                                        <Card.Text>
                                            {state.state}
                                        </Card.Text>
                                    </div>
                                </div>
                                <br></br>
                                <div style={{ textAlign: "center" }}>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Card.Title>Team and Backgorund:</Card.Title>
                                        <Card.Text>
                                            {state.team}
                                        </Card.Text>
                                    </div>
                                    <div className="col-md-6">
                                        <Card.Title>Company and products:</Card.Title>
                                        <Card.Text>
                                            {state.product}
                                        </Card.Text>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Card.Title>Solution and uniqueness:</Card.Title>
                                        <Card.Text>
                                            {state.solution}
                                        </Card.Text>
                                    </div>
                                    <div className="col-md-6">
                                        <Card.Title>Value Propostions:</Card.Title>
                                        <Card.Text>
                                            {state.proposition}
                                        </Card.Text>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6" style={{}}>
                                        <Card.Title>Incubation Type:</Card.Title>
                                        <Card.Text>
                                            {state.type}
                                        </Card.Text>
                                    </div>

                                    {/* <div className="col-md-6" style={{}}>
                                        <Card.Title>Slot Code:</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </div> */}

                                </div>
                            </Card.Body>
                            <div className='row'>
                                <Button className='processing my-3' onClick={()=>{processStatus(state._id)}}>processing</Button>
                                <Button className=' approve app my-3' onClick={() => { approvedStatus(state._id) }}>Approve</Button>
                                <Button className='reject my-3' onClick={() => { rejectingStatus(state._id) }}>Reject</Button>
                            </div>
                        </Card>
                    </Container>
                </div>
            </div>
        </>
    )

}

export default ViewApplication;
