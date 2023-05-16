import React from 'react'
import './subscriptioncard.css'
import InputBox from '../inputBoxes/InputBox'


function SubscriptionCard() {
  return (
    <React.Fragment>
        <div className='container mt-3'>
            <div className='row '>
                <div className='col-md-12 '>
                <div className='card h-100 '>
                    <div className='card-body '>
                         <div className='row text-dark text-center'>
                          <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                            <div className='circle-overlay'>
                              <span>1</span>
                              
                            </div>
                            <p>sign up</p>
                            
                          </div>
                          <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                            <div className='circle-overlay'>
                              <span>2</span>
                              
                            </div>
                            <p>Subscribe</p>
                            
                          </div>
                          
                         </div>
                         <div className='row text-dark text-center'>
                          <div className='col-md-12'>
                            <p className='lead'>Select your subscription plan</p>
                            
                          </div>
                          
                         </div>
                         <div className='row text-dark'>
                          <InputBox/>
                          
                         </div>
                    </div>
                </div>
                    
                </div>
                
                
                
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default SubscriptionCard