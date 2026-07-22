import { TrendingUp, TrendingDown } from 'lucide-react';

export default function KPICard({ icon: Icon, label, value, trend, trendLabel, color = 'blue' }) {
  const isUp = trend >= 0;
  return (
    <div className={`kpi-card ${color}`}>
      <div className={`kpi-icon ${color}`}>
        <Icon size={20} />
      </div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-label">{label}</div>
      {trend !== undefined && (
        <div className={`kpi-trend ${isUp ? 'up' : 'down'}`}>
          {isUp ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
          {Math.abs(trend)}%
          <span className="kpi-trend-label">&nbsp;{trendLabel || 'vs last month'}</span>
        </div>
      )}
    </div>
  );
}
