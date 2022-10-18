import React, { useState } from 'react'
import './Login.css'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ErrorMessage from '../../ErrorMessage'
import Header from '../../header/Header'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  
  const navigate = useNavigate();
  const submitHandler = async (e) => {

    e.preventDefault()
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        };
        const { data } = await axios.post(
          "/api/users/login", {
          email,
          password
        },
          config
        )
        console.log(data);
        localStorage.setItem("userInfo",(data._id))
        if(data){
          navigate('/')
        }

      } catch (error) {
        setError(error.response.data.message)
      }
    }
  
  return (
    <div>
      <Header/>
      <div className='loginContainer'>
        {error && <ErrorMessage varient='success'>{error}</ErrorMessage>}
        <Form className='mt-5' onSubmit={submitHandler}>
          <Container>

            <Card className='mx-auto card' style={{ width: '28rem' }}>
              <h1 className='text-dark mx-auto my-3'>Login</h1>
              <Form.Group className="mt-4" controlId="formBasicEmail">

                <Form.Control type="email" className='mx-auto' style={{ width: '20rem' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email" />
               
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPassword">

                <Form.Control type="password" className='mx-auto' style={{ width: '20rem' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" />
              </Form.Group>
            
              <div className='signup mx-auto my-3'>

                New User? <Link to="/register">Register Here</Link>


              </div>
              <Button variant="primary" type="submit" className='mx-auto mb-4'>
                Submit
              </Button>
            </Card>
          </Container>

        </Form>


      </div>
    </div>
  )
}

export default Login
