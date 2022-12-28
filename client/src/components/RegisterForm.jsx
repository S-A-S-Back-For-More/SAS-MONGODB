import "./registerForm.css";
import React from 'react';

import { Button, Card,TextField,  Typography } from "@mui/material";
import "@fontsource/roboto/400.css";
import {useFormik} from "formik"
import * as yup from "yup";


  //yup validation
  const userSchema = yup.object({
    firstName: yup
    .string('enter ur first name')
    .required('first name is required'),
    lastName: yup
    .string('enter ur last name')
    .required('last name is required'),
    email: yup
    .string('enter ur email')
    .email('enter a valid email')
    .required('email is required'),
    password: yup
    .string('enter ur password').min(4,'pass should be a min of 4 char')
    .required('password is required'),
   
  });

function RegisterForm() {
  // const handleSubmit = async (event) => {
  //   //prevent refreshing the page when the form is submitted
  //   event.preventDefault();
  //   let formData = {
  //     firstName: event.target[0].value,
  //     lastName: event.target[1].value,
  //     email: event.target[2].value,
  //     password: event.target[3].value,
    
  //   };
  //   const isValid = await userSchema.isValid(formData)
  //   console.log(formData)
  //   console.log(isValid)
  // };
  


  //formik
  
    const formik = useFormik({
      initialValues: {
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        password: "qwqw",
      },
      userSchema: userSchema, onSubmit: (values) => {
        alert(JSON.stringify(values, null,2));
      },
    })
 

  return (
    <div className="parent" style={{ marginTop: "10%" }}>
      <Card style={{ padding: "3% 10% 3% 10%" , width: '50%', margin: '0 auto'}}>
      <Typography sx={{ textAlign: "center" }}>Register</Typography>
        <form onSubmit={formik.handleSubmit} style={{display: 'flex',flexDirection: 'column',gap: '2em' }}>
          <TextField
            fullWidth
            label="First name"
            name="firstName"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.email && formik.errors.firstName}
          
         
          ></TextField>
          <TextField
            fullWidth
            label="Last name"
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
           
            
          ></TextField>
          <TextField
            fullWidth
            label="Email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          
           
          ></TextField>
          <TextField
            fullWidth
            label="Password"
            name="password"
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            // error={!!yup.error?.password}
            // helperText={"Please enter a password"}
         
          ></TextField>
          
          <Button variant="contained" type="submit" fullWidth name="submit">
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default RegisterForm;
