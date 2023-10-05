import { prisma } from '../../../prismaClient';

export default async function handle(req, res) {
    try {
        if (req.method === 'GET') {
            const items = await prisma.item.findMany();
            return res.json(items);
        } else if (req.method === 'POST') {
            const { name, description } = req.body;
            const newItem = await prisma.item.create({
                data: { name, description },
            });
            return res.json(newItem);
        } else {
            res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}