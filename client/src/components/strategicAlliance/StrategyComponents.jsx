import React from 'react';
import StrategicList from './strategicAlliance';


export default function StrategyModule() {
    return (
        <div className='flex items-center justify-center '>
            <div className='w-full max-w-6xl'>
                <section className="mb-8">
                <h1 className="text-2xl font-bold mb-4 text-center">STRATEGAS</h1>
                     <StrategicList  columns={8} />
                </section>
               
            </div>
        </div>
    );
}