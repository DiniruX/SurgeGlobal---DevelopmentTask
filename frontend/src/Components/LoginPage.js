import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <h1>Log into your account here...</h1>
            
                <div className='container' style={{marginTop:'30px', marginLeft:'760px'}}>
                    <form>
                        <div className='form-group'>
                            <label>Email</label><br />
                            <input type='email' name='' className='form-control' style={{width:'400px', marginBottom:'20px'}} />
                        </div>

                        <div className='form-group'>
                            <label>Password</label><br />
                            <input type='password' name='' className='form-control' style={{width:'400px', marginBottom:'20px'}} />
                        </div>

                        <button type='submit' style={{marginTop:'20px'}} className='btn btn-success'>Login</button>
                    </form>
                </div>
            
        </div>
    )
}

export default LoginPage