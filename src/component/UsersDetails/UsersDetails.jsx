import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UsersDetails = () => {

    const user = useLoaderData();

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/users');
    }

    return (
        <div className='container'>
            <h1 className='text-3xl font-bold py-7'>Users Details Page Here</h1>
            <div className='max-w-[550px] mx-auto shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] p-[20px] rounded-[8px] flex flex-col gap-[9px]'>
                <p className='text-[22px] font-[500]'>Id: {user.id}</p>
                <h2 className='text-[34px] font-semibold'>Name: {user.name}</h2>
                <p className='text-[22px] font-[500]'>Phone: {user.phone}</p>
                <p className='text-[22px] font-[500]'>Email: {user.email}</p>
                <p className='text-[22px] font-[500]'>City: {user.address.city}</p>
                <p className='text-[22px] font-[500]'>Zipcode: {user.address.zipcode}</p>
                <p className='text-[22px] font-[500]'>Company: {user.company.name}</p>
                <button onClick={handleNavigate} className='btn mt-[15px]'>Back</button>
            </div>
        </div>
    );
};

export default UsersDetails;