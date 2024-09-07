// src/components/PatrocinioModule.jsx
import React from 'react';
import SponsoreList from './sponsorList'; // Asegúrate de importar correctamente

export default function PatrocinioModule() {
    return (
        <div className='grid items-center justify-center'>
            <div className='w-full max-w-6xl'>
                <section className="mb-8">
                     <h1 className="text-2xl font-bold mb-4 text-center mt-8">Patrocinadores Diamante</h1>
                     <SponsoreList type="Diamante" columns="8 md:4 sm:3 phone:2 mini:1 phone:4"/>
                </section>
                <section className="mb-8">
                    <h1 className="text-2xl font-bold mb-4 text-center">Patrocinadores Super Host</h1>
                    <SponsoreList type="Super Host" columns="8 md:4 sm:3 phone:2 mini:1"/>
                </section>
                <section className="mb-1">
                    <h1 className="text-2xl font-bold mb-4 text-center">Patrocinadores Platinum</h1>
                    <SponsoreList type="Platinum" columns="8 md:4 sm:3 phone:2 mini:1"/>
                </section>
            </div>
        </div>
    );
}