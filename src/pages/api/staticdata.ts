import fsPromises from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';

import path from 'path';
import { DataD } from '@/types/data';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataD>
) {
  const filePath = path.join(process.cwd(), 'src/data/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  res.status(200).json(objectData);
}
