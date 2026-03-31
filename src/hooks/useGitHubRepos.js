import { useState, useEffect } from 'react'
import { fetchRepos } from '../services/github'

// 30-second module-level cache
let cache = null
let cacheTime = null
const CACHE_TTL = 30_000

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      const now = Date.now()
      if (cache && cacheTime && now - cacheTime < CACHE_TTL) {
        if (!cancelled) {
          setRepos(cache)
          setLoading(false)
        }
        return
      }

      try {
        const data = await fetchRepos()
        cache = data
        cacheTime = Date.now()
        if (!cancelled) {
          setRepos(data)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError('Could not load repositories.')
          setLoading(false)
        }
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  return { repos, loading, error }
}
