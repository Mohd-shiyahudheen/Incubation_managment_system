import React, { useState } from 'react';
import { FormControlLabel, Grid, RadioGroup, TextField, Radio } from '@mui/material'
import { Button, Form, FormLabel } from 'react-bootstrap'
import Header from '../../header/Header';
import "./Application.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Application = () => {
  const userid = localStorage.getItem('userInfo')
  console.log(userid);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [team, setTeam] = useState("");
  const [product, setProduct] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [proposition, setProposition] = useState("");
  const [competators, setCompetators] = useState("");
  const [revenue, setRevenue] = useState("");
  const [potential, setPotential] = useState("");
  const [plan, setPlan] = useState("");
  const [type, setType] = useState("");
  const [proposel, setProposel] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userid);
    console.log(email);
    console.log(type);
    console.log(name);
    const companydata = await axios.post("/api/users/application", {
      name,
      email,
      address, city, state, number,
      company, team, product,
      problem, solution, proposition, competators,
      revenue, potential, plan, type, proposel, userid
    });
    console.log(companydata);
    if (companydata) {
      navigate('/submit') 
    }
  }
  
  return (
    <div>
        <Header/>
      <div className='Box'>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="name"

                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"

              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="email"

                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"

              />
            </Grid>


            <Grid item sm={6} xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Address"

                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"

              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="City"

                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"

              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="State"

                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"

              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Phone no"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}


              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Company name"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}


              />
            </Grid>
            {/* <Grid sx={{ mt: 2.5 }} item sm={6} xs={12}>
                  <label>Companylogo</label>  <br />
                  <input type='file' name='logo'  />
              </Grid> */}
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Describe your team and background"
                type="text"
                value={team}
                onChange={(e) => setTeam(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Describe your Company and Product"
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Describe the problem you are trying to solve"
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="What is unique about your solution"
                type="text"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="What is your value proposition for the customer"
                type="text"
                value={proposition}
                onChange={(e) => setProposition(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Who are your competators and what is your competatiev advantage?"
                type="text"
                value={competators}
                onChange={(e) => setCompetators(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Explain your revenue model"
                type="text"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="What is the potential market size of the product?"
                type="text"
                value={potential}
                onChange={(e) => setPotential(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="How do you market or plan to market your products and services?"
                type="text"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>

              <FormLabel id="demo-radio-buttons-group-label">Type of incubation needed</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"

                value={type}
                onClick={(e) => setType(e.target.value)}
              >
                <FormControlLabel className='radio' value="Physical incubation" control={<Radio />} label="Physical incubation" />
                <FormControlLabel value="Virtual incubation" control={<Radio />} label="Virtual incubation" />
              </RadioGroup>

            </Grid>
            <Grid item xs={12}>
              <TextField className='text'
                margin="normal"
                required
                fullWidth
                label="Upload a detailed business proposal"
                type="text"
                value={proposel}
                onChange={(e) => setProposel(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              {/* <Button className='button' variant="contained" color="success"  onClick={handleSubmit} >
                      Submit
                  </Button> */}
              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
        
      
    </div>
  );
}

export default Application;
