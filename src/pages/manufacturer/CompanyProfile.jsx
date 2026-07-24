import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Building, ShieldCheck, FileCheck, MapPin, Globe, Mail, Phone, Upload, Save, Check } from 'lucide-react';

export default function CompanyProfile() {
  const [companyName, setCompanyName] = useState('Kalagi Apparel Corp');
  const [gstin, setGstin] = useState('33AAACK1234F1Z5');
  const [iecCode, setIecCode] = useState('0412093841');
  const [address, setAddress] = useState('142 Textile Hub Industrial Area, Tirupur, Tamil Nadu - 641603');
  const [website, setWebsite] = useState('https://kalagiapparel.com');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <Layout title="Company Profile" subtitle="Verify tax credentials, trade licenses, and business details for RFQ quotes.">
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        {/* Verification Status Header */}
        <div className="card" style={{ padding: 24, borderLeft: '4px solid var(--green-500)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: 'var(--green-50)', color: 'var(--green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--slate-900)' }}>{companyName}</h2>
                  <span className="badge badge-green">Verified Buyer</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginTop: 2 }}>
                  GSTIN &amp; Export/Import License verified on 12 Jan 2026.
                </p>
              </div>
            </div>
            <button className="btn btn-outline btn-sm">
              <FileCheck size={16} /> View Verification Badge
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSave} className="card" style={{ padding: 28 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--slate-200)' }}>
            Business Credentials &amp; Registration
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="form-grid-2">
              <div>
                <label className="form-label">Registered Business Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="form-label">GSTIN / Tax Identification Number</label>
                <input
                  type="text"
                  className="form-input"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div>
                <label className="form-label">Import Export Code (IEC)</label>
                <input
                  type="text"
                  className="form-input"
                  value={iecCode}
                  onChange={(e) => setIecCode(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Company Website / Portfolio</label>
                <input
                  type="url"
                  className="form-input"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="form-label">Primary Business Address</label>
              <textarea
                className="form-input"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div style={{ paddingTop: 16, borderTop: '1px solid var(--slate-200)' }}>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: 12 }}>Verification Documents</h4>
              <div className="responsive-grid-2col">
                <div style={{ border: '1px dashed var(--slate-300)', borderRadius: 10, padding: 16, display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'var(--slate-50)' }}>
                  <FileCheck size={24} color="var(--green-600)" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>GST Registration Cert.pdf</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Verified • 1.2 MB</div>
                  </div>
                  <button type="button" className="btn btn-outline btn-sm">Update</button>
                </div>
                <div style={{ border: '1px dashed var(--slate-300)', borderRadius: 10, padding: 16, display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'var(--slate-50)' }}>
                  <FileCheck size={24} color="var(--green-600)" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>IEC Certificate.pdf</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Verified • 850 KB</div>
                  </div>
                  <button type="button" className="btn btn-outline btn-sm">Update</button>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
              <button type="submit" className="btn btn-orange">
                {saved ? <><Check size={16} /> Saved Successfully!</> : <><Save size={16} /> Save Company Details</>}
              </button>
            </div>

          </div>
        </form>

      </div>
    </Layout>
  );
}
