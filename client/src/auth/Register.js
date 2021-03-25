import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import axios from 'axios'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const resp = await axios.post(`http://localhost:8000/api/register`, {
            name,
            email,
            password
            })
            console.log('REGISTERED SUCCESSFULLY ==>>', resp)
        } catch (error) {
            console.log(`Error Occured: ${error}`)
        }
    }

    return (
        <>
        <div className='container mt-5 bg-warning text-center p-5'>
            <h1>Register</h1>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-2'>
                    <RegisterForm handleSubmit={handleSubmit} 
                        name={name} setName={setName} 
                        email={email} setEmail={setEmail}
                        password={password} setPassword={setPassword} />
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Register
