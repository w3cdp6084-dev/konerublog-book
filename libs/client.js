import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'konerublog-book',
  apiKey: process.env.API_KEY,
});