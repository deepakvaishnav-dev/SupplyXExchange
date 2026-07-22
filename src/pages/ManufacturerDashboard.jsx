import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import KPICard from '../components/KPICard';
import {
  FileText, ShoppingCart, DollarSign, Star, Package, ArrowRight,
  TrendingUp, Clock, CheckCircle2, AlertCircle, Plus, Award
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 320000, orders: 18 },
  { month: 'Feb', revenue: 410000, orders: 24 },
  { month: 'Mar', revenue: 380000, orders: 21 },
  { month: 'Apr', revenue: 520000, orders: 30 },
  { month: 'May', revenue: 610000, orders: 35 },
  { month: 'Jun', revenue: 580000, orders: 32 },
  { month: 'Jul', revenue: 740000, orders: 42 },
];

const newRFQs = [
  { id: 'SXR-0118', buyer: 'ModaLux Apparel', product: 'Men\'s Polo Shirts', qty: '10,000 pcs', budget: '$35,000', deadline: 'Aug 20', priority: 'High' },
  { id: 'SXR-0117', buyer: 'TechWear Pro', product: 'Sports Jerseys', qty: '5,000 pcs', budget: '$18,000', deadline: 'Aug 28', priority: 'Medium' },
  { id: 'SXR-0115', buyer: 'GlobalFash Ltd.', product: 'Winter Jackets', qty: '3,000 pcs', budget: '$45,000', deadline: 'Sep 10', priority: 'Low' },
  { id: 'SXR-0113', buyer: 'Fabric House Co.', product: 'Dress Shirts', qty: '8,000 pcs', budget: '$28,000', deadline: 'Aug 15', priority: 'High' },
];

const activeOrders = [
  { id: 'ORD-4821', buyer: 'ModaLux Apparel', product: 'Polo Shirts', qty: '5,000', stage: 'Stitching', progress: 65, due: 'Aug 15' },
  { id: 'ORD-4819', buyer: 'TechWear Pro', product: 'Denim Jeans', qty: '2,500', stage: 'QC Inspection', progress: 85, due: 'Jul 30' },
  { id: 'ORD-4815', buyer: 'RetailBrand X', product: 'T-Shirts Bundle', qty: '15,000', stage: 'Cutting', progress: 40, due: 'Sep 5' },
];

const priorityColors = { High: 'badge-red', Medium: 'badge-amber', Low: 'badge-slate' };

