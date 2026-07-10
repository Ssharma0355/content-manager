"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

interface Product{
    id:number;
    thumbnail:string;
    title:string;
}

function GetProducts() {
    const [products, setProducts] = useState<Product[]>([]);
        const getData = async()=>{
        const res = await fetch("https://dummyjson.com/products?limit=500")
        const data = await res.json();
        setProducts(data.products)
    }
    useEffect(()=>{
        getData()

    },[])
  return (
    <div>
        {products.map((p)=>(
           <ProductList key={p.id} title={p.title} img={p.thumbnail} />
        ))}
    </div>
  )
}

export default GetProducts
