import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'


const Auth = () =>{
    const [isSignup, setIsSignup] = useState(false)

    const handleSwitch = () =>{
        setIsSignup(!isSignup)
    }
    return(
        <section class='auth-section'>
            { isSignup && <AboutAuth/>}
            <div class='auth-container-2'>
                { !isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
                <form>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4 style={{display:"flex", justifyContent:"space-between"}}>Display Name</h4>
                                <input type='text' id='name' name='name'/>
                            </label>
                        )
                    }
                    <label htmlFor="email">
                        <h4 style={{display:"flex", justifyContent:"space-between"}}>Email</h4>
                        <input type="email" name='name' id='email'/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h4>Password</h4>
                        { !isSignup && <p  style={{color:"#007ac6"}}>forgot password?</p> }
                        </div>
                        <input type="password" name='password' id='password'/>
                        { isSignup && <p style={{fontsize:'13px', color:"#666767"}}>Password must contain at least eight<br/> characters, including at least 1 letter and 1,<br/> number.</p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type='checkbox' id='check'/>
                                <p style={{fontsize:'13px'}}>Opt-in to receive occaisonal,<br/>product updates, user research invitations,<br/>company announcements, and digests.</p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up': 'Log in'} </button>
                    {
                        isSignup && (
                            <p style={{color: "#666767", fontsize:'13px'}}>By clicking “Sign up”, you agree to our
                            <span style={{color:"#007ac6"}}> terms of<br/> service</span>,
                            <span style={{color:"#007ac6"}}> privacy policy</span> and
                            <span style={{color:"#007ac6"}}> cookie policy</span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'Already have an account?': "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : 'sign up' }</button>
                </p>
            </div>

        </section>
    )
}

export default Auth