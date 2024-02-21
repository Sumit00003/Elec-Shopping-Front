import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";
import watch from '../images/watch.jpg'
import Container from '../components/Container';
import {useDispatch, useSelector} from 'react-redux'
import * as yup from 'yup'
import {useFormik} from "formik"
import axios from "axios"
import {config} from '../utils/axiosConfig'
import { createAorder } from '../features/user/UserSlice';

const shippingSchema = yup.object({
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is Required"),
    address: yup.string().required("Address Details is Required"),
    state: yup.string().required("State is Required"),
    city: yup.string().required("City is Required"),
    country: yup.string().nullable().required("Country is Required"),
    pincode:yup.string().required("Pincode is Required")
  });

const Checkout = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.auth.cartProduct)
    const [totalAmount, settotalAmount] = useState(null)
    const [shippingInfo , setshippingInfo] =useState(null);
    const [paymentInfo , setpaymentInfo] = useState({razorpayPaymentId:"", razorpayOrderId:""})
    const [cartProductState, setcartProductState] = useState([])
    // console.log(cartProductState)
    const formik = useFormik({
        initialValues: {
        firstname: '',
        lastname: '',
        address: '',
        state: '',
        city: '',
        country: '',
        pincode: '',
        other:''
        },
        validationSchema : shippingSchema,
        onSubmit: (values) => {
            setshippingInfo(values),
            setTimeout(() => {
                checkOutHandler()  
            }, 300);
        }
      });

    useEffect(() =>{
        let sum = 0
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum +(Number(cartState[index].quantity) * cartState[index].price)
            settotalAmount(sum) 
        }
    },[cartState])
    
const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script")
        script.src = src;
        script.onload =() => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
useEffect(()=>{
let items = []
for (let index = 0; index < cartState?.length; index++) {   
    items.push({product:cartState[index].productId._id,quantity:cartState[index].quantity,color:cartState[index].color._id,price:cartState[index].price})
}
setcartProductState(items)

}, [])
    

