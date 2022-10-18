import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import Header from '../../Header/Header';

const UserManage = () => {
    const [state, setState] = useState([])
    const fetchUser = async () => {
        const { data } = await axios.get('/api/users/user')

        setState(data)
        console.log(data);
    }
    //Deleting user//
    const deleteUser = async (userId) => {
        let response = await axios.delete(`/api/users/delete/${userId}`)
        console.log(response);
        if (response) {
            const { data } = await axios.get('/api/users/user')
            setState(data)
            console.log(data);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div>
            <Header />
            <div className='my-5'>
                <Container>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Eamil</th>
                                <th>ID</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        {state.map(state => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{state.name}</td>
                                        <td>{state.email}</td>
                                        <td>{state._id}</td>

                                        <td><Button style={{ backgroundColor: "red" }} onClick={() => { deleteUser(state._id) }}>Delete</Button></td>
                                    </tr>
                                </tbody>
                            )
                        })}

                    </Table>
                </Container>

            </div>
        </div>

    );
}

export default UserManage;
