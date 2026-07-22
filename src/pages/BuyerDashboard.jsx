import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import KPICard from '../components/KPICard';
import {
  ShoppingCart, FileText, Factory, MessageSquare, Bell, TrendingUp,
  ArrowRight, Clock, CheckCircle2, AlertCircle, Package, Plus, Star
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const spendData = [
  { month: 'Jan', spend: 48000 }, { month: 'Feb', spend: 62000 },
  { month: 'Mar', spend: 55000 }, { month: 'Apr', spend: 78000 },
  { month: 'May', spend: 91000 }, { month: 'Jun', spend: 84000 },
  { month: 'Jul', spend: 110000 },
];

const activeOrders = [
  { id: 'ORD-4821', product: 'Men\'s Polo Shirts', manufacturer: 'Sunrise Garments', qty: '5,000 pcs', status: 'In Production', stage: 'Stitching', progress: 65, dueDate: 'Aug 15, 2026' },
  { id: 'ORD-4819', product: 'Denim Jeans Collection', manufacturer: 'Blue River Textiles', qty: '2,500 pcs', status: 'Quality Check', stage: 'QC Inspection', progress: 85, dueDate: 'Jul 30, 2026' },
  { id: 'ORD-4815', product: 'Corporate Uniforms', manufacturer: 'UniStitch Co.', qty: '1,200 sets', status: 'Sampling', stage: 'Sampling', progress: 25, dueDate: 'Sep 5, 2026' },
];

const pendingRFQs = [
  { id: 'SXR-0112', product: 'Winter Jackets', quotes: 4, sent: '2 days ago', budget: '$12,000–$18,000' },
  { id: 'SXR-0109', product: 'Sports Shorts', quotes: 7, sent: '5 days ago', budget: '$8,000–$12,000' },
  { id: 'SXR-0104', product: 'Formal Trousers', quotes: 2, sent: '8 days ago', budget: '$15,000–$22,000' },
];

const savedMfr = [
  { name: 'Sunrise Garments', location: 'Mumbai, India', rating: 4.9, category: 'Apparel', initials: 'SG', color: '#2563EB' },
  { name: 'Blue River Textiles', location: 'Dhaka, Bangladesh', rating: 4.7, category: 'Denim', initials: 'BR', color: '#059669' },
  { name: 'UniStitch Co.', location: 'Tirupur, India', rating: 4.8, category: 'Uniforms', initials: 'US', color: '#7C3AED' },
];

const statusColors = { 'In Production': 'badge-blue', 'Quality Check': 'badge-amber', 'Sampling': 'badge-purple', 'Shipped': 'badge-emerald' };

export default function BuyerDashboard() {
  const navigate = useNavigate();

  return (
    <Layout role="buyer" title="Buyer Dashboard" subtitle="Welcome back, Alex Johnson 👋">
      {/* KPIs */}
      <div className="kpi-grid mb-6">
        <KPICard icon={ShoppingCart} label="Active Orders" value="12" trend={16.7} color="blue" />
        <KPICard icon={FileText} label="Pending RFQs" value="7" trend={-12.5} color="amber" />
        <KPICard icon={TrendingUp} label="Total Spend (Jul)" value="$110K" trend={31} color="emerald" />
        <KPICard icon={Factory} label="Saved Manufacturers" value="28" trend={8.2} color="purple" />
      </div>

      <div className="dash-grid-main mb-6">
        {/* Spend Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Monthly Procurement Spend</div>
              <div className="text-xs text-muted mt-1">Jan – Jul 2026</div>
            </div>
            <button className="btn btn-ghost btn-sm">Export</button>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={spendData}>
                <defs>
                  <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => `$${v / 1000}k`} tick={{ fontSize: 12, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                <Tooltip formatter={v => [`$${v.toLocaleString()}`, 'Spend']} contentStyle={{ borderRadius: 10, border: '1px solid var(--border)', fontSize: 13 }} />
                <Area type="monotone" dataKey="spend" stroke="#2563EB" strokeWidth={2.5} fill="url(#spendGrad)" dot={false} activeDot={{ r: 5, fill: '#2563EB' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          <div className="card">
            <div className="card-header"><div className="card-title">Quick Actions</div></div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Create New RFQ', icon: Plus, path: '/rfq/create', color: 'btn-primary' },
                { label: 'Find Manufacturers', icon: Factory, path: '/search', color: 'btn-secondary' },
                { label: 'View All Orders', icon: ShoppingCart, path: '/orders', color: 'btn-ghost' },
              ].map(a => (
                <button key={a.label} className={`btn ${a.color} btn-md`} onClick={() => navigate(a.path)}>
                  <a.icon size={16} /> {a.label}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header"><div className="card-title">Inbox</div><span className="badge badge-red" style={{ background: 'var(--red-500)', color: 'white' }}>5 new</span></div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Sunrise Garments sent a quote', 'New message from Blue River', 'Order ORD-4819 updated'].map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => navigate('/messages')}>
                  <div className="avatar avatar-sm" style={{ background: `hsl(${i * 80 + 200}, 70%, 55%)`, color: 'white' }}>{String.fromCharCode(65 + i)}</div>
                  <div style={{ flex: 1, fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{m}</div>
                  <ArrowRight size={14} color="var(--text-muted)" />
                </div>
              ))}
              <button className="btn btn-ghost btn-sm w-full" onClick={() => navigate('/messages')}>View All Messages</button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Orders */}
      <div className="card mb-6">
        <div className="card-header">
          <div>
            <div className="card-title">Active Orders</div>
            <div className="text-xs text-muted mt-1">{activeOrders.length} orders in progress</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/orders')}>View All <ArrowRight size={14} /></button>
        </div>
        <div>
          {activeOrders.map(order => (
            <div key={order.id} className="order-row" onClick={() => navigate('/orders/ORD-001/tracking')} style={{ cursor: 'pointer' }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span className="order-id">{order.id}</span>
                  <span className={`badge ${statusColors[order.status] || 'badge-slate'}`}>{order.status}</span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: 2 }}>{order.product}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{order.manufacturer} · {order.qty}</div>
              </div>
              <div style={{ width: 180 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{order.stage}</span>
                  <span style={{ fontWeight: 700 }}>{order.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${order.progress}%` }} />
                </div>
              </div>
              <div style={{ textAlign: 'right', minWidth: 100 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Due</div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{order.dueDate}</div>
              </div>
              <ArrowRight size={16} color="var(--text-muted)" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid-2">
        {/* Pending RFQs */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Pending RFQs</div>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/rfq/create')}><Plus size={14} /> New RFQ</button>
          </div>
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {pendingRFQs.map(rfq => (
              <div key={rfq.id} className="rfq-card" onClick={() => navigate('/rfq/SXR-001')}>
                <div className="rfq-header">
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--blue-600)', fontWeight: 700 }}>{rfq.id}</div>
                    <div className="rfq-title">{rfq.product}</div>
                  </div>
                  <span className="badge badge-blue">{rfq.quotes} quotes</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Sent {rfq.sent}</span>
                  <span style={{ color: 'var(--emerald-600)', fontWeight: 600 }}>{rfq.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Manufacturers */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Saved Manufacturers</div>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/search')}>Browse All</button>
          </div>
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {savedMfr.map(m => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => navigate('/manufacturer/MFGR-001')}>
                <div className="avatar avatar-md" style={{ background: m.color, color: 'white' }}>{m.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{m.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.location} · {m.category}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Star size={13} color="#FBBF24" fill="#FBBF24" />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700 }}>{m.rating}</span>
                </div>
              </div>
            ))}
            <button className="btn btn-outline btn-sm w-full" onClick={() => navigate('/search')}>
              <Factory size={14} /> Find More Manufacturers
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
