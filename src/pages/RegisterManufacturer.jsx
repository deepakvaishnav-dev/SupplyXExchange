import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, Award, Globe2 } from 'lucide-react';

export default function RegisterManufacturer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    companyName: '', email: '', phone: '', password: '',
    country: '', city: '', capacity: '', moq: '', category: '',
    employees: '', certifications: [], website: '', description: ''
  });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleCert = (c) => setForm(f => ({
    ...f,
    certifications: f.certifications.includes(c)
      ? f.certifications.filter(x => x !== c)
      : [...f.certifications, c]
  }));

  const certs = ['ISO 9001', 'ISO 14001', 'GOTS', 'OEKO-TEX', 'SA8000', 'BSCI', 'WRAP', 'GRS'];

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-glow" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 440 }}>
          <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem', color: 'white', marginBottom: 40 }}>
            Supply<span style={{ color: 'var(--emerald-400)' }}>X</span>Exchange
          </div>
          <h2 style={{ color: 'white', fontSize: '1.875rem', marginBottom: 16 }}>Grow your factory with global buyers</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 36, lineHeight: 1.7 }}>Join 12,400+ manufacturers connecting with buyers from 60+ countries.</p>
          {[
            { icon: Factory, title: 'Get discovered by global buyers', desc: 'Your factory profile shown to thousands of qualified buyers' },
            { icon: Award, title: 'Verified manufacturer badge', desc: 'Build trust with our factory audit & certification program' },
            { icon: Globe2, title: 'Receive targeted RFQs', desc: 'Buyers send RFQs matching your capabilities directly to you' },
          ].map(item => (
            <div key={item.title} style={{ display: 'flex', gap: 16, marginBottom: 20, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '14px 18px' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #059669, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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

      <div className="auth-right" style={{ overflowY: 'auto' }}>
        <div className="auth-form-container">
          <div className="auth-logo">
            <div className="auth-logo-icon" style={{ background: 'linear-gradient(135deg, var(--emerald-600), var(--cyan-500))' }}>SX</div>
            <div className="auth-logo-text">Supply<span>X</span>Exchange</div>
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ flex: 1, height: 4, borderRadius: 99, background: step >= s ? 'var(--emerald-600)' : 'var(--slate-200)', transition: '0.3s' }} />
            ))}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8 }}>Step {step} of 3</div>
          <h1 className="auth-heading">
            {step === 1 ? 'Register Your Factory' : step === 2 ? 'Factory Details' : 'Certifications & Capacity'}
          </h1>
          <p className="auth-subheading">
            {step === 1 ? 'Start receiving RFQs from global buyers' : step === 2 ? 'Help buyers find the right fit' : 'Showcase your credentials'}
          </p>

          {step === 1 && (
            <div className="auth-form">
              <div className="form-group">
                <label className="form-label">Factory / Company Name <span>*</span></label>
                <input className="form-input" placeholder="Sunrise Garments Pvt. Ltd." value={form.companyName} onChange={e => upd('companyName', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Business Email <span>*</span></label>
                <input className="form-input" type="email" placeholder="operations@factory.com" value={form.email} onChange={e => upd('email', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number <span>*</span></label>
                <input className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => upd('phone', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Password <span>*</span></label>
                <input className="form-input" type="password" placeholder="Min 8 characters" value={form.password} onChange={e => upd('password', e.target.value)} />
              </div>
              <button className="btn btn-secondary btn-md w-full" onClick={() => setStep(2)}>Continue <ArrowRight size={16} /></button>
            </div>
          )}

          {step === 2 && (
            <div className="auth-form">
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">Country <span>*</span></label>
                  <select className="form-select" value={form.country} onChange={e => upd('country', e.target.value)}>
                    <option value="">Select country</option>
                    <option>India</option><option>China</option><option>Bangladesh</option>
                    <option>Vietnam</option><option>Turkey</option><option>Indonesia</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">City <span>*</span></label>
                  <input className="form-input" placeholder="Mumbai" value={form.city} onChange={e => upd('city', e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Product Category <span>*</span></label>
                <select className="form-select" value={form.category} onChange={e => upd('category', e.target.value)}>
                  <option value="">Select primary category</option>
                  <option>Apparel & Garments</option><option>Textiles & Fabrics</option>
                  <option>Electronics</option><option>Furniture</option><option>Automotive Parts</option>
                </select>
              </div>
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">No. of Employees</label>
                  <select className="form-select" value={form.employees} onChange={e => upd('employees', e.target.value)}>
                    <option value="">Select range</option>
                    <option>1–50</option><option>51–200</option><option>201–500</option>
                    <option>501–1000</option><option>1000+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">MOQ (units)</label>
                  <input className="form-input" placeholder="e.g. 500" value={form.moq} onChange={e => upd('moq', e.target.value)} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost btn-md" style={{ flex: 1 }} onClick={() => setStep(1)}>← Back</button>
                <button className="btn btn-secondary btn-md" style={{ flex: 2 }} onClick={() => setStep(3)}>Continue <ArrowRight size={16} /></button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="auth-form">
              <div className="form-group">
                <label className="form-label">Certifications</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                  {certs.map(c => (
                    <button key={c} type="button"
                      className={`badge ${form.certifications.includes(c) ? 'badge-emerald' : 'badge-slate'}`}
                      onClick={() => toggleCert(c)}
                      style={{ cursor: 'pointer', padding: '6px 12px', fontSize: '0.75rem', border: 'none' }}>
                      {form.certifications.includes(c) && <CheckCircle2 size={11} />} {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Monthly Production Capacity</label>
                <input className="form-input" placeholder="e.g. 50,000 pieces/month" value={form.capacity} onChange={e => upd('capacity', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Website (optional)</label>
                <input className="form-input" placeholder="https://yourfactory.com" value={form.website} onChange={e => upd('website', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Factory Description</label>
                <textarea className="form-textarea" placeholder="Describe your factory's specialization, experience, and capabilities..." value={form.description} onChange={e => upd('description', e.target.value)} rows={3} />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost btn-md" style={{ flex: 1 }} onClick={() => setStep(2)}>← Back</button>
                <button className="btn btn-secondary btn-md" style={{ flex: 2 }} onClick={() => navigate('/manufacturer/dashboard')}>
                  Submit for Review <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          <div className="auth-footer-text">
            Already have an account? <Link to="/login" style={{ color: 'var(--blue-600)', fontWeight: 600 }}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
