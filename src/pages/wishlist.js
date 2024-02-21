import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import watch from '../images/watch.jpg'
import cross from '../images/cross.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProdwishlist } from '../features/user/UserSlice'
import { addtoWishlist } from '../features/product/productSlice'



const wishlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getWishlistFromDB();
    }, [])
    const getWishlistFromDB = () => {
        dispatch(getUserProdwishlist());
    }
const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist)
// console.log(wishlistState)
const removeFromWishlist = (id) => {
    dispatch(addtoWishlist(id));
    setTimeout(() => {
        dispatch(getUserProdwishlist());
    }, 300);
}


    return (
        <>
            <Meta title={"Wishlist"} />
            <Breadcrumb title='Wishlist' />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    {  wishlistState && wishlistState.map && 
                        wishlistState.length === 0 && (
                            <div className='text-center fs-3'><b>No DATA</b></div>
                        )
                    }
                   {  wishlistState && wishlistState.map && 
                     wishlistState?.map((item, index) => (
                       
                            <div className='col-3' key={index}>
                        <div className='wishlist-card position-relative'>
                            <img src={cross}
                                onClick={() => {removeFromWishlist(item?._id)}}
                                className='position-absolute cross img-fluid'
                                alt='cross' />
                            <div className='wishlist-card-image bg-white'>
                                <img src={item?.images[0].url ? item?.images[0].url : watch}
                                    className='img-fluid d-block mx-auto' alt='watch' width={160} />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title'><b>{item?.title}</b></h5>
                                <h6 className='price'>${item?.price}</h6>
                            </div>
                        </div>
                    </div>
                        )
                     )
                   }
                </div>
            </Container>

        </>
    )
}

export default wishlist