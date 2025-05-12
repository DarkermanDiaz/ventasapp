import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';


const breadcrumbs = (id: number): BreadcrumbItem[] => [
    {
        title: 'Cliente',
        href: `/clientes/${id}`,
    },
];

interface Cliente {
    id: number;
    nombre: string;
    direccion: string;
    giro: string;
    dia_de_visita: string;
}

export default function VistaCliente({ base_clientes }: { base_clientes: Cliente }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs(base_clientes.id)}>
            <Head title="Cliente" />
            <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <dt className='text-lg font-bold'>Cliente: {base_clientes.id}</dt>
                <dt className='text-lg font-bold'>Nombre: {base_clientes.nombre}</dt>
                <dt className='text-lg font-bold'>Dirección: {base_clientes.direccion}</dt>
                <dt className='text-lg font-bold'>Giro: {base_clientes.giro}</dt>
                <dt className='text-lg font-bold'>Día de Visita: {base_clientes.dia_de_visita}</dt>
                <div className="flex gap-4 mt-4">
                    <Link href={`/clientes/${base_clientes.id}/editar`} className="btn btn-primary">Editar</Link>
                    <Link href={`/clientes/${base_clientes.id}/eliminar`} className="btn btn-danger">Eliminar</Link>
                </div>
            </div>
        </AppLayout>
    );
}