import Layout from '../components/Layout';
import { CheckCircle2, Clock, Truck, Package, Scissors, Printer, Layers, ShieldCheck, Box, MapPin, ArrowRight } from 'lucide-react';

const steps = [
  { id: 1, label: 'Order Confirmed', date: 'Jul 10, 2026', time: '10:22 AM', status: 'done', icon: CheckCircle2, desc: 'Order ORD-4821 confirmed. PO issued and payment received (30% advance: $7,950).', actor: 'System' },
  { id: 2, label: 'Sampling', date: 'Jul 12, 2026', time: '3:15 PM', status: 'done', icon: Package, desc: 'Sample polo shirts prepared (5 pcs x 3 colors). Sent via DHL for buyer approval.', actor: 'Sunrise Garments', attachment: 'sample_photos.zip' },
  { id: 3, label: 'Sample Approved', date: 'Jul 15, 2026', time: '11:00 AM', status: 'done', icon: CheckCircle2, desc: 'Buyer approved samples with minor adjustments: sleeve logo size changed to 6cm.', actor: 'Buyer (Alex Johnson)' },
  { id: 4, label: 'Raw Material Procurement', date: 'Jul 16, 2026', time: '9:00 AM', status: 'done', icon: Layers, desc: '5,500 kg GOTS-certified cotton fabric procured from Vardhman Textiles. Thread and accessories ordered.', actor: 'Sunrise Garments' },
  { id: 5, label: 'Cutting', date: 'Jul 18, 2026', time: '8:00 AM', status: 'done', icon: Scissors, desc: '5,000 pieces cut across all sizes (S: 800, M: 1500, L: 1500, XL: 800, XXL: 400).', actor: 'Production Team' },
  { id: 6, label: 'Printing / Embroidery', date: 'Jul 21, 2026', time: '9:30 AM', status: 'done', icon: Printer, desc: 'Chest logo embroidery completed on all pieces. Sleeve logo in progress (60% done).', actor: 'Production Team' },
  { id: 7, label: 'Stitching', date: 'Jul 22, 2026', time: 'In Progress', status: 'active', icon: Layers, desc: 'Assembly and stitching underway. 3,250 of 5,000 pieces completed (65%). On-track for Aug 5 completion.', actor: 'Production Team' },
  { id: 8, label: 'Quality Inspection', date: 'Aug 6, 2026', time: 'Scheduled', status: 'pending', icon: ShieldCheck, desc: 'AQL 2.5 quality inspection scheduled. Third-party QC inspector (SGS India) confirmed.', actor: 'SGS India' },
  { id: 9, label: 'Packing & Labeling', date: 'Aug 8, 2026', time: 'Pending', status: 'pending', icon: Box, desc: 'Individual polybag packing, hangtag attachment, barcode labeling and export carton packing.', actor: 'Warehouse Team' },
  { id: 10, label: 'Shipping', date: 'Aug 10, 2026', time: 'Pending', status: 'pending', icon: Truck, desc: 'FCL shipment via MSCI Lines. Port of loading: JNPT, Mumbai. ETA destination: Aug 25, 2026.', actor: 'Freight Agent' },
  { id: 11, label: 'Delivered', date: 'Aug 15, 2026', time: 'Est. Delivery', status: 'pending', icon: CheckCircle2, desc: 'Estimated delivery to buyer warehouse. Final payment (70%) released upon delivery confirmation.', actor: 'System' },
];

const completedCount = steps.filter(s => s.status === 'done').length;
const percentage = Math.round((completedCount / steps.length) * 100);

const statusIcon = { done: '✓', active: '●', pending: '○' };

