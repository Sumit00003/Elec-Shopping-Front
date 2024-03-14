import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Custominput from '../components/Custominput'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { ForgotPasswordToken } from '../features/user/UserSlice'

const emailschema = yup.object({
  email: yup.string().nullable().email("E-Mail Should be Valid !").required("Email address is Required"),
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state?.auth?.user)
  console.log(userState)
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailschema,
    onSubmit: (values) => {
      dispatch(ForgotPasswordToken(values))
    },
  });
  return (
    <>
      <Meta title={"Forgot Password"} />
      <Breadcrumb title='Forgot Password' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Reset Your Password</h3>
              <p className='text-center my-2 mb-3'>
                We Will send you an email to reset your password
              </p>
              <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <Custominput type='email' name='email' placeholder='Email'
                  value={formik.values.email}
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')} />
                <div className='error text-center'>
                  {
                    formik.touched.email && formik.errors.email
                  }
                </div>
                <div>
                  <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                    <button className='button border-0' type='submit'>Submit</button>
                    <Link to='/login'>Cancel</Link>
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

export default ForgotPassword