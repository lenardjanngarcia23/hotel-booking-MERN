import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { login } from '../actions/authActions'
import LoginPage from '../components/LoginForm'

const Login = () => {
    const [email, setEmail] = useState("jann@gmail.com")
    const [password, setPassword] = useState("qwerty")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('SEND LOGIN DATA', {email, password})
        try {
            const resp = await login({email, password})
            // if(resp.data) {
            //     console.log('Save user response in redux and local storage then redirect ==>', resp)
            //     console.log(resp.data)
            // }
        } catch (err) {
            console.log(err)
            if(err.response.status === 400) toast.error(err.response.data)
        }
    }

    return (
        <>
        <div className='container-fluid bg-secondary text-center p-5'>
            <h1>Login Page</h1>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <LoginPage handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
