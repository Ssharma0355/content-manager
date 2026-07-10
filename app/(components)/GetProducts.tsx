"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

function GetProducts() {
    const [products, setProducts] = useState<string[]>([]);
    const getData = async()=>{
        const res = await fetch("https://dummyjson.com/products?limit=500")
        const resJson = await res.json();
        setProducts(resJson.products)
    }
    useEffect(()=>{
        getData()

    },[])
  return (
    <div>
        {products.map((p:any)=>(
           <ProductList key={p.id} title={p.title} img={p.thumbnail} />
        ))}
    </div>
  )
}

export default GetProducts
