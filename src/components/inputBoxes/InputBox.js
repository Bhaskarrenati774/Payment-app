import React, { useState } from 'react'
import './inputbox.css'
import ShowBox from './ShowBox'
function InputBox() {
    const [selectedPrice,setSelectedPrice]=useState('179')
    const [selectedBox,setSelectedBox]=useState('false')

    const handleSubmit=(e)=>{
        setSelectedPrice(e.target.value)
        setSelectedBox('true')
        
    }
    const checked=(value)=>{
        
    }


    return (
       
        <React.Fragment>
            
            <div className='container'>


                <div className='input-field invalid' aria-disabled='true'>
                    <input type="radio" name="price" value="" disabled='true' className='radio' />
                    <label htmlFor='' className='label' >12 months subscription</label>
                    <div className='price'>
                        <span>Total &#8377;99</span>
                        <p> &#8377;8 /mo</p>


                    </div>
                    <div className='badge badge-sm badge-danger'>
                        <span>offer expired</span>

                    </div>
                </div>
                <div className='input-field mt-2'  aria-activedescendant='active'>
                    <input type="radio" name="price" value="179" className='radio' onClick={handleSubmit} id='radio1' checked='true' />
                    <label htmlFor='' className='label' >12 months subscription</label>
                    <div className='price'>
                        <span>Total &#8377;179</span>
                        <p> &#8377;15 /mo</p>


                    </div>
                    <div className='badge badge-sm badge-success'>
                        <span>Recommended</span>

                    </div>
                </div>
                <div className='input-field mt-2'  aria-activedescendant='active'>
                    <input type="radio" name="price" value="149" className='radio' onClick={handleSubmit} id="radio2"  />
                    <label htmlFor='' className='label' >6 months subscription</label>
                    <div className='price'>
                        <span>Total &#8377;149</span>
                        <p> &#8377;25 /mo</p>


                    </div>

                </div>
                <div className='input-field mt-2'  aria-activedescendant='active'>
                    <input type="radio" name="price" value="99" className='radio' onClick={handleSubmit} id="radio3" />
                    <label htmlFor=''  className='label'>3 months subscription</label>
                    <div className='price'>
                        <span>Total &#8377;99</span>
                        <p> &#8377;33 /mo</p>


                    </div>

                </div>

                <div className='row'>
                    <ShowBox price={selectedPrice}/>

                </div>
            </div>




        </React.Fragment>
    )
}

export default InputBox