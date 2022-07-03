import React from 'react'

const RegisterUser = () => {
    return (
        <div>
            <h1>Register your account here...</h1>

            <div className='container' style={{ marginTop: '30px', marginLeft: '760px' }}>
                <form>
                    <div className='form-group'>
                        <label>ID</label><br />
                        <input type='text' name='' className='form-control' style={{ width: '400px', marginBottom: '20px' }} required='true' />
                    </div>

                    <div className='form-group'>
                        <label>First Name</label><br />
                        <input type='text' name='' className='form-control' style={{ width: '400px', marginBottom: '20px' }} required='true' />
                    </div>

                    <div className='form-group'>
                        <label>Last Name</label><br />
                        <input type='text' name='' className='form-control' style={{ width: '400px', marginBottom: '20px' }} required='true' />
                    </div>

                    <div className='form-group'>
                        <label>Email</label><br />
                        <input type='text' name='' className='form-control' style={{ width: '400px', marginBottom: '20px' }} required='true' />
                    </div>

                    <div className='form-group'>
                        <label>Date of Birth</label><br />
                        <input type='text' name='' className='form-control' style={{ width: '400px', marginBottom: '20px' }} required='true' />
                    </div>

                    <div className='form-group'>
                        <label>Mobile No</label><br />
                        <input type='text' name='' className='form-control' style={{ width: '400px', marginBottom: '20px' }} required='true' />
                    </div>

                    <div class="form-group">
                        <label>Account Type</label>
                        <select class="form-control" name='' style={{ width: '400px', marginBottom: '80px' }} required='true'>
                            <option selected>Choose...</option>
                            <option>Student</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" required='true' />
                        <label class="form-check-label" for="defaultCheck1">
                            I hereby confirm the details are correct
                        </label>
                    </div>

                    <button type='submit' style={{ marginTop: '20px' }} className='btn btn-primary'>Register</button>
                </form>
            </div>

        </div>
    )
}

export default RegisterUser