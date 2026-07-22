import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, ShieldCheck, Globe2, TrendingUp } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('buyer');
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'buyer') navigate('/buyer/dashboard');
    else if (role === 'manufacturer') navigate('/manufacturer/dashboard');
    else navigate('/admin/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-glow" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 480, textAlign: 'center' }}>
          <div style={{ marginBottom: 48 }}>
            <div className="landing-nav-logo-icon" style={{ width: 56, height: 56, fontSize: 22, margin: '0 auto 16px' }}>SX</div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.375rem', color: 'white' }}>
              Supply<span style={{ color: 'var(--emerald-400)' }}>X</span>Exchange
            </div>
          </div>
          <h2 style={{ color: 'white', marginBottom: 16, fontSize: '2rem' }}>Welcome back to the<br />world's manufacturing hub</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 48 }}>
            Connect with verified manufacturers, manage RFQs, and track production in real-time.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: ShieldCheck, title: '12,400+ Verified Manufacturers', desc: 'Audited & certified factories worldwide' },
              { icon: TrendingUp, title: 'Real-Time Production Tracking', desc: '10-stage milestone tracking with live updates' },
              { icon: Globe2, title: 'Global B2B Marketplace', desc: 'Buyers & suppliers from 60+ countries' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: 'linear-gradient(135deg, var(--blue-600), var(--emerald-600))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <item.icon size={18} color="white" />
                </div>
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem', marginBottom: 2 }}>{item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <div className="auth-logo">
            <div className="auth-logo-icon">SX</div>
            <div className="auth-logo-text">Supply<span>X</span>Exchange</div>
          </div>
          <h1 className="auth-heading">Sign In</h1>
          <p className="auth-subheading">Choose your account type and sign in to continue</p>

          <div className="auth-type-selector" style={{ marginBottom: 24 }}>
            {[
              { key: 'buyer', icon: '🛒', label: 'Buyer', desc: 'Source products' },
              { key: 'manufacturer', icon: '🏭', label: 'Manufacturer', desc: 'Receive orders' },
              { key: 'admin', icon: '⚙️', label: 'Admin', desc: 'Platform admin' },
            ].map(t => (
              <button key={t.key} className={`auth-type-btn${role === t.key ? ' active' : ''}`} onClick={() => setRole(t.key)}>
                <div className="auth-type-icon">{t.icon}</div>
                <div className="auth-type-label">{t.label}</div>
                <div className="auth-type-desc">{t.desc}</div>
              </button>
            ))}
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" placeholder="you@company.com"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label className="form-label">Password</label>
                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--blue-600)' }}>Forgot password?</a>
              </div>
              <div className="password-input-wrap">
                <input className="form-input" type={showPass ? 'text' : 'password'} placeholder="Enter your password"
                  value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required
                  style={{ paddingRight: 44 }} />
                <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-md w-full" style={{ marginTop: 8 }}>
              Sign In <ArrowRight size={16} />
            </button>
          </form>

          <div className="auth-footer-text">
            Don't have an account?{' '}
            <Link to="/register/buyer" style={{ color: 'var(--blue-600)', fontWeight: 600 }}>Create one free</Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: 24, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            🔒 Secured with 256-bit SSL encryption
          </div>
        </div>
      </div>
    </div>
  );
}
