import React from 'react'
import { ContactBtn, ContactInput, ContactMainDiv, Headings, Mapping, OfficeHeading } from '../design'

const Contact = () => {
  return (
    <ContactMainDiv style={{marginTop:'120px'}}>
        <div>
          <Headings $trending>
              Contact us
          </Headings>
          <Headings $contactP>
              Need an experienced and skilled hand with costom IT projects? <Headings style={{margin:'10px 0px'}}>Fill out the form to get a free consultation</Headings>
          </Headings>
          <ContactInput type='text' placeholder='Your Company Name'/>
          <ContactInput type='text' placeholder='Nature of business'/>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', width:'100%', columnGap:'50px'}}>
          <ContactInput $littleInput1 type='text' placeholder='Address'/>
          <ContactInput $littleInput2 type='number' placeholder='Postcode'/>
          </div>
          <ContactInput type='text' placeholder='Contact name'/>
          <ContactInput type='number' placeholder='Contact Phone'/>
          <ContactInput type='email' placeholder='email@gmail.com'/>
          <div style={{display:'flex'}}>
            <input type='checkbox'/>
            <p>I want to protect my data by signing an NDA</p>
          </div>
          <ContactBtn>SUBMIT</ContactBtn>
          
        </div>
        <div>
          <OfficeHeading $titleO>Office</OfficeHeading>
          <OfficeHeading>United States <br/> 500 5th Avenue Suite 400, NY 10110</OfficeHeading>
          <OfficeHeading>United Kingdom <br/>High St, Bromley BR1 1DN</OfficeHeading>
          <OfficeHeading>France <br/> 80 avenue des Terroirs de France, Paris</OfficeHeading>
          <Mapping/>
        </div>
        
        
    </ContactMainDiv>
  )
}

export default Contact