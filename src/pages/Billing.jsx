// src/Pages/Billing/index.js

import React from 'react';
import billingData from '../data/billingData'; // Import the billing data

const Billing = () => {
    return (
        <>
            <p className='text-gray-700 text-3xl mb-16 font-bold'>Billing</p>
            <div className='grid lg:grid-cols-3 gap-6 mb-16'>
                {billingData.map((section) => (
                    <div 
                        key={section.id} 
                        className='bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:border hover:border-gray-300 duration-300 ease-in-out'
                    >
                        <h3 className='text-xl font-semibold mb-4'>{section.title}</h3>
                        <p className='text-gray-600 mb-4'>{section.content}</p>
                        {section.transactions && (
                            <ul className='list-disc list-inside'>
                                {section.transactions.map((transaction, index) => (
                                    <li key={index} className='text-gray-600'>
                                        <strong>{transaction.date}</strong>: {transaction.description} - {transaction.amount}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.methods && (
                            <ul className='list-disc list-inside'>
                                {section.methods.map((method, index) => (
                                    <li key={index} className='text-gray-600'>
                                        <strong>{method.type}</strong> ending in {method.last4} - Billing Address: {method.billingAddress}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.plan && (
                            <div className='text-gray-600'>
                                <p><strong>Plan:</strong> {section.plan.name}</p>
                                <p><strong>Renewal Date:</strong> {section.plan.renewalDate}</p>
                                <p><strong>Next Billing:</strong> {section.plan.nextBilling}</p>
                                <p><strong>Status:</strong> {section.plan.status}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Billing;
