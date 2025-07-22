import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'r4j51o5y',  // ← Get this from sanity.config.js
  dataset: 'production',
  apiVersion: '2025-06-26',       // Or today's date
  useCdn: true,
})