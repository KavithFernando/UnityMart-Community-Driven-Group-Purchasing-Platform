import React from 'react'
import ImageDisplay from '../Components/ProductPage/ImageDisplay'
import DescriptionDisplay from '../Components/ProductPage/DescriptionDisplay'
import FunctionsDisplay from '../Components/ProductPage/FunctionsDisplay'

import "../Components/ProductPage/Product.css"

export default function Product() {
  return (
    <div className='product-page'>
        <div className="three-panel-holder">
            <ImageDisplay/>
            <DescriptionDisplay/>
            <FunctionsDisplay/>
        </div>
    </div>
  )
}