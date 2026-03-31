import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useGitHubRepos } from '../../hooks/useGitHubRepos'
import RepoCard from './RepoCard'
import './GitHubFeed.css'

function RepoSkeleton() {
  return (
    <div className="repo-skeleton">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-desc" />
      <div className="skeleton skeleton-meta" />
    </div>
  )
}

export default function GitHubFeed() {
  const { repos, loading, error } = useGitHubRepos()
  const ref = useIntersectionObserver()

  return (
    <section id="github" className="github">
      <div className="section-container">
        <div className="animate-in" ref={ref}>
          <span className="section-label">GitHub</span>
          <h2 className="github-heading">Latest on GitHub</h2>
          <p className="github-sub">
            Live feed from{' '}
            <a href="https://github.com/mohdrumman1" target="_blank" rel="noopener noreferrer" className="github-profile-link">
              @mohdrumman1
            </a>
          </p>
          {error ? (
            <div className="github-error">
              Could not load repositories. View them on{' '}
              <a href="https://github.com/mohdrumman1" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </div>
          ) : (
            <div className="github-grid">
              {loading
                ? Array.from({ length: 6 }, (_, i) => <RepoSkeleton key={i} />)
                : repos.map(repo => <RepoCard key={repo.id} repo={repo} />)
              }
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
