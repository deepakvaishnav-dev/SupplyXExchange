import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { HelpCircle, Search, FileText, ShieldCheck, CreditCard, RefreshCw, MessageSquare, ArrowRight } from 'lucide-react';

export default function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { title: 'RFQ & Quotations', count: '14 Articles', icon: FileText, desc: 'How to post RFQs, review manufacturer quotes, and compare tech packs.' },
    { title: 'Escrow & Payments', count: '10 Articles', icon: CreditCard, desc: 'Understanding milestone advance locks, GST invoices, and escrow releases.' },
    { title: 'Quality & Factory Audits', count: '12 Articles', icon: ShieldCheck, desc: 'Pre-shipment inspection guidelines, AQL standards, and defect disputes.' },
    { title: 'Orders & Tracking', count: '9 Articles', icon: RefreshCw, desc: 'Live production status, sample sign-offs, and shipping dispatch.' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Header with Search */}
      <section style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '80px 32px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <HelpCircle size={14} /> SUPPLYX KNOWLEDGE BASE
          </div>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '20px' }}>How can we help you today?</h1>

          {/* Search Box */}
          <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
            <Search size={20} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate-400)' }} />
            <input
              type="text"
              placeholder="Search for articles (e.g. Escrow refund, RFQ specs, MOQs)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 52px',
                borderRadius: '12px',
                border: '1px solid var(--slate-700)',
                backgroundColor: 'var(--slate-800)',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 32px', flex: 1, width: '100%' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '32px', color: 'var(--slate-900)' }}>Browse Support Topics</h2>
        
        <div className="responsive-grid-2col" style={{ gap: '24px', marginBottom: '60px' }}>
          {categories.map((cat, i) => {
            const IconComp = cat.icon;
            return (
              <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid var(--slate-200)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-sm)', cursor: 'pointer' }} onClick={() => navigate('/faqs')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--orange-50)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComp size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--slate-900)' }}>{cat.title}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>{cat.count}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>{cat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Support Banner */}
        <div style={{ backgroundColor: 'var(--slate-50)', border: '1px solid var(--slate-200)', borderRadius: '16px', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '6px' }}>Still need assistance?</h3>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>Our dedicated B2B sourcing account managers are available Mon-Sat, 9AM-8PM IST.</p>
          </div>
          <button className="btn btn-orange" onClick={() => navigate('/messages')}>
            <MessageSquare size={18} /> Chat with Support
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
