import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetProduct = () => {
    const [products, setProducts] = useState([]);

    // Fetch the product data when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/products');
                setProducts(response.data);  // Store the fetched products in state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);  // Empty dependency array ensures it runs only once

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Email: {product.email}</p>
                    {product.image && (
                         <img 
                                src={`data:image/jpeg;base64,${btoa(
                                    new Uint8Array(product.image).reduce(
                                        (data, byte) => data + String.fromCharCode(byte), ''
                                    )
                                )}`} 
                                alt={product.name} 
                                width="100" 
                                height="100" 
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetProduct;
