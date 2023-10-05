import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/items">View Items</Link>
                    </li>
                    <li>
                        <Link href="/items/add">Add Item</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;