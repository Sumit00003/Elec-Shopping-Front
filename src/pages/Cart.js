import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import watch from '../images/watch.jpg'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartPRoduct, getUserCart, upadateCartPRoduct } from '../features/user/UserSlice';




const Cart =  () => {
    const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
  
   const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
   
  };
    
    const userCartState = useSelector(state => state?.auth?.cartProduct)
    //const userCartState = useSelector(state => state.auth.cartProduct.ProductId)
    const [productUpdateDetail, setproductUpdateDetail] = useState(null)
    const [totalAmount, settotalAmount] = useState(null)
    // console.log(totalAmount)
    // console.log(productUpdateDetail)
    //console.log(userCartState)
    const dispatch = useDispatch();

     useEffect(() => {
        dispatch(getUserCart(config2))
    }, [])
    useEffect(() => {
        if(productUpdateDetail !== null){
            dispatch(upadateCartPRoduct({ cartItemId: productUpdateDetail?.cartItemId, quantity:productUpdateDetail?.quantity }))
        setTimeout(() => {
            dispatch(getUserCart(config2))
        }, 200)
        }
    }, [productUpdateDetail])

    const deleteaCartProduct = (id) => {
        dispatch(deleteCartPRoduct({id:id , config2:config2}))
        setTimeout(() => {
            dispatch(getUserCart(config2))
        }, 200)
    }
    useEffect(() =>{
        let sum = 0
        for (let index = 0; index < userCartState?.length; index++) {
            sum = sum +(Number(userCartState[index].quantity) * userCartState[index].price)
            settotalAmount(sum) 
        }
    },[userCartState])
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
                        {
                            userCartState && userCartState.map && userCartState?.map((item, index) => {
                                //console.log(item.images)
                                return (
                                    <div key={index} className='cart-data py-3 mb-2 justify-content-between d-flex align-items-center'>
                                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                            <div className='w-25'>
                                                <img src={item?.productId?.images[0]?.url ?item?.productId?.images[0]?.url : watch} className='img-fluid' alt='watch' />
                                            </div>
                                            <div className='w-75'>
                                                <h5 >{item?.productId.title}</h5>
                                                {/* <p >Size : ABC</p> */}
                                                <div className='d-flex gap-3'>Color :  <ul className='colors ps-0'>
                                                    <li style={{ backgroundColor: item?.color.title }}></li>
                                                </ul></div>
                                            </div>
                                        </div>
                                        <div className='cart-col-2'>
                                            <h5 className='price'>$ {item?.price}</h5>
                                        </div>
                                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                                            <div>
                                                <input className='form-control' 
                                                type='number' min={1} max={10} 
                                                name={"quantity"+item?._id} 
                                                id={"cart"+item?._id} 
                                                value={item?.quantity} 
                                                onChange={(e) => { setproductUpdateDetail({cartItemId:item?._id ,quantity:e.target.value})}} />
                                            </div>
                                            <div>
                                                <MdDelete onClick={() => { deleteaCartProduct(item?._id) }} className='text-danger ' />
                                            </div>
                                        </div>
                                        <div className='cart-col-4'>
                                            <h5 className='price'>$ {item?.price * item?.quantity}</h5>
                                        </div>
                                    </div>)
                            })}
                    </div>
                    <div className='col-12 py-2 mt-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to='/product' className='button'>
                                Continue to Shopping
                            </Link>
                            {
                                (totalAmount!==null || totalAmount !== 0 ) &&
                                <div className='d-flex flex-column align-items-center'>
                                <h4>SubTotal : ${totalAmount}</h4>

                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to='/checkout' className='button'>CheckOut</Link>
                            </div>
                            }
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Cart