export default function ManufacturerDashboard() {
  const navigate = useNavigate();

  return (
    <Layout role="manufacturer" title="Manufacturer Dashboard" subtitle="Sunrise Garments Pvt. Ltd. 🏭">
      {/* KPIs */}
      <div className="kpi-grid mb-6">
        <KPICard icon={FileText} label="New RFQs" value="14" trend={40} color="blue" />
        <KPICard icon={ShoppingCart} label="Active Orders" value="8" trend={14.3} color="emerald" />
        <KPICard icon={DollarSign} label="Jul Revenue" value="$740K" trend={27.6} color="amber" />
        <KPICard icon={Star} label="Avg Rating" value="4.87" trend={2.1} color="purple" />
      </div>

      <div className="dash-grid-main mb-6">
        {/* Revenue Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Revenue & Orders</div>
              <div className="text-xs text-muted mt-1">Jan – Jul 2026</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost btn-sm">Monthly</button>
              <button className="btn btn-primary btn-sm">Export</button>
            </div>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" tickFormatter={v => `$${v / 1000}k`} tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v, n) => [n === 'revenue' ? `$${v.toLocaleString()}` : v, n === 'revenue' ? 'Revenue' : 'Orders']} contentStyle={{ borderRadius: 10, border: '1px solid var(--border)', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar yAxisId="left" dataKey="revenue" fill="#2563EB" radius={[4, 4, 0, 0]} name="Revenue" />
                <Bar yAxisId="right" dataKey="orders" fill="#10B981" radius={[4, 4, 0, 0]} name="Orders" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          {/* Verified Badge */}
          <div className="card" style={{ background: 'linear-gradient(135deg, var(--emerald-600), var(--cyan-600))', border: 'none' }}>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--r-lg)', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} color="white" />
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 600, marginBottom: 2 }}>VERIFIED MANUFACTURER</div>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: '1.125rem' }}>ISO 9001 · GOTS · OEKO-TEX</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', marginTop: 4 }}>Factory audited · Since 2019</div>
                </div>
              </div>
            </div>
          </div>

          {/* Production Capacity */}
          <div className="card">
            <div className="card-header"><div className="card-title">Production Capacity</div></div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Monthly Capacity', value: '65,000 pcs', used: 78 },
                { label: 'Current Utilization', value: '50,700 pcs', used: 78 },
                { label: 'Available Slots', value: '14,300 pcs', used: 22 },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{item.label}</span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700 }}>{item.value}</span>
                  </div>
                  <div className="progress-bar">
                    <div className={`progress-fill ${item.used > 70 ? '' : 'emerald'}`} style={{ width: `${item.used}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card">
            <div className="card-header"><div className="card-title">Performance</div></div>
            <div className="card-body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { label: 'On-Time Rate', value: '96.4%', color: 'var(--emerald-600)' },
                { label: 'Acceptance Rate', value: '88%', color: 'var(--blue-600)' },
                { label: 'Repeat Buyers', value: '74%', color: 'var(--purple-600)' },
                { label: 'Avg Lead Time', value: '18 days', color: 'var(--amber-600)' },
              ].map(s => (
                <div key={s.label} style={{ background: 'var(--slate-50)', borderRadius: 'var(--r-md)', padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem', color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New RFQs */}
      <div className="card mb-6">
        <div className="card-header">
          <div>
            <div className="card-title">New RFQ Inbox</div>
            <div className="text-xs text-muted mt-1">4 new RFQs awaiting your response</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/rfq/SXR-001')}>View All</button>
        </div>
        <div className="table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>RFQ ID</th><th>Buyer</th><th>Product</th><th>Quantity</th>
                <th>Budget</th><th>Deadline</th><th>Priority</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {newRFQs.map(rfq => (
                <tr key={rfq.id} style={{ cursor: 'pointer' }}>
                  <td style={{ color: 'var(--blue-700)', fontWeight: 700 }}>{rfq.id}</td>
                  <td className="td-light">{rfq.buyer}</td>
                  <td style={{ fontWeight: 600 }}>{rfq.product}</td>
                  <td className="td-light">{rfq.qty}</td>
                  <td style={{ color: 'var(--emerald-600)', fontWeight: 600 }}>{rfq.budget}</td>
                  <td className="td-light">{rfq.deadline}</td>
                  <td><span className={`badge ${priorityColors[rfq.priority]}`}>{rfq.priority}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-primary btn-sm" onClick={() => navigate('/rfq/SXR-001')}>Submit Quote</button>
                      <button className="btn btn-ghost btn-sm">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Orders */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Active Orders</div>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/orders')}>View All <ArrowRight size={14} /></button>
        </div>
        <div>
          {activeOrders.map(o => (
            <div key={o.id} className="order-row" style={{ cursor: 'pointer' }} onClick={() => navigate('/orders/ORD-001/tracking')}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 4 }}>
                  <span className="order-id">{o.id}</span>
                  <span className="text-xs text-muted">{o.buyer}</span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{o.product} · <span style={{ color: 'var(--text-muted)' }}>{o.qty} pcs</span></div>
              </div>
              <div style={{ width: 200 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{o.stage}</span>
                  <span style={{ fontWeight: 700 }}>{o.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill emerald" style={{ width: `${o.progress}%` }} />
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Due {o.due}</div>
              </div>
              <ArrowRight size={16} color="var(--text-muted)" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
