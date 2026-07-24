import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import {
  User, Bell, Shield, CreditCard, Palette, Key, Trash2, Download,
  CheckCircle2, AlertTriangle, Save, RefreshCcw, Lock, Smartphone, Globe
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
  const [saveToast, setSaveToast] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSave = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  return (
    <Layout role="buyer" title="Settings" subtitle="Manage your personal preferences, company details, security, and billing">
      
      {/* Toast Feedback */}
      {saveToast && (
        <div style={{ padding: '12px 16px', background: 'var(--green-50)', border: '1px solid var(--green-100)', color: 'var(--green-600)', borderRadius: 'var(--r-lg)', marginBottom: 20, fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--shadow-xs)' }}>
          <CheckCircle2 size={16} /> Settings saved successfully!
        </div>
      )}

      {/* Main Settings Grid */}
      <div className="settings-layout">
        
        {/* Navigation Sidebar */}
        <nav className="settings-nav">
          {settingsNav.map(item => (
            <div
              key={item.key}
              className={`settings-nav-item ${activeSection === item.key ? 'active' : ''}`}
              onClick={() => setActiveSection(item.key)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </div>
          ))}

          <div
            className="settings-nav-item"
            style={{ color: 'var(--red-500)', marginTop: 12, borderTop: '1px solid var(--slate-100)', paddingTop: 14 }}
            onClick={() => setShowDeleteModal(true)}
          >
            <Trash2 size={18} />
            <span>Delete Account</span>
          </div>
        </nav>

        {/* Settings Content Panel */}
        <div className="settings-panel">
          
          {/* Account & Profile Section */}
          {activeSection === 'profile' && (
            <>
              <div className="settings-section">
                <div className="settings-section-title">Personal Information</div>
                
                <div className="responsive-grid-2col" style={{ gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      First Name
                    </label>
                    <input className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }} defaultValue="Alex" />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Last Name
                    </label>
                    <input className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }} defaultValue="Johnson" />
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    Email Address
                  </label>
                  <input type="email" className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }} defaultValue="alex.johnson@modalux.com" />
                </div>

                <div className="responsive-grid-2col" style={{ gap: 16, marginTop: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Phone Number
                    </label>
                    <input className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }} defaultValue="+1 (555) 234-5678" />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Timezone
                    </label>
                    <select className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)', cursor: 'pointer' }} defaultValue="EST">
                      <option value="EST">EST — New York (UTC-5)</option>
                      <option value="PST">PST — Los Angeles (UTC-8)</option>
                      <option value="IST">IST — Mumbai (UTC+5:30)</option>
                      <option value="GMT">GMT — London (UTC+0)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Company Information Section */}
              <div className="settings-section">
                <div className="settings-section-title">Company Information</div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                    Company Name
                  </label>
                  <input className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }} defaultValue="ModaLux Apparel Ltd." />
                </div>

                <div className="responsive-grid-2col" style={{ gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Industry Sector
                    </label>
                    <select className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)', cursor: 'pointer' }} defaultValue="Fashion">
                      <option value="Fashion">Fashion &amp; Apparel</option>
                      <option value="Consumer">Consumer Goods</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Textiles">Industrial Textiles</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Company Size
                    </label>
                    <select className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)', cursor: 'pointer' }} defaultValue="50-200">
                      <option value="50-200">51 – 200 Employees</option>
                      <option value="1-50">1 – 50 Employees</option>
                      <option value="200-500">201 – 500 Employees</option>
                      <option value="500+">500+ Employees</option>
                    </select>
                  </div>
                </div>

                <div className="responsive-grid-2col" style={{ gap: 16, marginTop: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Country
                    </label>
                    <select className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)', cursor: 'pointer' }} defaultValue="US">
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="IN">India</option>
                      <option value="VN">Vietnam</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Annual Procurement Budget
                    </label>
                    <select className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)', cursor: 'pointer' }} defaultValue="1M-5M">
                      <option value="1M-5M">$1M – $5M USD</option>
                      <option value="500K-1M">$500K – $1M USD</option>
                      <option value="5M+">$5M+ USD</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                <button className="btn btn-outline">Discard Changes</button>
                <button className="btn btn-orange" onClick={handleSave}>
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </>
          )}

          {/* Notifications Panel */}
          {activeSection === 'notifications' && (
            <div className="settings-section">
              <div className="settings-section-title">Notification Preferences</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  {
                    group: 'Quotes & RFQs',
                    items: [
                      { label: 'New quote received', desc: 'When a manufacturer submits a quote for your active RFQ', email: true, push: true, sms: false },
                      { label: 'Quote expiring soon', desc: 'Alert 24 hours before a quote expires', email: true, push: true, sms: true },
                      { label: 'RFQ deadline approaching', desc: 'Alert 48 hours before RFQ submission closes', email: true, push: false, sms: false },
                    ]
                  },
                  {
                    group: 'Orders & Production',
                    items: [
                      { label: 'Order confirmed', desc: 'When a manufacturer accepts and locks your order', email: true, push: true, sms: true },
                      { label: 'Production stage milestone update', desc: 'When production advances to stitching, QC, or washing', email: false, push: true, sms: false },
                      { label: 'Shipment dispatched', desc: 'When order leaves factory and GPS tracking goes live', email: true, push: true, sms: true },
                      { label: 'Order delivered', desc: 'When carrier updates final delivery status', email: true, push: true, sms: true },
                    ]
                  },
                  {
                    group: 'Messages & Reviews',
                    items: [
                      { label: 'New message received', desc: 'When a manufacturer sends a message in chat', email: false, push: true, sms: false },
                      { label: 'Review received', desc: 'When a manufacturer leaves feedback on your profile', email: true, push: false, sms: false },
                    ]
                  },
                ].map(group => (
                  <div key={group.group} style={{ borderBottom: '1px solid var(--slate-100)', paddingBottom: 20 }}>
                    <div style={{ fontWeight: 800, fontSize: '0.84rem', color: 'var(--orange-500)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {group.group}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {group.items.map(item => (
                        <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '8px 12px', background: 'var(--slate-50)', borderRadius: 'var(--r-md)' }}>
                          <div style={{ maxWidth: 360 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--slate-900)' }}>{item.label}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 2 }}>{item.desc}</div>
                          </div>

                          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                            {[['Email', item.email], ['Push', item.push], ['SMS', item.sms]].map(([label, def]) => (
                              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                                <Toggle defaultChecked={def} />
                                <span style={{ fontSize: '0.6875rem', color: 'var(--slate-600)', fontWeight: 600 }}>{label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                <button className="btn btn-orange" onClick={handleSave}>
                  <Save size={16} /> Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security & Privacy Panel */}
          {activeSection === 'security' && (
            <>
              <div className="settings-section">
                <div className="settings-section-title">Change Password</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 460 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Current Password
                    </label>
                    <input className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }} type="password" placeholder="••••••••" />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      New Password
                    </label>
                    <input className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }} type="password" placeholder="Minimum 8 characters" />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>
                      Confirm New Password
                    </label>
                    <input className="orders-search-box" style={{ width: '100%', maxWidth: '100%', borderRadius: 'var(--r-md)' }} type="password" placeholder="Repeat new password" />
                  </div>

                  <button className="btn btn-orange" style={{ width: 'fit-content', marginTop: 4 }} onClick={handleSave}>
                    <Lock size={16} /> Update Password
                  </button>
                </div>
              </div>

              {/* 2FA */}
              <div className="settings-section">
                <div className="settings-section-title">Two-Factor Authentication (2FA)</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--green-50)', border: '1px solid var(--green-100)', borderRadius: 'var(--r-lg)', padding: 16, flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <CheckCircle2 size={24} color="var(--green-600)" />
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--slate-900)' }}>Two-Factor Authentication is Enabled</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--slate-600)' }}>Google Authenticator App • Last verified 2 hours ago</div>
                    </div>
                  </div>
                  <button className="btn btn-outline btn-sm">Manage 2FA Settings</button>
                </div>
              </div>

              {/* Active Sessions */}
              <div className="settings-section">
                <div className="settings-section-title">Active Logged-In Sessions</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { device: 'MacBook Pro — Chrome 125', location: 'New York, US', current: true, time: 'Current session' },
                    { device: 'iPhone 15 Pro — Mobile Safari', location: 'New York, US', current: false, time: '2 hours ago' },
                    { device: 'Windows 11 Workstation — Edge 124', location: 'Boston, US', current: false, time: '3 days ago' },
                  ].map(s => (
                    <div key={s.device} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 14, background: 'var(--slate-50)', borderRadius: 'var(--r-lg)', border: '1px solid var(--slate-200)', flexWrap: 'wrap', gap: 10 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--slate-900)' }}>
                          {s.device} {s.current && <span className="badge badge-emerald" style={{ marginLeft: 8 }}>Current Device</span>}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 2 }}>{s.location} • {s.time}</div>
                      </div>
                      {!s.current && <button className="btn btn-outline btn-sm" style={{ color: 'var(--red-500)' }}>Revoke Access</button>}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Billing & Plans Panel */}
          {activeSection === 'billing' && (
            <div className="settings-section">
              <div className="settings-section-title">Subscription Plan &amp; Billing</div>
              
              <div style={{ background: 'linear-gradient(135deg, var(--slate-900) 0%, var(--slate-800) 50%, var(--orange-500) 100%)', borderRadius: 'var(--r-xl)', padding: 24, color: 'white', marginBottom: 24, boxShadow: 'var(--shadow-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <span className="badge badge-emerald" style={{ marginBottom: 8 }}>Active Subscription</span>
                    <div style={{ fontWeight: 800, fontSize: '1.6rem', marginBottom: 4 }}>Enterprise Professional Plan</div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: 16 }}>Unlimited RFQs • Dedicated Account Manager • Priority Escrow Clearing</div>
                    <div style={{ fontWeight: 800, fontSize: '2.2rem' }}>$149 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>/ month</span></div>
                  </div>
                  <button className="btn btn-orange">Upgrade Plan</button>
                </div>

                <div className="responsive-grid-3col" style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.2)', gap: 12 }}>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>Next Billing Date</div>
                    <div style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', marginTop: 2 }}>Aug 1, 2026</div>
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>RFQs Created</div>
                    <div style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', marginTop: 2 }}>23 / Unlimited</div>
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>Manufacturers Contacted</div>
                    <div style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', marginTop: 2 }}>47 Partners</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--slate-900)' }}>Invoice History</h4>
                <button className="btn btn-outline btn-sm">
                  <Download size={14} /> Download Invoices Zip
                </button>
              </div>
            </div>
          )}

          {/* Preferences / API Integrations */}
          {(activeSection === 'preferences' || activeSection === 'api') && (
            <div className="settings-section">
              <div className="settings-section-title">
                {activeSection === 'preferences' ? 'Display & Workspace Preferences' : 'API Access & ERP Integrations'}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {(activeSection === 'preferences' ? [
                  { label: 'Compact Layout Mode', desc: 'Show high-density tables and list items across dashboards' },
                  { label: 'Currency Display in USD', desc: 'Automatically convert all international RFQs and quotes to USD' },
                  { label: 'AI Manufacturer Recommendations', desc: 'Receive daily automated matching recommendations based on your RFQ history' },
                  { label: 'Public Profile Visibility', desc: 'Allow verified suppliers to discover your sourcing profile' },
                ] : [
                  { label: 'REST API Key Access', desc: 'Enable custom programmatic access for your internal inventory systems' },
                  { label: 'Webhook Web-Event Dispatcher', desc: 'Stream live order milestone status events to your custom endpoint' },
                  { label: 'ERP Integration Engine', desc: 'Direct connector with SAP S/4HANA, Oracle NetSuite, and QuickBooks Online' },
                  { label: 'Automated Order Sync', desc: 'Automatically sync confirmed orders and invoices to your ERP ledger' },
                ]).map(p => (
                  <div key={p.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 14, background: 'var(--slate-50)', borderRadius: 'var(--r-lg)', border: '1px solid var(--slate-200)', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--slate-900)' }}>{p.label}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', marginTop: 2 }}>{p.desc}</div>
                    </div>
                    <Toggle defaultChecked />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                <button className="btn btn-orange" onClick={handleSave}>
                  <Save size={16} /> Save Settings
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Danger Zone Delete Account Modal */}
      {showDeleteModal && (
        <div className="drawer-backdrop" style={{ justifyContent: 'center', alignItems: 'center', padding: 16 }} onClick={() => setShowDeleteModal(false)}>
          <div className="card" style={{ maxWidth: 440, width: '100%', padding: 24, background: '#fff' }} onClick={e => e.stopPropagation()}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--red-50)', color: 'var(--red-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <AlertTriangle size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--slate-900)', textAlign: 'center', marginBottom: 8 }}>
              Delete SupplyX Account?
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', textAlign: 'center', marginBottom: 20 }}>
              This action is permanent. All your RFQ history, saved suppliers, and active order records will be permanently erased.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className="btn btn-sm" style={{ flex: 1, background: 'var(--red-500)', color: '#fff' }} onClick={() => setShowDeleteModal(false)}>
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </Layout>
  );
}
