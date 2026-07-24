import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '60px 32px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Shield size={14} /> LEGAL COMPLIANCE
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--slate-300)', fontSize: '1rem' }}>
            Last updated: July 2026 • Effective for all SupplyX Exchange registered buyers, manufacturers, and corporate users.
          </p>
        </div>
      </div>

      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '60px 32px', flex: 1, width: '100%', color: 'var(--slate-800)', lineHeight: 1.7 }}>
        <div style={{ backgroundColor: 'var(--orange-50)', border: '1px solid var(--orange-200)', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <Lock size={24} color="var(--orange-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.925rem', color: 'var(--slate-700)' }}>
            <strong>Your B2B Data &amp; Tech Packs Are Confidential:</strong> All garment specs, tech packs, CAD designs, pricing quotes, and manufacturing contracts uploaded to SupplyX Exchange are encrypted and bound by strict NDA protection.
          </div>
        </div>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>1. Overview &amp; Scope</h2>
          <p>
            SupplyX Exchange Technologies Private Limited ("SupplyX", "we", "us", or "our") operates the B2B marketplace platform accessible at supplyexchange.com. This Privacy Policy describes how we collect, store, process, and protect business and personal data when you interact with our platform, request quotes, list manufacturing services, or execute purchase orders.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: '12px' }}>We collect the following categories of information to facilitate B2B sourcing transactions:</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Corporate Profile Data:</strong> Company Registration details, GSTIN, PAN, factory address, contact personnel information, and business credentials.</li>
            <li><strong>RFQ &amp; Technical Specifications:</strong> Garment measurements, GSM specifications, tech packs, fabric preferences, print artwork, target pricing, and order quantities.</li>
            <li><strong>Financial &amp; Escrow Data:</strong> Bank account numbers, billing details, escrow transaction history, and GST invoice records processed through authorized banking partners.</li>
            <li><strong>Operational &amp; Chat Data:</strong> Communication logs between buyers and manufacturers, milestone update photos, and pre-shipment quality inspection reports.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>3. Proprietary Design &amp; IP Protection</h2>
          <p>
            We strictly enforce Intellectual Property safeguards. Tech packs and design files shared in an RFQ are accessible <strong>only</strong> to matched verified manufacturers who have signed our Master Supplier Agreement containing non-disclosure covenants. Manufacturers are strictly prohibited from copying, distributing, or producing designs for third parties.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>4. How We Use Your Data</h2>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Matching buyer RFQs with suitable verified garment manufacturers based on capacity and specialty.</li>
            <li>Facilitating escrow milestone payment releases upon verified milestone completions.</li>
            <li>Generating GST-compliant tax invoices and shipping documentation.</li>
            <li>Conducting factory background checks, fraud detection, and audit verifications.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>5. Data Security &amp; Retention</h2>
          <p>
            We employ bank-grade 256-bit SSL encryption, restricted access control, and TLS transport protocols. Data is retained for as long as your account remains active or as required by applicable Indian commercial and tax compliance laws.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>6. Contact Privacy Team</h2>
          <p>
            For privacy inquiries, data deletion requests, or NDA enforcement queries, please contact our Data Protection Officer at:
          </p>
          <div style={{ backgroundColor: 'var(--slate-50)', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--slate-200)', marginTop: '12px', fontSize: '0.9rem' }}>
            <strong>Email:</strong> privacy@supplyexchange.com<br />
            <strong>Address:</strong> SupplyX Technologies, 4th Floor, Koramangala Industrial Layout, Bangalore, KA 560034
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
