import React from 'react'

const LoginForm = ({ handleSubmit, email, setEmail, password, setPassword }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className='mt-4'>
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

            <button disabled={!email || !password} type='submit' className='btn btn-primary'>Submit</button>
        </form>
        </div>
    )
}

export default LoginForm
