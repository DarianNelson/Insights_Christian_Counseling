import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'r4j51o5y',  // from sanity.config.js
  dataset: 'production',
  apiVersion: '2025-09-02', 
  useCdn: true,
})