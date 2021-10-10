import { useRouter } from 'next/router';


function ClientProjectsPage() {
    const router = useRouter();

    function loadProjectHandler() {
        // load data
        
        //router.push('/clients/max/projecta');
        router.push({
            pathname:'/clients/{id}/{projecta}',
            query: {
                id: 'max',
                clientprojectid: 'projecta'
            }
        });
    }

    return (
        <div>
            <h1>
                Client project page 
            </h1>
            <button onClick={loadProjectHandler}>
                Load Project A
            </button>
        </div>
    );
}
export default ClientProjectsPage;