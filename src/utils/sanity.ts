import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'your_project_id',
  dataset: 'your_dataset',
  useCdn: true, // optional, set to false if you want to always get the latest data
})

export async function fetchData() {
  const query = `*[_type == 'posts'] {
    _id,
    title,
    binaryName,
    type,
    version,
    lastSupportedBNCSVersion,
    description, 
    longDescription,
    readMe,
    releaseNotes,
    releaseDate,
    organisationWithLicenses,
    roles,
    commerciallyAvailable,
    deviceManufacturer,
    _createdAt,
    url,
    roles
  }`

  const data = await client.fetch(query)
  return data
}
