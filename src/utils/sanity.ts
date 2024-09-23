import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'your_project_id',
  dataset: 'your_dataset',
  useCdn: true, // optional, set to false if you want to always get the latest data
})

export async function fetchData() {
  const query = `*[_type == 'drivers'] {
    _id,
    title,
    version,
    size,
    _createdAt,
    url,
    roles
  }`

  const data = await client.fetch(query)
  return data
}
