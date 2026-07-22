import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Star, Award, Clock, MapPin, CheckCircle2, X, ArrowRight, ChevronDown } from 'lucide-react';

const quotes = [
  {
    id: 'QUO-003', manufacturer: 'UniStitch Co.', location: 'Tirupur, India', rating: 4.8, verified: true,
    price: 24750, unit: 4.95, lead: 18, validity: '10 days', initials: 'US', color: '#7C3AED',
    fabric: 'Cotton 100% — 200 GSM', printing: 'Embroidery', packaging: 'Individual poly + hangtag',
    payment: '30% advance, 70% on dispatch', moq: '300 pcs', warranty: '30 days',
    pros: ['Fastest delivery (18 days)', 'Own fabric mill', 'GOTS certified'],
    cons: ['Higher price per unit', 'Smaller capacity'],
  },
  {
    id: 'QUO-002', manufacturer: 'Blue River Textiles', location: 'Dhaka, Bangladesh', rating: 4.7, verified: true,
    price: 22000, unit: 4.40, lead: 28, validity: '5 days', initials: 'BR', color: '#059669',
    fabric: 'Cotton 100% — 180 GSM', printing: 'Embroidery', packaging: 'Individual poly',
    payment: '40% advance, 60% on dispatch', moq: '1000 pcs', warranty: '15 days',
    pros: ['Lowest price', 'BSCI audited', 'Sustainable practices'],
    cons: ['Longest lead time (28 days)', 'Higher MOQ', 'Quote validity: 5 days only'],
  },
  {
    id: 'QUO-001', manufacturer: 'Sunrise Garments', location: 'Mumbai, India', rating: 4.9, verified: true,
    price: 26500, unit: 5.30, lead: 22, validity: '7 days', initials: 'SG', color: '#2563EB',
    fabric: 'Cotton-Poly 60/40 — 180 GSM', printing: 'Embroidery + heat transfer option',
    packaging: 'Individual poly + branded hangtag', payment: '30% advance, 70% after QC',
    moq: '500 pcs', warranty: '60 days',
    pros: ['Highest rated (4.9★)', 'ISO 9001 + GOTS + OEKO-TEX', 'Best warranty (60 days)'],
    cons: ['Most expensive option', 'Cotton-Poly blend (not 100% cotton)'],
  },
];

const criteria = [
  { key: 'price', label: 'Total Price', values: ['$24,750', '$22,000', '$26,500'], best: 1 },
  { key: 'unit', label: 'Price per Unit', values: ['$4.95/pc', '$4.40/pc', '$5.30/pc'], best: 1 },
  { key: 'lead', label: 'Lead Time', values: ['18 days', '28 days', '22 days'], best: 0 },
  { key: 'rating', label: 'Rating', values: ['4.8 ★', '4.7 ★', '4.9 ★'], best: 2 },
  { key: 'fabric', label: 'Fabric', values: ['Cotton 100%', 'Cotton 100%', 'Cotton-Poly 60/40'], best: 0 },
  { key: 'moq', label: 'Min Order Qty', values: ['300 pcs', '1,000 pcs', '500 pcs'], best: 0 },
  { key: 'payment', label: 'Payment Terms', values: ['30/70', '40/60', '30/70'], best: -1 },
  { key: 'warranty', label: 'Warranty', values: ['30 days', '15 days', '60 days'], best: 2 },
];

export default function QuotationCompare() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <Layout role="buyer" title="Compare Quotations" subtitle="SXR-0112 · Men's Polo Shirts · 3 Quotes">
      {/* Header summary */}
      <div className="kpi-grid mb-6" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {quotes.map((q, i) => (
          <div key={q.id} className="kpi-card" style={{ cursor: 'pointer', border: selected === i ? '2px solid var(--blue-500)' : '1px solid var(--border)' }} onClick={() => setSelected(selected === i ? null : i)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div className="avatar avatar-md" style={{ background: q.color, color: 'white' }}>{q.initials}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>{q.manufacturer}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{q.location}</div>
              </div>
            </div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.875rem', color: 'var(--text-primary)', marginBottom: 4 }}>
              ${q.price.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: 12 }}>${q.unit}/pc · {q.lead} days lead</div>
            <div style={{ display: 'flex', gap: 4 }}>
              {Array(5).fill(0).map((_, s) => <Star key={s} size={13} color="#FBBF24" fill={s < Math.floor(q.rating) ? "#FBBF24" : "none"} />)}
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 4 }}>{q.rating}</span>
            </div>
            {i === 1 && <div style={{ marginTop: 12, background: 'var(--emerald-50)', color: 'var(--emerald-700)', fontWeight: 700, fontSize: '0.75rem', padding: '4px 10px', borderRadius: 99, textAlign: 'center' }}>🏆 BEST PRICE</div>}
            {i === 0 && <div style={{ marginTop: 12, background: 'var(--blue-50)', color: 'var(--blue-700)', fontWeight: 700, fontSize: '0.75rem', padding: '4px 10px', borderRadius: 99, textAlign: 'center' }}>⚡ FASTEST DELIVERY</div>}
            {i === 2 && <div style={{ marginTop: 12, background: 'var(--purple-100)', color: 'var(--purple-700)', fontWeight: 700, fontSize: '0.75rem', padding: '4px 10px', borderRadius: 99, textAlign: 'center' }}>⭐ HIGHEST RATED</div>}
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="card mb-6">
        <div className="card-header"><div className="card-title">Side-by-Side Comparison</div></div>
        <div className="table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: 180 }}>Criteria</th>
                {quotes.map(q => (
                  <th key={q.id} style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                      <div className="avatar avatar-sm" style={{ background: q.color, color: 'white' }}>{q.initials}</div>
                      <span>{q.manufacturer.split(' ')[0]}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map(c => (
                <tr key={c.key}>
                  <td style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{c.label}</td>
                  {c.values.map((v, i) => (
                    <td key={i} style={{ textAlign: 'center', fontWeight: c.best === i ? 800 : 500, color: c.best === i ? 'var(--emerald-600)' : 'var(--text-primary)', background: c.best === i ? 'var(--emerald-50)' : 'transparent' }}>
                      {c.best === i && <CheckCircle2 size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />}
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid-3 mb-6">
        {quotes.map((q, i) => (
          <div key={q.id} className="card">
            <div className="card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="avatar avatar-sm" style={{ background: q.color, color: 'white' }}>{q.initials}</div>
                <div className="card-title">{q.manufacturer.split(' ')[0]}</div>
              </div>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--emerald-700)', marginBottom: 8, textTransform: 'uppercase' }}>Pros</div>
                {q.pros.map(p => (
                  <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: '0.8125rem' }}>
                    <CheckCircle2 size={14} color="var(--emerald-500)" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--red-500)', marginBottom: 8, textTransform: 'uppercase' }}>Cons</div>
                {q.cons.map(c => (
                  <div key={c} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: '0.8125rem' }}>
                    <X size={14} color="var(--red-500)" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary btn-sm w-full" onClick={() => navigate('/orders')}>
                Accept Quote <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
