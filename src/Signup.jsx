import React, { useState } from 'react';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './login.css';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    const { email, password, confirmPassword, agreed } = formData;

    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agreed) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        email,
        password
      });

      alert("Signup successful!");
      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <h3 className="mb-4">Create an Account</h3>

          <MDBInput
            wrapperClass='mb-4'
            label='Email Address'
            id='email'
            type='email'
            size="lg"
            value={formData.email}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='password'
            type='password'
            size="lg"
            value={formData.password}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Confirm Password'
            id='confirmPassword'
            type='password'
            size="lg"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name='terms'
              id='agreed'
              label='I agree to the Terms and Conditions'
              checked={formData.agreed}
              onChange={handleChange}
            />
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSubmit}>
            Sign Up
          </MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Sign up with Facebook
          </MDBBtn>

          <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
            <MDBIcon fab icon="google" className="mx-2" />
            Sign up with Google
          </MDBBtn>

          <p className="text-center mt-3">
            Already have an account? <a href="/login" className="link-primary">Login here</a>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
