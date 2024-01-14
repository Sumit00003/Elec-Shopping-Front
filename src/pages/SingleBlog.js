import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import {Link} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';
const SingleBlog = () => {
  return (
    <>
     <Meta title={"Dynamic Blog Name"} />
   <Breadcrumb title='Dynamic Blog Name' />
   <Container class1='blog-wrapper home-wrapper-2 py-5'>
      <div className='row'>
          <div className='col-12'>
            <Link className='d-flex align-items-center gap-10' to='/blogs'><FaArrowLeft /> 
            Go Back to Blog</Link>
            <div className='single-blog-card'>
                <h3 className='title'>
                    A beautiful sunday morning renaissance
                </h3>
                <img src={blog} alt='blog' />
                <p>Description</p>

            </div>
        </div>
      </div>
    
    </Container>

    
    </>
  )
}

export default SingleBlog