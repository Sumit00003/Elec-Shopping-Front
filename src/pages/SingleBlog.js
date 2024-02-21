import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import {Link, useLocation} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux'
import { getAblog } from '../features/blogs/blogsSlice';



const SingleBlog = () => {
  const blogAState = useSelector((state)=>state?.blog?.singleblog);
  console.log(blogAState)
  const location = useLocation();
  // console.log(location)
  const getBlogId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() =>{
      getABlog();
  },[])
  const getABlog = () =>{
     dispatch(getAblog(getBlogId));
  }

  return (
    <>
     <Meta title={blogAState?.title} />
   <Breadcrumb title={blogAState?.title} />
   <Container class1='blog-wrapper home-wrapper-2 py-5'>
      <div className='row'>
          <div className='col-12'>
            <Link className='d-flex align-items-center gap-10' to='/blogs'><FaArrowLeft /> 
            Go Back to Blog</Link>
            <div className='single-blog-card'>
                <h3 className='title'>
                {blogAState?.title}
                </h3>
                <img src={blogAState?.images[0] ? blogAState?.images[0] : blog} alt='blog' />
                <p dangerouslySetInnerHTML={{__html: blogAState?.description}}></p>

            </div>
        </div>
      </div>
    
    </Container>

    
    </>
  )
}

export default SingleBlog