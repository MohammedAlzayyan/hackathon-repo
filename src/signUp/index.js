import React, { useState } from 'react'
import Card from '../card'
import Button from '../button'
import { useNavigate } from 'react-router-dom'
// import Input from "../input";

const SignUp = () => {
  // const accessToken = localStorage.getItem('token');
  const navigate = useNavigate()
  // if (accessToken) {
  //   navigate('/');
  // }
  const [value, setValue] = useState('')
  const [name, setName] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    const response = await fetch(
      'https://hakathon2023.onrender.com/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: value,
          name: name,
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
        head="Sign Up"
        details="Fill the following information to create an account"
      >
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={submitHandler}
        >
          <label
            htmlFor="signup"
            style={{ fontSize: '16px', fontWeight: 'bold' }}
          >
            Name
          </label>
          <input
            id="signup"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              display: 'block',
              width: '100%',
              height: '30px',
              border: '1px solid #BEC2C6',
              borderRadius: '6PX',
              marginBottom: '15px',
            }}
          />
          <label
            htmlFor="login"
            style={{ fontSize: '16px', fontWeight: 'bold' }}
          >
            Email{' '}
          </label>
          <input
            id="login"
            type="email"
            value={value}
            name="email"
            onChange={(e) => setValue(e.target.value)}
            style={{
              display: 'block',
              width: '100%',
              height: '30px',
              border: '1px solid #BEC2C6',
              borderRadius: '6PX',
            }}
          />
          <Button
            buttonName="Sign up"
            singPh="Already have an account? "
            page="Login"
            linkUrl="/sign-in"
          />
        </form>
      </Card>
    </div>
  )
}

export default SignUp
