import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function RegisterBuyer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', password: '', country: '', category: '' });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const benefits = [
    'Access 12,400+ verified manufacturers', 'Send unlimited RFQs',
    'Compare quotes side-by-side', 'Real-time production tracking',
    'Secure escrow payments', 'Dedicated sourcing support',
  ];

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-glow" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 440 }}>
          <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem', color: 'white', marginBottom: 40 }}>
            Supply<span style={{ color: 'var(--emerald-400)' }}>X</span>Exchange
          </div>
          <h2 style={{ color: 'white', fontSize: '1.875rem', marginBottom: 16 }}>Start sourcing from verified manufacturers today</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 36, lineHeight: 1.7 }}>Join 85,000+ buyers who trust SupplyXExchange for their manufacturing needs.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {benefits.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircle2 size={18} color="var(--emerald-400)" />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="auth-right" style={{ overflowY: 'auto' }}>
        <div className="auth-form-container">
          <div className="auth-logo">
            <div className="auth-logo-icon">SX</div>
            <div className="auth-logo-text">Supply<span>X</span>Exchange</div>
          </div>

          {/* Progress */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
            {[1, 2].map(s => (
              <div key={s} style={{ flex: 1, height: 4, borderRadius: 99, background: step >= s ? 'var(--blue-600)' : 'var(--slate-200)', transition: '0.3s' }} />
            ))}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8 }}>Step {step} of 2</div>
          <h1 className="auth-heading">{step === 1 ? 'Create Buyer Account' : 'Company Details'}</h1>
          <p className="auth-subheading">{step === 1 ? 'Get started for free — no credit card required' : 'Tell us about your business'}</p>

          {step === 1 && (
            <div className="auth-form">
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">First Name <span>*</span></label>
                  <input className="form-input" placeholder="Alex" value={form.firstName} onChange={e => upd('firstName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name <span>*</span></label>
                  <input className="form-input" placeholder="Johnson" value={form.lastName} onChange={e => upd('lastName', e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Business Email <span>*</span></label>
                <input className="form-input" type="email" placeholder="alex@company.com" value={form.email} onChange={e => upd('email', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Password <span>*</span></label>
                <div className="password-input-wrap">
                  <input className="form-input" type={showPass ? 'text' : 'password'} placeholder="Min 8 characters" value={form.password} onChange={e => upd('password', e.target.value)} style={{ paddingRight: 44 }} />
                  <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <button className="btn btn-primary btn-md w-full" onClick={() => setStep(2)}>
                Continue <ArrowRight size={16} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="auth-form">
              <div className="form-group">
                <label className="form-label">Company Name <span>*</span></label>
                <input className="form-input" placeholder="ModaLux Apparel Ltd." value={form.company} onChange={e => upd('company', e.target.value)} />
              </div>
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">Country <span>*</span></label>
                  <select className="form-select" value={form.country} onChange={e => upd('country', e.target.value)}>
                    <option value="">Select country</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => upd('phone', e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Primary Product Category <span>*</span></label>
                <select className="form-select" value={form.category} onChange={e => upd('category', e.target.value)}>
                  <option value="">Select category</option>
                  <option>Apparel & Garments</option>
                  <option>Electronics & Components</option>
                  <option>Furniture & Home</option>
                  <option>Automotive Parts</option>
                  <option>Consumer Goods</option>
                  <option>Industrial Equipment</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost btn-md" style={{ flex: 1 }} onClick={() => setStep(1)}>← Back</button>
                <button className="btn btn-primary btn-md" style={{ flex: 2 }} onClick={() => navigate('/buyer/dashboard')}>
                  Create Account <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          <div className="auth-footer-text">
            Already have an account? <Link to="/login" style={{ color: 'var(--blue-600)', fontWeight: 600 }}>Sign in</Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            By creating an account you agree to our <a href="#" style={{ color: 'var(--blue-500)' }}>Terms</a> & <a href="#" style={{ color: 'var(--blue-500)' }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
