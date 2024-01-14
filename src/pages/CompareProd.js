import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
import cross from '../images/cross.svg'
import watch from '../images/watch.jpg'
import Container from '../components/Container'
const CompareProd = () => {
  return (
    <>
    <Meta title={"Compare Products"} />
    <Breadcrumb title='Compare Products'/>
    <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img src={cross} className='position-absolute cross img-fluid' alt='cross'/>
                        <div className='product-card-image'>
                            <img src={watch} alt='watch' />
                        </div>
                        <div className='compare-product-detail'>
                            <h5 className='title'>Honor T1 7.0 1 GB RAM 8GB 7 inch With Wifi+3G Tablet</h5>
                            <h6 className='price mb-3 mt-3'><b>$100.00</b></h6>

                            <div>
                                <div className='product-detail'>
                                    <h5>Brand:</h5>
                                    <p>Havel</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Availabilty:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Color</h5>
                                    <Color />
                                </div>
                                <div className='product-detail'>
                                    <h5>Size</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img src={cross} className='position-absolute cross img-fluid' alt='cross'/>
                        <div className='product-card-image'>
                            <img src={watch} alt='watch' />
                        </div>
                        <div className='compare-product-detail'>
                            <h5 className='title'>Honor T1 7.0 1 GB RAM 8GB 7 inch With Wifi+3G Tablet</h5>
                            <h6 className='price mb-3 mt-3'><b>$100.00</b></h6>

                            <div>
                                <div className='product-detail'>
                                    <h5>Brand:</h5>
                                    <p>Havel</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Availabilty:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Color</h5>
                                    <Color />
                                </div>
                                <div className='product-detail'>
                                    <h5>Size</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </Container>
    
    </>
  )
}

export default CompareProd