import React from 'react'
import Image from 'next/image'

interface Props {
    title: string;
    img: string;
}

function ProductList({ title, img }: Props) {
  return (
    <div>
        <h3>{title}</h3>
        {/* Pass numeric values instead of strings with 'px' */}
        <Image
        src={img}
        alt={title}
        width={120}
        height={120}
      />
        {/* <img src={img} 
          alt={title} 
          width={120} 
          height={120} 
          style={{ objectFit: 'cover' }}  /> */}
    </div>
  )
}

export default ProductList