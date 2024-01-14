import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import watch from '../images/watch.jpg'
import cross from '../images/cross.svg'
const wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <Breadcrumb title='Wishlist' />

            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                    <div className='d-flex'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src={cross}
                                className='position-absolute cross img-fluid'
                                alt='cross' />
                            <div className='wishlist-card-image'>
                                <img src={watch} className='img-fluid w-100' alt='watch' />
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>Honor T1 7.0 1 GB RAM 8GB 7 inch With Wifi+3G Tablet</h5>
                            <h6 className='price'>$100.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src={cross}
                                className='position-absolute cross img-fluid'
                                alt='cross' />
                            <div className='wishlist-card-image'>
                                <img src={watch} className='img-fluid w-100' alt='watch' />
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>Honor T1 7.0 1 GB RAM 8GB 7 inch With Wifi+3G Tablet</h5>
                            <h6 className='price'>$100.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src={cross}
                                className='position-absolute cross img-fluid'
                                alt='cross' />
                            <div className='wishlist-card-image'>
                                <img src={watch} className='img-fluid w-100' alt='watch' />
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>Honor T1 7.0 1 GB RAM 8GB 7 inch With Wifi+3G Tablet</h5>
                            <h6 className='price'>$100.00</h6>
                            </div>
                        </div>
                    </div>
                    </div>
                
            </Container>

        </>
    )
}

export default wishlist