import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Building2, Award, ShieldCheck, Users, Globe2, ArrowRight, CheckCircle, Factory, MapPin, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activePage="about" />

      {/* Hero Header */}
      <section style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '80px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="badge badge-orange" style={{ marginBottom: '20px', padding: '6px 16px', fontSize: '0.84rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} /> ABOUT SUPPLYX EXCHANGE
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Digitizing &amp; Streamlining B2B Apparel Manufacturing Across India
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--slate-300)', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto 36px' }}>
            SupplyX Exchange is India’s premier B2B apparel sourcing platform, connecting ambitious fashion brands with verified, ISO-certified textile factories for reliable, transparent, and scalable production.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-orange btn-lg" onClick={() => navigate('/search')}>
              Explore Verified Factories <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline-light btn-lg" onClick={() => navigate('/register/manufacturer')}>
              Join as a Manufacturer
            </button>
          </div>
        </div>
      </section>

      {/* Core Stats */}
      <section style={{ backgroundColor: 'var(--slate-800)', color: '#ffffff', borderTop: '1px solid var(--slate-700)', padding: '40px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="responsive-grid-4col">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--orange-500)' }}>500+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--slate-300)', marginTop: '4px' }}>Audited &amp; Verified Factories</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--orange-500)' }}>10M+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--slate-300)', marginTop: '4px' }}>Garments Produced Annually</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--orange-500)' }}>₹150 Cr+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--slate-300)', marginTop: '4px' }}>Sourcing Order Value Facilitated</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--orange-500)' }}>99.4%</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--slate-300)', marginTop: '4px' }}>On-Time Production Rate</div>
          </div>
        </div>
      </section>

      {/* Main Content / Mission & Vision */}
      <section style={{ padding: '80px 32px', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div className="responsive-grid-2col" style={{ gap: '60px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>OUR MISSION</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: '8px', marginBottom: '20px', lineHeight: 1.25 }}>
              Eliminating Friction &amp; Opacity in Apparel Manufacturing
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '16px' }}>
              Historically, fashion brands faced enormous challenges sourcing garments in India: fragmented supplier bases, inconsistent quality control, delayed deliveries, and financial risk.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '24px' }}>
              SupplyX Exchange solves this by building a tech-enabled ecosystem with verified factory audits, digital milestone payments (secure payment protection), transparent RFQ matching, and real-time production tracking.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Strict 35-Point On-Site Factory Audits',
                '100% Secure Payment Protection for All Orders',
                'Dedicated Quality Inspection Officers at Pre-shipment',
                'Direct Access to Regional Garment Hubs (Tirupur, Ludhiana, Surat, Jaipur)'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                  <CheckCircle size={18} color="var(--orange-500)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
              alt="Apparel Factory Quality Control" 
              style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', backgroundColor: 'rgba(15, 23, 42, 0.9)', color: '#ffffff', padding: '20px', borderRadius: '14px', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '4px' }}>Audited &amp; Certified Facilities</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>Every manufacturer listed on SupplyX undergoes background verification, capacity audit, and ethical compliance checks.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Hubs */}
      <section style={{ backgroundColor: 'var(--slate-50)', padding: '80px 32px', borderTop: '1px solid var(--slate-200)', borderBottom: '1px solid var(--slate-200)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PAN-INDIA NETWORK</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: '8px' }}>
              Strategic Manufacturing Clusters
            </h2>
            <p style={{ color: 'var(--slate-600)', fontSize: '1rem', marginTop: '10px' }}>
              We connect you directly to India's specialized textile clusters for optimal pricing, turnaround times, and fabric mastery.
            </p>
          </div>

          <div className="responsive-grid-4col" style={{ gap: '24px' }}>
            {[
              { name: 'Tirupur Cluster', state: 'Tamil Nadu', specialty: 'Knitwear, T-Shirts, Polos', factories: '180+ Verified Units' },
              { name: 'Ludhiana Cluster', state: 'Punjab', specialty: 'Sweaters, Hoodies, Thermal Wear', factories: '120+ Verified Units' },
              { name: 'Surat Cluster', state: 'Gujarat', specialty: 'Synthetic, Polyester, Activewear', factories: '95+ Verified Units' },
              { name: 'Jaipur Cluster', state: 'Rajasthan', specialty: 'Printed Fabrics, Ethnic & Resortwear', factories: '70+ Verified Units' }
            ].map((hub, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--slate-200)', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s, boxShadow 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--orange-500)', marginBottom: '12px' }}>
                  <MapPin size={18} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>{hub.state}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '8px' }}>{hub.name}</h3>
                <div style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '16px' }}>
                  <strong>Specialty:</strong> {hub.specialty}
                </div>
                <span className="badge badge-gray" style={{ fontSize: '0.78rem' }}>{hub.factories}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>Ready to Scale Your Garment Production?</h2>
          <p style={{ color: 'var(--slate-400)', fontSize: '1.05rem', marginBottom: '28px' }}>
            Submit an RFQ today and receive competitive quotes from verified manufacturers within 24 hours.
          </p>
          <button className="btn btn-orange btn-lg" onClick={() => navigate('/rfq/create')}>
            Post an RFQ Now <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
