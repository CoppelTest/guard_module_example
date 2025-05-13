import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const params = new URLSearchParams();
  params.append('client_id', process.env.AZURE_CLIENT_ID!);
  params.append('client_secret', process.env.AZURE_CLIENT_SECRET!);
  params.append('scope', process.env.AZURE_SCOPE!);
  params.append('grant_type', process.env.AZURE_GRANT_TYPE!);

  try {
    const azureResponse = await fetch(process.env.AZURE_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Coppel-Date-Request': '2024-08-08T14:17:50.859Z',
        'X-Coppel-Latitude': '24.71093149082847',
        'X-Coppel-Longitude': '-107.38788217024636',
        'X-Coppel-TransactionId': 'ts-0002',
        'X-Coppel-Target-Oauth': 'CPL-001'
      },
      body: params.toString(),
    });

    if (!azureResponse.ok) {
      const errorText = await azureResponse.text();
      console.error('Azure error:', errorText);
      res.status(500).json({ error: 'Error fetching Azure token' });
      return;
    }

    const data = await azureResponse.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Unexpected error' });
  }
}
