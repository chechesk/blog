import React from 'react';
import SponsoreList from './sponsorList'; // Asegúrate de importar correctamente

export default function PatrocinioModule() {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-full max-w-6xl'>
                <section className="mb-8">
                    <h1 className="text-2xl font-bold mb-4 text-center">Patrocinadores Diamante</h1>
                    <div className=''>
                        <SponsoreList type="Diamante" />
                    </div>
                </section>
                <section className="mb-8">
                    <h1 className="text-2xl font-bold mb-4 text-center">Patrocinadores Super Host</h1>
                    <SponsoreList type="Super Host" />
                </section>
                <section className="mb-8">
                    <h1 className="text-2xl font-bold mb-4 text-center">Patrocinadores Platinum</h1>
                    <SponsoreList type="Platinum" />
                </section>
            </div>
        </div>
    );
}