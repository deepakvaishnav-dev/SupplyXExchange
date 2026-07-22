import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Package, Calendar, DollarSign, Clock, MapPin, MessageSquare,
  ChevronDown, ArrowRight, Award, Star, CheckCircle2, AlertCircle, FileText
} from 'lucide-react';

const quotes = [
  { id: 'QUO-001', manufacturer: 'Sunrise Garments', location: 'Mumbai, India', rating: 4.9, verified: true, price: 26500, unit: 5.30, lead: '22 days', validity: '7 days', note: 'Includes embroidery setup. Ready to start within 3 days of confirmation.', initials: 'SG', color: '#2563EB' },
  { id: 'QUO-002', manufacturer: 'Blue River Textiles', location: 'Dhaka, Bangladesh', rating: 4.7, verified: true, price: 22000, unit: 4.40, lead: '28 days', validity: '5 days', note: 'Best price guarantee. GOTS certified fabric available at +$0.50/pc.', initials: 'BR', color: '#059669' },
  { id: 'QUO-003', manufacturer: 'UniStitch Co.', location: 'Tirupur, India', rating: 4.8, verified: true, price: 24750, unit: 4.95, lead: '18 days', validity: '10 days', note: 'Fastest delivery option. Own fabric mill — no procurement delays.', initials: 'US', color: '#7C3AED' },
];