export default function ProductionTracking() {
  return (
    <Layout role="buyer" title="Production Tracking" subtitle="ORD-4821 · Men's Polo Shirts · Sunrise Garments">
      {/* Order Summary */}
      <div className="card mb-6">
        <div className="card-body">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem' }}>ORD-4821 — Men's Polo Shirts</div>
                <span className="badge badge-blue">In Production</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <span>🏭 Sunrise Garments, Mumbai</span>
                <span>📦 5,000 pieces</span>
                <span>💰 $26,500</span>
                <span>📅 Due: Aug 15, 2026</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '2.5rem', color: 'var(--blue-700)' }}>{percentage}%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Production Complete</div>
            </div>
          </div>

          {/* Overall Progress */}
          <div style={{ marginTop: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.8125rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Stage {completedCount} of {steps.length} completed</span>
              <span style={{ fontWeight: 700, color: 'var(--blue-700)' }}>Currently: Stitching</span>
            </div>
            <div className="progress-bar" style={{ height: 10 }}>
              <div className="progress-fill" style={{ width: `${percentage}%` }} />
            </div>
          </div>

          {/* Stage pills */}
          <div style={{ display: 'flex', gap: 6, marginTop: 16, flexWrap: 'wrap' }}>
            {steps.map(s => (
              <div key={s.id} style={{
                padding: '4px 10px', borderRadius: 99, fontSize: '0.6875rem', fontWeight: 700,
                background: s.status === 'done' ? 'var(--emerald-100)' : s.status === 'active' ? 'var(--blue-100)' : 'var(--slate-100)',
                color: s.status === 'done' ? 'var(--emerald-700)' : s.status === 'active' ? 'var(--blue-700)' : 'var(--text-muted)',
              }}>
                {statusIcon[s.status]} {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'var(--sp-6)' }}>
        {/* Timeline */}
        <div>
          <div className="timeline">
            {steps.map((step, i) => (
              <div key={step.id} className="timeline-item">
                <div className={`timeline-dot ${step.status}`}>
                  {step.status === 'done' ? <CheckCircle2 size={14} /> : step.status === 'active' ? <Clock size={14} /> : <span style={{ fontSize: '0.625rem', fontWeight: 700 }}>{step.id}</span>}
                </div>
                <div className="timeline-content" style={{ opacity: step.status === 'pending' ? 0.6 : 1 }}>
                  <div className="timeline-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span className="timeline-step">{step.label}</span>
                      <span className={`badge ${step.status === 'done' ? 'badge-emerald' : step.status === 'active' ? 'badge-blue' : 'badge-slate'}`}>
                        {step.status === 'done' ? 'Completed' : step.status === 'active' ? 'In Progress' : 'Scheduled'}
                      </span>
                    </div>
                    <span className="timeline-date">{step.date}</span>
                  </div>
                  <p className="timeline-desc">{step.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>By: {step.actor}</span>
                    {step.attachment && (
                      <button className="btn btn-ghost btn-sm" style={{ fontSize: '0.6875rem' }}>📎 {step.attachment}</button>
                    )}
                  </div>
                  {step.status === 'active' && (
                    <div style={{ marginTop: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.75rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Progress</span>
                        <span style={{ fontWeight: 700 }}>65%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '65%' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          {/* Shipment Info */}
          <div className="card">
            <div className="card-header"><div className="card-title">Shipment Details</div></div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Shipping Method', value: 'Sea Freight (FCL)' },
                { label: 'Carrier', value: 'MSCI Lines' },
                { label: 'Port of Loading', value: 'JNPT, Mumbai 🇮🇳' },
                { label: 'Port of Discharge', value: 'TBD by buyer' },
                { label: 'Est. Sailing Date', value: 'Aug 10, 2026' },
                { label: 'Est. Arrival', value: 'Aug 25, 2026' },
                { label: 'Incoterms', value: 'FOB Mumbai' },
              ].map(d => (
                <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{d.label}</span>
                  <span style={{ fontWeight: 600, textAlign: 'right' }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="card">
            <div className="card-header"><div className="card-title">Documents</div></div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'Purchase Order.pdf', status: 'Available' },
                { name: 'Pro Forma Invoice.pdf', status: 'Available' },
                { name: 'Sample Approval.pdf', status: 'Available' },
                { name: 'Quality Report.pdf', status: 'Pending' },
                { name: 'Bill of Lading.pdf', status: 'Pending' },
                { name: 'Packing List.pdf', status: 'Pending' },
              ].map(d => (
                <div key={d.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--slate-50)', borderRadius: 'var(--r-sm)' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>📄 {d.name}</span>
                  <span className={`badge ${d.status === 'Available' ? 'badge-emerald' : 'badge-slate'}`}>{d.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="card">
            <div className="card-header"><div className="card-title">Factory Contact</div></div>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div className="avatar avatar-md" style={{ background: '#2563EB', color: 'white' }}>RK</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>Rajesh Kumar</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Export Manager · Sunrise Garments</div>
                </div>
              </div>
              <button className="btn btn-primary btn-md w-full">💬 Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
