import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import Custominput from '../components/Custominput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/user/UserSlice'

const Loginschema = yup.object({
  email: yup.string().email("E-Mail Should be Valid !").required("Email address is Required"),
  password:yup.string().required("Password is Required")
});

const LoginPage = () => {
  const authState = useSelector(state => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:Loginschema,
    onSubmit: values => {
      dispatch(loginUser(values))
      
          navigate('/')
        
    },
  });



  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title='Login' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Login</h3>
              <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <Custominput type='email' name='email' placeholder='Email'
                onChange={formik.handleChange("email")}
                onBlur = {formik.handleBlur('email')}
                value={formik.values.email}
                />
                <div className='error'>
                  {
                    formik.touched.email && formik.errors.email
                  }
                </div>

                <Custominput type='password' name='password' placeholder='Password'
                value={formik.values.password} onChange={formik.handleChange("password")}
                onBlur = {formik.handleBlur('password')}
                />
                <div className='error'>
                  {
                    formik.touched.password && formik.errors.password
                  }
                </div>
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