import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', paddingTop: '60px', paddingBottom: '32px', borderTop: '1px solid var(--slate-800)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
        
        <div className="responsive-grid-footer" style={{ marginBottom: '48px' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <div
              className="brand-logo-text"
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#ffffff', marginBottom: '16px' }}
            >
              Supply<span className="brand-x">X</span>Exchange
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '300px' }}>
              India's leading B2B apparel sourcing platform connecting brand owners with audited, ISO-certified textile manufacturers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--slate-400)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <MapPin size={16} color="var(--orange-500)" />
                <span>Koramangala 7th Block, Bangalore, KA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Mail size={16} color="var(--orange-500)" />
                <span>support@supplyexchange.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={16} color="var(--orange-500)" />
                <span>+91 80 4567 8900</span>
              </div>
            </div>
          </div>

          {/* Column 2: Marketplace */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px', letterSpacing: '0.02em' }}>
              Marketplace
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--slate-400)' }}>
              <a href="/search" onClick={(e) => { e.preventDefault(); navigate('/search'); }} style={{ transition: 'color 0.15s' }}>For Buyers</a>
              <a href="/register/manufacturer" onClick={(e) => { e.preventDefault(); navigate('/register/manufacturer'); }} style={{ transition: 'color 0.15s' }}>For Manufacturers</a>
              <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} style={{ transition: 'color 0.15s' }}>Manufacturing Clusters</a>
              <a href="/products" onClick={(e) => { e.preventDefault(); navigate('/products'); }} style={{ transition: 'color 0.15s' }}>All Categories</a>
              <a href="/rfq/create" onClick={(e) => { e.preventDefault(); navigate('/rfq/create'); }} style={{ transition: 'color 0.15s' }}>Request RFQ</a>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px', letterSpacing: '0.02em' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--slate-400)' }}>
              <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} style={{ transition: 'color 0.15s' }}>About Us</a>
              <a href="/careers" onClick={(e) => { e.preventDefault(); navigate('/careers'); }} style={{ transition: 'color 0.15s' }}>Careers</a>
              <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); }} style={{ transition: 'color 0.15s' }}>Blog &amp; Insights</a>
              <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }} style={{ transition: 'color 0.15s' }}>Terms &amp; Conditions</a>
              <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }} style={{ transition: 'color 0.15s' }}>Privacy Policy</a>
            </div>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px', letterSpacing: '0.02em' }}>
              Support &amp; Security
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--slate-400)' }}>
              <a href="/help" onClick={(e) => { e.preventDefault(); navigate('/help'); }} style={{ transition: 'color 0.15s' }}>Help Center</a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} style={{ transition: 'color 0.15s' }}>Contact Support</a>
              <a href="/trust-and-safety" onClick={(e) => { e.preventDefault(); navigate('/trust-and-safety'); }} style={{ transition: 'color 0.15s' }}>Trust &amp; Safety Audit</a>
              <a href="/escrow-protection" onClick={(e) => { e.preventDefault(); navigate('/escrow-protection'); }} style={{ transition: 'color 0.15s' }}>Escrow Guarantee</a>
              <a href="/faqs" onClick={(e) => { e.preventDefault(); navigate('/faqs'); }} style={{ transition: 'color 0.15s' }}>FAQs</a>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px', letterSpacing: '0.02em' }}>
              Industry Insights
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--slate-400)', marginBottom: '16px', lineHeight: 1.5 }}>
              Subscribe to receive weekly garment fabric market rates and Tirupur yarn trends.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                type="email"
                required
                placeholder="Enter work email"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--r-md)',
                  border: '1px solid var(--slate-700)',
                  backgroundColor: 'var(--slate-800)',
                  color: '#ffffff',
                  fontSize: '0.84rem'
                }}
              />
              <button type="submit" className="btn btn-orange" style={{ width: '100%' }}>
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Divider & Copyright Bar */}
        <div style={{ borderTop: '1px solid var(--slate-800)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.8125rem', color: 'var(--slate-500)' }}>
          <div>
            © 2026 SupplyX Exchange Technologies Pvt. Ltd. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--slate-300)', cursor: 'pointer' }} onClick={() => navigate('/escrow-protection')}>
              <ShieldCheck size={16} color="var(--green-500)" /> 100% Escrow Protected Trade
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

