import Layout from '@/components/layout/Layout';
import KPICard from '@/components/common/KPICard';
import {
  DollarSign, ShoppingCart, TrendingUp, Users, ArrowUpRight
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const monthlyData = [
  { month: 'Jan', spend: 48000, orders: 8, manufacturers: 5, savings: 4200 },
  { month: 'Feb', spend: 62000, orders: 12, manufacturers: 7, savings: 6100 },
  { month: 'Mar', spend: 55000, orders: 10, manufacturers: 6, savings: 5500 },
  { month: 'Apr', spend: 78000, orders: 15, manufacturers: 9, savings: 8200 },
  { month: 'May', spend: 91000, orders: 18, manufacturers: 11, savings: 9800 },
  { month: 'Jun', spend: 84000, orders: 16, manufacturers: 10, savings: 8900 },
  { month: 'Jul', spend: 110000, orders: 22, manufacturers: 13, savings: 12400 },
];

const categorySpend = [
  { name: 'Apparel', value: 45, color: '#2563EB' },
  { name: 'Knitwear', value: 22, color: '#059669' },
  { name: 'Denim', value: 18, color: '#7C3AED' },
  { name: 'Uniforms', value: 10, color: '#D97706' },
  { name: 'Other', value: 5, color: '#94A3B8' },
];

const supplierPerf = [
  { name: 'Sunrise Garments', onTime: 98, quality: 96, response: 95, orders: 8 },
  { name: 'Blue River', onTime: 91, quality: 94, response: 87, orders: 5 },
  { name: 'UniStitch', onTime: 96, quality: 97, response: 99, orders: 7 },
  { name: 'Istanbul Fashion', onTime: 88, quality: 91, response: 82, orders: 3 },
];

const leadTimeData = [
  { range: '< 15 days', count: 3 },
  { range: '15–25 days', count: 12 },
  { range: '25–35 days', count: 7 },
  { range: '35–45 days', count: 2 },
];

export default function Analytics() {
  return (
    <Layout role="buyer" title="Analytics Dashboard" subtitle="Procurement insights and performance metrics">
      {/* KPIs */}
      <div className="kpi-grid mb-6">
        <KPICard icon={DollarSign} label="YTD Spend" value="$528K" trend={24.5} color="blue" />
        <KPICard icon={ShoppingCart} label="Total Orders" value="101" trend={18.8} color="emerald" />
        <KPICard icon={TrendingUp} label="Cost Savings" value="$54K" trend={32.1} color="amber" trendLabel="vs direct purchase" />
        <KPICard icon={Users} label="Manufacturers Used" value="13" trend={44.4} color="purple" />
      </div>

      {/* Spend Trend + Category Mix */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--sp-6)', marginBottom: 'var(--sp-6)' }}>
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Monthly Procurement Spend</div>
              <div className="text-xs text-muted mt-1">Jan – Jul 2026</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost btn-sm">Monthly</button>
              <button className="btn btn-ghost btn-sm">Quarterly</button>
            </div>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="spendG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.18} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="savingsG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.18} />
                    <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => `$${v / 1000}k`} tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v, n) => [`$${v.toLocaleString()}`, n === 'spend' ? 'Spend' : 'Savings']} contentStyle={{ borderRadius: 10, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area type="monotone" dataKey="spend" name="Spend" stroke="#2563EB" strokeWidth={2.5} fill="url(#spendG)" dot={false} activeDot={{ r: 5 }} />
                <Area type="monotone" dataKey="savings" name="Savings" stroke="#059669" strokeWidth={2} fill="url(#savingsG)" dot={false} activeDot={{ r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header"><div className="card-title">Spend by Category</div></div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={categorySpend} cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={3} dataKey="value">
                  {categorySpend.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip formatter={v => [`${v}%`, '']} contentStyle={{ borderRadius: 10, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {categorySpend.map(c => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: c.color }} />
                    <span style={{ fontSize: '0.8125rem' }}>{c.name}</span>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '0.8125rem' }}>{c.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Orders & Lead Time */}
      <div className="grid-2 mb-6">
        <div className="card">
          <div className="card-header"><div className="card-title">Monthly Orders</div></div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlyData} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, fontSize: 12 }} />
                <Bar dataKey="orders" name="Orders" fill="#2563EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header"><div className="card-title">Lead Time Distribution</div></div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={leadTimeData} layout="vertical" barSize={24}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="range" width={90} tick={{ fontSize: 12, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, fontSize: 12 }} />
                <Bar dataKey="count" name="Orders" fill="#059669" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Supplier Performance */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Supplier Performance Scorecard</div>
            <div className="text-xs text-muted mt-1">Based on completed orders</div>
          </div>
        </div>
        <div className="table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Manufacturer</th><th>Orders</th>
                <th>On-Time Delivery</th><th>Quality Score</th>
                <th>Response Rate</th><th>Overall</th>
              </tr>
            </thead>
            <tbody>
              {supplierPerf.map(s => {
                const overall = Math.round((s.onTime + s.quality + s.response) / 3);
                return (
                  <tr key={s.name}>
                    <td style={{ fontWeight: 700 }}>{s.name}</td>
                    <td className="td-light">{s.orders}</td>
                    {[s.onTime, s.quality, s.response].map((val, i) => (
                      <td key={i}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div className="progress-bar" style={{ width: 80 }}>
                            <div className={`progress-fill ${val >= 95 ? 'emerald' : val >= 90 ? '' : 'amber'}`} style={{ width: `${val}%` }} />
                          </div>
                          <span style={{ fontWeight: 700, fontSize: '0.8125rem', color: val >= 95 ? 'var(--emerald-600)' : val >= 88 ? 'var(--text-primary)' : 'var(--amber-600)' }}>{val}%</span>
                        </div>
                      </td>
                    ))}
                    <td>
                      <span className={`badge ${overall >= 95 ? 'badge-emerald' : overall >= 90 ? 'badge-blue' : 'badge-amber'}`}>
                        {overall}% — {overall >= 95 ? 'Excellent' : overall >= 90 ? 'Good' : 'Average'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
