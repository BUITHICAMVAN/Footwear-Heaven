import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { authenticateLoginAsync } from '../../redux/reducers/loginReducer';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Email cannot be blank').email('Email is invalid').matches(/.*.*/, 'Thiếu cybersoft'),
      password: yup.string().required('Password cannot be blank').max(32, 'Loi max')
    }),
    onSubmit: async (userLogin) => {
      const loginResult = await dispatch(authenticateLoginAsync(userLogin))
      console.log(loginResult)
      if (loginResult.success) {
        alert(loginResult.message)
      } else {
        alert(loginResult.message)
      }
    }
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginPageStyled>
      <div className="container">
        <h3>Login</h3>
        <hr />
        <form className="d-flex flex-column justify-content-center" onSubmit={formLogin.handleSubmit}>
          <div className="form-group">
            <p>Email</p>
            <input type="text" className="form-control" id="email" name="email" onChange={formLogin.handleChange} onBlur={formLogin.handleBlur} /> {formLogin.errors.email && <p className='text text-danger'>{formLogin.errors.email}</p>}
          </div>
          <div className="form-group">
            <p>Password</p>
            <div className="input-group d-flex align-items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control mx-3"
                id="password"
                name="password"
                value={formLogin.values.password}
                onChange={formLogin.handleChange}
                onBlur={formLogin.handleBlur}
              />
              <label className="password-toggle-btn" onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
              </label>
              {formLogin.errors.password && <p className='text text-danger'>{formLogin.errors.password}</p>}
            </div>
          </div>
          <div className="form-group mt-2">
            <button className="btn text-register">Register now?</button>
            <button className="btn btn-purple btn-custom" type='submit'>Login</button>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-custom my-3"><i className="fa-brands fa-facebook p-3"></i>Continue with Facebook</button>
          </div>
        </form>
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;

const LoginPageStyled = styled.div`
  hr {
    max-width: 850px;
  }
  input {
    max-width: 600px;
  }
  .btn-purple {
    background-color: #5f0bce;
  }
  .text-register {
    color:  #5f0bce;
    font-weight: 600;
  }
  .btn-custom {
    border-radius: 20px;
    padding: 10px 25px;
    color: white;
  }
  .container {
    margin: 3rem 3.5rem;
  }
`;
