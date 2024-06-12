import styled from "styled-components"
import ImageHat from '..//src//navbar/hhat.png'
import Fast from '..//src/fast-food.png'
import Stari from '../src/star.png'
import Plov from '../src/plov.jpeg'
import Cappuccino from '..//src/cappucino.png'
import Bacon from '..//src/popular-2.png'
import Map from '..//src/map.png'

export const Body = styled.div`
    width: 100%;
    
    border-radius: 24px;
    background: linear-gradient(305deg, #F4ECE1 57.1%, #FCFBF7 145.5%);
`
export const ImgHat = styled.div`
    background-image: url(${ImageHat});
    background-size: 32px;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
`

export const NameOf = styled.h1`
    color: #000;
    font-family: 'Poppins';
    font-size: ${(props)=>props.$title ? '32px' : '22px'};
    font-style: normal;
    font-weight: ${(props)=>props.$title ? '600' : '400'};
    line-height: ${(props)=>props.$title ? '139.8%' : '94.8%'};
`

export const NavDis = styled.div`
    width: 913px;
    height: 60px;
    flex-shrink: 0;
    display: flex;
    gap: 30px;
    justify-content: center;
`

export const NavInput = styled.div`
    width: 314px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 30px;
    background: rgba(255, 249, 240, 0.10);
    box-shadow: 0px 12px 40px -16px rgba(0, 0, 0, 0.10);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Input = styled.input`
    border: none;
    color: #000;
    background-color: inherit;
    font-size: 22px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 94.8%;
`

export const NavbarDiv = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    margin: auto;
`
export const CartDiv = styled.div`
    border-left: 1px solid rgba(148, 140, 140, 0.31);
    height: 45px;
    margin-left: -10px;
    display: flex;
    align-items: center;
    padding: 0px 15px;
`

export const HomeDiv = styled.div`
    height: ${(props)=>props.$trendingDiv ? '36' : '712px'};
    display: flex;
    gap: ${(props)=>props.$trendingDescription ? '40px' : (props)=>props.$trendingDiv ? '30px' : ''};
    width: ${(props)=>props.$trendingDiv ? '100%' : ''};
    align-items: ${(props)=>props.$trendingDiv ? 'center' : ''};
    width: 90%;
    margin: auto;
    justify-content: ${(props)=>props.$home ? "space-between": ''};
`
export const FastFood = styled.img`
    background-image: url($Fast);
    width: 750px;
    height: 712px;
    flex-shrink: 0;
    fill: url(${Fast}) lightgray 50% / cover no-repeat;
    
`
export const Headings = styled.div`
    color: ${(props)=>props.$fast ? '#FF7E00' : (props)=>props.$food ? '#2F2F2F' : (props)=>props.$paragraph ? '#909090' : (props)=>props.$watch ? '#2F2F2F' : (props)=>props.$rating ? '#2F2F2F' : (props)=>props.$trending ? '#383C3E': (props)=>props.$trendingPrice ? '#FEBB41' : (props)=>props.$foodName ? '#383C3E' :(props)=>props.$selection ? '#000' : '#909090'};
    font-family: ${(props)=>props.$trending ? 'Inter' : (props)=>props.$trendingPrice ? 'Montserrat' : (props)=>props.$foodName ? 'Inter': (props)=>props.$selection ? 'Montserrat' :'Poppins'};
    font-size: ${(props)=>props.$fast ? '125px' : (props)=>props.$food ? '52px' : (props)=>props.$paragraph ? '22px' : (props)=>props.$trending ? '44px' : (props)=>props.$trendingPrice ? '36px' : (props)=>props.$foodName ? '32px' :(props)=>props.$selection ? '24px' : '18px'};
    font-style: normal;
    font-weight:  ${(props)=>props.$fast ? '700' : (props)=>props.$food ? '700' : (props)=>props.$paragraph ? '400' : (props)=>props.$watch ? '600' : (props)=>props.$rating ? '600' : (props)=>props.$trending ? '700': (props)=>props.$trendingPrice ? '600' : (props)=>props.$foodName ? '700':(props)=>props.$selection ? '600' : '300'};
    line-height: ${(props)=>props.$trending ? '160%' : '94.8%'} ; /* 118.5px */
    letter-spacing: ${(props)=>props.$fast ? '-4.375px' : (props)=>props.$trending ? '160%':''};
    width: ${(props)=>props.$food ? '221px' : (props)=>props.$paragraph ? '568px' :  ''};
    margin-left: ${(props)=>props.$food ? '15px' : ''};
    margin-bottom: ${(props)=>props.$rating ? '10px' :''};
    margin: ${(props)=>props.$love ? '30px 0' : (props)=>props.$trendingPrice ? '25px 0' : ''};
    margin: ${(props)=>props.$selection ? '230px 0px 20px 0px' :''};
`

