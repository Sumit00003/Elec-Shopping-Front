import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import Custominput from '../components/Custominput'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { ResetPasswd } from '../features/user/UserSlice'

const Passwordschema = yup.object({
  password: yup.string().nullable().required("Password is Required"),
});

const Resetpassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const getToken= location.pathname.split('/')[2]
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Passwordschema,
    onSubmit: (values) => {
      dispatch(ResetPasswd({token:getToken, password : values.password}))
      navigate('/login')
    },
  });
  return (
    <>
    <Meta title={"Reset Password"} />
   <Breadcrumb title='Reset Password' />
   <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Reset Password</h3>
              <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <Custominput type='password' name='password' placeholder='Password'
                value={formik.values.password}
                onChange={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}/>
                <div className='error text-center'>
                  {
                    formik.touched.password && formik.errors.password
                  }
                </div>
                <div>
                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'>OK</button>
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

export default Resetpassword