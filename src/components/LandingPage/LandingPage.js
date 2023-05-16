import React from 'react'
import Description from '../dashboard/Description'
import SubscriptionCard from '../dashboard/SubscriptionCard'
import './landingPage.css'

function LandingPage() {
    return (
        <React.Fragment>
            <div className='landing-page text-white'>
                <div className='wrapper'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <Description />

                            </div>
                            <div className='col-md-5'>
                                <SubscriptionCard />
                            </div>

                        </div>
                        

                    </div>

                </div>


            </div>

        
        </React.Fragment >
    )
}

export default LandingPage