import React from 'react'
import { useState } from 'react';
import Navbar from '../components/common/Navbar';


const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        
        <div className='text-white flex flex-col justify-center items-center h-screen '>
            <div className="h-1/2 w-1/3 border flex flex-col justify-center items-center">
                <h1 className='text-3xl font-bold'>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mt-7'>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            style={{ color: 'black', marginLeft: '15px' }}
                        />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ color: 'black', marginLeft: '50px' }}
                        />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{ color: 'black' , marginLeft: '20px'}}
                        />
                    </div>
                    <button type="submit" className='mt-7 translate-x-[140%] bg-richblack-500 text-black px-4 py-1'>Signup</button>
                </form>
                <div className="mt-4 text-center">
                    <p>Already a member? <a href="/login" className="text-blue-500">Login</a></p>
                </div>
            </div>
        </div>
    );
};



export const Signup = () => {
    return (
        <div>
            <Navbar />
            <SignupForm />
            
        </div>
    );
};

export default Signup;