import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  MapPin, Award, Star, Package, Clock, Users, Globe2, Phone, Mail,
  MessageSquare, FileText, ArrowRight, CheckCircle2, Image, Video
} from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';

const capabilityData = [
  { subject: 'Quality', value: 95 }, { subject: 'Speed', value: 82 },
  { subject: 'Capacity', value: 88 }, { subject: 'Pricing', value: 78 },
  { subject: 'Communication', value: 94 }, { subject: 'Compliance', value: 97 },
];

const reviews = [
  { name: 'Sarah Chen', company: 'ModaLux Apparel', rating: 5, date: 'Jun 2026', text: 'Outstanding quality and communication. Our polo shirts were delivered 3 days early. Will definitely work with them again.', tags: ['On-Time', 'High Quality', 'Great Communication'] },
  { name: 'James Wilson', company: 'TrendBrand UK', rating: 5, date: 'May 2026', text: 'Best garment manufacturer we\'ve worked with. GOTS certification was a huge plus for our sustainable line.', tags: ['Sustainable', 'GOTS Certified', 'Professional'] },
  { name: 'Maria Santos', company: 'QuickFash Brazil', rating: 4, date: 'Apr 2026', text: 'Excellent production quality. Minor delay on sampling but the final product exceeded our expectations.', tags: ['Good Quality', 'Reliable'] },
];

const products = [
  { name: 'Men\'s Polo Shirts', moq: '500 pcs', price: '$4.20–$6.50/pc', lead: '22 days', bg: '#1D4ED8' },
  { name: 'Corporate Uniforms', moq: '200 sets', price: '$18–$32/set', lead: '28 days', bg: '#059669' },
  { name: 'Sports T-Shirts', moq: '300 pcs', price: '$2.80–$4.50/pc', lead: '$18 days', bg: '#7C3AED' },
  { name: 'Premium Hoodies', moq: '150 pcs', price: '$12–$18/pc', lead: '25 days', bg: '#D97706' },
];

