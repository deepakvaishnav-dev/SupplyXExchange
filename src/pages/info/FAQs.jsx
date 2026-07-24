import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { HelpCircle, ChevronDown, ChevronUp, Search, ShieldCheck } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs = [
    {
      cat: 'buyers',
      q: 'What is the minimum order quantity (MOQ) for custom manufacturing on SupplyX?',
      a: 'MOQs are set by individual manufacturers, typically starting from 100-200 pieces per color/style for T-Shirts & Polos, and 300 pieces for complex jackets or activewear. You can filter manufacturers by MOQ in our Search page.'
    },
    {
      cat: 'buyers',
      q: 'How does the Escrow Payment Guarantee protect my money?',
      a: 'When you accept a quote, your advance deposit (e.g. 30%) is held securely in a bank escrow account. Funds are only released to the manufacturer when visual production milestones are approved and pre-shipment quality inspection clears.'
    },
    {
      cat: 'buyers',
      q: 'Can I order fabric samples and tech pack prototypes before bulk production?',
      a: 'Yes! Most verified manufacturers offer sample development (lead time 7-10 days). You can request sample production directly through the RFQ process.'
    },
    {
      cat: 'manufacturers',
      q: 'How do manufacturers get verified on SupplyX Exchange?',
      a: 'Factories undergo a strict 35-point audit evaluating GSTIN credentials, machinery inventory (automatic cutting, stitching lines), daily production capacity, labor compliance, and ISO/GOTS certifications.'
    },
    {
      cat: 'manufacturers',
      q: 'What are the fees for manufacturers on SupplyX Exchange?',
      a: 'Basic factory listing is 100% free. SupplyX charges a small transparent platform fee (2-3%) only on successfully fulfilled purchase orders, giving you guaranteed payment security through Escrow.'
    },
    {
      cat: 'quality',
      q: 'What happens if a delivered garment batch does not match the approved tech pack?',
      a: 'You can raise a Quality Dispute within 7 days of receiving the shipment. A SupplyX Quality Inspector will physically re-evaluate the batch against AQL 2.5 standards. If non-conforming, escrow funds are refunded to the buyer.'
    },
    {
      cat: 'shipping',
      q: 'Who handles shipping and GST documentation for bulk orders?',
      a: 'SupplyX integrates with leading logistics partners (Delhivery Surface, GATI, Maersk) to offer door-to-door freight shipping with GST e-way bills and real-time GPS tracking.'
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.cat === activeCategory);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '70px 32px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <HelpCircle size={14} /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '16px' }}>Got Questions? We Have Answers.</h1>
          <p style={{ color: 'var(--slate-300)', fontSize: '1.1rem' }}>
            Find answers to common questions about RFQs, factory verification, escrow security, and garment quality.
          </p>
        </div>
      </div>

      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '60px 32px', flex: 1, width: '100%' }}>
        
        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All FAQs' },
            { id: 'buyers', label: 'For Buyers & Brands' },
            { id: 'manufacturers', label: 'For Factories & Suppliers' },
            { id: 'quality', label: 'Quality & Escrow' },
            { id: 'shipping', label: 'Logistics & GST' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`btn ${activeCategory === tab.id ? 'btn-orange' : 'btn-outline'}`}
              style={{ fontSize: '0.875rem' }}
              onClick={() => { setActiveCategory(tab.id); setOpenIndex(0); }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: '1px solid var(--slate-200)',
                  borderRadius: '12px',
                  backgroundColor: isOpen ? 'var(--slate-50)' : '#ffffff',
                  overflow: 'hidden',
                  transition: 'background-color 0.2s'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--slate-900)'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} color="var(--orange-500)" /> : <ChevronDown size={20} color="var(--slate-400)" />}
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px 24px', fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: 1.6, borderTop: '1px dashed var(--slate-200)', paddingTop: '16px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
