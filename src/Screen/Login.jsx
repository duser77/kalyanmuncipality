import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='main'>
       <div className="cont">

      <div className="center-div">
        <div>
        <form >
            <div className='box'>
                <span>email</span><br/>
                <input  type="email" />
            </div>
            <div className='box mt20'>
                <span>password</span><br/>
                <input type="password" />
            </div>
            <div className='mt20 remb' >
                <div>
                <input style={{marginRight:'5px'}} type='checkbox'/>
                <span>remember me</span> 
                </div>

                
                <span>forgot password</span>
            </div >
            <button className='btn'>Login</button>
        </form>

        </div>
      </div>
       </div>
    </div>
  )
}

export default Login
