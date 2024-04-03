import React, { useReducer } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components'

const PurchasePage = () => {

    const navigate = useNavigate();
    const orderHistory = useSelector(state => state.orderHistoryReducer)

    // check if authenticated
    const isAuthenticated = () => {
        // if token and user_login exists => return true
        return (localStorage.getItem('token') && localStorage.getItem('user_login')) !== null;
    };

    // if not, navigate to login page 
    const handleLoginRedirect = () => {
        navigate("/login")
    };
    
    return (
        // if authenticated, return UI
        (isAuthenticated() ? (
            <PurchasePageStyled>
                <div className="container order-history">
                    <h3>Thank you for your order!</h3>
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Example Product</td>
                                <td>$10.00</td>
                                <td>$10.00</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </PurchasePageStyled >
        ) : (
            handleLoginRedirect() 
        )
        ))
}

export default PurchasePage

const PurchasePageStyled = styled.div`


`