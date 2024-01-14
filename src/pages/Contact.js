import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import { AiOutlineHome } from "react-icons/ai"
import { IoIosCall } from "react-icons/io";
import { IoIosMailUnread } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import Container from '../components/Container';
const Contact = () => {
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
          className='border-0 w-100'
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div className='contact-title mb-4'><b>Contact</b>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' className='form-control' placeholder='Name' />
                </div>
                <div>
                  <input type='email' className='form-control' placeholder='Email'/>
                </div>
                <div>
                  <input type='tel' className='form-control' placeholder='Mobile Number'/>
                </div>
                <div>
                  <textarea className='w-100 form-control' id='' cols='30' rows='4' placeholder='Comments'></textarea> 
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