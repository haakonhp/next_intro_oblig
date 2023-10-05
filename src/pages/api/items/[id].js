import { prisma } from '../../../prismaClient';

export default async function handle(req, res) {
    const { id } = req.query;

    try {
        if (req.method === 'GET') {
            const item = await prisma.item.findUnique({
                where: { id: Number(id) },
            });
            return res.json(item);
        } else {
            res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
