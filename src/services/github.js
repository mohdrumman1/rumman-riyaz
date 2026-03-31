// Fetches the latest updated public repos for a user.
//
// NOTE: GitHub REST API does not expose "pinned" repos; that requires
// the GraphQL API with authentication. To switch to pinned repos later:
// 1. Create a GitHub personal access token (public_repo scope only)
// 2. POST to https://api.github.com/graphql with the query:
//    { user(login: "mohdrumman1") { pinnedItems(first: 6, types: REPOSITORY) { ... } } }
// 3. Store the token as an env secret and proxy the request through a
//    Cloudflare Pages Function to avoid exposing it client-side.

const GITHUB_USERNAME = 'mohdrumman1'

export async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
    { headers: { Accept: 'application/vnd.github.v3+json' } }
  )
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  return res.json()
}
