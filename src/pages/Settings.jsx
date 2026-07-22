import { useState } from 'react';
import Layout from '../components/Layout';
import {
  User, Bell, Shield, CreditCard, Globe2, Palette, Key,
  Trash2, Download, AlertTriangle, CheckCircle2
} from 'lucide-react';

const settingsNav = [
  { key: 'profile', icon: User, label: 'Account & Profile' },
  { key: 'notifications', icon: Bell, label: 'Notifications' },
  { key: 'security', icon: Shield, label: 'Security & Privacy' },
  { key: 'billing', icon: CreditCard, label: 'Billing & Plans' },
  { key: 'preferences', icon: Palette, label: 'Preferences' },
  { key: 'api', icon: Key, label: 'API & Integrations' },
];

function Toggle({ defaultChecked = false }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <label className="toggle">
      <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
      <span className="toggle-slider" />
    </label>
  );
}

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <Layout role="buyer" title="Settings" subtitle="Manage your account preferences and configuration">
      <div className="settings-layout">
        {/* Nav */}
        <nav className="settings-nav">
          {settingsNav.map(item => (
            <div key={item.key} className={`settings-nav-item${activeSection === item.key ? ' active' : ''}`} onClick={() => setActiveSection(item.key)}>
              <item.icon size={16} />
              {item.label}
            </div>
          ))}
          <div className="settings-nav-item" style={{ color: 'var(--red-500)', marginTop: 16, borderTop: '1px solid var(--border)' }}>
            <Trash2 size={16} />
            Delete Account
          </div>
        </nav>

        {/* Content */}
        <div className="settings-panel">
          {activeSection === 'profile' && (
            <>
              <div className="settings-section">
                <div className="settings-section-title">Personal Information</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input className="form-input" defaultValue="Alex" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input className="form-input" defaultValue="Johnson" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" defaultValue="alex.johnson@modalux.com" />
                  </div>
                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" defaultValue="+1 (555) 234-5678" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Timezone</label>
                      <select className="form-select">
                        <option>EST — New York (UTC-5)</option>
                        <option>PST — Los Angeles (UTC-8)</option>
                        <option>IST — Mumbai (UTC+5:30)</option>
                        <option>GMT — London (UTC+0)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-section">
                <div className="settings-section-title">Company Information</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input className="form-input" defaultValue="ModaLux Apparel Ltd." />
                  </div>
                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Industry</label>
                      <select className="form-select">
                        <option>Fashion & Apparel</option>
                        <option>Consumer Goods</option>
                        <option>Electronics</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company Size</label>
                      <select className="form-select">
                        <option>51–200 employees</option>
                        <option>1–50 employees</option>
                        <option>201–500 employees</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <select className="form-select">
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Annual Procurement Budget</label>
                      <select className="form-select">
                        <option>$500K – $1M</option>
                        <option>$100K – $500K</option>
                        <option>$1M – $5M</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-section" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                <button className="btn btn-ghost btn-md">Discard Changes</button>
                <button className="btn btn-primary btn-md">Save Changes</button>
              </div>
            </>
          )}

          {activeSection === 'notifications' && (
            <div className="settings-section">
              <div className="settings-section-title">Notification Preferences</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { group: 'Quotes & RFQs', items: [
                    { label: 'New quote received', desc: 'When a manufacturer submits a quote for your RFQ', email: true, push: true, sms: false },
                    { label: 'Quote expiring soon', desc: '24 hours before a quote expires', email: true, push: true, sms: true },
                    { label: 'RFQ deadline approaching', desc: '48 hours before RFQ closes', email: true, push: false, sms: false },
                  ]},
                  { group: 'Orders & Production', items: [
                    { label: 'Order confirmed', desc: 'When a manufacturer confirms your order', email: true, push: true, sms: true },
                    { label: 'Production stage update', desc: 'When production advances to next stage', email: false, push: true, sms: false },
                    { label: 'Shipment dispatched', desc: 'When order ships from factory', email: true, push: true, sms: true },
                    { label: 'Order delivered', desc: 'When order is marked as delivered', email: true, push: true, sms: true },
                  ]},
                  { group: 'Messages & Reviews', items: [
                    { label: 'New message received', desc: 'When a manufacturer sends you a message', email: false, push: true, sms: false },
                    { label: 'Review received', desc: 'When a manufacturer leaves you a review', email: true, push: false, sms: false },
                  ]},
                ].map(group => (
                  <div key={group.group} style={{ borderBottom: '1px solid var(--border)', padding: 'var(--sp-5)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{group.group}</div>
                    {group.items.map(item => (
                      <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: 2 }}>{item.label}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                        </div>
                        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                          {[['Email', item.email], ['Push', item.push], ['SMS', item.sms]].map(([label, def]) => (
                            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                              <Toggle defaultChecked={def} />
                              <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <>
              <div className="settings-section">
                <div className="settings-section-title">Change Password</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', maxWidth: 420 }}>
                  <div className="form-group">
                    <label className="form-label">Current Password</label>
                    <input className="form-input" type="password" placeholder="••••••••" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input className="form-input" type="password" placeholder="Min 8 characters" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm New Password</label>
                    <input className="form-input" type="password" placeholder="Repeat new password" />
                  </div>
                  <button className="btn btn-primary btn-md" style={{ width: 'fit-content' }}>Update Password</button>
                </div>
              </div>
              <div className="settings-section">
                <div className="settings-section-title">Two-Factor Authentication</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--emerald-50)', border: '1px solid var(--emerald-100)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-4) var(--sp-5)' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <CheckCircle2 size={20} color="var(--emerald-600)" />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--emerald-700)' }}>2FA is enabled</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--emerald-600)' }}>Authenticator App · Last used 2 hours ago</div>
                    </div>
                  </div>
                  <button className="btn btn-ghost btn-sm">Manage</button>
                </div>
              </div>
              <div className="settings-section">
                <div className="settings-section-title">Active Sessions</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { device: 'MacBook Pro — Chrome 125', location: 'New York, US', current: true, time: 'Current session' },
                    { device: 'iPhone 15 — Safari', location: 'New York, US', current: false, time: '2 hours ago' },
                    { device: 'Windows PC — Edge 124', location: 'Boston, US', current: false, time: '3 days ago' },
                  ].map(s => (
                    <div key={s.device} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--sp-4)', background: 'var(--slate-50)', borderRadius: 'var(--r-md)' }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{s.device} {s.current && <span className="badge badge-emerald" style={{ marginLeft: 8 }}>Current</span>}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.location} · {s.time}</div>
                      </div>
                      {!s.current && <button className="btn btn-danger btn-sm">Revoke</button>}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSection === 'billing' && (
            <div className="settings-section">
              <div className="settings-section-title">Current Plan</div>
              <div style={{ background: 'linear-gradient(135deg, var(--blue-800), var(--blue-600))', borderRadius: 'var(--r-xl)', padding: 'var(--sp-8)', color: 'white', marginBottom: 'var(--sp-6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.5rem', marginBottom: 4 }}>Professional Plan</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>Unlimited RFQs · Priority matching · Advanced analytics</div>
                    <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '2rem' }}>$149<span style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>/month</span></div>
                  </div>
                  <button className="btn btn-md" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}>Upgrade to Enterprise</button>
                </div>
                <div style={{ display: 'flex', gap: 24, marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                  {[
                    { label: 'Next billing', value: 'Aug 1, 2026' },
                    { label: 'RFQs used', value: '23 / Unlimited' },
                    { label: 'Manufacturers contacted', value: '47 this month' },
                  ].map(b => (
                    <div key={b.label}>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem' }}>{b.label}</div>
                      <div style={{ color: 'white', fontWeight: 700, marginTop: 2 }}>{b.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn btn-ghost btn-sm"><Download size={14} /> Download Invoice History</button>
            </div>
          )}

          {(activeSection === 'preferences' || activeSection === 'api') && (
            <div className="settings-section">
              <div className="settings-section-title">{activeSection === 'preferences' ? 'Display Preferences' : 'API & Integrations'}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {(activeSection === 'preferences' ? [
                  { label: 'Dark Mode', desc: 'Use dark theme across the platform' },
                  { label: 'Compact View', desc: 'Show more items per page in lists' },
                  { label: 'Show Prices in USD', desc: 'Convert all prices to USD' },
                  { label: 'Manufacturer Recommendations', desc: 'Show personalized manufacturer suggestions' },
                ] : [
                  { label: 'REST API Access', desc: 'Enable API access for integrations' },
                  { label: 'Webhook Notifications', desc: 'Send webhook events to your endpoint' },
                  { label: 'ERP Integration', desc: 'Connect with SAP, Oracle or NetSuite' },
                  { label: 'Auto-sync Orders', desc: 'Automatically sync confirmed orders to your ERP' },
                ]).map(p => (
                  <div key={p.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{p.label}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{p.desc}</div>
                    </div>
                    <Toggle />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
