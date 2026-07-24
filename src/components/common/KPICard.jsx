import { TrendingUp, TrendingDown } from 'lucide-react';

export default function KPICard({ icon: Icon, label, value, trend, trendLabel, color = 'blue', subtitle }) {
  const isUp = trend >= 0;

  const renderIcon = () => {
    if (!Icon) return null;
    if (typeof Icon === 'string') {
      return <span style={{ fontSize: '1.25rem' }}>{Icon}</span>;
    }
    return <Icon size={20} />;
  };

  return (
    <div className={`kpi-card ${color}`}>
      <div className="kpi-card-header">
        <div className={`kpi-icon-wrapper ${color}`}>
          {renderIcon()}
        </div>
        {trend !== undefined && (
          <div className={`kpi-trend ${isUp ? 'up' : 'down'}`}>
            {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{isUp ? `+${trend}` : trend}%</span>
          </div>
        )}
      </div>

      <div className="kpi-card-body">
        <div className="kpi-value">{value}</div>
        <div className="kpi-label">{label}</div>
        {(subtitle || trendLabel) && (
          <div className="kpi-subtext" style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 4 }}>
            {subtitle || trendLabel}
          </div>
        )}
      </div>
    </div>
  );
}

