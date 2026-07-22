import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowRight, Truck, Package, Clock, Filter, Search, Download } from 'lucide-react';

const orders = [
  { id: 'ORD-4821', product: 'Men\'s Polo Shirts', manufacturer: 'Sunrise Garments', qty: '5,000 pcs', value: '$26,500', stage: 'Stitching', progress: 65, status: 'In Production', date: 'Jul 10', due: 'Aug 15', country: '🇮🇳' },
  { id: 'ORD-4819', product: 'Denim Jeans', manufacturer: 'Blue River Textiles', qty: '2,500 pcs', value: '$22,000', stage: 'QC Inspection', progress: 85, status: 'Quality Check', date: 'Jul 5', due: 'Jul 30', country: '🇧🇩' },
  { id: 'ORD-4815', product: 'Corporate Uniforms', manufacturer: 'UniStitch Co.', qty: '1,200 sets', value: '$18,000', stage: 'Sampling', progress: 25, status: 'Sampling', date: 'Jul 18', due: 'Sep 5', country: '🇮🇳' },
  { id: 'ORD-4809', product: 'Sports Jerseys', manufacturer: 'Saigon Apparel', qty: '8,000 pcs', value: '$32,000', stage: 'Delivered', progress: 100, status: 'Delivered', date: 'Jun 20', due: 'Jul 15', country: '🇻🇳' },
  { id: 'ORD-4801', product: 'Winter Jackets', manufacturer: 'Istanbul Fashion', qty: '600 pcs', value: '$28,500', stage: 'Shipped', progress: 95, status: 'Shipped', date: 'Jun 15', due: 'Jul 20', country: '🇹🇷' },
  { id: 'ORD-4798', product: 'Casual Shorts', manufacturer: 'Blue River Textiles', qty: '3,000 pcs', value: '$9,000', stage: 'Delivered', progress: 100, status: 'Delivered', date: 'Jun 1', due: 'Jul 1', country: '🇧🇩' },
];

const statusConfig = {
  'In Production': { color: 'badge-blue', bg: 'var(--blue-50)' },
  'Quality Check': { color: 'badge-amber', bg: 'var(--amber-50)' },
  'Sampling': { color: 'badge-purple', bg: 'var(--purple-100)' },
  'Delivered': { color: 'badge-emerald', bg: 'var(--emerald-50)' },
  'Shipped': { color: 'badge-blue', bg: 'var(--blue-50)' },
};

export default function Orders() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filters = ['All', 'In Production', 'Quality Check', 'Sampling', 'Shipped', 'Delivered'];
  const filtered = orders.filter(o => {
    const matchFilter = filter === 'All' || o.status === filter;
    const matchSearch = o.product.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const totals = {
    active: orders.filter(o => !['Delivered'].includes(o.status)).length,
    value: orders.reduce((s, o) => s + Number(o.value.replace(/[^0-9]/g, '')), 0),
    delivered: orders.filter(o => o.status === 'Delivered').length,
  };

  return (
    <Layout role="buyer" title="Order Management" subtitle="Track and manage all your manufacturing orders">
      {/* Summary cards */}
      <div className="kpi-grid mb-6" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {[
          { label: 'Total Orders', value: orders.length, color: 'badge-blue', bg: 'var(--blue-50)', icon: '📦' },
          { label: 'Active Orders', value: totals.active, color: 'badge-amber', bg: 'var(--amber-50)', icon: '⚙️' },
          { label: 'Delivered', value: totals.delivered, color: 'badge-emerald', bg: 'var(--emerald-50)', icon: '✅' },
          { label: 'Total Value', value: `$${(totals.value / 1000).toFixed(0)}K`, color: 'badge-purple', bg: 'var(--purple-100)', icon: '💰' },
        ].map(s => (
          <div key={s.label} className="kpi-card blue" style={{ background: s.bg, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{s.icon}</div>
            <div className="kpi-value">{s.value}</div>
            <div className="kpi-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 'var(--sp-5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--border)', borderRadius: 'var(--r-full)', padding: '8px 16px', background: 'var(--surface)', flex: 1, maxWidth: 320 }}>
          <Search size={15} color="var(--text-muted)" />
          <input placeholder="Search orders..." value={search} onChange={e => setSearch(e.target.value)} style={{ border: 'none', outline: 'none', fontSize: '0.875rem', width: '100%' }} />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setFilter(f)}>
              {f} {f !== 'All' && <span style={{ fontSize: '0.6875rem', opacity: 0.7 }}>({orders.filter(o => o.status === f).length})</span>}
            </button>
          ))}
        </div>
        <button className="btn btn-ghost btn-sm" style={{ marginLeft: 'auto' }}>
          <Download size={14} /> Export
        </button>
      </div>

      {/* Orders Table */}
      <div className="card">
        <div className="table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th><th>Product</th><th>Manufacturer</th><th>Quantity</th>
                <th>Value</th><th>Progress</th><th>Status</th><th>Due Date</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(o => (
                <tr key={o.id} style={{ cursor: 'pointer' }}>
                  <td>
                    <div style={{ fontWeight: 700, color: 'var(--blue-700)', fontSize: '0.875rem' }}>{o.id}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Placed {o.date}</div>
                  </td>
                  <td style={{ fontWeight: 600 }}>{o.product}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span>{o.country}</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{o.manufacturer}</span>
                    </div>
                  </td>
                  <td className="td-light">{o.qty}</td>
                  <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{o.value}</td>
                  <td>
                    <div style={{ width: 120 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: '0.6875rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>{o.stage}</span>
                        <span style={{ fontWeight: 700 }}>{o.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className={`progress-fill ${o.progress === 100 ? 'emerald' : ''}`} style={{ width: `${o.progress}%` }} />
                      </div>
                    </div>
                  </td>
                  <td><span className={`badge ${statusConfig[o.status]?.color || 'badge-slate'}`}>{o.status}</span></td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{o.due}</div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-primary btn-sm" onClick={() => navigate('/orders/ORD-001/tracking')}>
                        <Truck size={13} /> Track
                      </button>
                      <button className="btn btn-ghost btn-sm">View</button>
                    </div>
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
