import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import ProductCart from '../components/ProductCart'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { FaRupeeSign } from "react-icons/fa";
//import Link from 'react-router-dom'
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCartPlus, FaLiraSign } from "react-icons/fa";
import Container from '../components/Container'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addRating, getAllproducts, getAproducts } from '../features/product/productSlice'
import {toast, useToastContainer} from 'react-toastify'
import {addProdToCart, getUserCart} from '../features/user/UserSlice'

const SingleProduct = () => {
  const [color , setColor] = useState(null)
  const [quantity , setQuantity] = useState(1)
  const [alreadyAdded , setAlreadyAdded] = useState(false)
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2]
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productState = useSelector((state) => state?.product?.singleproduct)
  const productsState = useSelector((state) => state?.product?.product)
  // console.log(productsState)
  const cartState = useSelector((state) => state?.auth?.cartProduct)
  // console.log(cartState)

  useEffect(()=>{
    dispatch(getAproducts(getProductId))
    dispatch(getUserCart())
    dispatch(getAllproducts())
}, [])

useEffect(()=>{
  for (let i = 0 ; i <cartState?.length ; i++){
    if (getProductId === cartState[i]?.productId?._id){
      setAlreadyAdded(true)
    }
  }
}, [])

const uploadCart = () => {
if(color===null){
  toast.error("Please Choose Color.")
  return false
} else{
  dispatch(addProdToCart({productId:productState?._id , quantity, color , price:productState?.price}))
  navigate('/cart')
}
}

  const props = { 
    width: 400,
   height: 500, 
   zoomWidth: 600, 
   img: productState?.images[0].url ? productState?.images[0].url : "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg"
  } ;
  const [orderedProduct /*setorderedProduct*/] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
const closeModal = () =>{ };
const [popularProduct , setPopularProduct] = useState([]);
useEffect(() => {
  let data=[]
  for (let index = 0; index < productsState?.length; index++) {
    const element = productsState[index];
    // console.log(element)
    if(element.tags == 'popular'){
      data.push(element)
    }
    setPopularProduct(data)
  }
  // console.log("data",data)
},[productState])

const [ star , setStar ] =  useState(null)
const [ comment , setComment ] =  useState(null)
const addRatingToProduct = () =>{
  if (star === null ){
    toast.error("Please add star rating")
    return false
  } if ( comment === null){
    toast.error("Please Write Review About the Product.")
    return false
  } else{
    dispatch(addRating({star : star , comment:comment,prodId:getProductId}))
    setTimeout(() => {
      dispatch(getAproducts(getProductId))

    }, 100);

  }
  return false
}

  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title={productState?.title} />
      <Container class1='main-product-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
                { productState?.images &&
                  productState?.images.map((item, index) => {
                    return (
                      <div key={index}><img src={item?.url } className='img-fluid' alt='item' /></div>
                    )
                  })
                }
                {/* <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div> */}
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>
                    {productState?.title}
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'><FaRupeeSign />{productState?.price}</p>
                  <div className='d-flex align-items-center gap-10'>
                  <ReactStars count={5} size={24} value={productState?.totalratings} edit={false} activeColor="#ffd700" />
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
                    <p className='product-data my-2'>{productState?.brand}</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-heading'>Category :</h3>
                    <p className='product-data my-2'>{productState?.category}</p>
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
                  {
                    alreadyAdded === false && <>
                     <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color :</h3>
                    <Color setColor={setColor} colorData={productState?.color} />
                  </div>
                    </>
                  }
                  <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                    {
                      alreadyAdded === false && <>
                      <h3 className='product-heading'>Quantity :</h3>
                    <div>
                      <input type='number' name='' id='' min={1} max={10} className='form-control' style={{ width : "70px"}} onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                    </div>
                      </>
                    }

                    <div className={alreadyAdded?"ms-0" : "ms-5" + 'd-flex align-items-center gap-30 ms-5'}>
                    <button 
                    className='button border-0' 
                    type='button'
                    // data-toggle="modal"
                    // data-target="#staticBackdrop"
                    onClick={()=>{alreadyAdded ? navigate('/cart') : uploadCart()}}>
                    {alreadyAdded?"Go to Cart" : "Add to Cart"}
                      </button>

                    {/* <button to='/signup' className='button signup '>Buy it Now</button> */}
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <a href='/compare'><IoGitCompareOutline className='fs-5 mb-2'/> Add to Compare</a>
                    </div>
                    <div>
                      <a href='/wishlist'><FaCartPlus className='fs-5 mb-2'/> Add to Wishlist</a>
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
                    <a href='javascript:void(0);' onClick={() => {copyToClipboard
                    (window.location.href)
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
                <p dangerouslySetInnerHTML={{__html: productState?.description}}></p>
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
                      <a className='text-dark text-decoration-underline' href="#">Write a Review</a>
                    </div>
                  )}
                </div>
                <div className='review-form py-4'>
                  <h4>Write a Review</h4>
                    <div>
                    <ReactStars count={5} size={24} value="3" edit={true} activeColor="#ffd700" onChange={(e) => {setStar(e)}}/>
                    </div>
                    <div>
                      <textarea className='w-100 form-control' id='' cols='30' rows='4' placeholder='Comments' onChange={(e) => {setComment(e.target.value)}}></textarea>
                    </div>
                    <div className='d-flex justify-content-end mt-3'>
                      <button onClick={addRatingToProduct} className='button border-0' type="button">Submit Reviews</button>
                    </div>
                </div>
              <div className='reviews mt-4'>
                {
                  productState && productState?.ratings?.map((item, index) => {
                    return (
                      <div key={index} className='review'>
                        <div className='d-flex gap-10 align-items-center'>
                          {/* <h6 className='mb-0'> {item?.} </h6> */}
                          <ReactStars count={5} size={24} value={item?.star} edit={false} activeColor="#ffd700" /></div>
                        <p className='mt-3'>{item?.comment}</p>
                      </div>
                    )
                  })
                  }
                  
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
            <ProductCart data={popularProduct}/>
          </div>
        
      </Container>
    </>
  )
}

export default SingleProduct