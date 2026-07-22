import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  FileText, Package, Calendar, DollarSign, Ruler, Printer,
  Paperclip, Send, ArrowRight, Info, Plus, X
} from 'lucide-react';

const categories = ['T-Shirts', 'Polo Shirts', 'Jeans', 'Jackets', 'Dresses', 'Uniforms', 'Sportswear', 'Hoodies', 'Trousers', 'Other'];
const fabrics = ['Cotton 100%', 'Polyester', 'Cotton-Poly Blend', 'Denim', 'Linen', 'Viscose', 'Modal', 'Wool', 'Nylon', 'Fleece'];
const printTypes = ['None', 'Screen Print', 'DTG (Direct-to-Garment)', 'Embroidery', 'Sublimation', 'Heat Transfer', 'Offset Print'];
const currencies = ['USD ($)', 'EUR (€)', 'GBP (£)', 'INR (₹)', 'AED (د.إ)'];

const steps = [
  { n: 1, label: 'Product Info' },
  { n: 2, label: 'Specifications' },
  { n: 3, label: 'Budget & Timeline' },
  { n: 4, label: 'Review & Submit' },
];

export default function RFQCreate() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL']);
  const [form, setForm] = useState({
    productName: '', category: '', description: '', quantity: '',
    fabric: '', fabricWeight: '', printType: 'None', colorCount: '1',
    sizes: { XS: '', S: '', M: '', L: '', XL: '', XXL: '' },
    budgetMin: '', budgetMax: '', currency: 'USD ($)',
    deliveryDate: '', sampleDate: '', additionalNotes: '', targetManufacturers: [],
  });

  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <Layout role="buyer" title="Create RFQ" subtitle="Request for Quotation — describe your product requirements">
      {/* Step Progress */}
      <div className="card mb-6">
        <div className="card-body" style={{ padding: 'var(--sp-5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => step > s.n && setStep(s.n)}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.875rem', flexShrink: 0,
                    background: step >= s.n ? 'linear-gradient(135deg, var(--blue-600), var(--blue-700))' : 'var(--slate-100)',
                    color: step >= s.n ? 'white' : 'var(--text-muted)',
                  }}>
                    {step > s.n ? '✓' : s.n}
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: step === s.n ? 700 : 500, color: step >= s.n ? 'var(--text-primary)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ flex: 1, height: 2, background: step > s.n ? 'var(--blue-500)' : 'var(--border)', margin: '0 16px', transition: 'background 0.3s' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        {/* Step 1: Product Info */}
        {step === 1 && (
          <div className="card animate-in">
            <div className="card-header">
              <div className="card-title">Product Information</div>
              <span className="badge badge-blue">Step 1 of 4</span>
            </div>
            <div className="card-body">
              <div className="form-grid" style={{ gap: 'var(--sp-5)' }}>
                <div className="form-group">
                  <label className="form-label">Product Name <span>*</span></label>
                  <input className="form-input" placeholder="e.g. Men's Slim-Fit Polo Shirts" value={form.productName} onChange={e => upd('productName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Product Category <span>*</span></label>
                  <select className="form-select" value={form.category} onChange={e => upd('category', e.target.value)}>
                    <option value="">Select a category</option>
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Product Description <span>*</span></label>
                  <textarea className="form-textarea" placeholder="Describe the product in detail: style, color options, material preference, logo placement, packaging requirements..." value={form.description} onChange={e => upd('description', e.target.value)} rows={4} />
                  <div className="form-hint">Be as specific as possible to receive accurate quotes</div>
                </div>
                <div className="form-group">
                  <label className="form-label">Total Quantity Required <span>*</span></label>
                  <input className="form-input" type="number" placeholder="e.g. 5000" value={form.quantity} onChange={e => upd('quantity', e.target.value)} />
                </div>
              </div>

              {/* File Upload */}
              <div style={{ marginTop: 'var(--sp-5)', border: '2px dashed var(--border)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-8)', textAlign: 'center', transition: 'all 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--blue-400)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <Paperclip size={32} color="var(--text-muted)" style={{ marginBottom: 12 }} />
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Attach Design Files</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Drag & drop or click to upload. PNG, JPG, PDF, AI, PSD up to 50MB</div>
              </div>
            </div>
            <div style={{ padding: 'var(--sp-5)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn btn-primary btn-md" onClick={() => setStep(2)} disabled={!form.productName || !form.category}>
                Continue <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Specifications */}
        {step === 2 && (
          <div className="card animate-in">
            <div className="card-header">
              <div className="card-title">Product Specifications</div>
              <span className="badge badge-blue">Step 2 of 4</span>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">Fabric / Material <span>*</span></label>
                  <select className="form-select" value={form.fabric} onChange={e => upd('fabric', e.target.value)}>
                    <option value="">Select fabric</option>
                    {fabrics.map(f => <option key={f}>{f}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Fabric Weight (GSM)</label>
                  <input className="form-input" type="number" placeholder="e.g. 180" value={form.fabricWeight} onChange={e => upd('fabricWeight', e.target.value)} />
                </div>
              </div>
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">Printing / Embroidery Type</label>
                  <select className="form-select" value={form.printType} onChange={e => upd('printType', e.target.value)}>
                    {printTypes.map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Number of Colors</label>
                  <input className="form-input" type="number" min="1" max="12" placeholder="e.g. 3" value={form.colorCount} onChange={e => upd('colorCount', e.target.value)} />
                </div>
              </div>

              {/* Size Chart */}
              <div className="form-group">
                <label className="form-label">Size Distribution (quantities per size)</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>
                  {allSizes.map(s => (
                    <div key={s}>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, textAlign: 'center', marginBottom: 4 }}>{s}</div>
                      <input className="form-input" type="number" placeholder="0" style={{ textAlign: 'center' }}
                        value={form.sizes[s]} onChange={e => upd('sizes', { ...form.sizes, [s]: e.target.value })} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Specs */}
              <div className="form-group">
                <label className="form-label">Packaging Requirements</label>
                <textarea className="form-textarea" rows={2} placeholder="e.g. Individual polybags, hangtags, barcode labels, carton specifications..." />
              </div>

              <div className="form-group">
                <label className="form-label">Quality Standards Required</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['AQL 2.5', 'AQL 1.5', 'Pre-Shipment Inspection', '100% Checking', 'Third-Party QC'].map(q => (
                    <button key={q} type="button" className="badge badge-slate" style={{ cursor: 'pointer', padding: '6px 12px', border: 'none', fontSize: '0.75rem' }}>{q}</button>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding: 'var(--sp-5)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn btn-ghost btn-md" onClick={() => setStep(1)}>← Back</button>
              <button className="btn btn-primary btn-md" onClick={() => setStep(3)}>Continue <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        {/* Step 3: Budget & Timeline */}
        {step === 3 && (
          <div className="card animate-in">
            <div className="card-header">
              <div className="card-title">Budget & Timeline</div>
              <span className="badge badge-blue">Step 3 of 4</span>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
              <div className="form-group">
                <label className="form-label">Target Budget Range <span>*</span></label>
                <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: 12 }}>
                  <select className="form-select" value={form.currency} onChange={e => upd('currency', e.target.value)}>
                    {currencies.map(c => <option key={c}>{c}</option>)}
                  </select>
                  <input className="form-input" type="number" placeholder="Minimum budget" value={form.budgetMin} onChange={e => upd('budgetMin', e.target.value)} />
                  <input className="form-input" type="number" placeholder="Maximum budget" value={form.budgetMax} onChange={e => upd('budgetMax', e.target.value)} />
                </div>
                <div className="form-hint">Providing a budget range helps manufacturers submit accurate quotes</div>
              </div>
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">Sample Approval Date</label>
                  <input className="form-input" type="date" value={form.sampleDate} onChange={e => upd('sampleDate', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Required Delivery Date <span>*</span></label>
                  <input className="form-input" type="date" value={form.deliveryDate} onChange={e => upd('deliveryDate', e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Shipping Terms</label>
                <select className="form-select">
                  <option>FOB — Free On Board (factory port)</option>
                  <option>CIF — Cost, Insurance & Freight</option>
                  <option>EXW — Ex Works (factory pickup)</option>
                  <option>DDP — Delivered Duty Paid</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Additional Notes</label>
                <textarea className="form-textarea" rows={3} placeholder="Any special requirements, preferred factories, sustainability requirements, compliance needs..." value={form.additionalNotes} onChange={e => upd('additionalNotes', e.target.value)} />
              </div>
            </div>
            <div style={{ padding: 'var(--sp-5)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn btn-ghost btn-md" onClick={() => setStep(2)}>← Back</button>
              <button className="btn btn-primary btn-md" onClick={() => setStep(4)}>Review RFQ <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div className="card animate-in">
            <div className="card-header">
              <div className="card-title">Review & Submit RFQ</div>
              <span className="badge badge-emerald">Ready to Submit</span>
            </div>
            <div className="card-body">
              <div style={{ background: 'var(--emerald-50)', border: '1px solid var(--emerald-100)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-5)', marginBottom: 'var(--sp-6)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Info size={18} color="var(--emerald-600)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--emerald-700)', marginBottom: 4 }}>Your RFQ will be sent to matching manufacturers</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--emerald-600)' }}>Based on your requirements, we'll notify 8–12 verified manufacturers. You'll receive quotes within 48–72 hours.</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-5)' }}>
                {[
                  { label: 'Product Name', value: form.productName || 'Men\'s Polo Shirts' },
                  { label: 'Category', value: form.category || 'Polo Shirts' },
                  { label: 'Total Quantity', value: form.quantity ? `${Number(form.quantity).toLocaleString()} pcs` : '5,000 pcs' },
                  { label: 'Fabric', value: form.fabric || 'Cotton 100%' },
                  { label: 'Printing', value: form.printType },
                  { label: 'Budget Range', value: `$12,000–$18,000` },
                  { label: 'Sample Date', value: form.sampleDate || 'Jul 30, 2026' },
                  { label: 'Delivery Date', value: form.deliveryDate || 'Aug 25, 2026' },
                ].map(d => (
                  <div key={d.label} style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 'var(--sp-4)', background: 'var(--slate-50)', borderRadius: 'var(--r-md)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{d.label}</span>
                    <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 'var(--sp-5)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn btn-ghost btn-md" onClick={() => setStep(3)}>← Back</button>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost btn-md">Save as Draft</button>
                <button className="btn btn-primary btn-md" onClick={() => navigate('/rfq/SXR-001')}>
                  <Send size={16} /> Submit RFQ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
