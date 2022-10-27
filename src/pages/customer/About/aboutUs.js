import React from 'react'
import Footer from '../../../component/customer/Footer/Footer'
import Header from '../../../component/customer/Header/Header'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
    <Header/>
      <section>
            <div className = "image">
               <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png" alt='ccc'/>
            </div>

            <div className = "content">
                <h2>About Us</h2>
                <span>The most effortless resale experience</span>
                <p>Our experts will provide you with unrivalled expertise on what to sell, what you can achieve, and what's hot in the resale market right now. Secure maximum value from your wardrobe, with minimal effort, as we take care of everything! Effortless resale with big rewards.</p>
                <ul className = "links">
                    <li><a href = "/">work</a></li>
                    <div className = "vertical-line"></div>
                    <li><a href = "/">service</a></li>
                    <div className = "vertical-line"></div>
                    <li><a href = "/">contact</a></li>
                </ul>
                <ul className = "icons">
                    <li>
                        <i className = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i className = "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i className = "fa fa-github"></i>
                    </li>
                    <li>
                        <i className = "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
        </section>  
        <Footer/> 
    </>
  )
}

export default AboutUs