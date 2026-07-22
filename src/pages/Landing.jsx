import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, Factory, Search, FileText, TrendingUp, ShieldCheck, Globe2,
  Zap, BarChart3, MessageSquare, Star, CheckCircle2, ChevronRight, Menu, X
} from 'lucide-react';

const features = [
  { icon: Search, title: 'Smart Manufacturer Discovery', desc: 'AI-powered search across 12,000+ verified manufacturers. Filter by MOQ, certifications, location, and capacity.' },
  { icon: FileText, title: 'Intelligent RFQ System', desc: 'Send RFQs to multiple manufacturers simultaneously. Compare quotes side-by-side with our quotation engine.' },
  { icon: TrendingUp, title: 'Real-Time Production Tracking', desc: '10-stage production timeline with live updates, photo documentation, and shipment tracking.' },
  { icon: ShieldCheck, title: 'Verified Manufacturer Network', desc: 'Every manufacturer undergoes factory audits, certifications verification, and quality assessments.' },
  { icon: MessageSquare, title: 'Integrated B2B Messaging', desc: 'Secure, encrypted communication with file sharing, sample requests, and order discussions.' },
  { icon: BarChart3, title: 'Advanced Analytics', desc: 'Deep insights into your procurement spend, supplier performance, and production efficiency.' },
];

const stats = [
  { value: '12,400+', label: 'Verified Manufacturers' },
  { value: '$2.4B', label: 'GMV Processed' },
  { value: '85,000+', label: 'Buyers Worldwide' },
  { value: '98.2%', label: 'On-Time Delivery' },
];

const testimonials = [
  { name: 'Sarah Chen', company: 'ModaLux Apparel', role: 'Head of Sourcing', text: 'SupplyXExchange cut our sourcing time by 70%. The RFQ system and production tracking are game-changers for our team.', rating: 5 },
  { name: 'Michael Torres', company: 'TechWear Pro', role: 'VP Operations', text: 'We found 3 new manufacturing partners in a week. The verified badge gives us confidence we never had before.', rating: 5 },
  { name: 'Priya Patel', company: 'Sunrise Garments', role: 'CEO', text: 'As a manufacturer, the platform has connected us with global buyers we could never reach before. Revenue up 40%.', rating: 5 },
];

