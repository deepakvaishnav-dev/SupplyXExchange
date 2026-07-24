import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Lock, ArrowRight, Building2, Eye } from 'lucide-react';

export default function TrustSafety() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '80px 32px 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} /> TRUST &amp; VERIFICATION STANDARDS
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>Trade with 100% Confidence</h1>
          <p style={{ color: 'var(--slate-300)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Every manufacturer on SupplyX Exchange undergoes rigorous background audits, physical machine verification, and financial background checks.
          </p>
        </div>
      </div>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px', flex: 1, width: '100%' }}>
        
        {/* Verification Pillars */}
        <div className="responsive-grid-3col" style={{ gap: '32px', marginBottom: '80px' }}>
          {[
            {
              title: '1. Factory Audit & KYC',
              icon: Building2,
              desc: 'We verify GSTIN, factory land ownership/lease agreements, machinery count (Juki/Brother stitching lines), daily production capacity, and labor compliance.'
            },
            {
              title: '2. ISO & Fabric Certifications',
              icon: Award,
              desc: 'Verification of international quality standards: OEKO-TEX Standard 100, GOTS Organic Cotton, ISO 9001:2015, and BSCI Social Compliance.'
            },
            {
              title: '3. Escrow Payment Guarantee',
              icon: Lock,
              desc: 'Advance funds are locked in ICICI/HDFC bank escrow accounts and released only upon verified milestone sign-offs and AQL pre-shipment clearance.'
            }
          ].map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid var(--slate-200)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', backgroundColor: 'var(--orange-50)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <IconComponent size={26} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '10px' }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 35-Point Checklist */}
        <div style={{ backgroundColor: 'var(--slate-50)', borderRadius: '20px', border: '1px solid var(--slate-200)', padding: '48px', marginBottom: '60px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>QUALITY GATEWAY</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: '8px' }}>The SupplyX 35-Point Verification Audit</h2>
            <p style={{ color: 'var(--slate-600)', marginTop: '8px' }}>Before any factory badge is issued, our field auditor evaluates 35 crucial parameters across 5 categories.</p>
          </div>

          <div className="responsive-grid-2col" style={{ gap: '20px' }}>
            {[
              'Yarn & Fabric Storage Conditions (Moisture Control)',
              'Automatic Fabric Spreading & CAD Cutting Precision',
              'Needle Detector & Metal Free Zone Compliance',
              'Color Fastness & Washing Fastness In-House Lab Testing',
              'Defect Rate History (< 1.5% Rejection Threshold)',
              'Working Environment, Safety & Fair Labor Wage Audit'
            ].map((check, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--slate-200)', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                <CheckCircle2 size={20} color="var(--orange-500)" style={{ flexShrink: 0 }} />
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px', color: 'var(--slate-900)' }}>Partner with Audited Garment Manufacturers</h2>
          <button className="btn btn-orange btn-lg" onClick={() => navigate('/search')}>
            Browse Verified Manufacturers <ArrowRight size={18} />
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
