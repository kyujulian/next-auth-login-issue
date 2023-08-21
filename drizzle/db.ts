import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';



const client = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_DATABASE_TOKEN as string
});

export const db = drizzle(client)
