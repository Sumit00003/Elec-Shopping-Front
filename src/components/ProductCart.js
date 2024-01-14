import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link, useLocation} from 'react-router-dom'
import wish from '../images/wish.svg'
import watch from '../images/watch.jpg'
import compare from '../images/prodcompare.svg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

const ProductCart = (props) => {
    let location = useLocation();
    const {grid}= props;
    //alert(location)
  return (
    <>
    <div 
    className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to=':id' className='product-cart position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'>
                <img src={wish} alt='wishlist' />
                </button>
            </div>
            <div className='product-images'>
                <img src={watch} className='img-fluid' alt='product images' />
                {/* <img src='images/speaker.jpg' className='img-fluid-1' alt='product images' /> */}
            </div>
            <div className='product-details'>
                <h6 className='brand'>Hovels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Description</p>
                    <p className='price'>
                        <span className='red-p'>$100</span> &nbsp; <strike>$200</strike>
                    </p> 
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'>
                    <img src={compare} alt='compare' />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt='view' />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt='addcart' />
                    </button>
                </div>
            </div>
        </Link>
    </div>

    <div 
    className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
        <Link to=':id' className='product-cart position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                <img src={wish} alt='wishlist' />
                </Link>
            </div>
            <div className='product-images'>
                <img src={watch} className='img-fluid' alt='product images' />
                {/* <img src='images/speaker.jpg' className='img-fluid-1' alt='product images' /> */}
            </div>
            <div className='product-details'>
                <h6 className='brand'>Hovels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Description</p>
                    <p className='price'>
                        <span className='red-p'>$100</span> &nbsp; <strike>$200</strike>
                    </p> 
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'>
                    <img src={compare} alt='compare' />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt='view' />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt='addcart' />
                    </button>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCart