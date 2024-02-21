import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import BlogCart from '../components/BlogCart'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getAllblogs } from '../features/blogs/blogsSlice'
import moment from"moment";

const Blog = () => {
  const blogState = useSelector((state)=>state.blog.blog)
  const dispatch = useDispatch();
  useEffect(() =>{
      getBlogs();
  },[])
  const getBlogs = () =>{
     dispatch(getAllblogs());
  }


  return (
    <>
    <Meta title={"Blogs"} />
    <Breadcrumb title='Blog'/>
    <Container class1='blog-wrapper home-wrapper-2 py-5'>
      <div className='row'>
          <div className='col-3'>
          <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Find By Categories</h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Watch</li>
                            <li>Tv</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
          </div>
          <div className='col-9'>
            <div className='row'>
              { blogState && blogState.map && 
                blogState?.map((item , index ) => {
                  return (
                    <div className='col-6 mb-3' key={index}>
              <BlogCart id={item?._id} 
              title={item?.title} 
              description={item?.description} 
              image={item?.images[0]} 
              date ={moment(item?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              />
            </div>
                  )
                })
              }
              
              </div>
              
          </div>
        </div>
      </Container>
    


    </>
  )
}

export default Blog