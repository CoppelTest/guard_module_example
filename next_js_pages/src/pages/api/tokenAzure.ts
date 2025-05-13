import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const url =
    'https://login.microsoftonline.com/76d81621-b9a9-4786-bb8f-a2efa839eee2/oauth2/v2.0/token';

  const params = new URLSearchParams();
  params.append(process.env.AZURE_CLIENT_ID!, '8a45b31d-2f19-462b-8a2e-821b592c9044');
  params.append(process.env.AZURE_CLIENT_SECRET!, 'n2m8Q~POJfvd-x3COrXRSwk1xx6bVd1DkSMVtcsz');
  params.append(process.env.AZURE_SCOPE!, 'api://8a45b31d-2f19-462b-8a2e-821b592c9044/.default');
  params.append(process.env.AZURE_GRANT_TYPE!, 'client_credentials');

  try {
    const azureResponse = await fetch(process.env.AZURE_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
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