export default function RFQDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');

  return (
    <Layout role="buyer" title="RFQ Details" subtitle="SXR-0112 · Men's Polo Shirts">
      {/* RFQ Header Card */}
      <div className="card mb-6">
        <div className="card-body">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.375rem' }}>Men's Polo Shirts</div>
                <span className="badge badge-amber">Receiving Quotes</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Package size={15} /> 5,000 pieces</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><DollarSign size={15} /> Budget: $12,000–$18,000</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={15} /> Delivery: Aug 25, 2026</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={15} /> Posted: 2 days ago</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <button className="btn btn-ghost btn-md">Edit RFQ</button>
              <button className="btn btn-primary btn-md" onClick={() => navigate('/rfq/SXR-001/compare')}>
                Compare Quotes <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Count Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--blue-800), var(--blue-600))', borderRadius: 'var(--r-lg)', padding: 'var(--sp-5) var(--sp-6)', marginBottom: 'var(--sp-6)', display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 52, height: 52, borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FileText size={24} color="white" />
        </div>
        <div>
          <div style={{ color: 'white', fontWeight: 800, fontSize: '1.125rem' }}>{quotes.length} Quotes Received</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>5 more manufacturers reviewing · Expires in 5 days</div>
        </div>
        <div style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
          Lowest: <strong style={{ color: 'white', fontSize: '1.125rem' }}>$22,000</strong>
          &nbsp;·&nbsp; Highest: <strong style={{ color: 'white', fontSize: '1.125rem' }}>$26,500</strong>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs mb-6" style={{ maxWidth: 500 }}>
        {['details', 'quotes', 'activity'].map(t => (
          <button key={t} className={`tab-btn${activeTab === t ? ' active' : ''}`} onClick={() => setActiveTab(t)}>
            {t === 'quotes' ? `Quotes (${quotes.length})` : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'details' && (
        <div className="dash-grid-main">
          <div className="card">
            <div className="card-header"><div className="card-title">RFQ Specifications</div></div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-5)' }}>
                {[
                  ['Product Category', 'Polo Shirts'],
                  ['Total Quantity', '5,000 pieces'],
                  ['Fabric Material', 'Cotton 100% — 180 GSM'],
                  ['Printing Type', 'Embroidery'],
                  ['Color Count', '2 colors'],
                  ['Size Range', 'S / M / L / XL / XXL'],
                  ['Shipping Terms', 'FOB — Factory Port'],
                  ['Sample Required', 'Yes — 5 pieces per style'],
                ].map(([k, v]) => (
                  <div key={k} style={{ padding: 'var(--sp-4)', background: 'var(--slate-50)', borderRadius: 'var(--r-md)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{k}</div>
                    <div style={{ fontWeight: 700 }}>{v}</div>
                  </div>
                ))}
              </div>
              <div className="divider" />
              <div>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>Additional Notes</div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>Polo shirts with embroidered company logo on left chest. Must have GST certification. Preferred delivery to Mumbai port. Sustainable packaging required. Hangtags and size labels to be provided by buyer. First 500 pcs delivery required within 18 days for trade show.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
            <div className="card">
              <div className="card-header"><div className="card-title">Budget & Timeline</div></div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Budget Range', value: '$12,000 – $18,000', icon: DollarSign, color: 'var(--emerald-600)' },
                  { label: 'Sample Approval', value: 'Jul 30, 2026', icon: Calendar, color: 'var(--blue-600)' },
                  { label: 'Full Delivery', value: 'Aug 25, 2026', icon: Calendar, color: 'var(--blue-600)' },
                  { label: 'Quote Deadline', value: 'Jul 27, 2026 (3 days left)', icon: Clock, color: 'var(--amber-600)' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 'var(--r-sm)', background: 'var(--slate-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <item.icon size={16} color={item.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.label}</div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-header"><div className="card-title">RFQ Status</div></div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Manufacturers Notified', value: '12', status: 'done' },
                  { label: 'Quotes Received', value: '3 of 12', status: 'active' },
                  { label: 'Quotes Pending', value: '5 reviewing', status: 'pending' },
                  { label: 'Declined', value: '4 manufacturers', status: 'declined' },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--sp-3)', background: 'var(--slate-50)', borderRadius: 'var(--r-md)' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{s.label}</span>
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: s.status === 'done' ? 'var(--emerald-600)' : s.status === 'active' ? 'var(--blue-600)' : 'var(--text-muted)' }}>{s.value}</span>
                  </div>
                ))}
                <button className="btn btn-primary btn-md w-full" onClick={() => navigate('/rfq/SXR-001/compare')}>
                  Compare All Quotes <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'quotes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
          {quotes.map(q => (
            <div key={q.id} className="card" style={{ border: q.price === 22000 ? '2px solid var(--emerald-500)' : '1px solid var(--border)', position: 'relative' }}>
              {q.price === 22000 && (
                <div style={{ position: 'absolute', top: -12, right: 24, background: 'var(--emerald-500)', color: 'white', fontSize: '0.6875rem', fontWeight: 700, padding: '3px 12px', borderRadius: 99, letterSpacing: '0.05em' }}>
                  BEST PRICE
                </div>
              )}
              <div className="card-body">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div className="avatar avatar-lg" style={{ background: q.color, color: 'white' }}>{q.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                      <span style={{ fontWeight: 800, fontSize: '1.0625rem' }}>{q.manufacturer}</span>
                      {q.verified && <span className="badge badge-verified"><Award size={10} /> Verified</span>}
                    </div>
                    <div style={{ display: 'flex', gap: 20, color: 'var(--text-secondary)', fontSize: '0.8125rem', marginBottom: 12 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={13} />{q.location}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Star size={13} color="#FBBF24" fill="#FBBF24" />{q.rating} rating</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={13} />{q.lead} lead time</span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', background: 'var(--slate-50)', padding: 'var(--sp-3)', borderRadius: 'var(--r-md)', lineHeight: 1.7 }}>"{q.note}"</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.875rem', color: 'var(--text-primary)', marginBottom: 4 }}>
                      ${q.price.toLocaleString()}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginBottom: 16 }}>${q.unit}/pc · 5,000 pcs</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <button className="btn btn-primary btn-sm">Accept Quote</button>
                      <button className="btn btn-ghost btn-sm" onClick={() => navigate('/messages')}>Negotiate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'activity' && (
        <div className="card">
          <div className="card-header"><div className="card-title">RFQ Activity Log</div></div>
          <div>
            {[
              { event: 'Quote received from UniStitch Co. — $24,750', time: '3 hours ago', color: 'var(--blue-500)' },
              { event: 'Quote received from Blue River Textiles — $22,000', time: '8 hours ago', color: 'var(--blue-500)' },
              { event: 'Quote received from Sunrise Garments — $26,500', time: '1 day ago', color: 'var(--blue-500)' },
              { event: 'RFQ sent to 12 matching manufacturers', time: '2 days ago', color: 'var(--emerald-500)' },
              { event: 'RFQ SXR-0112 created and published', time: '2 days ago', color: 'var(--purple-500)' },
            ].map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: 'var(--sp-5)', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: a.color, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{a.event}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
