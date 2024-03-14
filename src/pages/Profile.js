import React, { useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import Container from '../components/Container'
import {useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../features/user/UserSlice';
import Custominput from '../components/Custominput';
import { FaRegEdit } from "react-icons/fa";


const Profileschema = yup.object({
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is Required"),
    email: yup.string().nullable().email("E-Mail Should be Valid !").required("Email address is Required"),
    mobile: yup.string().required("Mobile Number is Required"),
  });

  



const Profile = () => {
    const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

 const config2 = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
 
};
    const [edit , setedit] = useState(true);
    const dispatch = useDispatch();
    const userState = useSelector(state => state?.auth?.user)
    console.log(userState)
    const formik = useFormik({
        initialValues: {
          firstname: userState?.firstname,
          lastname: userState?.lastname,
          email: userState?.email,
          mobile: userState?.mobile,
          
        },
        validationSchema:Profileschema,
        onSubmit: (values) => {
            dispatch(updateProfile({data:values , config2 : config2}))
            setedit(true)
        },
      });
    return (
        <>
            <Breadcrumb title="My Profile " />
            <Container class1='cart-wrapper home-wrapper-2 py-5' >
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='my-3'>Update Profile</h3>
                        <FaRegEdit className='fs-3' onClick={() => setedit(false)}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                        <label className="form-label" htmlFor="example1">First Name</label>
                                <Custominput
                                // placeholder='First Name'
                                type="text" name='firstname' disabled={edit} 
                                value={formik.values.firstname} 
                                onChange={formik.handleChange('firstname')} 
                                onBlur={formik.handleBlur('firstname')}/>
                            </div>
                            <div className='error'>
                                {
                                    formik.touched.firstname && formik.errors.firstname
                                }
                            </div>
                            <div className="mb-3">
                            <label className="form-label" htmlFor="example2">Last Name</label>
                            <Custominput
                            // placeholder='Last Name'
                                type="text" name='lastname' disabled={edit} value={formik.values.lastname} 
                                onChange={formik.handleChange('lastname')} 
                                onBlur={formik.handleBlur('lastname')}/>
                            </div>
                            <div className='error'>
                                {
                                    formik.touched.lastname && formik.errors.lastname
                                }
                            </div>
                            
                            <div className="mb-3">
                            <label className="form-label" htmlFor="example1">Email </label>

                            <Custominput
                            // placeholder='Email'
                                type="text" name='email' disabled={edit} 
                                value={formik.values.email} 
                                onChange={formik.handleChange('email')} 
                                onBlur={formik.handleBlur('email')}/>
                            </div>
                            <div className='error'>
                                {
                                    formik.touched.email && formik.errors.email
                                }
                                
                            </div>
                            <div className="mb-3">
                            <label className="form-label" htmlFor="example2">Mobile No. </label>

                            <Custominput
                            // placeholder='Mobile'
                                type="number" name='mobile' disabled={edit} value={formik.values.mobile} 
                                onChange={formik.handleChange('mobile')} 
                                onBlur={formik.handleBlur('mobile')}/>
                                
                            </div>
                            <div className='error'>
                                {
                                    formik.touched.mobile && formik.errors.mobile
                                }
                            </div>
                           
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}
                            {
                                edit === false && <button type="submit" disabled={edit} className="btn btn-primary">Save</button>
                            }
                        </form>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default Profile