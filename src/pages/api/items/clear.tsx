import { prisma } from '../../../prismaClient';

export default async function handle(req: any, res: any) {
    try {
        if (req.method === 'DELETE') {
            // Slett alle items i databasen
            const deleteItems = await prisma.item.deleteMany();
            return res.json({ message: 'Listen Slettet', deletedCount: deleteItems.count });
        } else {
            res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
