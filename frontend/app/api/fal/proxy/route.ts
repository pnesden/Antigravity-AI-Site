import { route as falRoute } from '@fal-ai/server-proxy/nextjs';

export const runtime = 'edge';

// Check for API key at request time, not build time
const getApiKey = () => {
  const apiKey = process.env.FAL_KEY ?? process.env.FAL_API_KEY;
  if (!apiKey) {
    throw new Error('Missing FAL API key. Set FAL_KEY or FAL_API_KEY in your environment.');
  }
  return apiKey;
};

export const GET = falRoute.GET;
export const POST = falRoute.POST;
export const PUT = falRoute.PUT;
export const OPTIONS = falRoute.handler;
