import React from 'react'
import './showbox.css'
import Logo from '../../assets/images/Frame 12537.png'


function ShowBox({price}) {
    return (
        <React.Fragment>
            <div className='container'>
                <hr />
                <div className='row'>
                    <div className='col-md-12 d-flex justify-content-between align-content-center'>
                        <p>Subscription fees</p>
                        <p className='price'>&#8377;18,500</p>

                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-12 '>
                        <div className='offer-box d-flex justify-content-between align-content-center'>
                            <div className='left d-flex flex-column justify-content-between align-content-center'>
                                <p className='info-title'>Limited time offer</p>
                                <div className='d-flex mx-1'>
                                    <span className='bi bi-stopwatch'></span>
                                    <p className='info'>Offer valid till 25th March,2023</p>
                                </div>





                            </div>
                            <div className='right'>
                                <span className='price'> &#8377;-18,401</span>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-12 '>
                        <div className='total-price d-flex justify-content-between align-content-center'>
                            <div className='d-flex'>
                                <p>Total</p><span className='tax'>(incl.of 18% GST)</span>
                            </div>
                            <div className='right'>
                                <span className='price'> &#8377;{price}</span>

                            </div>
                            



                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-6 w-100'>
                        <button className='btn btn-outline-danger btn-sm w-100  '>Cancel</button>
                        
                    </div>
                    <div className='col-md-6'>
                        <button className='btn btn-success btn-sm w-100'>Proceed to Pay</button>
                        
                    </div>
                    
                </div>
                <img src={Logo} alt="" className="mt-3"/>
            </div>
        </React.Fragment>
    )
}

export default ShowBox