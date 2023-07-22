import { createClient } from "next-sanity"

const projectId = '3gw6n3yc'
const dataset = 'production',
    apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});