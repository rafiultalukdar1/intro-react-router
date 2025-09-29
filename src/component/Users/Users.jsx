import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Users = () => {

    const users = useLoaderData();

    return (
        <div className='container'>
            <h1 className='text-3xl font-bold py-7'>Users Page Here</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                {users.map(user => 
                    <div key={user.id} className='shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] p-[20px] rounded-[8px]'>
                        <p className='text-[26px]'>{user.id}</p>
                        <h2 className='text-[30px] font-[600]'>{user.name}</h2>
                        <p className='text-[18px] lowercase'>{user.email}</p>
                        <button className='btn mt-5'><Link to={`/users/${user.id}`}>View Details</Link></button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;