const checkOutHandler = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if (!res){
        alert("Razorpay SDK Failed to Load")
        return
    }
    const result = await axios.post("http://localhost:5000/api/user/order/checkout",totalAmount,config)
    if(!result){
        alert("Something went wrong")
        return   
     }
     const { amount , id:order_id , currency } = result.data.order
     const options = {
        key: "rzp_test_RLYqmXcdjneUbB", // Enter the Key ID generated from the Dashboard
        amount: amount,
        currency: currency,
        name: "Gada Elec.",
        description: "Test Transaction",
        // image: { logo },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                // razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:5000/api/user/order/paymentVerification", data , config);

            setpaymentInfo({
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
            })
           
                
                
            
            dispatch(createAorder({totalPrice:totalAmount,totalPriceAfterDiscount:totalAmount,orderItems:cartProductState,shippingInfo}))
        },
        prefill: {
            name: "Gada Elec.",
            email: "GadaElec@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Gada Electronics",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
     
}


    return (
        <>
            <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>GADA ELEC.</h3>
                                <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item total-price"><Link className='text-dark' to="/cart">Cart</Link></li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active" aria-current="page">Information</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active">Shipping</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className='title total'><b>Contact Information</b></h4>
                                <p className='user-details total'>Sumit mourya (sumitmouryaa@gmail.com)</p>
                                <h4 className='mb-3'><b>Shipping Address</b></h4>

                                <form action='' onSubmit={formik.handleSubmit} className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='w-100'>
                                        <select name='country' 
                                        value={formik.values.country} 
                                        onChange={formik.handleChange("country")} 
                                        onBlur={formik.handleChange("country")} 
                                        className='form-control form-select'>
                                            <option value='' selected disabled>Select country</option>
                                            <option value='Bharat'>Bharat</option>
                                        </select>
                                        <div className='error ms-2 my-1'>
                                            {
                                                formik.touched.country && formik.errors.country
                                            }
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input className='form-control' placeholder='FirstName' type='text'
                                        name='firstname'
                                        value={formik.values.firstname} 
                                        onChange={formik.handleChange("firstname")} 
                                        onBlur={formik.handleChange("firstname")} 
                                         />
                                         <div className='error ms-2 my-1'>
                                            {
                                                formik.touched.firstname && formik.errors.firstname
                                            }
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                    <input className='form-control' placeholder='LastName' type='text' 
                                    name='lastname'
                                    value={formik.values.lastname} 
                                    onChange={formik.handleChange("lastname")} 
                                    onBlur={formik.handleChange("lastname")} 
                                     />
                                     <div className='error ms-2 my-1'>
                                        {
                                            formik.touched.lastname && formik.errors.lastname
                                        }
                                    </div>
                                    </div>
                                    <div className='w-100'>
                                    <input className='form-control' placeholder='Address' type='text' 
                                    name='address'
                                    value={formik.values.address} 
                                    onChange={formik.handleChange("address")} 
                                    onBlur={formik.handleChange("address")} 
                                     />
                                     <div className='error ms-2 my-1'>
                                        {
                                            formik.touched.address && formik.errors.address
                                        }
                                    </div>
                                    </div>
                                    <div className='w-100'>
                                    <input className='form-control' placeholder='Apartment, Suite ,etc' type='text' 
                                    name='other'
                                    value={formik.values.other} 
                                    onChange={formik.handleChange("other")} 
                                    onBlur={formik.handleChange("other")} 
                                     />
                                     
                                    </div>
                                    <div className='flex-grow-1'>
                                    <input className='form-control' placeholder='City' type='text' 
                                    name='city'
                                    value={formik.values.city} 
                                    onChange={formik.handleChange("city")} 
                                    onBlur={formik.handleChange("city")} 
                                     />
                                     <div className='error ms-2 my-1'>
                                        {
                                            formik.touched.city && formik.errors.city
                                        }
                                    </div>
                                    </div>
                                    <div className='flex-grow-1' >
                                    <select className='form-control form-select' 
                                        name='state'
                                        value={formik.values.state} 
                                        onChange={formik.handleChange("state")} 
                                        onBlur={formik.handleChange("state")} >
                                        <option value='' selected disabled>Select State</option>
                                        <option value='Mumbai'>Mumbai</option>
                                    </select>
                                    <div className='error ms-2 my-1'>
                                        {
                                            formik.touched.state && formik.errors.state
                                        }
                                    </div>
                                    </div>
                                    <div className='flex-grow-1' >
                                    <input className='form-control' placeholder='ZipCode' type='text' 
                                    name='pincode'
                                    value={formik.values.pincode} 
                                    onChange={formik.handleChange("pincode")} 
                                    onBlur={formik.handleChange("pincode")}/>   
                                    </div>
                                    <div className='error ms-2 my-1'>
                                        {
                                            formik.touched.pincode && formik.errors.pincode
                                        }
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to='/cart' className='text-dark'><MdKeyboardArrowLeft className='me-2'/>Return to Cart</Link>
                                            <Link to='/' className='button'>Continue to Shipping</Link>
                                            <button className='button' type='submit'>Place Order</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                {
                                    cartState && cartState.map && cartState?.map((item , index)=>{
                                        return (<div key={index} className='d-flex gap-10 mb-2 align-items-center'>
                                        <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span style={{top:"-10px" , right : "2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                                                {item?.quantity}</span>
                                            <img height={100} width={100} src={ item?.productId?.images[0].url ?  item?.productId?.images[0].url : watch} alt='product' />
                                        </div>
                                        <div>
                                            <h5 className='total-price'>{item?.productId?.title}</h5>
                                            <p className='total-price'>{item?.color?.title}</p>
                                        </div>
                                        </div>
                                        <div className='flex-grow-1'>
                                            <h5 className='total'>$ {item?.price * item?.quantity}</h5>
                                        </div>
                                        </div>

                                        )
                                    })
                                }
                            
                            </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>SubTotal</p>
                                <p className='total-price'>$ {totalAmount?totalAmount: "0"}</p>
                            </div></div>
                            <div>
                                <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$ 5</p>
                            </div></div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$ {totalAmount?totalAmount + 5: "0"}</h5>
                            </div>
                        </div>
                    </div>
                </Container>
            
        </>
    )
}

export default Checkout