export default function Landing() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="landing">
      {/* Nav */}
      <nav className="landing-nav">
        <div className="landing-nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="landing-nav-logo-icon">SX</div>
          <div className="landing-nav-logo-text">Supply<span>X</span>Exchange</div>
        </div>

        <div className="landing-nav-links">
          <a href="#features" className="landing-nav-link">Features</a>
          <a href="#how" className="landing-nav-link">How It Works</a>
          <a href="#testimonials" className="landing-nav-link">Reviews</a>
          <a href="#pricing" className="landing-nav-link">Pricing</a>
        </div>

        <div className="landing-nav-cta">
          <button className="btn btn-ghost btn-md" style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.15)' }} onClick={() => navigate('/login')}>Log In</button>
          <button className="btn btn-primary btn-md" onClick={() => navigate('/register/buyer')}>
            Get Started Free <ArrowRight size={15} />
          </button>
        </div>

        <button
          className="landing-mobile-toggle"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} color="white" /> : <Menu size={22} color="white" />}
        </button>

        {mobileMenuOpen && (
          <div className="landing-mobile-menu animate-in">
            <a href="#features" className="landing-mobile-link" onClick={closeMenu}>Features</a>
            <a href="#how" className="landing-mobile-link" onClick={closeMenu}>How It Works</a>
            <a href="#testimonials" className="landing-mobile-link" onClick={closeMenu}>Reviews</a>
            <a href="#pricing" className="landing-mobile-link" onClick={closeMenu}>Pricing</a>
            <div className="landing-mobile-actions">
              <button className="btn btn-ghost btn-md w-full" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }} onClick={() => { closeMenu(); navigate('/login'); }}>
                Log In
              </button>
              <button className="btn btn-primary btn-md w-full" onClick={() => { closeMenu(); navigate('/register/buyer'); }}>
                Get Started Free <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </nav>


      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-bg-glow2" />
        <div className="hero-content">
          <div className="hero-badge animate-in">
            <span className="hero-badge-dot" />
            Trusted by 85,000+ global buyers & manufacturers
          </div>
          <h1 className="hero-title animate-in" style={{ animationDelay: '0.1s' }}>
            The World's Most Advanced<br />
            <span className="gradient-text">B2B Manufacturing</span><br />
            Marketplace
          </h1>
          <p className="hero-subtitle animate-in" style={{ animationDelay: '0.2s' }}>
            Connect with 12,400+ verified manufacturers. Send RFQs, compare quotes,
            track production in real-time, and scale your business globally.
          </p>
          <div className="hero-cta animate-in" style={{ animationDelay: '0.3s' }}>
            <button className="btn btn-primary btn-xl" onClick={() => navigate('/register/buyer')}>
              Start as Buyer <ArrowRight size={18} />
            </button>
            <button className="btn btn-xl" onClick={() => navigate('/register/manufacturer')}
              style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1.5px solid rgba(255,255,255,0.2)' }}>
              <Factory size={18} /> List Your Factory
            </button>
          </div>
          <div className="hero-stats animate-in" style={{ animationDelay: '0.4s' }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Platform Features</div>
          <h2 className="section-heading">Everything you need to source smarter</h2>
          <p className="section-subheading">A complete end-to-end manufacturing procurement platform</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card animate-in" key={f.title} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="feature-icon" style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #2563EB, #06B6D4)' : 'linear-gradient(135deg, #059669, #06B6D4)' }}>
                  <f.icon size={22} color="white" />
                </div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how">
        <div className="container">
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>How It Works</div>
          <h2 className="section-heading">From idea to delivery in 4 steps</h2>
          <p className="section-subheading">Our streamlined process makes global manufacturing simple</p>
          <div className="steps-grid">
            {[
              { n: '01', title: 'Register & Verify', desc: 'Create your account and complete verification in under 24 hours.' },
              { n: '02', title: 'Post Your RFQ', desc: 'Describe your product specs, quantity, and timeline to receive competitive quotes.' },
              { n: '03', title: 'Compare & Choose', desc: 'Review side-by-side quotations, ratings, and manufacturer profiles.' },
              { n: '04', title: 'Track Production', desc: 'Monitor every stage from sampling to delivery with real-time updates.' },
            ].map(step => (
              <div className="step-item" key={step.n}>
                <div className="step-number">{step.n}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'var(--slate-900)', padding: '80px 24px' }} id="testimonials">
        <div className="container">
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Testimonials</div>
          <h2 className="section-heading">Loved by global businesses</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {testimonials.map(t => (
              <div key={t.name} className="feature-card" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {Array(t.rating).fill(0).map((_, i) => <Star key={i} size={14} color="#FBBF24" fill="#FBBF24" />)}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6, #10B981)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>{t.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '16px' }}>Ready to transform your sourcing?</h2>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>Join 85,000+ businesses already using SupplyXExchange to source smarter, faster, and more reliably.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-xl" style={{ background: 'white', color: 'var(--blue-800)' }} onClick={() => navigate('/register/buyer')}>
                Start for Free <ArrowRight size={18} />
              </button>
              <button className="btn btn-xl" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }} onClick={() => navigate('/register/manufacturer')}>
                <Factory size={18} /> List Your Factory
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="landing-nav-logo-icon">SX</div>
            <div className="landing-nav-logo-text">Supply<span>X</span>Exchange</div>
          </div>
          <div className="footer-copy">© 2026 SupplyXExchange. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy', 'Terms', 'Contact'].map(l => (
              <span key={l} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
