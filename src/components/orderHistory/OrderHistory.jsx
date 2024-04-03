import React, { useState } from 'react'
import styled from 'styled-components'

const OrderHistory = () => {
    const [date, setDate] = useState("22/09/2003")

    return (
        <OrderHistoryStyled>
            <div className="container order-history">
                <h3>+ Order have been placed on {date}</h3>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">img</th>
                            <th scope="col">name</th>
                            <th scope="col">price</th>
                            <th scope="col">total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>img</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </OrderHistoryStyled>
    )
}

export default OrderHistory

const OrderHistoryStyled = styled.div`
    .order-history {
        margin-top: 3rem;
    }
    h3 {
        font-size: 1rem;
        color: #6402b5;
        font-weight: 500;
    }
    thead > tr, th {
        background-color: #dddbde;
        font-weight: 600;
    }
`