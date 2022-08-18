import type { NextApiRequest, NextApiResponse } from 'next';
import { Pin } from '@prisma/client';
import { prisma } from '@/libs/prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Pin[]>) {
  const pins = await prisma.pin.findMany();
  res.status(200).json(pins);
}
