import React, { useState } from 'react'
import Card from '../card'
import Button from '../button'
import { useNavigate } from 'react-router-dom'
// import Input from "../input";

const SignIn = () => {
  const [value, setValue] = useState('')
  // const accessToken = localStorage.getItem('token');

  const navigate = useNavigate()

  // if (accessToken) {
  //   navigate('/');
  // }
  const submitHandler = async (e) => {
    e.preventDefault()
    const response = await fetch(
      'https://hakathon2023.onrender.com/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: value,
        }),
      },
    )
    const data = await response.json()
    localStorage.setItem('token', data.data.accessToken)
    localStorage.setItem('id', data.data.data._id)
    localStorage.setItem('name', data.data.data.name)
    navigate('/')
  }

  return (
    <div className="login">
      <Card
        head="Login"
        details="Fill the following information to access your account!"
      >
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={submitHandler}
        >
          <label
            htmlFor="login"
            style={{ fontSize: '30px', fontWeight: 'bold' }}
          >
            {' '}
            Email{' '}
          </label>
          <input
            type="email"
            value={value}
            id="login"
            name="email"
            onChange={(e) => setValue(e.target.value)}
            style={{
              width: '500px',
              height: '40px',
              border: '1px solid #BEC2C6',
              borderRadius: '6PX',
            }}
          />
          <Button
            buttonName="Login"
            singPh="Dont have an account? "
            page="Sign up"
            linkUrl="/sign-up"
          />
        </form>
      </Card>
    </div>
  )
}

export default SignIn
