import React from 'react';
import MediaList from './mediaPartnerModule';


export default function MediaModule() {
    return (
        <div className='flex items-center justify-center '>
            <div className='w-full max-w-6xl'>
                <section className="mb-8">
                     <h1 className="text-2xl font-bold mb-4 text-center">PARCEIROS DE MÍDIA</h1>
                     <MediaList  columns={4} />
                </section>
               
            </div>
        </div>
    );
}