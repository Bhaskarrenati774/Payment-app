import React from 'react'
import './description.css'
import Book from '../../assets/icons/book.png'
import timer from '../../assets/icons/timer.png'
import televison from '../../assets/icons/live-tv.png'
import cap from '../../assets/icons/cap.jpeg'
import adBlock from '../../assets/icons/ad-block.png'


function Description() {
    return (
        <React.Fragment>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-8 mt-5'>
                        <p className='h3'>Access curated courses worth


                            <span> &#8377;</span>
                            <del >18,500</del>
                            at just <span> &#8377;</span> <span className='text-primary'>99</span>
                            per year!
                        </p>

                    </div>



                </div>
                <div className='row mt-4'>
                    <div className='col-md-8'>
                        <div className='row lead'>
                            <div className='col-md-1'>
                                <span className='bi bi-book'></span>
                            </div>
                            <div className='col-md-11'>
                                <span className='text-primary lead'>100+</span>
                                <span className='lead'>Job relevant Courses</span>
                            </div>
                        </div>
                        <div className='row lead mt-4'>
                            <div className='col-md-1'>
                                <span className='bi bi-stopwatch'></span>
                            </div>
                            <div className='col-md-11'>
                                <span className='text-primary lead'>20,000+</span>
                                <span className='lead'>Hours of Content</span>
                            </div>
                        </div>
                        <div className='row lead mt-4'>
                            <div className='col-md-1'>
                                <span className='bi bi-tv'></span>
                            </div>
                            <div className='col-md-11'>
                                <span className='text-primary lead'>Exclusive</span>
                                <span className='lead'>webinar Access</span>
                            </div>
                        </div>
                        <div className='row lead mt-4'>
                            <div className='col-md-1'>
                                <span className='bi bi-mortarboard-fill'></span>
                            </div>
                            <div className='col-md-11'>
                                
                                <span className='lead'>Scholarship worth</span>
                                <span className='text-primary lead'>&#8377; 94,500</span>
                            </div>
                        </div>
                        <div className='row lead mt-4'>
                            <div className='col-md-1'>
                                <span className='bi bi-file-excel'></span>
                            </div>
                            <div className='col-md-11 inline-block'>
                                <span className='text-primary lead'>Ad Free</span>
                                <span className='lead'>Learning Experience</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </React.Fragment>
    )
}

export default Description