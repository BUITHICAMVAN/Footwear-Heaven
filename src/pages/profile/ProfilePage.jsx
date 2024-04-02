import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import avatar from '../../assets/avatar.jpg'
import OrderHistory from '../../components/orderHistory/OrderHistory';
import Favourite from '../../components/favourite/Favourite';
import { getUserProfileAsync, updateUserProfileAsync } from '../../redux/reducers/userReducer';

const ProfilePage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { infoUser } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserProfileAsync());
    }, [dispatch]);

    const formUpdate = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            gender: '',
            phone: '',
        },
        validationSchema: yup.object().shape({
            password: yup.string().required('Password cannot be blank').max(32, 'Reached maximum characters'),
            phone: yup.string()
                .matches(/^[0-9]*$/, 'Phone number must contain only digits')
                .min(10, 'Phone number must be 10 digits')
                .max(10, 'Phone number must be 10 digits')
        }),
        onSubmit: async (updatedProfile) => {
            const updateResult = await dispatch(updateUserProfileAsync(updatedProfile))
            if (updateResult.success) {
                alert(updateResult.message)
            } else {
                alert(updateResult.message)
            }
        }
    })

    useEffect(() => {
        // Update form values when infoUser changes
        if (infoUser && !formUpdate.values.email) {
            const initialValues = {
                email: infoUser.email || '',
                password: infoUser.password || '',
                name: infoUser.name || '',
                gender: infoUser.gender || '',
                phone: infoUser.phone || '',
            };
            formUpdate.setValues(initialValues);
        }
    }, [infoUser, formUpdate.values.email]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <ProfilePageStyled>
            <div className="container-fluid">
                <h3 className='profile-title'>Profile</h3>
                <div className="profile-info d-flex flex-row">
                    <div className="profile-img align-items-center">
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div className="profile-content">
                        <form className="profile-form" onSubmit={formUpdate.handleSubmit}>
                            <div className="form-group">
                                <p>Email</p>
                                <input type="text" className="form-control" id="email" name="email" onChange={formUpdate.handleChange} onBlur={formUpdate.handleBlur} value={formUpdate.values.email} disabled />
                            </div>
                            <div className="form-group">
                                <p>Name</p>
                                <input type="text" className="form-control" id="name" name="name" onChange={formUpdate.handleChange} onBlur={formUpdate.handleBlur} value={formUpdate.values.name} />
                            </div>
                            <div className="form-group">
                                <p>Phone</p>
                                <input type="text" className="form-control" id="phone" name="phone" onChange={formUpdate.handleChange} onBlur={formUpdate.handleBlur} value={formUpdate.values.phone} />
                                {formUpdate.errors.phone && <p className='text text-danger'>{formUpdate.errors.phone}</p>}
                            </div>
                            <div className="form-group">
                                <p>Password</p>
                                <div className="input-group d-flex align-items-center">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        onChange={formUpdate.handleChange}
                                        onBlur={formUpdate.handleBlur}
                                        value={formUpdate.values.password}
                                    />
                                    <label className="password-toggle-btn" onClick={togglePasswordVisibility}>
                                        {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                                    </label>
                                </div>
                                {formUpdate.errors.password && <p className='text text-danger'>{formUpdate.errors.password}</p>}
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
                                        onChange={() => formUpdate.setFieldValue('gender', true)}
                                        onBlur={formUpdate.handleBlur}
                                        checked={formUpdate.values.gender === true}
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
                                        onChange={() => formUpdate.setFieldValue('gender', false)}
                                        onBlur={formUpdate.handleBlur}
                                        checked={formUpdate.values.gender === false}
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <button className="btn btn-purple btn-custom" type='submit'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="profile-history">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="order-history-tab" data-bs-toggle="tab" href="#order-history" role="tab" aria-controls="order-history" aria-selected="true">Order History</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="favorite-tab" data-bs-toggle="tab" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">Favorite</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="order-history" role="tabpanel" aria-labelledby="order-history-tab">
                            <OrderHistory />
                        </div>
                        <div className="tab-pane fade" id="favorite" role="tabpanel" aria-labelledby="favorite-tab">
                            <Favourite />
                        </div>
                    </div>
                </div>

            </div>
        </ProfilePageStyled>
    )
}

export default ProfilePage

const ProfilePageStyled = styled.div`
    h3 {
        margin: 0;
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
    img {
        width: 100px;
        border-radius: 50%;
    }
    .profile-info, .profile-history {
        margin-top: 2rem;
    }
    .profile-title {
        background: linear-gradient(180deg, #F21299 0%, #1B02B5 100%);
        color: white;
        width: 300px;
    }
    .profile-img {
        width: 10%;
        margin: 0 3rem;
    }
    .profile-content {
        margin: 0;
        width: 90%;
        .profile-form {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20%, 1fr)); 
            gap: 1rem;
        }
        .form-group {
            grid-column: span 2; 
        }
    }
    .profile-history {
        .nav-link {
            font-weight: 500;
            color: black;
        }
        .nav-item .active {
            color: #F21299;
        }
    }

`