import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import KPICard from '@/components/common/KPICard';
import {
  ArrowRight, Truck, Package, Clock, Search, Download, CheckCircle2,
  AlertCircle, X, LayoutGrid, LayoutList, Plus, FileText, ChevronRight,
  MapPin, MessageSquare, ShieldCheck, DollarSign, Calendar, Filter
} from 'lucide-react';

const orders = [
  {
    id: 'ORD-4821',
    product: "Men's Polo Shirts",
    category: 'Apparel',
    manufacturer: 'Sunrise Garments',
    qty: '5,000 pcs',
    value: '$26,500',
    stage: 'Stitching',
    progress: 65,
    status: 'In Production',
    date: 'Jul 10, 2026',
    due: 'Aug 15, 2026',
    country: '🇮🇳',
    leadTime: '35 Days',
    paymentStatus: '50% Deposit Paid'
  },
  {
    id: 'ORD-4819',
    product: 'Denim Jeans',
    category: 'Apparel',
    manufacturer: 'Blue River Textiles',
    qty: '2,500 pcs',
    value: '$22,000',
    stage: 'QC Inspection',
    progress: 85,
    status: 'Quality Check',
    date: 'Jul 5, 2026',
    due: 'Jul 30, 2026',
    country: '🇧🇩',
    leadTime: '25 Days',
    paymentStatus: '70% Escrow Funded'
  },
  {
    id: 'ORD-4815',
    product: 'Corporate Uniforms',
    category: 'Uniforms',
    manufacturer: 'UniStitch Co.',
    qty: '1,200 sets',
    value: '$18,000',
    stage: 'Sampling',
    progress: 25,
    status: 'Sampling',
    date: 'Jul 18, 2026',
    due: 'Sep 5, 2026',
    country: '🇮🇳',
    leadTime: '45 Days',
    paymentStatus: 'Advance Approved'
  },
  {
    id: 'ORD-4809',
    product: 'Sports Jerseys',
    category: 'Activewear',
    manufacturer: 'Saigon Apparel',
    qty: '8,000 pcs',
    value: '$32,000',
    stage: 'Delivered',
    progress: 100,
    status: 'Delivered',
    date: 'Jun 20, 2026',
    due: 'Jul 15, 2026',
    country: '🇻🇳',
    leadTime: '25 Days',
    paymentStatus: '100% Settled'
  },
  {
    id: 'ORD-4801',
    product: 'Winter Jackets',
    category: 'Outerwear',
    manufacturer: 'Istanbul Fashion',
    qty: '600 pcs',
    value: '$28,500',
    stage: 'Shipped',
    progress: 95,
    status: 'Shipped',
    date: 'Jun 15, 2026',
    due: 'Jul 20, 2026',
    country: '🇹🇷',
    leadTime: '35 Days',
    paymentStatus: 'In Transit Escrow'
  },
  {
    id: 'ORD-4798',
    product: 'Casual Shorts',
    category: 'Apparel',
    manufacturer: 'Blue River Textiles',
    qty: '3,000 pcs',
    value: '$9,000',
    stage: 'Delivered',
    progress: 100,
    status: 'Delivered',
    date: 'Jun 1, 2026',
    due: 'Jul 1, 2026',
    country: '🇧🇩',
    leadTime: '30 Days',
    paymentStatus: '100% Settled'
  },
];

const statusConfig = {
  'In Production': { color: 'badge-blue', icon: Clock, labelColor: '#1570EF' },
  'Quality Check': { color: 'badge-amber', icon: AlertCircle, labelColor: '#F79009' },
  'Sampling': { color: 'badge-purple', icon: Package, labelColor: '#7F56D9' },
  'Shipped': { color: 'badge-blue', icon: Truck, labelColor: '#175CD3' },
  'Delivered': { color: 'badge-emerald', icon: CheckCircle2, labelColor: '#12B76A' },
};

