import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import KPICard from '@/components/common/KPICard';
import {
  Users, Factory, ShoppingCart, DollarSign, AlertTriangle, CheckCircle2,
  Clock, TrendingUp, Shield, ArrowRight, Eye, XCircle, BarChart3
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const growthData = [
  { month: 'Jan', buyers: 72000, mfrs: 10200, gmv: 1.8 },
  { month: 'Feb', buyers: 74500, mfrs: 10600, gmv: 2.0 },
  { month: 'Mar', buyers: 77000, mfrs: 10900, gmv: 1.9 },
  { month: 'Apr', buyers: 79800, mfrs: 11300, gmv: 2.2 },
  { month: 'May', buyers: 81500, mfrs: 11700, gmv: 2.3 },
  { month: 'Jun', buyers: 83000, mfrs: 12100, gmv: 2.35 },
  { month: 'Jul', buyers: 85000, mfrs: 12400, gmv: 2.41 },
];

const categoryData = [
  { name: 'Apparel', value: 38, color: '#2563EB' },
  { name: 'Electronics', value: 22, color: '#059669' },
  { name: 'Furniture', value: 15, color: '#7C3AED' },
  { name: 'Automotive', value: 13, color: '#D97706' },
  { name: 'Other', value: 12, color: '#94A3B8' },
];

const pendingVerifications = [
  { id: 'MFG-2341', name: 'Apex Garments Co.', country: 'India', category: 'Apparel', submitted: '2 days ago', docs: 'Complete' },
  { id: 'MFG-2340', name: 'Shenzhen TechParts', country: 'China', category: 'Electronics', submitted: '3 days ago', docs: 'Pending' },
  { id: 'MFG-2338', name: 'Istanbul Textiles', country: 'Turkey', category: 'Textiles', submitted: '4 days ago', docs: 'Complete' },
  { id: 'MFG-2336', name: 'Lagos Manufacturing', country: 'Nigeria', category: 'Apparel', submitted: '5 days ago', docs: 'Incomplete' },
];

const disputes = [
  { id: 'DIS-0082', order: 'ORD-4711', type: 'Quality Issue', buyer: 'FashionMark Inc.', mfr: 'Delta Fabrics', status: 'Open', amount: '$12,400' },
  { id: 'DIS-0081', order: 'ORD-4698', type: 'Late Delivery', buyer: 'ModaLux Apparel', mfr: 'Blue River', status: 'Under Review', amount: '$8,200' },
  { id: 'DIS-0079', order: 'ORD-4660', type: 'Quantity Short', buyer: 'QuickFash Co.', mfr: 'UniStitch', status: 'Resolved', amount: '$3,100' },
];

const recentActivity = [
  { icon: '✅', text: 'Manufacturer "Sunrise Garments" verified', time: '5 min ago', color: 'var(--emerald-500)' },
  { icon: '🆕', text: 'New buyer registered: TrendSetters UK', time: '12 min ago', color: 'var(--blue-500)' },
  { icon: '⚠️', text: 'Dispute #DIS-0082 opened by FashionMark', time: '28 min ago', color: 'var(--amber-500)' },
  { icon: '💰', text: 'Order ORD-4821 payment released $28,000', time: '1 hr ago', color: 'var(--emerald-500)' },
  { icon: '🏭', text: 'New factory application: Lagos Manufacturing', time: '2 hr ago', color: 'var(--slate-500)' },
];

const docColors = { Complete: 'badge-emerald', Pending: 'badge-amber', Incomplete: 'badge-red' };
const statusColorsD = { Open: 'badge-red', 'Under Review': 'badge-amber', Resolved: 'badge-emerald' };

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <Layout role="admin" title="Admin Dashboard" subtitle="Platform Overview & Management">
      <div className="kpi-grid mb-6">
        <KPICard icon={Users} label="Total Buyers" value="85,000" trend={8.2} color="blue" />
        <KPICard icon={Factory} label="Verified Manufacturers" value="12,400" trend={5.1} color="emerald" />
        <KPICard icon={Clock} label="Pending Verifications" value="47" trend={-18.2} color="amber" />
        <KPICard icon={DollarSign} label="Platform GMV (Jul)" value="$2.41B" trend={25.4} color="purple" />
        <KPICard icon={ShoppingCart} label="Active Orders" value="3,847" trend={12.8} color="blue" />
        <KPICard icon={AlertTriangle} label="Open Disputes" value="12" trend={-40.0} color="red" />
      </div>

      <div className="dash-grid-main mb-6">
        {/* Growth Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Platform Growth</div>
              <div className="text-xs text-muted mt-1">Buyers & Manufacturers Jan – Jul 2026</div>
            </div>
            <button className="btn btn-primary btn-sm">Export Report</button>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="buyersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="mfrsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid var(--border)', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area type="monotone" dataKey="buyers" stroke="#2563EB" strokeWidth={2} fill="url(#buyersGrad)" name="Buyers" dot={false} />
                <Area type="monotone" dataKey="mfrs" stroke="#059669" strokeWidth={2} fill="url(#mfrsGrad)" name="Manufacturers" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          {/* GMV by Category */}
          <div className="card">
            <div className="card-header"><div className="card-title">GMV by Category</div></div>
            <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                    {categoryData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={v => [`${v}%`, '']} contentStyle={{ borderRadius: 10, fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <div className="card-header"><div className="card-title">Live Activity</div><span className="badge badge-emerald">Live</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {recentActivity.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 20px', borderBottom: i < recentActivity.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: 1 }}>{a.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>{a.text}</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: 2 }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pending Verifications */}
      <div className="card mb-6">
        <div className="card-header">
          <div>
            <div className="card-title">Pending Manufacturer Verifications</div>
            <div className="text-xs text-muted mt-1">47 applications awaiting review</div>
          </div>
          <button className="btn btn-primary btn-sm">View All</button>
        </div>
        <div className="table-wrap table-responsive" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th><th>Company Name</th><th>Country</th><th>Category</th>
                <th>Submitted</th><th>Documents</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingVerifications.map(v => (
                <tr key={v.id}>
                  <td style={{ color: 'var(--blue-700)', fontWeight: 700 }}>{v.id}</td>
                  <td style={{ fontWeight: 600 }}>{v.name}</td>
                  <td className="td-light">{v.country}</td>
                  <td className="td-light">{v.category}</td>
                  <td className="td-light">{v.submitted}</td>
                  <td><span className={`badge ${docColors[v.docs]}`}>{v.docs}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-secondary btn-sm"><CheckCircle2 size={13} /> Approve</button>
                      <button className="btn btn-ghost btn-sm"><Eye size={13} /> Review</button>
                      <button className="btn btn-danger btn-sm" style={{ padding: '6px 10px' }}><XCircle size={13} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disputes */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Active Disputes</div>
            <div className="text-xs text-muted mt-1">12 open disputes requiring attention</div>
          </div>
          <span className="badge badge-red">12 Open</span>
        </div>
        <div className="table-wrap table-responsive" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Dispute ID</th><th>Order</th><th>Type</th><th>Buyer</th>
                <th>Manufacturer</th><th>Amount</th><th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map(d => (
                <tr key={d.id}>
                  <td style={{ color: 'var(--red-600)', fontWeight: 700 }}>{d.id}</td>
                  <td style={{ color: 'var(--blue-700)', fontWeight: 600 }}>{d.order}</td>
                  <td className="td-light">{d.type}</td>
                  <td className="td-light">{d.buyer}</td>
                  <td className="td-light">{d.mfr}</td>
                  <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{d.amount}</td>
                  <td><span className={`badge ${statusColorsD[d.status]}`}>{d.status}</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Resolve</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
