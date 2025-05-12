import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Productos',
        href: '/productos',
    },
];

const baseproductos = [
    {
        id: 1,
        producto: 'Espada',
        precio: 1,
    },
    {
        id: 2,
        producto: 'Escudo',
        precio: 2,
    },
    // Agrega más productos según sea necesario
];

export default function Productos() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Productos" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex h-full flex-1 flex-col gap-4 border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                    <h2 className="text-lg font-bold">Lista de Productos</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700">
                                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Producto</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {baseproductos.map((producto) => (
                                <tr key={producto.id} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-900">
                                    <td className="border border-gray-300 px-4 py-2">{producto.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{producto.producto}</td>
                                    <td className="border border-gray-300 px-4 py-2">{producto.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
