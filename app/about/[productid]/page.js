"use client"
import React from 'react'

const page = ({params}) => {
   
  return (
    <div>
        <h2> "{params.productid}"  This is product id of about page</h2>
    </div>
  )
}

export default page