import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import ErrorMessage from '../../ErrorMessage'
import axios from 'axios'
import Loading from '../../Loading'
import { useNavigate } from 'react-router-dom'
import Header from '../../header/Header'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    if (password !== confirmpassword) {
      setMessage('password not match')
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          }
        };
        setLoading(true);

        const { data } = await axios.post(
          "/api/users",
          { name, email, password },
          config
        );
        setLoading(false);
        // localStorage.setItem("userInfo", JSON.stringify(data))
        if (data) {
          navigate('/login')
        }

      }
      catch (error) {
        setError(error.response.data.message)
        setLoading(false) 
      }
    }
  };
  return (
    <div>
      <Header />
      <div className='loginContainer'>
        {error && <ErrorMessage varient='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading></Loading>}
        <Card style={{ width: '18rem' }} className="mt-3 mx-auto">
          <Card.Body>
            <Card.Title className='text-center'>Register</Card.Title>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name" />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email" />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Register
