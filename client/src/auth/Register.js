import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import { register } from '../actions/authActions'
import { toast } from 'react-toastify'


const Register = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const resp = await register({
                name,
                email,
                password
            })
            console.log('REGISTERED SUCCESSFULLY ==>>', resp)
            toast.success('Registered Successfully!')
            history.push('/login')
        } catch (error) {
            // console.log(error)
            if(error.response.status === 400) toast.error(error.response.data)
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
