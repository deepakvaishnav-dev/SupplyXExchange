import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Star, Plus, Filter, ThumbsUp } from 'lucide-react';

const reviews = [
  { id: 1, reviewer: 'Sarah Chen', company: 'ModaLux Apparel', manufacturer: 'Sunrise Garments', order: 'ORD-4805', rating: 5, date: 'Jun 28, 2026', title: 'Outstanding quality and professionalism', text: 'Sunrise Garments delivered exactly what was promised — on time, with exceptional quality. The GOTS certified fabric was premium grade and embroidery was perfect. Communication was excellent throughout the entire process. We\'ll definitely be back for our next season collection.', tags: ['On-Time Delivery', 'High Quality', 'Great Communication', 'Sustainable'], helpful: 24, type: 'given' },
  { id: 2, reviewer: 'Sunrise Garments', company: 'Mumbai, India', manufacturer: 'ModaLux Apparel (Buyer)', order: 'ORD-4805', rating: 5, date: 'Jun 29, 2026', title: 'Excellent buyer to work with', text: 'Alex and the ModaLux team were very professional. Clear tech pack, quick approvals, and timely payments. We look forward to working with them again.', tags: ['Clear Requirements', 'Fast Approvals', 'Reliable'], helpful: 12, type: 'received' },
  { id: 3, reviewer: 'James Wilson', company: 'TrendBrand UK', manufacturer: 'Blue River Textiles', order: 'ORD-4789', rating: 4, date: 'Jun 15, 2026', title: 'Good quality, slight delay in sampling', text: 'Blue River produced excellent denim pieces. The washing quality was very good and the fit was accurate to our specs. There was a 3-day delay in sample approval turnaround, but they communicated proactively. Would work with them again.', tags: ['Good Quality', 'Denim Specialist', 'Communicative'], helpful: 18, type: 'given' },
  { id: 4, reviewer: 'Maria Santos', company: 'QuickFash Brazil', manufacturer: 'UniStitch Co.', order: 'ORD-4760', rating: 5, date: 'May 30, 2026', title: 'Best knitwear manufacturer I\'ve found', text: 'UniStitch exceeded every expectation. The knitwear was perfectly constructed and the GRS certified recycled polyester option was amazing for our sustainable line. Fastest lead time we\'ve ever experienced.', tags: ['Knitwear Expert', 'Fast Delivery', 'GRS Certified', 'Sustainable'], helpful: 31, type: 'given' },
];

const ratingBreakdown = [
  { stars: 5, count: 184, pct: 82 },
  { stars: 4, count: 27, pct: 12 },
  { stars: 3, count: 9, pct: 4 },
  { stars: 2, count: 3, pct: 1 },
  { stars: 1, count: 2, pct: 1 },
];

