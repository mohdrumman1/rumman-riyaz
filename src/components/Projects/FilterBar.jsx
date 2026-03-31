import './Projects.css'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'ai', label: 'AI & Forma AI' },
  { key: 'pm', label: 'PM' },
]

export default function FilterBar({ active, onChange }) {
  return (
    <div className="filter-bar">
      {FILTERS.map(f => (
        <button
          key={f.key}
          className={`filter-btn${active === f.key ? ' filter-btn--active' : ''}`}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
