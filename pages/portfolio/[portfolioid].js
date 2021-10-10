import { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.query.portfolioid);
    
    return (
        <div>
            <h1>
                View  page 
            </h1>
        </div>
    );
}
export default PortfolioProjectPage;