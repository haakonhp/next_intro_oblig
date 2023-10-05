import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';

const ItemsPage: FC = () => {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch('/api/items');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const clearItems = async () => {
        const isConfirmed = confirm('Er du sikker på du vil slette hele listen?');
        if (!isConfirmed) return;

        try {
            const response = await fetch('/api/items/clear', {
                method: 'DELETE',
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
                fetchItems();
            } else {
                throw new Error('Feil, prøv igjen.');
            }
        } catch (error) {
            console.error('Error: ', error);
            setStatus('Feil, prøv igjen.');
        }
    };

    return (
        <div>
            <h1>Liste</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
            <button onClick={clearItems}>Slett Listen</button>
            {status && <p>{status}</p>}
            <Link href="/">Tilbake til forsiden</Link>
        </div>
    );
};

export default ItemsPage;
