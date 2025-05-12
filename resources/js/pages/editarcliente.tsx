import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';


const breadcrumbs = (id: number): BreadcrumbItem[] => [
    {
        title: 'Cliente',
        href: `/clientes/${id}/editar`,
    },
];

export default function EditarCliente({ id }: { id: number }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs(id)}>
            <Head title="Editar Cliente" />
            <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <dt className='text-lg font-bold'>Cliente: {id}</dt>
                <dt className='text-lg font-bold'>Nombre: </dt>
                <dt className='text-lg font-bold'>Dirección: </dt>
                <dt className='text-lg font-bold'>Giro: </dt>
                <dt className='text-lg font-bold'>Día de Visita: </dt>
                <div className="flex gap-4 mt-4">
                    <Link href={`/clientes/${id}`} className="btn btn-primary">Guardar</Link>
                    <Link href={`/clientes/${id}`} className="btn btn-danger">Cancelar</Link>
                </div>
            </div>
        </AppLayout>
    );
}