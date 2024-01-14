import React, { useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../components/ProductCart'
import Color from '../components/Color'
import gr from '../images/gr.svg'
import gr2 from '../images/gr2.svg'
import gr3 from '../images/gr3.svg'
import gr4 from '../images/gr4.svg'
import watch from '../images/watch.jpg'
import Container from '../components/Container'



const Ourstore = () => {
    const [grid ,setGrid] = useState(4);
    //alert(grid)
  return (
  <>
  <Meta title={"Our Store"} />
    <Breadcrumb title='Our Store'/>
    <Container className='store-wrapper py-5 home-wrapper-2'>
        <div className='d-flex'> 
        <div className='col-3 p-3'>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Shop By Categories</h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Watch</li>
                            <li>Tv</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Filter By</h3>
                    <div>
                      <h5 className='sub-title'>Availabilty</h5>  
                      <div>
                      <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value="" id=""/>
                        <label className='form-check-label' htmlFor="">
                            In stock (1)
                        </label>
                        </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value="" id="" htmlF/>
                        <label className='form-check-label' htmlFor="">
                            Out of stock(0)
                        </label>
                      </div>
                      </div>
                    </div>
                    <h5 className='sub-title'>Price</h5>
                    <div className='d-flex align-itmes-center gap-10'>
                    <div className="form-floating ">
                    <input type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="From" />
                    <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating ">
                    <input type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="To" />
                    <label htmlFor="floatingInput1">To</label>
                    </div>
                    </div>
                    <h5 className='sub-title'>Colors</h5>
                    <div className='d-flex flex-wrap '>
                        <Color/>
                    </div>
                    <h5 className='sub-title'>Sizes</h5>
                    <div>
                      <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value="" id="color-1"/>
                        <label className='form-check-label' htmlFor="color-2">
                            S (2)
                        </label>
                        </div>
                        <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value="" id="color-2"/>
                        <label className='form-check-label' htmlFor="color-2">
                            M (5)
                        </label>
                        </div>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Product Tags</h3>
                    <div>
                        <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                Headphone
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                Laptop
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                Mobile
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                Wire
                            </span>
                        </div>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Random Product</h3>
                    <div>
                        <div className='random-products mb-3 d-flex '>
                            <div className='w-50'>
                                <img src={watch} className='img-fluid' alt='watch' />
                            </div>
                            <div className='w-50'>
                                <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                                <b>$300.00</b>
                            </div>
                        </div>
                        <div className='random-products d-flex '>
                            <div className='w-50'>
                                <img src={watch} className='img-fluid' alt='watch' />
                            </div>
                            <div className='w-50'>
                                <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                                <b>$300.00</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-9'>
                <div className='filter-sort-grid mb-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-10'>
                        <p className='mb-0 d-block' style={{ width : "100px" }}>Sort By:</p>
                        <select name=" " className='form-control form-select' id=''>
                            <option value="manual" >Featured</option>
                            <option value="best-selling" selected='selected' >Best Selling</option>
                            <option value="title-ascending" >Alphabetically, A-Z</option>
                            <option value="title-descending" >Alphabetically, Z-A</option>
                            <option value="price-ascending" >Price, Low to high</option>
                            <option value="price-descending" >Price, Low to high</option>
                            <option value="created-ascending" >Date, old to new</option>
                            <option value="created-descending" >Date, new to old</option>
                        </select>
                    </div>
                    <div className='d-flex align-items-center gap-10'>
                        <p className='totalproducts '>21 Products</p>
                        <div className='d-flex gap-10 align-items-center grid'>
                        <img onClick={() =>{
                            setGrid(3);
                        }} src={gr4} className='d-block img-fluid' alt='grid' />
                        <img onClick={() =>{
                            setGrid(4);
                        }} src={gr3} className='d-block img-fluid' alt='grid' />
                        <img onClick={() =>{
                            setGrid(6);
                        }} src={gr2} className='d-block img-fluid' alt='grid'/>
                        <img onClick={() =>{
                            setGrid(12);
                        }} src={gr} className='d-block img-fluid' alt='grid' />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='products-list pb-5'>
                    <div className='d-flex gap-10 flex-wrap'>
                    <ProductCard grid={grid}/>
                    </div>
                </div>
            </div>
        </div>
           
        
    </Container>

    </>
  )
}

export default Ourstore