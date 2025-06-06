import React, { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Crear Cliente',
        href: '/nuevo/cliente',
    },
];

function SubirCliente(nombre: string, direccion: string, giro: string, dia_de_visita: string) {
    router.post('/nuevo/cliente', {
        nombre: nombre,
        direccion: direccion,
        giro: giro,
        dia_de_visita: dia_de_visita,
    });
}

export default function CrearCliente() {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [giro, setGiro] = useState('');
    const [diaDeVisita, setDiaDeVisita] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        SubirCliente(nombre, direccion, giro, diaDeVisita);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Crear Cliente" />
            <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <h1 className='text-lg font-bold'>Crear Cliente</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-sm font-medium text-white-700">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            required
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="direccion" className="block text-sm font-medium text-white-700">Dirección</label>
                        <input
                            type="text"
                            name="direccion"
                            id="direccion"
                            required
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="giro" className="block text-sm font-medium text-white-700">Giro</label>
                        <input
                            type="text"
                            name="giro"
                            id="giro"
                            required
                            value={giro}
                            onChange={e => setGiro(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dia_de_visita" className="block text-sm font-medium text-white-700">Día de Visita</label>
                        <select
                            name="dia_de_visita"
                            id="dia_de_visita"
                            required
                            value={diaDeVisita}
                            onChange={e => setDiaDeVisita(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            <option value="" className="text-black">Seleccione un día</option>
                            <option value="Lunes" className="text-black">Lunes</option>
                            <option value="Martes" className="text-black">Martes</option>
                            <option value="Miércoles" className="text-black">Miércoles</option>
                            <option value="Jueves" className="text-black">Jueves</option>
                            <option value="Viernes" className="text-black">Viernes</option>
                            <option value="Sábado" className="text-black">Sábado</option>
                            <option value="Domingo" className="text-black">Domingo</option>
                        </select>
                    </div>
                    <button type="submit" className='btn btn-primary'>Crear Cliente</button>
                </form>
            </div>
        </AppLayout>
    );
}