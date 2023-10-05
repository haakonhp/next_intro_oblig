import { useState, useEffect } from 'react';
import Link from 'next/link';

function ItemsPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/api/items');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(({description, id, name}) => (
                    <li key={id}>{name}: {description}</li>
                ))}
            </ul>
            <Link href="/">Go back home</Link>
        </div>
    );
}

export default ItemsPage;
