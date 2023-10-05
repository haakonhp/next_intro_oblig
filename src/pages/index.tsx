import Link from 'next/link';
import { FC } from 'react';

const HomePage: FC = () => {
    return (
        <div>
            <h1>Next Introduksjon</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/items">Se Liste</Link>
                    </li>
                    <li>
                        <Link href="/items/add">Legg til Liste</Link>
                    </li>
                </ul>
            </nav>
            <style jsx>{`
                h1 {
                    color: #333;
                }
                nav ul {
                    list-style-type: none;
                    padding: 0;
                }
                nav ul li {
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
}

export default HomePage;