export default function Reviews() {
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const filtered = filter === 'all' ? reviews : reviews.filter(r => r.type === filter);

  return (
    <Layout role="buyer" title="Reviews & Ratings" subtitle="Your reputation on SupplyXExchange">
      <div className="dash-grid-main mb-6">
        {/* Rating Overview */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Your Buyer Rating</div>
            <button className="btn btn-primary btn-sm" onClick={() => setShowForm(true)}>
              <Plus size={14} /> Write Review
            </button>
          </div>
          <div className="card-body">
            <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 24 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '4rem', color: 'var(--text-primary)', lineHeight: 1 }}>4.8</div>
                <div style={{ display: 'flex', gap: 4, justifyContent: 'center', margin: '8px 0' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} color="#FBBF24" fill={s <= 4 ? "#FBBF24" : "none"} />)}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>225 reviews</div>
              </div>
              <div style={{ flex: 1 }}>
                {ratingBreakdown.map(rb => (
                  <div key={rb.stars} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: '0.75rem', width: 12, color: 'var(--text-muted)', textAlign: 'right' }}>{rb.stars}</span>
                    <Star size={12} color="#FBBF24" fill="#FBBF24" />
                    <div className="progress-bar" style={{ flex: 1 }}>
                      <div className="progress-fill amber" style={{ width: `${rb.pct}%` }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', width: 28 }}>{rb.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { label: 'Communication', val: 4.9 }, { label: 'Payment Speed', val: 4.7 },
                { label: 'Clear Briefs', val: 4.8 }, { label: 'Professionalism', val: 5.0 },
              ].map(c => (
                <div key={c.label} style={{ textAlign: 'center', background: 'var(--slate-50)', padding: 12, borderRadius: 'var(--r-md)' }}>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.375rem', color: 'var(--emerald-600)' }}>{c.val}</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Write Review Form (conditional) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          {showForm ? (
            <div className="card animate-in">
              <div className="card-header">
                <div className="card-title">Write a Review</div>
                <button className="btn btn-ghost btn-sm" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Select Order</label>
                  <select className="form-select">
                    <option>ORD-4821 — Sunrise Garments · Polo Shirts</option>
                    <option>ORD-4819 — Blue River · Denim Jeans</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Your Rating</label>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={28} color="#FBBF24" fill={(hover || rating) >= s ? "#FBBF24" : "none"} style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} onClick={() => setRating(s)} />
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Review Title</label>
                  <input className="form-input" placeholder="Summarize your experience..." />
                </div>
                <div className="form-group">
                  <label className="form-label">Detailed Review</label>
                  <textarea className="form-textarea" rows={3} placeholder="Share your experience with this manufacturer..." />
                </div>
                <div className="form-group">
                  <label className="form-label">Tags</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {['On-Time', 'High Quality', 'Good Value', 'Fast Response', 'Would Recommend', 'Sustainable'].map(t => (
                      <button key={t} className="badge badge-slate" style={{ cursor: 'pointer', border: 'none', padding: '5px 10px' }}>{t}</button>
                    ))}
                  </div>
                </div>
                <button className="btn btn-primary btn-md w-full" onClick={() => setShowForm(false)}>Submit Review</button>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-header"><div className="card-title">Orders to Review</div></div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { order: 'ORD-4819', mfr: 'Blue River Textiles', product: 'Denim Jeans', completed: 'Jul 20' },
                  { order: 'ORD-4809', mfr: 'Saigon Apparel', product: 'Sports Jerseys', completed: 'Jul 15' },
                ].map(o => (
                  <div key={o.order} style={{ padding: 'var(--sp-4)', background: 'var(--slate-50)', borderRadius: 'var(--r-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{o.mfr}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{o.order} · {o.product} · Delivered {o.completed}</div>
                    </div>
                    <button className="btn btn-secondary btn-sm" onClick={() => setShowForm(true)}>Review</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 'var(--sp-5)' }}>
        {[['all', 'All Reviews'], ['given', 'Reviews I Gave'], ['received', 'Reviews I Received']].map(([key, label]) => (
          <button key={key} className={`btn btn-sm ${filter === key ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setFilter(key)}>{label}</button>
        ))}
      </div>

      {/* Reviews List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
        {filtered.map(r => (
          <div key={r.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <div className="avatar avatar-md" style={{ background: `hsl(${r.id * 60 + 200}, 70%, 55%)`, color: 'white' }}>{r.reviewer[0]}</div>
                <div>
                  <div className="reviewer-name">{r.reviewer}</div>
                  <div className="reviewer-company">{r.company} · {r.manufacturer} · {r.order}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', gap: 3, justifyContent: 'flex-end' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} color="#FBBF24" fill={s <= r.rating ? "#FBBF24" : "none"} />)}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{r.date}</div>
              </div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: 6 }}>{r.title}</div>
            <p className="review-text">{r.text}</p>
            <div className="review-tags">
              {r.tags.map(t => <span key={t} className="badge badge-emerald">{t}</span>)}
              <span className={`badge ${r.type === 'given' ? 'badge-blue' : 'badge-purple'}`}>{r.type === 'given' ? 'Review Given' : 'Review Received'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
              <button className="btn btn-ghost btn-sm"><ThumbsUp size={13} /> Helpful ({r.helpful})</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
