import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/libs/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      const user = await prisma.user.create({
        data: {
          name: body.name,
          uid: body.uid,
          email: body.email,
        },
      });
      res.status(200).json(user);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
