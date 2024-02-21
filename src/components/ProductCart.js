import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link, useLocation} from 'react-router-dom'
import wish from '../images/wish.svg'
import watch from '../images/watch.jpg'
import compare from '../images/prodcompare.svg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addtoWishlist } from '../features/product/productSlice'


const ProductCart = (props) => {
    const { grid, data }= props;
    const dispatch = useDispatch();
    // console.log("This is data from the database",data);
    let location = useLocation();
    const addToWishlist = (id) =>{
        dispatch(addtoWishlist(id))
    }
    //alert(location)
  return (
    <>
    {
       data &&
       data?.map((item , index) => (
        <div 
        key={index}
         className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
             <div 
             className='product-cart position-relative'>
                 <div className='wishlist-icon position-absolute'>
                     <button className='border-0 bg-transparent' onClick={(e) =>{addToWishlist(item?._id)}}>
                     <img src={wish} alt='wishlist' />
                     </button>
                 </div>
                 <div className='product-images'>
                     <img src={item?.images[0].url} className='img-fluid d-block mx-auto' alt='product images' 
                     width={160}/>
                     {/* <img src='images/speaker.jpg' className='img-fluid-1' alt='product images' /> */}
                 </div>
                 <div className='product-details'>
                     <h6 className='brand'>{item?.brand}</h6>
                     <h5 className='product-title'>
                         {item?.title}
                         </h5>
                         <ReactStars count={5} size={24}  value={item?.totalrating.toString()} edit={false} activeColor="#ffd700" />
                         <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                            dangerouslySetInnerHTML={{__html: item.description}}>
                         </p>
                         <p className='price'>
                             <span className='red-p'>${item.price}</span> &nbsp; <strike>$675</strike>
                         </p> 
                 </div>
                 <div className='action-bar position-absolute'>
                     <div className='d-flex flex-column gap-15'>
                     <button className='border-0 bg-transparent'>
                         <img src={compare} alt='compare' />
                         </button>
                         <Link to={'/product/' + item?._id} className='border-0 bg-transparent'>
                         <img  src={view} alt='view' />
                         </Link>
                         <button className='border-0 bg-transparent'>
                         <img src={addcart} alt='addcart' />
                         </button>
                     </div>
                 </div>
             </div>
         </div>
       ))
    }
      
    </>
  )
}

export default ProductCart