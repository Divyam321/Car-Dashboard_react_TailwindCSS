// src/Pages/Account/index.js

import React from 'react';
import accountData from '../data/accountData'; // Import the account data

const Account = () => {
    return (
        <>
            <p className='text-gray-700 text-3xl mb-16 font-bold'>Account</p>
            <div className='grid lg:grid-cols-3 gap-6 mb-16'>
                {accountData.map((item) => (
                    <div 
                        key={item.id} 
                        className='bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:border hover:border-gray-300 duration-300 ease-in-out'
                    >
                        <h3 className='text-xl font-semibold mb-4'>{item.title}</h3>
                        <p className='text-gray-600 mb-4'>{item.content}</p>
                        <ul className='list-disc list-inside'>
                            {item.details.map((detail, index) => (
                                <li key={index} className='text-gray-600'>
                                    <strong>{detail.key}:</strong> {detail.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Account;
