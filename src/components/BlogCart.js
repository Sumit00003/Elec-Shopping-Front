import React from 'react'
import { Link } from 'react-router-dom'
import blog from '../images/blog-1.jpg'
const BlogCart = () => {
  return (
    
        <div className='blog-card'>
        <div className='card-image'>
            <img src={blog} className='img-fluid' alt='blog' />
        </div>
        <div className='blog-content'>
            <p className='date'>1 Dec 2023</p>
            <h5 className='title'>A beautiful sunday morning renaissance</h5>
            <p className='desc'>Main Content</p>
            <Link to='/blog/:id' className='button'>
                Read More
            </Link>
        </div>
    </div>
    
  )
}

export default BlogCart