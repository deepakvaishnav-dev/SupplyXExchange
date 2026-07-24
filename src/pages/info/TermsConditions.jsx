import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FileText, ShieldAlert, Scale, CheckCircle } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '60px 32px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <FileText size={14} /> USER AGREEMENT
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Terms &amp; Conditions</h1>
          <p style={{ color: 'var(--slate-300)', fontSize: '1rem' }}>
            Master Service Agreement governing Buyers and Verified Garment Manufacturers on SupplyX Exchange.
          </p>
        </div>
      </div>

      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '60px 32px', flex: 1, width: '100%', color: 'var(--slate-800)', lineHeight: 1.7 }}>
        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
          <p>
            By accessing or registering an account on SupplyX Exchange ("Platform"), whether as a Brand Owner/Buyer or as an Apparel Manufacturer/Supplier, you agree to be bound by these Terms &amp; Conditions and our Escrow Protection Rules.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>2. B2B Account Verification</h2>
          <p>
            All users must provide valid business details including GSTIN, company registration, and bank details. Manufacturers must submit factory address proofs, machinery lists, and undergo mandatory digital or physical audits prior to bidding on RFQs.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>3. RFQ, Quotations &amp; Contracts</h2>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>RFQ Binding:</strong> Submitted RFQs are non-binding requests for proposals until a buyer accepts a quotation and deposits the milestone advance into Escrow.</li>
            <li><strong>Tech Pack Specifications:</strong> Quotes are calculated strictly based on agreed fabric GSM, yarn quality, printing specs, and quantity ranges.</li>
            <li><strong>Tolerance Margins:</strong> Industry-standard manufacturing quantity tolerance (+/- 3%) and fabric shade variation (+/- 5%) apply unless explicitly overridden in the order contract.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>4. Escrow Payment &amp; Milestone Releases</h2>
          <p>
            All financial transactions must occur through SupplyX Escrow.
            Standard milestone schedule:
          </p>
          <div style={{ backgroundColor: 'var(--slate-50)', padding: '20px', borderRadius: '12px', border: '1px solid var(--slate-200)', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem' }}>
            <div>• <strong>30% Advance:</strong> Deposited upon contract signing to kickstart raw material (yarn/fabric) procurement.</div>
            <div>• <strong>40% Production Milestone:</strong> Released upon completion of cutting, stitching, and visual production proof upload.</div>
            <div>• <strong>30% Pre-Shipment Release:</strong> Released after third-party quality inspection clearance and dispatch document verification.</div>
          </div>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>5. Quality Inspection &amp; Disputes</h2>
          <p>
            If delivered goods fail agreed quality parameters (AQL 2.5 standards), the buyer may initiate a dispute within 7 calendar days of receipt. SupplyX Arbitration Team will inspect batch samples, verify tech pack adherence, and withhold or refund escrow funds accordingly.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>6. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
