import React from 'react'
import { CartDiv, ImgHat, Input, NameOf, NavDis, NavInput, NavbarDiv } from '../design'



const Navbar = () => {
  return (
    <NavbarDiv>
      <NavbarDiv>
        <ImgHat></ImgHat>
        <NameOf $title>Foo</NameOf>
      </NavbarDiv>
      <NavDis>
        <NameOf>Home</NameOf>
        <NameOf>Menu</NameOf>
        <NameOf>Contact</NameOf>
        <NameOf>Shop</NameOf>
      </NavDis>

      <NavInput>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" color=''>
      <path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
          <Input type='text' placeholder='Search'/>
          <CartDiv><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_1_215)">
            <path d="M5.83331 15.0001C4.91665 15.0001 4.17498 15.7501 4.17498 16.6667C4.17498 17.5834 4.91665 18.3334 5.83331 18.3334C6.74998 18.3334 7.49998 17.5834 7.49998 16.6667C7.49998 15.7501 6.74998 15.0001 5.83331 15.0001ZM0.833313 1.66675V3.33341H2.49998L5.49998 9.65842L4.37498 11.7001C4.24165 11.9334 4.16665 12.2084 4.16665 12.5001C4.16665 13.4167 4.91665 14.1667 5.83331 14.1667H15.8333V12.5001H6.18331C6.06665 12.5001 5.97498 12.4084 5.97498 12.2917L5.99998 12.1917L6.74998 10.8334H12.9583C13.5833 10.8334 14.1333 10.4917 14.4166 9.97508L17.4 4.56675C17.4666 4.45008 17.5 4.30841 17.5 4.16675C17.5 3.70841 17.125 3.33341 16.6666 3.33341H4.34165L3.55831 1.66675H0.833313ZM14.1666 15.0001C13.25 15.0001 12.5083 15.7501 12.5083 16.6667C12.5083 17.5834 13.25 18.3334 14.1666 18.3334C15.0833 18.3334 15.8333 17.5834 15.8333 16.6667C15.8333 15.7501 15.0833 15.0001 14.1666 15.0001Z" fill="#909090"/>
          </g>
          <defs>
            <clipPath id="clip0_1_215">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg></CartDiv>
          
      </NavInput>
    </NavbarDiv>
  )
}

export default Navbar