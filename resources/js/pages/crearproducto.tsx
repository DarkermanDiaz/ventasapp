import React from 'react';
import { Head, router } from '@inertiajs/react';
import { BreadcrumbItem } from "@/types";
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Crear Producto',
        href: '/nuevo/producto',
    },
];

function SubirProducto(nombre: string, precio: string) {
    router.post('/nuevo/producto', {
        nombre: nombre,
        precio: precio,
    });
}

export default function CrearProducto() {
    const [producto, setProducto] = React.useState('');
    const [precio, setPrecio] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        SubirProducto(producto, precio);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Crear Producto" />
            <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <h1 className='text-lg font-bold'>Crear Producto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="producto" className="block text-sm font-medium text-white-700">Producto</label>
                        <input
                            type="text"
                            name="producto"
                            id="producto"
                            required
                            value={producto}
                            onChange={e => setProducto(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="precio" className="block text-sm font-medium text-white-700">Precio</label>
                        <input
                            type="number"
                            name="precio"
                            id="precio"
                            required
                            value={precio}
                            onChange={e => setPrecio(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Crear Producto</button>
                </form>
            </div>
        </AppLayout>
    );
}