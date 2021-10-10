import Link from 'next/link';

function ClientPage() {
    const clinets = [
        {
            id: 11,
            name : 'Forhad'
        },
        {
            id: 12,
            name : 'Fokrule'
        },
        {
            id: 13,
            name : 'Hasan'
        },
    ]
    return (
        <div>
            <h1>
                Client page 
            </h1>
            <ul>
                {clinets.map(client => 
                <li key={client.id}>
                    <Link href={{
                        pathname: '/clients/{id}',
                        query: {id:client.id}
                    }}>
                        {client.name}
                    </Link>
                </li>
                )}
            </ul>
        </div>
    );
}
export default ClientPage;