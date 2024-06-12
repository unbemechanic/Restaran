import React from 'react'
import { ContactInput, FooterDiv, FooterInDiv, FooterMiddleDiv } from '../design'

const Footer = () => {
  return (
    <FooterDiv>
        <FooterInDiv>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="36" viewBox="0 0 42 36" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.811014 15.8026C3.08663 6.65618 11.3001 0.23584 20.7253 0.23584C30.1506 0.23584 38.364 6.65618 40.6397 15.8026H38.8408C35.8064 15.7579 32.8341 16.6648 30.3415 18.3959C30.1976 18.5001 30.0474 18.5952 29.8918 18.6807H29.6819C29.5263 18.5952 29.3761 18.5001 29.2322 18.3959C24.0884 14.937 17.3623 14.937 12.2185 18.3959C12.0746 18.5001 11.9244 18.5952 11.7688 18.6807H11.5589C11.4032 18.5952 11.2531 18.5001 11.1092 18.3959C8.61655 16.6648 5.64429 15.7579 2.60982 15.8026H0.811014ZM35.603 25.2017C36.5264 24.4825 37.6708 24.1063 38.8408 24.1374H41.2542V19.3255H38.8408C36.78 19.3006 34.7663 19.9421 33.0996 21.1543C31.1744 22.5737 28.5492 22.5737 26.6239 21.1543C23.1238 18.7178 18.4768 18.7178 14.9766 21.1543C13.0514 22.5737 10.4262 22.5737 8.50092 21.1543C6.81363 19.9265 4.77108 19.2843 2.68476 19.3255H0.196411V24.1374H2.60981C3.7798 24.1063 4.92426 24.4825 5.84767 25.2017C9.34177 27.64 13.9859 27.64 17.48 25.2017C18.4046 24.4847 19.5482 24.1088 20.7178 24.1374C21.8882 24.1038 23.0335 24.4803 23.9557 25.2017C27.4558 27.6382 32.1028 27.6382 35.603 25.2017ZM38.8408 32.7414C37.6708 32.7103 36.5264 33.0865 35.603 33.8056C32.1028 36.2422 27.4558 36.2422 23.9557 33.8056C23.0335 33.0843 21.8882 32.7078 20.7178 32.7414C19.5482 32.7128 18.4046 33.0887 17.48 33.8056C13.9859 36.244 9.34177 36.244 5.84767 33.8056C4.92426 33.0865 3.7798 32.7103 2.60981 32.7414H0.196411V27.9295H2.68476C4.77108 27.8883 6.81363 28.5305 8.50092 29.7583C10.4262 31.1777 13.0514 31.1777 14.9766 29.7583C18.4768 27.3218 23.1238 27.3218 26.6239 29.7583C28.5492 31.1777 31.1744 31.1777 33.0996 29.7583C34.7663 28.546 36.78 27.9046 38.8408 27.9295H41.2542V32.7414H38.8408Z" fill="#F4ECE1"/>
        </svg>
        </FooterInDiv>
        <FooterMiddleDiv>
            <div>
                <p style={{fontFamily:'Arial'}}>Subscribe to our newsletter</p>
                <ContactInput style={{width:'300px'}} type='text' placeholder='Email address' />
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', width:'100%'}}>
                <div>
                    <h3>Services</h3>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Brading</p>
                    <p>Offline</p>
                </div>
                <div>
                <h3>About</h3>
                    <p>Our Story</p>
                    <p>Benefits</p>
                    <p>Team</p>
                    <p>Carrers</p>
                </div>
                <div>
                <h3>Help</h3>
                    <p>FAQs</p>
                    <p>Contact us</p>
                    
                </div>
            </div>
            
        </FooterMiddleDiv>
    </FooterDiv>
  )
}

export default Footer