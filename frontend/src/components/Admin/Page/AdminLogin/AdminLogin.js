import axios from "axios";
import ErrorMessage from '../../../ErrorMessage'
import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    
    const navigate = useNavigate()

    const submitHandler = async (e) => {

        e.preventDefault()

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const admindata = await axios.post('/api/admins/login', {
                email,
                password,
            }, config
            );



            console.log(admindata.data);
            localStorage.setItem("adminInfo", JSON.stringify(admindata))
            if (admindata) {
                navigate('/admin/home')
            }
            
        } catch (error) {
            setError(error.response.data.message)
            
        }

    }

    return (
        <div>
            <div className='loginPage mt-5 '>
                <Container>
                    {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                   
                    <Row>
                        <Card className="mx-auto blk" style={{width:"30rem"}}>
                            <h1 className="mx-auto my-4 text-light">Admin Login</h1>

                            <Card.Body>

                                <Form onSubmit={submitHandler}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-light">Email address</Form.Label>
                                        <Form.Control type="email"
                                            value={email}
                                            placeholder="Enter email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="text-light">Password</Form.Label>
                                        <Form.Control type="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button className="mx-auto" variant="primary" type="submit">
                                        Submit
                                    </Button>

                                </Form>
                            </Card.Body>
                        </Card>

                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AdminLogin;
