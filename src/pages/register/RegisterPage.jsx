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

  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      gender: true,
      phone: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Email cannot be blank').email('Email is invalid').matches(/.*.*/, 'Thiếu cybersoft'),
      password: yup.string().required('Password cannot be blank').max(32, 'Loi max')
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
        <form className="profile-form" onSubmit={formLogin.handleSubmit}>
          <div className="form-group">
            <p>Email</p>
            <input type="text" className="form-control" id="email" name="email" onChange={formLogin.handleChange} onBlur={formLogin.handleBlur} /> {formLogin.errors.email && <p className='text text-danger'>{formLogin.errors.email}</p>}
          </div>
          <div className="form-group">
            <p>Name</p>
            <input type="text" className="form-control" id="name" name="name" onChange={formLogin.handleChange} onBlur={formLogin.handleBlur} />
          </div>
          <div className="form-group">
            <p>Phone</p>
            <input type="text" className="form-control" id="phone" name="phone" onChange={formLogin.handleChange} onBlur={formLogin.handleBlur} /> {formLogin.errors.phone && <p className='text text-danger'>{formLogin.errors.phone}</p>}
          </div>
          <div className="form-group">
            <p>Password</p>
            <div className="input-group d-flex align-items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                name="password"
                value={formLogin.values.password}
                onChange={formLogin.handleChange}
                onBlur={formLogin.handleBlur}
              />
              <label className="password-toggle-btn px-3" onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
              </label>
            </div>
            {formLogin.errors.password && <p className='text text-danger'>{formLogin.errors.password}</p>}
          </div>
          {/* <div className="form-group">
            <p>Password Confirm</p>
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
          </div> */}
          <div className="form-group">
            <div>
              <p>Gender</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={formLogin.handleChange}
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
                  onChange={formLogin.handleChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
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