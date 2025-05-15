import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clientes',
        href: '/dashboard',
    },
];

interface Cliente {
    id: number;
    nombre: string;
    direccion: string;
    giro: string;
    dia_de_visita: string;
}

interface ClientesProps {
    base_clientes: Cliente[];
}

export default function Clientes({ base_clientes }: ClientesProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Clientes" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex h-full flex-1 flex-col gap-4 border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                    <h2 className="text-lg font-bold">Lista de Clientes</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700">
                                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Dirección</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Giro</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Día de Visita</th>
                            </tr>
                        </thead>
                        <tbody>
                            {base_clientes.map((cliente) => (
                                <tr key={cliente.id} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-900">
                                    <td className="border border-gray-300 px-4 py-2">{cliente.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <Link href={`/clientes/${cliente.id}`} className="hover:underline">
                                            {cliente.nombre}
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{cliente.direccion}</td>
                                    <td className="border border-gray-300 px-4 py-2">{cliente.giro}</td>
                                    <td className="border border-gray-300 px-4 py-2">{cliente.dia_de_visita}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5} className="border border-gray-300 px-4 py-2 text-center">
                                    <Link href={`/nuevo/cliente`} className="btn btn-primary">
                                        Crear Cliente
                                    </Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
