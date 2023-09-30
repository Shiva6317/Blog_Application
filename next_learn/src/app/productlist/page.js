"use client"

import { useEffect, useState } from "react"

export default function Productlist() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productList = await response.json();
                console.log(productList.products);
                setProducts(productList.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    return (
        <div>
            <h1>Product List page</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}
