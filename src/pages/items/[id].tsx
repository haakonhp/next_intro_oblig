import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function ItemDetail() {
    const [item, setItem] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchItem = async () => {
            try {
                if (id) {
                    const response = await fetch(`/api/items/${id}`);
                    const data = await response.json();
                    setItem(data);
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchItem();
    }, [id]);

    return (
        <div>
            <h1>Item Detail</h1>
            {item ? (
                <>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <Link href="/items">Back to items</Link>
        </div>
    );
}

export default ItemDetail;
