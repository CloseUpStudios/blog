// sanity stuff
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: "g2ejdxre",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true
});

export default client;