export default function ManufacturerProfile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <Layout role="buyer" title="Manufacturer Profile" subtitle="Sunrise Garments Pvt. Ltd.">
      {/* Hero */}
      <div className="mfr-profile-hero mb-6">
        <div className="mfr-profile-top">
          <div className="mfr-profile-logo">SG</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <div className="mfr-profile-name">Sunrise Garments Pvt. Ltd.</div>
              <span className="badge badge-verified"><Award size={11} /> Verified</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: 12 }}>
              Premium Garment Manufacturer · Established 2008
            </div>
            <div className="mfr-profile-meta">
              {[
                { icon: MapPin, text: 'Mumbai, Maharashtra, India' },
                { icon: Users, text: '350–500 Employees' },
                { icon: Globe2, text: 'Exports to 40+ Countries' },
                { icon: Package, text: '65,000 pcs/month Capacity' },
              ].map(item => (
                <div key={item.text} className="mfr-meta-item">
                  <item.icon size={14} /> {item.text}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
            <button className="btn btn-primary btn-md" onClick={() => navigate('/rfq/create')}>
              <FileText size={16} /> Send RFQ
            </button>
            <button className="btn btn-md" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }} onClick={() => navigate('/messages')}>
              <MessageSquare size={16} /> Message
            </button>
          </div>
        </div>
        <div className="mfr-profile-stats">
          {[
            { val: '4.9', lbl: 'Avg Rating' },
            { val: '284', lbl: 'Reviews' },
            { val: '98%', lbl: 'On-Time Delivery' },
            { val: '15+', lbl: 'Years Experience' },
            { val: '$12M+', lbl: 'Annual Production' },
          ].map(s => (
            <div key={s.lbl}>
              <div className="mfr-profile-stat-val">{s.val}</div>
              <div className="mfr-profile-stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs mb-6" style={{ maxWidth: 600 }}>
        {['overview', 'products', 'certifications', 'reviews'].map(t => (
          <button key={t} className={`tab-btn${activeTab === t ? ' active' : ''}`} onClick={() => setActiveTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="dash-grid-main">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
            {/* About */}
            <div className="card">
              <div className="card-header"><div className="card-title">About the Factory</div></div>
              <div className="card-body">
                <p style={{ lineHeight: 1.8 }}>Sunrise Garments is a leading ISO 9001 and GOTS certified garment manufacturer based in Mumbai, India. With over 15 years of experience, we specialize in producing high-quality apparel for global fashion brands, corporate clients, and retail chains.</p>
                <p style={{ marginTop: 12, lineHeight: 1.8 }}>Our state-of-the-art facility spans 85,000 sq ft, housing 350+ skilled workers and the latest Juki & Pegasus machinery. We serve buyers across the USA, UK, EU, Australia, and the Middle East.</p>
                <div className="divider" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { label: 'Factory Size', value: '85,000 sq ft' },
                    { label: 'Machines', value: '450+ Units' },
                    { label: 'Min Order', value: '500 pieces' },
                    { label: 'Lead Time', value: '20–28 days' },
                    { label: 'Sample Time', value: '7–10 days' },
                    { label: 'Payment Terms', value: '30% upfront, 70% on dispatch' },
                  ].map(d => (
                    <div key={d.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{d.label}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Capabilities Radar */}
            <div className="card">
              <div className="card-header"><div className="card-title">Capability Score</div><span className="badge badge-emerald">96/100</span></div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={240}>
                  <RadarChart data={capabilityData}>
                    <PolarGrid stroke="var(--slate-200)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: 'var(--slate-500)' }} />
                    <Radar name="Score" dataKey="value" stroke="#2563EB" fill="#2563EB" fillOpacity={0.15} strokeWidth={2} />
                    <Tooltip contentStyle={{ borderRadius: 10, fontSize: 12 }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
            {/* Certifications quick view */}
            <div className="card">
              <div className="card-header"><div className="card-title">Certifications</div></div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['ISO 9001:2015', 'GOTS Certified', 'OEKO-TEX Standard 100', 'SA8000 Compliant', 'BSCI Audited'].map(c => (
                  <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle2 size={16} color="var(--emerald-500)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="card">
              <div className="card-header"><div className="card-title">Contact</div></div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: Phone, text: '+91 22 4567 8900' },
                  { icon: Mail, text: 'export@sunrisegarm.com' },
                  { icon: Globe2, text: 'www.sunrisegarments.in' },
                ].map(c => (
                  <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <c.icon size={16} color="var(--blue-600)" />
                    <span style={{ fontSize: '0.875rem' }}>{c.text}</span>
                  </div>
                ))}
                <div className="divider" style={{ margin: '8px 0' }} />
                <button className="btn btn-primary btn-md w-full" onClick={() => navigate('/rfq/create')}><FileText size={16} /> Send RFQ</button>
                <button className="btn btn-ghost btn-md w-full" onClick={() => navigate('/messages')}><MessageSquare size={16} /> Send Message</button>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="card">
              <div className="card-header"><div className="card-title">Rating Breakdown</div></div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '3rem', color: 'var(--text-primary)' }}>4.9</div>
                  <div>
                    <div style={{ display: 'flex', gap: 3 }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={16} color="#FBBF24" fill="#FBBF24" />)}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>284 reviews</div>
                  </div>
                </div>
                {[5,4,3,2,1].map((s, i) => {
                  const widths = [82, 12, 4, 1, 1];
                  return (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: '0.75rem', width: 12, color: 'var(--text-muted)' }}>{s}</span>
                      <Star size={11} color="#FBBF24" fill="#FBBF24" />
                      <div className="progress-bar" style={{ flex: 1 }}>
                        <div className="progress-fill amber" style={{ width: `${widths[i]}%` }} />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', width: 28 }}>{widths[i]}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div className="grid-2">
          {products.map(p => (
            <div key={p.name} className="card">
              <div style={{ height: 120, background: p.bg, borderRadius: 'var(--r-lg) var(--r-lg) 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Package size={40} color="rgba(255,255,255,0.4)" />
              </div>
              <div className="card-body">
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 12 }}>{p.name}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div style={{ background: 'var(--slate-50)', borderRadius: 'var(--r-sm)', padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{p.moq}</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Min Order</div>
                  </div>
                  <div style={{ background: 'var(--slate-50)', borderRadius: 'var(--r-sm)', padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{p.lead}</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Lead Time</div>
                  </div>
                </div>
                <div style={{ marginTop: 12, fontSize: '0.875rem', color: 'var(--emerald-700)', fontWeight: 700 }}>{p.price}</div>
                <button className="btn btn-primary btn-sm w-full mt-3" onClick={() => navigate('/rfq/create')}>Request Quote</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'reviews' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
          {reviews.map(r => (
            <div key={r.name} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="avatar avatar-md" style={{ background: 'linear-gradient(135deg, var(--blue-500), var(--emerald-500))', color: 'white' }}>{r.name[0]}</div>
                  <div>
                    <div className="reviewer-name">{r.name}</div>
                    <div className="reviewer-company">{r.company} · {r.date}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 3 }}>
                  {Array(r.rating).fill(0).map((_, i) => <Star key={i} size={14} color="#FBBF24" fill="#FBBF24" />)}
                </div>
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-tags">
                {r.tags.map(t => <span key={t} className="badge badge-emerald">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'certifications' && (
        <div className="grid-2">
          {['ISO 9001:2015', 'GOTS Certified', 'OEKO-TEX Standard 100', 'SA8000', 'BSCI', 'WRAP Certified'].map(cert => (
            <div key={cert} className="card">
              <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--r-lg)', background: 'var(--emerald-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} color="var(--emerald-600)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{cert}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Valid through Dec 2027</div>
                  <span className="badge badge-emerald mt-2" style={{ display: 'inline-block' }}>Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
