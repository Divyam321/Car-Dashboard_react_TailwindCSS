// src/Pages/Dashboard/index.js

import React from 'react';
import cardData from '../data/cardData';
import statsData from '../data/statsData'; // Import the stats data
import modelData from '../data/modelData'; // Import the model data

const Dashboard = () => {
    return (
        <>
            <p className='text-gray-800 text-4xl mb-12 font-extrabold tracking-wide'>Dashboard</p>

            {/* Card Data Section */}
            <div className='grid lg:grid-cols-3 gap-6 mb-16'>
                {cardData.map(card => (
                    <div 
                        key={card.id} 
                        className='bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:border hover:border-gray-300 duration-300 ease-in-out'
                    >
                        <p className='text-gray-700 text-xl font-semibold'>{card.text}: {card.value}</p>
                    </div>
                ))}
            </div>

            {/* Stats Data Section */}
            <div className='grid lg:grid-cols-3 gap-6 mb-16'>
                {statsData.map(stat => (
                    <div 
                        key={stat.id} 
                        className='bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:border hover:border-gray-300 duration-300 ease-in-out'
                    >
                        <p className='text-gray-700 text-xl font-semibold'>{stat.title}: {stat.value}</p>
                    </div>
                ))}
            </div>
            
            {/* Model Data Section */}
            <div className='bg-white shadow-lg rounded-lg p-6 mb-16'>
                <p className='text-gray-800 text-2xl mb-6 font-bold'>Car Models</p>
                <ul>
                    {modelData.map(model => (
                        <li key={model.id} className='text-gray-600 text-xl mb-2'>
                            {model.name} - {model.type} - {model.price}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className='bg-white h-96 shadow-lg rounded-lg p-6 flex items-center justify-center'>
                <p className='text-gray-600 text-2xl'>Main Content Area</p>
            </div>
        </>
    );
};

export default Dashboard;
