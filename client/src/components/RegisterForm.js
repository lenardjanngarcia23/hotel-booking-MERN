import React from 'react'

const RegisterForm = ({ handleSubmit, name, setName, email, setEmail, password, setPassword }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className='mt-4'>
            <div className='form-group mb-3'>
                <label className='form-label'>Your name</label>
                <input 
                    type='text' 
                    className='form-control' 
                    value={name} 
                    placeholder='Enter your full name'
                    onChange={(e) => setName(e.target.value)} />
            </div>

            <div className='form-group mb-3'>
                <label className='form-label'>Your email</label>
                <input 
                    type='email' 
                    className='form-control' 
                    value={email} 
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='form-group mb-3'>
                <label className='form-label'>Your password</label>
                <input 
                    type='password' 
                    className='form-control' 
                    value={password} 
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type='text' className='btn btn-primary'>Submit</button>
        </form>
        </div>
    )
}

export default RegisterForm
