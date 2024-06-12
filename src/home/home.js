import React from 'react'
import { FastFood, Headings, HomeDiv, HomeMiddleDiv, HomeOrder, OrderBtn, Star, Title } from '../design'
import Burger from '..//fast-food.png'
// import Star from '../star.png'


const Home = () => {
  return (
    <HomeDiv $home>
        <HomeMiddleDiv>
            <Title>
                <Headings $fast>Fast</Headings>
                <Headings $food>Food Delivery</Headings>
            </Title>
            
            <Headings $paragraph>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</Headings>
            <HomeOrder>
                <OrderBtn>Order Now</OrderBtn>
                <svg xmlns="http://www.w3.org/2000/svg" width="97" height="98" viewBox="0 0 97 98" fill="none">
                <g filter="url(#filter0_d_1_212)">
                    <circle cx="48.5" cy="29.4385" r="28.5" fill="#FFF8F0"/>
                </g>
                <path d="M59 30.4385L43.25 39.5317L43.25 21.3452L59 30.4385Z" fill="#2F2F2F"/>
                <defs>
                    <filter id="filter0_d_1_212" x="0" y="0.938477" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="16" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_212"/>
                    <feOffset dy="20"/>
                    <feGaussianBlur stdDeviation="18"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_212"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_212" result="shape"/>
                    </filter>
                </defs>
                </svg>
                <Headings $watch>Watch Video</Headings>
            </HomeOrder>
            <div>
                <Star>
                </Star>

                <Headings $rating>5 star rating</Headings>
                <Headings>based on 1788 reviews</Headings>
            </div>
        </HomeMiddleDiv>
        <FastFood src={Burger}></FastFood>
    </HomeDiv>
  )
}

export default Home