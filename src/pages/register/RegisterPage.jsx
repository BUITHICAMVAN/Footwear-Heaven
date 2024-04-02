import { useFormik } from 'formik'
import * as yup from 'yup'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { userRegisterAsync } from '../../redux/reducers/registerReducer'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const formRegister = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      gender: null,
      phone: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Email cannot be blank').email('Email is invalid'),
      password: yup.string().required('Password cannot be blank').max(32, 'Password must be at most 32 characters long'),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
      phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    }),
    phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
    onSubmit: async (userRegister) => {
      const registerResult = await dispatch(userRegisterAsync(userRegister))
      if (registerResult.success) {
        navigate('/login')
      } else {
        navigate('/register')
      }
    }
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <RegisterPageStyled>
      <div className="container">
        <h3>Register</h3>
        <hr />
        <form className="profile-form" onSubmit={formRegister.handleSubmit}>
          <div className="form-group">
            <p>Email</p>
            <input type="text" className="form-control" id="email" name="email" onChange={formRegister.handleChange} onBlur={formRegister.handleBlur} /> {formRegister.errors.email && <p className='text text-danger'>{formRegister.errors.email}</p>}
          </div>
          <div className="form-group">
            <p>Name</p>
            <input type="text" className="form-control" id="name" name="name" onChange={formRegister.handleChange} onBlur={formRegister.handleBlur} />
          </div>
          <div className="form-group">
            <p>Phone</p>
            <input type="text" className="form-control" id="phone" name="phone" onChange={formRegister.handleChange} onBlur={formRegister.handleBlur} /> {formRegister.errors.phone && <p className='text text-danger'>{formRegister.errors.phone}</p>}
          </div>
          <div className="form-group">
            <p>Password</p>
            <div className="input-group d-flex align-items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                name="password"
                value={formRegister.values.password}
                onChange={formRegister.handleChange}
                onBlur={formRegister.handleBlur}
              />
              <label className="password-toggle-btn px-3" onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
              </label>
            </div>
            {formRegister.errors.password && <p className='text text-danger'>{formRegister.errors.password}</p>}
          </div>
          <div className="form-group">
            <p>Confirm Password</p>
            <div className="input-group d-flex align-items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formRegister.values.confirmPassword}
                onChange={formRegister.handleChange}
                onBlur={formRegister.handleBlur}
              />
              <label className="password-toggle-btn px-3" onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
              </label>
              {formRegister.errors.confirmPassword && <p className='text text-danger'>{formRegister.errors.confirmPassword}</p>}
            </div>
          </div>
          <div className="form-group">
            <p>Gender</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={() => formRegister.setFieldValue('gender', true)}
                onBlur={formRegister.handleBlur}
                checked={formRegister.values.gender === true}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={() => formRegister.setFieldValue('gender', false)}
                onBlur={formRegister.handleBlur}
                checked={formRegister.values.gender === false}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
          </div>

          <div className="form-group mt-2">
            <button className="btn btn-purple btn-custom" type='submit'>Register</button>
          </div>
        </form>
      </div>
    </RegisterPageStyled>
  )
}

export default RegisterPage

const RegisterPageStyled = styled.div`
  hr {
    max-width: 850px;
  }
  input {
    max-width: 600px;
  }
  .btn-purple {
    background-color: #5f0bce;
  }
  .btn-custom {
    border-radius: 20px;
    padding: 10px 25px;
    color: white;
  }
`