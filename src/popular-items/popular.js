import React from 'react'
import { Headings, PopularFoods, PopularFoodsDiv, PopulrMainDiv } from '../design'

const Popular = () => {
  return (
    <PopulrMainDiv>
        <Headings $trending>
            Popular Items
        </Headings>
        <Headings $love>
            Most Ordered Items
        </Headings>
        <PopularFoodsDiv>
            <PopularFoods $capuchino/>
            <PopularFoods $bacon/>
            <PopularFoods $capuchino/>
            <PopularFoods $bacon/>
            <PopularFoods $capuchino/>
            <PopularFoods $bacon/>
            <PopularFoods $capuchino/>
            <PopularFoods $bacon/>
        </PopularFoodsDiv>
    </PopulrMainDiv>
  )
}

export default Popular