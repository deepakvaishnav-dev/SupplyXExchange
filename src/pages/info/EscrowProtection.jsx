import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, Lock, CheckCircle2, RefreshCw, AlertTriangle, ArrowRight, DollarSign, FileText } from 'lucide-react';

export default function EscrowProtection() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '80px 32px 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Lock size={14} /> 100% FINANCIAL SECURITY
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>SupplyX Escrow Guarantee</h1>
          <p style={{ color: 'var(--slate-300)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Never worry about unfulfilled advance payments or poor quality batches. Your money is safely held in bank escrow and released only upon your explicit approval.
          </p>
        </div>
      </div>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px', flex: 1, width: '100%' }}>

        {/* Milestone Steps visual */}
        <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '48px', color: 'var(--slate-900)' }}>
          How Escrow Payment Works Step-by-Step
        </h2>

        <div className="responsive-grid-4col" style={{ gap: '24px', marginBottom: '80px' }}>
          {[
            { step: '01', title: 'Deposit Advance', desc: 'Buyer deposits order advance (e.g. 30%) into SupplyX Nodal Escrow Account.' },
            { step: '02', title: 'Raw Material Procurement', desc: 'Escrow confirms funds lock. Factory purchases yarn, fabric & trims.' },
            { step: '03', title: 'Milestone Inspection', desc: 'Cutting & stitching progress uploaded with photo/video proofs.' },
            { step: '04', title: 'Final Clearance', desc: 'Post AQL 2.5 quality clearance, escrow releases final balance to factory.' }
          ].map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid var(--slate-200)', borderRadius: '16px', padding: '28px', position: 'relative', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--orange-100)', position: 'absolute', top: '16px', right: '20px' }}>
                {item.step}
              </span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px', marginTop: '16px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Guarantee Comparison Box */}
        <div className="responsive-grid-2col" style={{ gap: '32px', marginBottom: '60px' }}>
          <div style={{ backgroundColor: '#FFF5F5', border: '1px solid #FEB2B2', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#C53030', marginBottom: '16px', fontWeight: 700, fontSize: '1.1rem' }}>
              <AlertTriangle size={22} /> Traditional Advance Payments (Risky)
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.925rem', color: '#742A2A', paddingLeft: '20px' }}>
              <li>Direct 50% bank transfer with zero buyer leverage if factory delays production.</li>
              <li>High vulnerability to defective fabric GSM, shrinkage, or inaccurate color dyes.</li>
              <li>No formalized dispute process or legal escrow protection.</li>
              <li>Protracted dispute resolution lasting months without refund guarantees.</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#15803D', marginBottom: '16px', fontWeight: 700, fontSize: '1.1rem' }}>
              <ShieldCheck size={22} /> SupplyX Escrow Guarantee (100% Safe)
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.925rem', color: '#166534', paddingLeft: '20px' }}>
              <li>Funds locked safely in RBI-regulated nodal escrow bank account.</li>
              <li>Money released strictly against visual milestone proofs & QC clearance.</li>
              <li>100% Money-Back Guarantee for non-conforming or rejected batches.</li>
              <li>Dedicated SupplyX Arbitration Panel resolves disputes within 5 business days.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px', color: 'var(--slate-900)' }}>Start Your First Escrow-Protected Order</h2>
          <button className="btn btn-orange btn-lg" onClick={() => navigate('/rfq/create')}>
            Request Escrow RFQ <ArrowRight size={18} />
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
