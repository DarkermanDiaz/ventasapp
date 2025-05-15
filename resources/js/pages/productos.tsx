import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Productos',
        href: '/productos',
    },
];

interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

interface ProductosProps {
    base_productos: Producto[];
}

export default function Productos({ base_productos }: ProductosProps) {
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
                            {base_productos.map((producto) => (
                                <tr key={producto.id} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-900">
                                    <td className="border border-gray-300 px-4 py-2">{producto.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{producto.nombre}</td>
                                    <td className="border border-gray-300 px-4 py-2">{producto.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} className="border border-gray-300 px-4 py-2 text-center">
                                    <a href={`/nuevo/producto`} className="btn btn-primary">
                                        Agregar Producto
                                    </a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
