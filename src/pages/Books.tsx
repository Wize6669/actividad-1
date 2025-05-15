import { useSearchParams } from 'react-router';

export default function Books() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search');
    console.log(query);

    return <h1>Books</h1>;
}