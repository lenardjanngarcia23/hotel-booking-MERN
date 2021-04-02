import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { toast } from 'react-toastify'
import { login } from '../actions/authActions'
import LoginPage from '../components/LoginForm'


const Login = () => {
    const [email, setEmail] = useState("jann@gmail.com")
    const [password, setPassword] = useState("qwerty")

    const dispatch = useDispatch()

    
    const handleSubmit = async (e) => {
        e.preventDefault()
       
        try {
            const res = await login({
                email,
                password
            })
            console.log(res)
            if(res) {
                // save user and token to lcoal storage
                localStorage.setItem('user_token', JSON.stringify(res.data))
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: res.data
                })
            }
        } catch (err) {
            if(err.response.status === 400) toast.error(err.response.data)
        }
        
        // const ress = await axios.post(`${process.env.REACT_APP_API}/login`, {
        //     email,
        //     password
        // })
        // localStorage.setItem('token', JSON.stringify(ress.data))
        // console.log(ress)
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
