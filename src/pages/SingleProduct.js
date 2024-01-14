import React, { useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import ProductCart from '../components/ProductCart'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import Link from 'react-router-dom'
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import Container from '../components/Container'
const SingleProduct = () => {
  const props = { 
    width: 400,
   height: 500, 
   zoomWidth: 600, 
   img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg"} ;
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title='Product Name' />
      <Container class1='main-product-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
                <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100.00</p>
                  <div className='d-flex align-items-center gap-10'>
                  <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                      <p className='mb-0 t-review'>2 Reviews</p>
                  </div>
                  <a href='#review'>Write a Review</a>
                </div>
                <div className='border-bottom py-3'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-heading'>Type :</h3>
                    <p className='product-data my-2'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-heading'>Brand :</h3>
                    <p className='product-data my-2'>Havels</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-heading'>Category :</h3>
                    <p className='product-data my-2'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-heading'>Tags :</h3>
                    <p className='product-data my-2'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-heading'>Availability :</h3>
                    <p className='product-data my-2'>In STock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size :</h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color :</h3>
                    <Color />
                  </div>
                  <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity :</h3>
                    <div>
                      <input type='number' name='' id='' min={1} max={10} className='form-control' style={{ width : "70px"}} />
                    </div>
                    <div className='d-flex align-items-center gap-30 ms-5'>
                    <button className='button border-0' type='submit'>Add to Cart</button>
                    <button to='/signup' className='button signup '>Buy it Now</button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <a href=''><IoGitCompareOutline className='fs-5 mb-2'/> Add to Compare</a>
                    </div>
                    <div>
                      <a href=''><FaCartPlus className='fs-5 mb-2'/> Add to Wishlist</a>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column my-3'>
                    <h3 className='product-heading'>Shipping & Returns</h3>
                    <p className='product-data my-2'>
                      Free Shipping and returns available on all orders! We ship all US domestic 
                      orders within <b>5-10 business days</b>
                    </p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h3 className='product-heading'>Product Link</h3>
                    <a href='javascript:void(0);' onClick={() => {copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg")
                    }} >Copy Product link From here</a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container className='description-wrapper py-5 home-wrapper-2'>
          <div className='row'>
          <h4>Description</h4>
            <div className='col-12'>
             <div>
                <p>Description</p>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1='reviews-wrapper home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
            <h3 id='review'>Reviews</h3>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex align-items-center gap-10'>
                      <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                      <p className='mb-0'>Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                    </div>
                  )}
                </div>
                <div className='review-form py-4'>
                  <h4>Write a Review</h4>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                    <ReactStars count={5} size={24} value="3" edit={true} activeColor="#ffd700" />
                    </div>
                    <div>
                      <textarea className='w-100 form-control' id='' cols='30' rows='4' placeholder='Comments'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Reviews</button>
                    </div>
                  </form>
                </div>
                <div className='reviews'>
                  <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'> Sumit </h6>
                    <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" /></div>
                  <p className='mt-3'>Description....</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>

      <Container class1='popular-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
            {/* <div className='col-2'></div>
          <div className='col-2'></div> */}
            <ProductCart />
          </div>
        
      </Container>
    </>
  )
}

export default SingleProduct