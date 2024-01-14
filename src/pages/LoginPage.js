import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Custominput from '../components/Custominput'

const LoginPage = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title='Login' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Login</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <Custominput type='email' name='email' placeholder='Email'/>
                <Custominput type='password' name='password' placeholder='Password'/>
                <div>
                  <Link to='/forgot-password'>Forgot your Password ?</Link>
                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0' type='submit'>Login</button>
                    <Link to='/signup' className='button signup '>SignUp</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}

export default LoginPage