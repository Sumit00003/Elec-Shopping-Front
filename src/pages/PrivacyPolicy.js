import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
const PrivacyPolicy = () => {
  return (
    <>
    <Meta title={"Privacy Policy"} />
   <Breadcrumb title='Privacy Policy' />
   <Container className='policy-wrapper py-5 home-wrapper-2'>
            <div className='row'>
            <div className='col-12'>
                <div className='policy'>
                    
                </div>
            </div>
        </div>
   </Container>
    </>
  )
}

export default PrivacyPolicy