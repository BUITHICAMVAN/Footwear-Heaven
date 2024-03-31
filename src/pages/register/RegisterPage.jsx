import React from 'react'
import styled from 'styled-components'

const RegisterPage = () => {
  return (
    <RegisterPageStyled>
      <div className="container">
        <h3>Register</h3>
        <hr />
      </div>
    </RegisterPageStyled>
  )
}

export default RegisterPage

const RegisterPageStyled = styled.div`
  hr {
    max-width: 850px;
  }
  .container {
    margin: 4rem;
  }
`