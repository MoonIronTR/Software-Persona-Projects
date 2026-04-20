import { FILTERS } from '../Interfaces/todo'

function FilterTabs({ currentFilter, onFilterChange }) {
  const tabs = [
    { key: FILTERS.ALL, label: 'Tümü' },
    { key: FILTERS.ACTIVE, label: 'Aktif' },
    { key: FILTERS.COMPLETED, label: 'Tamamlanan' },
  ]

  return (
    <div className="filter-pills" id="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`filter-pill ${currentFilter === tab.key ? 'active' : ''}`}
          onClick={() => onFilterChange(tab.key)}
          id={`filter-${tab.key}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
