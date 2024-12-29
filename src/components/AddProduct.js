

import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Create formData object
        const formDataToSend = new FormData();
        formDataToSend.append('product', new Blob([JSON.stringify({
            name: formData.name,
            email: formData.email,
        })], { type: 'application/json' }));  // Ensure product part is sent as JSON
        formDataToSend.append('image', formData.image);  // Append image file
    
        try {
            const response = await axios.post('http://localhost:8080/products', formDataToSend, {
                // Do not manually set 'Content-Type', Axios will automatically handle this
            });
    
            if (response.status === 200) {
                alert('Product added successfully');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding product');
        }
    };
    
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Image:</label>
                <input 
                    type="file" 
                    name="image" 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
