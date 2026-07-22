import { useState } from 'react';
import Layout from '../components/Layout';
import { Camera, Edit2, MapPin, Mail, Phone, Globe2, Building2, Star, Package, ShoppingCart, Award } from 'lucide-react';

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    firstName: 'Alex', lastName: 'Johnson', email: 'alex.johnson@modalux.com',
    phone: '+1 (555) 234-5678', company: 'ModaLux Apparel Ltd.', title: 'Head of Sourcing',
    country: 'United States', city: 'New York', bio: 'Global sourcing leader with 10+ years in fashion supply chain management. Passionate about sustainable manufacturing and ethical sourcing practices.',
    website: 'www.modaluxapparel.com',
  });

  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <Layout role="buyer" title="My Profile" subtitle="Manage your account information">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Cover + Avatar */}
        <div className="profile-card mb-6">
          <div className="profile-cover" />
          <div className="profile-body">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--sp-5)' }}>
              <div className="profile-avatar-wrap">
                <div className="profile-avatar">AJ</div>
                <button style={{ position: 'absolute', bottom: 4, right: 4, width: 28, height: 28, borderRadius: '50%', background: 'var(--blue-600)', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Camera size={12} color="white" />
                </button>
              </div>
              <button className="btn btn-ghost btn-md" onClick={() => setEditing(!editing)}>
                <Edit2 size={15} /> {editing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {!editing ? (
              <>
                <div className="profile-name">{form.firstName} {form.lastName}</div>
                <div className="profile-role">{form.title} · {form.company}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: 16 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={14} /> {form.city}, {form.country}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Mail size={14} /> {form.email}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Globe2 size={14} /> {form.website}</span>
                </div>
                <p style={{ lineHeight: 1.8, fontSize: '0.9rem', maxWidth: 600 }}>{form.bio}</p>
                <div className="profile-stats">
                  {[
                    { val: 24, lbl: 'Orders Placed', icon: ShoppingCart },
                    { val: '12', lbl: 'Active Orders', icon: Package },
                    { val: '4.8★', lbl: 'Buyer Rating', icon: Star },
                    { val: '28', lbl: 'Saved Mfrs', icon: Building2 },
                  ].map(s => (
                    <div key={s.lbl} style={{ textAlign: 'center' }}>
                      <div className="profile-stat-val">{s.val}</div>
                      <div className="profile-stat-lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
                <div className="form-grid form-grid-2">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input className="form-input" value={form.firstName} onChange={e => upd('firstName', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input className="form-input" value={form.lastName} onChange={e => upd('lastName', e.target.value)} />
                  </div>
                </div>
                <div className="form-grid form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" value={form.email} onChange={e => upd('email', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" value={form.phone} onChange={e => upd('phone', e.target.value)} />
                  </div>
                </div>
                <div className="form-grid form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input className="form-input" value={form.company} onChange={e => upd('company', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Job Title</label>
                    <input className="form-input" value={form.title} onChange={e => upd('title', e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Bio</label>
                  <textarea className="form-textarea" rows={3} value={form.bio} onChange={e => upd('bio', e.target.value)} />
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="btn btn-ghost btn-md" onClick={() => setEditing(false)}>Cancel</button>
                  <button className="btn btn-primary btn-md" onClick={() => setEditing(false)}>Save Changes</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Activity Sections */}
        <div className="grid-2">
          <div className="card">
            <div className="card-header"><div className="card-title">Recent Orders</div></div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { id: 'ORD-4821', product: 'Polo Shirts', val: '$26,500', status: 'In Production' },
                { id: 'ORD-4819', product: 'Denim Jeans', val: '$22,000', status: 'QC Check' },
                { id: 'ORD-4809', product: 'Sports Jerseys', val: '$32,000', status: 'Delivered' },
              ].map(o => (
                <div key={o.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'var(--slate-50)', borderRadius: 'var(--r-md)' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.8125rem' }}>{o.id}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{o.product} · {o.val}</div>
                  </div>
                  <span className={`badge ${o.status === 'Delivered' ? 'badge-emerald' : o.status === 'QC Check' ? 'badge-amber' : 'badge-blue'}`}>{o.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header"><div className="card-title">Account Badges</div></div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '🏆', title: 'Top Buyer', desc: 'Placed 20+ successful orders', color: '#D97706' },
                { icon: '⚡', title: 'Fast Approver', desc: 'Average sample approval < 2 days', color: '#2563EB' },
                { icon: '🌿', title: 'Green Sourcing', desc: '60% orders use GOTS/GRS certified materials', color: '#059669' },
                { icon: '⭐', title: 'Verified Buyer', desc: 'Identity & company verified', color: '#7C3AED' },
              ].map(b => (
                <div key={b.title} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--r-md)', background: `${b.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>{b.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{b.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
