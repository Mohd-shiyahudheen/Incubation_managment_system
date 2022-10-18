import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Header from '../../Header/Header'

const ApplicationList = () => {
  
    const [state, setstate] = useState([]);
    const fetchCompanyInfo = async () => {
        const companyInfo = await axios.get('/api/users/data')
        setstate(companyInfo.data)
        console.log(companyInfo);
    }

    useEffect(() => {
        fetchCompanyInfo();
    }, [])

    return (
        <div>
            <Header />
          
                <div className='my-5'>
                    <Container>
                        <h2>All Application</h2>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Type</th>
                                    <th>View Details</th>
                                </tr>
                            </thead>
                            {state.map(state => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{state.name}</td>
                                            <td>{state.company}</td>
                                            <td>{state.type}</td>
                                            <td><Button  style={{ backgroundColor: "blue"}}><Link style={{ textDecoration: 'none' }} to={`/admin/view/${state._id}`}>View</Link></Button></td>
                                        </tr>
                                    </tbody>
                                )
                            })}

                        </Table>
                    </Container>

                </div>
        </div>
    )
}

export default ApplicationList