export default function Orders() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'cards'
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [exportNotice, setExportNotice] = useState(false);

  const filters = ['All', 'In Production', 'Quality Check', 'Sampling', 'Shipped', 'Delivered'];

  const filteredOrders = orders.filter(o => {
    const matchFilter = filter === 'All' || o.status === filter;
    const matchSearch =
      o.product.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.manufacturer.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const totals = {
    total: orders.length,
    active: orders.filter(o => !['Delivered'].includes(o.status)).length,
    delivered: orders.filter(o => o.status === 'Delivered').length,
    value: orders.reduce((s, o) => s + Number(o.value.replace(/[^0-9]/g, '')), 0),
  };

  const handleExport = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 3000);
  };

  return (
    <Layout role="buyer" title="Order Management" subtitle="Track real-time production, milestones, and logistics for your manufacturing orders">
      
      {/* Page Top Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)', letterSpacing: '-0.02em' }}>
            My Orders
          </h1>
          <p style={{ fontSize: '0.84rem', color: 'var(--slate-500)', marginTop: '2px' }}>
            Manage {orders.length} manufacturing orders across global verified suppliers
          </p>
        </div>

        <button className="btn btn-orange" onClick={() => navigate('/rfq/create')}>
          <Plus size={16} /> Post New Inquiry / Order
        </button>
      </div>

      {/* Responsive KPI Summary Grid */}
      <div className="kpi-grid">
        <KPICard
          icon={Package}
          label="Total Orders"
          value={totals.total}
          trend={12.4}
          color="blue"
          subtitle="All active & completed orders"
        />
        <KPICard
          icon={Clock}
          label="Active Orders"
          value={totals.active}
          trend={8.2}
          color="amber"
          subtitle="Currently in production/QC"
        />
        <KPICard
          icon={CheckCircle2}
          label="Delivered Orders"
          value={totals.delivered}
          trend={25.0}
          color="emerald"
          subtitle="Successfully fulfilled"
        />
        <KPICard
          icon={DollarSign}
          label="Total Order Value"
          value={`$${(totals.value / 1000).toFixed(0)}K`}
          trend={18.5}
          color="purple"
          subtitle="Escrow-protected capital"
        />
      </div>

      {/* Filter, Search & View Controls Bar */}
      <div className="orders-filter-container">
        
        {/* Search Input */}
        <div className="orders-search-box">
          <Search size={16} color="var(--slate-400)" />
          <input
            type="text"
            placeholder="Search by order ID, product, or supplier..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}>
              <X size={14} color="var(--slate-400)" />
            </button>
          )}
        </div>

        {/* Scrollable Status Filter Pills */}
        <div className="orders-filter-pills">
          {filters.map(f => {
            const count = f === 'All' ? orders.length : orders.filter(o => o.status === f).length;
            const isActive = filter === f;
            return (
              <button
                key={f}
                className={`pill-filter ${isActive ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f} <span style={{ opacity: 0.85, fontSize: '0.75rem', marginLeft: 4 }}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="orders-actions-group">
          {/* View Toggle */}
          <div style={{ display: 'flex', background: 'var(--slate-100)', borderRadius: 'var(--r-md)', padding: '2px' }}>
            <button
              className={`btn btn-sm ${viewMode === 'table' ? 'btn-ghost' : ''}`}
              style={{ padding: '6px 10px', borderRadius: 'var(--r-sm)', background: viewMode === 'table' ? '#fff' : 'transparent', border: 'none', boxShadow: viewMode === 'table' ? 'var(--shadow-xs)' : 'none' }}
              onClick={() => setViewMode('table')}
              title="Table View"
            >
              <LayoutList size={16} color={viewMode === 'table' ? 'var(--orange-500)' : 'var(--slate-500)'} />
            </button>
            <button
              className={`btn btn-sm ${viewMode === 'cards' ? 'btn-ghost' : ''}`}
              style={{ padding: '6px 10px', borderRadius: 'var(--r-sm)', background: viewMode === 'cards' ? '#fff' : 'transparent', border: 'none', boxShadow: viewMode === 'cards' ? 'var(--shadow-xs)' : 'none' }}
              onClick={() => setViewMode('cards')}
              title="Cards Grid View"
            >
              <LayoutGrid size={16} color={viewMode === 'cards' ? 'var(--orange-500)' : 'var(--slate-500)'} />
            </button>
          </div>

          <button className="btn btn-outline btn-sm" onClick={handleExport} title="Export Orders Data">
            <Download size={14} /> <span className="hide-mobile">Export CSV</span>
          </button>
        </div>
      </div>

      {exportNotice && (
        <div style={{ padding: '10px 16px', background: 'var(--green-50)', border: '1px solid var(--green-100)', color: 'var(--green-600)', borderRadius: 'var(--r-md)', marginBottom: 16, fontSize: '0.84rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
          <CheckCircle2 size={16} /> Export completed! Orders report downloaded successfully.
        </div>
      )}

      {/* Main Orders Display: Table View or Cards View */}
      {filteredOrders.length === 0 ? (
        /* Empty State */
        <div className="card" style={{ padding: '48px 24px', textAlign: 'center', backgroundColor: '#fff' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'var(--slate-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--slate-500)' }}>
            <Search size={24} />
          </div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>No orders found</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', maxWidth: 360, margin: '0 auto 20px' }}>
            We couldn't find any orders matching "{search}". Try clearing search keywords or switching filters.
          </p>
          <button className="btn btn-outline" onClick={() => { setSearch(''); setFilter('All'); }}>
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'table' ? (
        /* Desktop Table View with Horizontal Scroll Container */
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="table-responsive-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Manufacturer</th>
                  <th>Quantity</th>
                  <th>Total Value</th>
                  <th>Production Progress</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(o => {
                  const status = statusConfig[o.status] || { color: 'badge-slate', icon: Package };
                  const StatusIcon = status.icon;

                  return (
                    <tr key={o.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedOrder(o)}>
                      <td>
                        <div style={{ fontWeight: 800, color: 'var(--orange-500)', fontSize: '0.875rem' }}>{o.id}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>{o.date}</div>
                      </td>

                      <td>
                        <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '0.875rem' }}>{o.product}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>{o.category}</div>
                      </td>

                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontSize: '1.1rem' }}>{o.country}</span>
                          <span style={{ color: 'var(--slate-800)', fontWeight: 600, fontSize: '0.84rem' }}>{o.manufacturer}</span>
                        </div>
                      </td>

                      <td style={{ fontWeight: 600, color: 'var(--slate-700)' }}>{o.qty}</td>

                      <td>
                        <div style={{ fontWeight: 800, color: 'var(--slate-900)', fontSize: '0.875rem' }}>{o.value}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--green-600)', fontWeight: 600 }}>{o.paymentStatus}</div>
                      </td>

                      <td style={{ minWidth: 140 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: '0.72rem' }}>
                          <span style={{ color: 'var(--slate-600)', fontWeight: 600 }}>{o.stage}</span>
                          <span style={{ fontWeight: 800, color: 'var(--slate-900)' }}>{o.progress}%</span>
                        </div>
                        <div className="progress-bar-bg">
                          <div
                            className="progress-bar-fill"
                            style={{
                              width: `${o.progress}%`,
                              backgroundColor: o.progress === 100 ? 'var(--green-500)' : 'var(--orange-500)'
                            }}
                          />
                        </div>
                      </td>

                      <td>
                        <span className={`badge ${status.color}`}>
                          <StatusIcon size={12} />
                          {o.status}
                        </span>
                      </td>

                      <td>
                        <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--slate-800)' }}>{o.due}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)' }}>{o.leadTime}</div>
                      </td>

                      <td style={{ textAlign: 'right' }} onClick={e => e.stopPropagation()}>
                        <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => navigate('/orders/ORD-001/tracking')}
                            title="Track Production"
                          >
                            <Truck size={13} /> Track
                          </button>
                          <button
                            className="btn btn-ghost btn-sm"
                            onClick={() => setSelectedOrder(o)}
                            title="View Details"
                          >
                            Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Mobile / Cards View */
        <div className="responsive-grid-3col">
          {filteredOrders.map(o => {
            const status = statusConfig[o.status] || { color: 'badge-slate', icon: Package };
            const StatusIcon = status.icon;

            return (
              <div key={o.id} className="order-mobile-card" onClick={() => setSelectedOrder(o)}>
                <div className="order-mobile-card-header">
                  <div>
                    <span style={{ fontWeight: 800, color: 'var(--orange-500)', fontSize: '0.9rem' }}>{o.id}</span>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', marginTop: 2 }}>{o.date}</div>
                  </div>
                  <span className={`badge ${status.color}`}>
                    <StatusIcon size={12} />
                    {o.status}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>{o.product}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: 'var(--slate-600)', marginTop: 4 }}>
                    <span>{o.country}</span>
                    <span style={{ fontWeight: 600 }}>{o.manufacturer}</span>
                  </div>
                </div>

                <div className="order-mobile-card-grid">
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)' }}>Quantity</div>
                    <div style={{ fontWeight: 700, color: 'var(--slate-900)' }}>{o.qty}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)' }}>Total Value</div>
                    <div style={{ fontWeight: 800, color: 'var(--slate-900)' }}>{o.value}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)' }}>Current Stage</div>
                    <div style={{ fontWeight: 600, color: 'var(--orange-500)' }}>{o.stage}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)' }}>Due Date</div>
                    <div style={{ fontWeight: 700, color: 'var(--slate-900)' }}>{o.due}</div>
                  </div>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: '0.72rem' }}>
                    <span style={{ color: 'var(--slate-500)' }}>Progress</span>
                    <span style={{ fontWeight: 800, color: 'var(--slate-900)' }}>{o.progress}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${o.progress}%`,
                        backgroundColor: o.progress === 100 ? 'var(--green-500)' : 'var(--orange-500)'
                      }}
                    />
                  </div>
                </div>

                <div className="order-mobile-card-footer" onClick={e => e.stopPropagation()}>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                    onClick={() => navigate('/orders/ORD-001/tracking')}
                  >
                    <Truck size={14} /> Track Order
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedOrder(o)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick View Drawer Modal */}
      {selectedOrder && (
        <div className="drawer-backdrop" onClick={() => setSelectedOrder(null)}>
          <div className="drawer-content" onClick={e => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--slate-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--slate-50)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--slate-900)' }}>{selectedOrder.id}</h3>
                  <span className={`badge ${statusConfig[selectedOrder.status]?.color || 'badge-slate'}`}>
                    {selectedOrder.status}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', marginTop: 2 }}>
                  Placed on {selectedOrder.date}
                </div>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--slate-200)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
              
              {/* Product Info Summary */}
              <div style={{ background: '#fff', border: '1px solid var(--slate-200)', borderRadius: 'var(--r-lg)', padding: 16 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: 4 }}>
                  Product Specification
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--slate-900)' }}>{selectedOrder.product}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12, fontSize: '0.84rem' }}>
                  <div>
                    <span style={{ color: 'var(--slate-500)', display: 'block', fontSize: '0.72rem' }}>Category</span>
                    <strong style={{ color: 'var(--slate-800)' }}>{selectedOrder.category}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--slate-500)', display: 'block', fontSize: '0.72rem' }}>Quantity</span>
                    <strong style={{ color: 'var(--slate-800)' }}>{selectedOrder.qty}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--slate-500)', display: 'block', fontSize: '0.72rem' }}>Total Value</span>
                    <strong style={{ color: 'var(--slate-900)' }}>{selectedOrder.value}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--slate-500)', display: 'block', fontSize: '0.72rem' }}>Est. Delivery</span>
                    <strong style={{ color: 'var(--slate-800)' }}>{selectedOrder.due}</strong>
                  </div>
                </div>
              </div>

              {/* Live Production Stepper Timeline */}
              <div style={{ background: '#fff', border: '1px solid var(--slate-200)', borderRadius: 'var(--r-lg)', padding: 16 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: 12 }}>
                  Production Milestone Progress
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.84rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--slate-700)' }}>Current Stage: {selectedOrder.stage}</span>
                  <strong style={{ color: 'var(--orange-500)' }}>{selectedOrder.progress}%</strong>
                </div>

                <div className="progress-bar-bg" style={{ height: 10, marginBottom: 16 }}>
                  <div className="progress-bar-fill" style={{ width: `${selectedOrder.progress}%`, background: 'linear-gradient(90deg, var(--orange-500), var(--green-500))' }} />
                </div>

                <div className="timeline-stepper">
                  <div className="timeline-step completed">
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--slate-900)' }}>Order Placed &amp; Deposit Verified</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>{selectedOrder.date} • Milestone #1 Approved</div>
                  </div>
                  <div className={`timeline-step ${selectedOrder.progress >= 25 ? 'completed' : selectedOrder.progress > 0 ? 'active' : ''}`}>
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--slate-900)' }}>Sampling &amp; Fabric Approval</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Lab dips and pre-production sample verified</div>
                  </div>
                  <div className={`timeline-step ${selectedOrder.progress >= 65 ? 'completed' : selectedOrder.progress > 25 ? 'active' : ''}`}>
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--slate-900)' }}>Bulk Stitching &amp; Assembly</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Cutting &amp; stitching in progress on main line</div>
                  </div>
                  <div className={`timeline-step ${selectedOrder.progress >= 85 ? 'completed' : selectedOrder.progress >= 65 ? 'active' : ''}`}>
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--slate-900)' }}>AQL Quality Check Inspection</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Third-party quality audit and batch report</div>
                  </div>
                  <div className={`timeline-step ${selectedOrder.progress >= 100 ? 'completed' : selectedOrder.progress >= 95 ? 'active' : ''}`}>
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--slate-900)' }}>Dispatch &amp; Delivery</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Container loaded &amp; customs clearance</div>
                  </div>
                </div>
              </div>

              {/* Manufacturer Card */}
              <div style={{ background: 'var(--slate-50)', border: '1px solid var(--slate-200)', borderRadius: 'var(--r-lg)', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Manufacturer Partner</div>
                  <div style={{ fontWeight: 800, color: 'var(--slate-900)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <span>{selectedOrder.country}</span> {selectedOrder.manufacturer}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                    <ShieldCheck size={13} /> Verified Tier-1 Exporter
                  </div>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => navigate('/messages')}>
                  <MessageSquare size={14} /> Message
                </button>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid var(--slate-200)', background: '#fff', display: 'flex', gap: 12 }}>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => { setSelectedOrder(null); navigate('/orders/ORD-001/tracking'); }}
              >
                <Truck size={16} /> Open Full Live Tracker
              </button>
              <button className="btn btn-outline" onClick={() => setSelectedOrder(null)}>
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </Layout>
  );
}
