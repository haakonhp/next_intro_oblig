import { useState } from 'react';
import Link from 'next/link';

function AddItemPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, description }),
            });

            if (response.status === 200) {
                setStatus('Ting lagt til listen');
            } else {
                setStatus('Feil, prøv igjen.');
            }
        } catch (error) {
            console.error('Error: ', error);
            setStatus('Feil, prøv igjen.');
        }
    };

    return (
        <div>
            <h1>Legg til Liste</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Legg til</button>
            </form>
            {status && <p>{status}</p>}
            <Link href="/items">Se Liste</Link>
        </div>
    );
}

export default AddItemPage;
