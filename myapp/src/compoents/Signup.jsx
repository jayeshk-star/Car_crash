import React, { useState } from 'react'
import { Redirect } from 'react-router'
import './Signup.css'
import Routes from './Routes'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [email1, setEmail1] = useState('')
  const [pass1, setPass1] = useState('')
  const [islogging, setisloggin] = useState(false)

  const handlRegister = () => {
    if (email === '' || pass === '' || email === '') {
      alert('please fill all information')
    } else {
      var user = {
        Eamil: email,
        Pass: pass,
        Username: username
      }
      alert('Registration successful')
      localStorage.setItem('userdata', JSON.stringify(user))
    }
  }
  const handlelogin = () => {
    var Data = JSON.parse(localStorage.getItem('userdata'))
    if (email1 === Data.Eamil && pass1 === Data.Pass) {
      alert('login successful')
      setisloggin(true)
    } else {
      alert('please enter correct email and password')
    }
  }

  return (
    <div>
      {islogging ? (
        <Routes />
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>User can login here...</h1>
          <div className='signup'>
            <div className='register'>
              <h1 style={{ textAlign: 'center' }}>Register here</h1>
              <div className='register_box'>
                <label for=''>Username</label>
                <br />
                <input
                  onChange={e => setUsername(e.target.value)}
                  value={username}
                  type='text'
                  placeholder='Enter your name'
                />
                <br />
                <label for=''>Email</label>
                <br />
                <input
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  placeholder='Enter your Email'
                />
                <br />
                <label for=''>Password</label>
                <br />
                <input
                  onChange={e => setPass(e.target.value)}
                  value={pass}
                  type='password'
                  placeholder='xyz@123'
                />
                <br />
                <button onClick={handlRegister}>Register</button>
                <br />
                <span>Use same Email and Password for Login and Register</span>
              </div>
            </div>
            <div className='login'>
              <h1 style={{ textAlign: 'center' }}>Login here</h1>
              <div className='login_box'>
                <label for=''>Email</label>
                <br />
                <input
                  onChange={e => setEmail1(e.target.value)}
                  value={email1}
                  type='email'
                  placeholder='Enter your Email'
                />
                <br />
                <label for=''>Password</label>
                <br />
                <input
                  onChange={e => setPass1(e.target.value)}
                  value={pass1}
                  type='password'
                  placeholder='xyz@123'
                />
                <br />
                <button onClick={handlelogin}>Login</button>
                <br />
                <span>Use same Email and Password for Login and Register</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Signup
