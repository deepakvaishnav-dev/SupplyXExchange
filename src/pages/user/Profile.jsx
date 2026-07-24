import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import {
  Camera, Edit2, MapPin, Mail, Phone, Globe2, Building2, Star,
  Package, ShoppingCart, Award, ShieldCheck, CheckCircle2,
  ExternalLink, Share2, Save, X, Layers, Briefcase, FileText, ArrowRight
} from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [saveToast, setSaveToast] = useState(false);

  const [form, setForm] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@modalux.com',
    phone: '+1 (555) 234-5678',
    company: 'ModaLux Apparel Ltd.',
    title: 'Head of Sourcing',
    country: 'United States',
    city: 'New York',
    bio: 'Global sourcing leader with 10+ years in fashion supply chain management. Passionate about sustainable manufacturing, GOTS-certified organic fabrics, and ethical sourcing practices.',
    website: 'www.modaluxapparel.com',
    annualBudget: '$2.5M - $5M USD',
    taxId: 'US-982341092',
    categories: 'Apparel, Activewear, Outerwear, Corporate Uniforms',
  });

  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = () => {
    setEditing(false);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  return (
    <Layout role="buyer" title="My Profile" subtitle="Manage your buyer profile, sourcing preferences, and company details">
      
      {/* Save Notification Toast */}
      {saveToast && (
        <div style={{ padding: '12px 16px', background: 'var(--green-50)', border: '1px solid var(--green-100)', color: 'var(--green-600)', borderRadius: 'var(--r-lg)', marginBottom: 20, fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--shadow-xs)' }}>
          <CheckCircle2 size={16} /> Profile updated successfully! All changes saved.
        </div>
      )}

      {/* Main Profile Header Card */}
      <div className="profile-card">
        
        {/* Cover Graphic Banner */}
        <div className="profile-cover">
          <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 8 }}>
            <button className="btn btn-sm" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)' }}>
              <Camera size={13} /> Change Cover
            </button>
          </div>
        </div>

        {/* Profile Details Container */}
        <div className="profile-body">
          
          {/* Top Avatar & Actions Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
            <div className="profile-avatar-wrap">
              <div className="profile-avatar">AJ</div>
              <button
                title="Update avatar"
                style={{ position: 'absolute', bottom: 4, right: 4, width: 30, height: 30, borderRadius: '50%', background: 'var(--orange-500)', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}
              >
                <Camera size={13} color="white" />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn btn-outline btn-sm">
                <Share2 size={14} /> Share Profile
              </button>
              <button
                className={`btn btn-sm ${editing ? 'btn-outline' : 'btn-orange'}`}
                onClick={() => setEditing(!editing)}
              >
                {editing ? <X size={14} /> : <Edit2 size={14} />}
                {editing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Profile Overview (Non-editing view) */}
          {!editing ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <h1 className="profile-name">{form.firstName} {form.lastName}</h1>
                <span className="badge badge-emerald" style={{ fontSize: '0.78rem' }}>
                  <ShieldCheck size={13} /> Verified Enterprise Buyer
                </span>
              </div>

              <div className="profile-role">
                {form.title} · {form.company}
              </div>

              {/* Meta info tags */}
              <div className="profile-meta-row">
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={15} color="var(--orange-500)" /> {form.city}, {form.country}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Mail size={15} color="var(--slate-400)" /> {form.email}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Phone size={15} color="var(--slate-400)" /> {form.phone}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Globe2 size={15} color="var(--slate-400)" /> {form.website}
                </span>
              </div>

              <p style={{ lineHeight: 1.7, fontSize: '0.9rem', color: 'var(--slate-700)', maxWidth: 720, marginBottom: 20 }}>
                {form.bio}
              </p>

              {/* Responsive KPI Stat Cards */}
              <div className="profile-stats-grid">
                <div className="profile-stat-card">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4, color: 'var(--blue-600)' }}>
                    <ShoppingCart size={20} />
                  </div>
                  <div className="profile-stat-val">24</div>
                  <div className="profile-stat-lbl">Orders Placed</div>
                </div>

                <div className="profile-stat-card">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4, color: 'var(--amber-500)' }}>
                    <Package size={20} />
                  </div>
                  <div className="profile-stat-val">12</div>
                  <div className="profile-stat-lbl">Active In Production</div>
                </div>

                <div className="profile-stat-card">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4, color: 'var(--green-600)' }}>
                    <Star size={20} />
                  </div>
                  <div className="profile-stat-val">4.8 ★</div>
                  <div className="profile-stat-lbl">Buyer Rating (120+)</div>
                </div>

                <div className="profile-stat-card">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4, color: 'var(--purple-600)' }}>
                    <Building2 size={20} />
                  </div>
                  <div className="profile-stat-val">28</div>
                  <div className="profile-stat-lbl">Saved Manufacturers</div>
                </div>
              </div>
            </>
          ) : (
            /* Editing Form View */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 10 }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                Edit Account &amp; Profile Details
              </div>

              <div className="responsive-grid-2col">
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    First Name
                  </label>
                  <input
                    className="orders-search-box"
                    style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }}
                    value={form.firstName}
                    onChange={e => upd('firstName', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    Last Name
                  </label>
                  <input
                    className="orders-search-box"
                    style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }}
                    value={form.lastName}
                    onChange={e => upd('lastName', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="orders-search-box"
                    style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }}
                    value={form.email}
                    onChange={e => upd('email', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    Phone Number
                  </label>
                  <input
                    className="orders-search-box"
                    style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }}
                    value={form.phone}
                    onChange={e => upd('phone', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    Company Name
                  </label>
                  <input
                    className="orders-search-box"
                    style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }}
                    value={form.company}
                    onChange={e => upd('company', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    Job Title
                  </label>
                  <input
                    className="orders-search-box"
                    style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }}
                    value={form.title}
                    onChange={e => upd('title', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    City
                  </label>
                  <input
                    className="orders-search-box"
                    style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }}
                    value={form.city}
                    onChange={e => upd('city', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    Country
                  </label>
                  <input
                    className="orders-search-box"
                    style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }}
                    value={form.country}
                    onChange={e => upd('country', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                  Professional Bio
                </label>
                <textarea
                  className="orders-search-box"
                  style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)', minHeight: 90, padding: 12, height: 'auto' }}
                  rows={3}
                  value={form.bio}
                  onChange={e => upd('bio', e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', paddingTop: 10 }}>
                <button className="btn btn-outline" onClick={() => setEditing(false)}>
                  Cancel
                </button>
                <button className="btn btn-orange" onClick={handleSave}>
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Tabs Row */}
      <div className="tabs-row">
        {['Overview', 'Company & Sourcing', 'Recent Activity', 'Account Badges'].map((t) => (
          <button
            key={t}
            className={`tab-btn ${activeTab === t ? 'active' : ''}`}
            onClick={() => setActiveTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Contents Grid */}
      {activeTab === 'Overview' && (
        <div className="responsive-grid-2col">
          
          {/* Recent Orders Widget */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>Recent Orders</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => navigate('/orders')}>
                View All <ArrowRight size={13} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { id: 'ORD-4821', product: 'Men\'s Polo Shirts', val: '$26,500', status: 'In Production', date: 'Jul 10' },
                { id: 'ORD-4819', product: 'Denim Jeans', val: '$22,000', status: 'Quality Check', date: 'Jul 5' },
                { id: 'ORD-4809', product: 'Sports Jerseys', val: '$32,000', status: 'Delivered', date: 'Jun 20' },
              ].map(o => (
                <div
                  key={o.id}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'var(--slate-50)', borderRadius: 'var(--r-lg)', border: '1px solid var(--slate-200)', cursor: 'pointer' }}
                  onClick={() => navigate('/orders')}
                >
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--orange-500)' }}>{o.id}</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slate-800)', marginTop: 2 }}>{o.product}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>{o.val} • Placed {o.date}</div>
                  </div>
                  <span className={`badge ${o.status === 'Delivered' ? 'badge-emerald' : o.status === 'Quality Check' ? 'badge-amber' : 'badge-blue'}`}>
                    {o.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Account Badges Widget */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>Trust Badges &amp; Certifications</h3>
              <span className="badge badge-emerald">4 Active</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '🏆', title: 'Top Enterprise Buyer', desc: 'Placed 20+ verified orders over $500K total volume', color: '#F59E0B' },
                { icon: '⚡', title: 'Fast Sample Approver', desc: 'Average sample review time under 48 hours', color: '#3B82F6' },
                { icon: '🌿', title: 'Sustainable Sourcing Leader', desc: '60%+ orders use GOTS/OEKO-TEX certified fabrics', color: '#10B981' },
                { icon: '⭐', title: 'Verified Corporate Account', desc: 'DUNS verified business registration & tax clearance', color: '#8B5CF6' },
              ].map(b => (
                <div key={b.title} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 12, background: 'var(--slate-50)', borderRadius: 'var(--r-lg)', border: '1px solid var(--slate-200)' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 'var(--r-md)', background: `${b.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    {b.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--slate-900)' }}>{b.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 2 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {activeTab === 'Company & Sourcing' && (
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: 16 }}>
            Company &amp; Sourcing Specifications
          </h3>
          <div className="responsive-grid-2col">
            <div style={{ background: 'var(--slate-50)', padding: 16, borderRadius: 'var(--r-lg)', border: '1px solid var(--slate-200)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: 8 }}>
                Corporate Registration
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Legal Name</span><strong>{form.company}</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Tax Identification</span><strong>{form.taxId}</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Headquarters</span><strong>{form.city}, {form.country}</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Website</span><a href={`https://${form.website}`} target="_blank" rel="noreferrer" style={{ color: 'var(--orange-500)', fontWeight: 600 }}>{form.website}</a></div>
              </div>
            </div>

            <div style={{ background: 'var(--slate-50)', padding: 16, borderRadius: 'var(--r-lg)', border: '1px solid var(--slate-200)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: 8 }}>
                Sourcing Capacity &amp; Preferences
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Annual Sourcing Budget</span><strong>{form.annualBudget}</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Target Categories</span><strong>{form.categories}</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Compliance Standard</span><strong>GOTS, OEKO-TEX, BSCI</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Preferred Lead Times</span><strong>30 - 45 Days</strong></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Recent Activity' && (
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: 16 }}>Activity Audit Trail</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'RFQ Submitted for 5,000 Custom Polo Shirts', date: 'Jul 10, 2026', type: 'RFQ' },
              { title: 'Payment Escrow Released for Order #ORD-4809 ($32,000)', date: 'Jun 22, 2026', type: 'Payment' },
              { title: 'Sample Prototype Approved for Blue River Textiles', date: 'Jun 15, 2026', type: 'Approval' },
              { title: 'Manufacturer Tirupur Clothing Co. added to Saved List', date: 'Jun 02, 2026', type: 'Saved' },
            ].map((act, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, background: 'var(--slate-50)', borderRadius: 'var(--r-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Briefcase size={16} color="var(--orange-500)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--slate-900)' }}>{act.title}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>{act.date}</div>
                  </div>
                </div>
                <span className="badge badge-slate">{act.type}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Account Badges' && (
        <div className="responsive-grid-2col">
          {[
            { icon: '🏆', title: 'Top Enterprise Buyer', desc: 'Placed 20+ verified orders over $500K total volume', status: 'Unlocked Jul 2025' },
            { icon: '⚡', title: 'Fast Sample Approver', desc: 'Average sample review time under 48 hours', status: 'Unlocked Oct 2025' },
            { icon: '🌿', title: 'Sustainable Sourcing Leader', desc: '60%+ orders use GOTS/OEKO-TEX certified fabrics', status: 'Unlocked Jan 2026' },
            { icon: '⭐', title: 'Verified Corporate Account', desc: 'DUNS verified business registration & tax clearance', status: 'Unlocked Active' },
          ].map(b => (
            <div key={b.title} className="card" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ width: 54, height: 54, borderRadius: 'var(--r-lg)', background: 'var(--orange-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0 }}>
                {b.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>{b.title}</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--slate-600)', marginTop: 2 }}>{b.desc}</p>
                <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 700, marginTop: 4 }}>✓ {b.status}</div>
              </div>
            </div>
          ))}
        </div>
      )}

    </Layout>
  );
}
