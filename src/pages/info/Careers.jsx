import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Briefcase, MapPin, ArrowRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function Careers() {
  const navigate = useNavigate();

  const openPositions = [
    { title: 'Senior Apparel Sourcing Specialist', dept: 'Supply Chain Operations', location: 'Tirupur / Remote', type: 'Full-time', exp: '5+ years' },
    { title: 'Factory Audit & Quality Inspection Lead', dept: 'Quality Assurance', location: 'Ludhiana, Punjab', type: 'Full-time', exp: '4+ years' },
    { title: 'Full Stack Engineer (React & Node)', dept: 'Engineering', location: 'Bangalore, KA', type: 'Full-time', exp: '3+ years' },
    { title: 'Category Manager - Knits & Activewear', dept: 'Merchandising', location: 'Bangalore, KA', type: 'Full-time', exp: '4+ years' },
    { title: 'Enterprise Account Executive (B2B Fashion Brands)', dept: 'Sales & Growth', location: 'Mumbai / Gurgaon', type: 'Full-time', exp: '3+ years' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '80px 32px 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Briefcase size={14} /> JOIN OUR TEAM
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>Build the Future of B2B Sourcing</h1>
          <p style={{ color: 'var(--slate-300)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            We are on a mission to modernize India's $100B+ apparel manufacturing industry. Join a passionate team of engineers, sourcing veterans, and supply chain innovators.
          </p>
        </div>
      </div>

      {/* Perks Section */}
      <section style={{ padding: '60px 32px', backgroundColor: 'var(--slate-50)', borderBottom: '1px solid var(--slate-200)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, textAlign: 'center', marginBottom: '40px', color: 'var(--slate-900)' }}>
            Why Work With SupplyX Exchange?
          </h2>
          <div className="responsive-grid-3col" style={{ gap: '24px' }}>
            {[
              { title: 'Massive Impact', desc: 'Transform how thousands of SMB fashion brands and garment factories operate and grow.' },
              { title: 'Competitive Tech Compensation', desc: 'Top-tier salaries, generous equity options, and comprehensive health insurance for family.' },
              { title: 'Hybrid & Remote Flexibility', desc: 'Flexible work models with modern offices in Bangalore, Tirupur, and Gurgaon.' },
              { title: 'Learning & Growth Budget', desc: 'Annual stipend for courses, apparel trade shows, and international conferences.' },
              { title: 'Direct Factory Exposure', desc: 'Hands-on experience with cutting-edge textile automation, yarn tech, and sustainable dyeing.' },
              { title: 'Inclusive & Fast-Paced Culture', desc: 'Work alongside supportive peers in a high-ownership, low-bureaucracy culture.' }
            ].map((perk, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: '14px', padding: '24px', border: '1px solid var(--slate-200)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'var(--orange-50)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Sparkles size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '8px' }}>{perk.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 32px', flex: 1, width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--slate-900)' }}>Current Openings</h2>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', marginTop: '4px' }}>Explore opportunities to join our team in Bangalore, Tirupur, and remote.</p>
          </div>
          <span className="badge badge-orange" style={{ padding: '6px 14px' }}>5 Active Roles</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {openPositions.map((job, idx) => (
            <div key={idx} style={{ border: '1px solid var(--slate-200)', borderRadius: '14px', padding: '24px', backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', boxShadow: 'var(--shadow-sm)', transition: 'border-color 0.2s' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '6px' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--slate-600)', flexWrap: 'wrap' }}>
                  <span>🏢 {job.dept}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {job.location}</span>
                  <span>💼 {job.type} • {job.exp}</span>
                </div>
              </div>

              <button className="btn btn-outline" onClick={() => alert(`Thank you for your interest in ${job.title}! Please send your CV to careers@supplyexchange.com`)}>
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
