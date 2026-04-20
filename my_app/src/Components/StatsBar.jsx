function StatsBar({ total, active, completed }) {
  return (
    <div className="stats-row" id="stats-bar">
      <div className="stat-card">
        <span className="number blue">{total}</span>
        <span className="label">Toplam</span>
      </div>
      <div className="stat-card">
        <span className="number amber">{active}</span>
        <span className="label">Aktif</span>
      </div>
      <div className="stat-card">
        <span className="number green">{completed}</span>
        <span className="label">Tamamlanan</span>
      </div>
    </div>
  )
}

export default StatsBar
