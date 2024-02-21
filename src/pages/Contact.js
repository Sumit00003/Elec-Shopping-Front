import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import { AiOutlineHome } from "react-icons/ai"
import { IoIosCall } from "react-icons/io";
import { IoIosMailUnread } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import Container from '../components/Container';
import * as yup from 'yup'
import {useFormik} from "formik"
import { useDispatch, useSelector } from 'react-redux'
import {createQuery} from '../features/contact/contactSlice'

const contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  mobile: yup.string().required("Mobile is Required"),
  email: yup.string().nullable().email("E-Mail Should be Valid !").required("Email address is Required"),
  comment:yup.string().required("Comment is Required")
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      comment: '',
    },
    validationSchema : contactSchema,
    onSubmit: values => {
      dispatch(createQuery(values))
      
    },
  });
  

  return (
    <>
     <Meta title={"Contact Us"} />
    <Breadcrumb title='Contact Us'/>
    <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120441.34655564597!2d72.74457153404117!3d19.37815355259601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae956bc1587b%3A0x864f53a94baa5145!2sVasai-Virar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704780374545!5m2!1sen!2sin" 
          width="600"
          height="450"
          title='This is a Unique Title'
          className='border-0 w-100'
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div className='contact-title mb-4'><b>Contact</b>
              <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' className='form-control' placeholder='Name' name='name'
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                  value={formik.values.name} /><div className='error'>
                    {
                      formik.touched.name && formik.errors.name
                    }
                  </div>
                </div>
                <div>
                  <input type='email' className='form-control' placeholder='Email' name='email'
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email} /><div className='error'>
                    {
                      formik.touched.email && formik.errors.email
                    }
                  </div>
                </div>
                <div>
                  <input type='tel' className='form-control' placeholder='Mobile Number' name='mobile'
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                  value={formik.values.mobile} /><div className='error'>
                    {
                      formik.touched.mobile && formik.errors.mobile
                    }
                  </div>
                </div>
                <div>
                  <textarea className='w-100 form-control' id='' cols='30' rows='4' 
                  placeholder='Comments' name='comment' onChange={formik.handleChange("comment")}
                  onBlur={formik.handleBlur("comment")}
                  value={formik.values.comment} /><div className='error'>
                  {
                    formik.touched.comment && formik.errors.comment
                  }
                </div>   
                </div>
                <div>
                  <button className='button border-0'>Submit</button>
                </div>
              </form>
              </div>
              <div> <h3 className='contact-title mb-4'><b>Get in Touch With US</b></h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5'/>
                  <address className='mb-0'>Hno : 289 Near Naringi Road, Sonipat , Mumbai PinCode : 401303
                </address>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'><IoIosCall className='fs-5'/>
                  <a href="tel:+91 9822011245">+91 98222011245</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'><IoIosMailUnread className='fs-5'/>
                  <a href="mailto:sumitmouryaaa@gmail.com">sumitmouryaaa@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'><BsInfoCircleFill className='fs-5'/>
                  <p className='mb-0'>Monday - Friday 10 AM - 9 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    




    </>
  )
}

export default Contact