export const OrderBtn = styled.button`
    width: 188px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 84px;
    background: #2F2F2F;
    box-shadow: 0px 20px 32px -8px rgba(0, 0, 0, 0.20);
    color: #F4ECE1;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 94.8%;
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    /* justify-content: center; */
`
export const HomeOrder = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin-top: 30px;
    
`

export const HomeMiddleDiv = styled.div`
    /* margin: auto; */
    margin: auto 0;
`

export const Star = styled.img`
    background-image: url(${Stari});
    width: 140px;
    height: 28px;
    flex-shrink: 0;
    border: none;
    margin-top: 80px;
`
export const PlovDiv = styled.div`
    background-image: url(${Plov});
    width: ${(props)=>props.$smallPlov ? '99.789px' : '475px'};
    height: ${(props)=>props.$smallPlov ? '87px' : '491px'};
    flex-shrink: 0;
    border: 1px solid rgba(0, 0, 0, 0.50);
    background: url(${Plov}) lightgray 50% / contain no-repeat;

`
export const SmallPlovDiv = styled.div`
    width: 474px;
    height: 87px;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.70);
    display: flex;
    justify-content: center;
    column-gap: 10px;
`

export const TrendingSave = styled.div`
    width: 625px;
    height: 87px;
    flex-shrink: 0;
    fill: rgba(255, 255, 255, 0.00);
    stroke-width: 1px;
    stroke: rgba(0, 0, 0, 0.50);
    border: 1px solid blac;
    justify-content: space-around;
    display: flex;
    align-items: center;
    border: 1px solid black;
`

export const TrendingMainDiv = styled.div`
    width: 90%;
    margin: auto;
    
`

export const TrendingSelBtn = styled.div`
     width: 35px;
    /* height: 36px; */
    flex-shrink: 0;
    border: 2px solid rgba(0, 0, 0, 0.50);
    background: #FFF;
    text-align: center;
    padding: 7px 2.5px;
    color: rgba(0, 0, 0, 0.50);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 30px;
`

export const PopulrMainDiv = styled.div`
    width: 90%;
    margin: auto;
`

export const PopularFoods = styled.img`
    background-image: ${(props)=>props.$capuchino ? `url(${Cappuccino})` : (props)=>props.$bacon ? `url(${Bacon})` : ``};
    width: 260px;
    height: 402px;
    flex-shrink: 0;
    margin: 0;
    border-radius: 20px; 
`

export const PopularFoodsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`

export const ContactMainDiv = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const ContactInput = styled.input`
border: none;
    border-bottom: 1px solid black;
    display: flex;
    padding: 12px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-left: 10px;
    width: ${(props)=>props.$littleInput1 ? '357px' : (props)=>props.$littleInput2 ? '135px' : '548px'};
    margin-bottom: 17px;
    background-color: inherit;
`

export const ContactBtn = styled.button`
    background-color: #008F17;
    border: none;
    width: 610px;
    color: #fff;
    padding: 16px;
    margin-top: 20px;
    &:hover{
        cursor: pointer;
    }
`

export const OfficeHeading = styled.p`
    width: 357px;
    color: var(--Primeraly-Black, #383C3E);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: ${(props)=>props.$titleO ? '700' : '400'};
    line-height: 160%; /* 25.6px */
    letter-spacing: 0.5px;
`
export const Mapping = styled.img`
    background-image: url(${Map});
    width: 422px;
height: 381px;
flex-shrink: 0;
`

export const FooterDiv = styled.div`
    height: 582px;
    background-color: #1E2833;
    margin-top: 100px;
`
export const FooterMiddleDiv = styled.div`
    display: flex;
    width: 70%;
    margin: auto;
    column-gap: 50px;
    color: white;
`

export const FooterInDiv = styled.div`
    width: 70%;
    border-bottom: 1px solid gray;
    height: 120px;
    display: flex;
    align-items: center;
    margin: auto;
    
`