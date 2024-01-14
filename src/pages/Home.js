import React from 'react'
import {Link} from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCart from '../components/BlogCart'
import Specialprod from '../components/specialprod'
import ProductCart from '../components/ProductCart'
import catbanner from '../images/catbanner-01.jpg'
import catbanner2 from '../images/catbanner-02.jpg'
import catbanner3 from '../images/catbanner-03.jpg'
import catbanner4 from '../images/catbanner-04.jpg'
import mainbanner1 from '../images/main-banner-1.jpg'
import service from '../images/service.png'
import service2 from '../images/service-02.png'
import service3 from '../images/service-03.png'
import service4 from '../images/service-04.png'
import service5 from '../images/service-05.png'
import headphone from '../images/headphone.jpg'
import TV from '../images/tv.jpg'
import Camera from '../images/camera.jpg'
import Famous1 from '../images/fmaous-01.webp'
import Famous2 from '../images/famous-02.webp'
import Famous3 from '../images/famous-03.webp'
import Famous4 from '../images/famous-04.webp'
import Brand from '../images/brand-01.png'
import Brand2 from '../images/brand-02.png'
import Brand3 from '../images/brand-03.png'
import Brand4 from '../images/brand-04.png'
import Brand5 from '../images/brand-05.png'
import Brand6 from '../images/brand-06.png'
import Brand7 from '../images/brand-07.png'
import Brand8 from '../images/brand-08.png'
import Container from '../components/Container'
//import { services } from '../utils/Data'


const Home = () => {
  return (
    <>
    <Container class1='home-wrapper-1 py-5'>
    <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src={mainbanner1} className='img-fluid rounded-3' alt='main banner'/>
              <div className='main-banner-content position-absolute'>
                <h4>SuperCharged For PROS.</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999 or $41.62/mo.</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner position-relative'>
              <img src={catbanner} className='img-fluid rounded-3' alt='small banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>Best Sales</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999 <br />or $41.62/mo.</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src={catbanner2} className='img-fluid rounded-3' alt='small banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>New Arrival</h4>
                <h5>Buy Ipad Air</h5>
                <p>From $999 <br />or $41.62/mo.</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src={catbanner3} className='img-fluid rounded-3' alt='small banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>New Arrival</h4>
                <h5>Buy Ipad Air</h5>
                <p>From $999 <br />or $41.62/mo.</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src={catbanner4} className='img-fluid rounded-3' alt='small banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>New Arrival</h4>
                <h5>Buy Ipad Air</h5>
                <p>From $999 <br />or $41.62/mo.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-10'> 
                <img src={service} alt='services'/>
                <div>
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>From all orders over $5
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'> 
                <img src={service2} alt='services'/>
                <div>
                  <h6>Daily Surprise Offer</h6>
                  <p className='mb-0'>Save upto 25% off
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'> 
                <img src={service3} alt='services'/>
                <div>
                  <h6> Support 24/7</h6>
                  <p className='mb-0'>Shop with an expert
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'> 
                <img src={service4} alt='services'/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory Default Price
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'> 
                <img src={service5} alt='services'/>
                <div>
                  <h6>Secure Payment</h6>
                  <p className='mb-0'>100% Protected System
                  </p>
                </div> 
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6><b>Cameras</b></h6>
                  <p>10 Items</p>
                </div>
                <img src={Camera} alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6><b>Music & Gaming</b></h6>
                  <p>10 Items</p>
                </div>
                <img src={Camera} alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6><b>Smart TV</b></h6>
                  <p>10 Items</p>
                </div>
                <img src={TV} alt='Tv' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6><b>Smart Watches</b></h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt='Watch' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6><b>Cameras</b></h6>
                  <p>10 Items</p>
                </div>
                <img src={Camera} alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6><b>Music & Gaming</b></h6>
                  <p>10 Items</p>
                </div>
                <img src={Camera} alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6><b>Smart TV</b></h6>
                  <p>10 Items</p>
                </div>
                <img src={TV} alt='Tv' />
              </div>
              <div className='d-flex ga align-items-center'>
                <div>
                  <h6><b>Smart Watches</b></h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt='Watch' />
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1='featured-wrapper py-5 home-wrapper-2'>
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collections</h3>
          </div>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
        </div>
    </Container>
   <Container class1='famous-wrapper py-5 home-wrapper-2'>
   <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={Famous1} className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $339 or $16.62/mo for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={Famous2} className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>Studio Display</h5>
              <h6 className='text-dark'><b>600 nits of brightness</b></h6>
              <p className='text-dark'>27-insh 5K Retina display.</p>
              </div>
          </div>
            </div>
            <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={Famous3} className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>SmartPhones</h5>
              <h6 className='text-dark'><b>Smart Phone 13 Pro</b></h6>
              <p className='text-dark'>Now in Green. from $999.00 or $41.62/mo, for 24 mo. Footnote*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={Famous4} className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>Home Speakers </h5>
              <h6 className='text-dark'><b>Room-filling Sound</b></h6>
              <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
              </div>
          </div>
            </div>
        </div>
   </Container>
    <Container class1='special-wrapper py-5 home-wrapper-2'>
    <div className='row'>
        <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          <Specialprod />
          <Specialprod />
          <Specialprod />
          <Specialprod />
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
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          </div>
    </Container>
    <Container class1='marque-wrapper py-5'>
    <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src={Brand} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={Brand2} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={Brand3} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={Brand4} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={Brand5} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={Brand6} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={Brand7} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={Brand8} alt='brand' />
                </div>

              </Marquee>
            </div>
          </div>
        </div>
    </Container>
    <Container class1='blog-wrapper py-5 home-wrapper-2 d-flex'>
    <div className='row'>
          <div className='col-12 '>
            <h3 className='section-heading'>Our Latest Blog</h3>
          </div>
        </div>
        <div className='d-flex'><div className='row'>
        <BlogCart/>
        </div>
        <div className='row'>
        <BlogCart/>
        </div>
        <div className='row'>
        <BlogCart/>
        </div>
        <div className='row'>
        <BlogCart/>
        </div></div>
    </Container>
    </>
  )
}

export default Home