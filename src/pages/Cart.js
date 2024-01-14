import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import watch from '../images/watch.jpg'
import { MdDelete } from "react-icons/md";
import {Link} from 'react-router-dom'
import Container from '../components/Container';

const Cart = () => {
  return (
   <>
   <Meta title={"Cart"} />
   <Breadcrumb title='Cart' />

   <Container class1='cart-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-12'>
                <div className='cart-header py-3 justify-content-between d-flex align-items-center'>
                    <h4 className='cart-col-1'>Product</h4>
                    <h4 className='cart-col-2'>Price</h4>
                    <h4 className='cart-col-3'>Quantity</h4>
                    <h4 className='cart-col-4'>Total</h4>
                </div>
                <div className='cart-data py-3 mb-2 justify-content-between d-flex align-items-center'>
                   <div className='cart-col-1 gap-15 d-flex align-items-center'>
                    <div className='w-25'>
                        <img src={watch} className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-75'>
                        <h5 >Sumit</h5>
                        <p >Size : ABC</p>
                        <p>Color : CDE</p>
                    </div>
                   </div>
                   <div className='cart-col-2'>
                    <h5 className='price'>$ 100.00</h5>
                   </div>
                   <div className='cart-col-3 d-flex align-items-center gap-15'>
                    <div>
                        <input className='form-control' type='number' min={1} max={10} name='' id='' />
                    </div>
                    <div>
                    <MdDelete className='text-danger '/>
                    </div>
                   </div>
                   <div className='cart-col-4'>
                   <h5 className='price'>$ 100.00</h5>

                   </div>
                </div>
            </div>
            <div className='col-12 py-2 mt-4'>
                <div className='d-flex justify-content-between align-items-center'>
                <Link to='/product' className='button'>
                    Continue to Shopping
                    </Link>
                    <div className='d-flex flex-column align-items-center'>
                        <h4>SubTotal : $ 1000</h4>

                        <p>Taxes and shipping calculated at checkout</p>
                        <Link to='/checkout' className='button'>CheckOut</Link>
                    </div>
                </div>
            </div>
        </div>

   </Container>
   </>
  )
}

export default Cart