import { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function RFQCreate() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [selectedSizes, setSelectedSizes] = useState(['M', 'L', 'XL']);

  const toggleSize = (sz) => {
    setSelectedSizes(prev =>
      prev.includes(sz) ? prev.filter(s => s !== sz) : [...prev, sz]
    );
  };

  return (
    <Layout title="Request a Quotation (RFQ)">
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '16px' }}>
        Home &gt; <span style={{ color: 'var(--slate-900)', fontWeight: 600 }}>Request Quotation</span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>Request a Quotation (RFQ)</h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>Submit your requirements and receive competitive quotes from verified manufacturers.</p>
      </div>

      {/* Stepper Horizontal */}
      <div className="card" style={{ padding: '16px 32px', marginBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', position: 'relative' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--orange-500)', color: '#fff', fontWeight: 800, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>Product Requirements</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.5 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--slate-200)', color: 'var(--slate-700)', fontWeight: 800, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)' }}>Add Attachments</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.5 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--slate-200)', color: 'var(--slate-700)', fontWeight: 800, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)' }}>Select Manufacturers</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.5 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--slate-200)', color: 'var(--slate-700)', fontWeight: 800, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</div>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)' }}>Review &amp; Submit</span>
          </div>

        </div>
      </div>

      {/* Main Grid: Form + Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
        
        {/* Form Column */}
        <div className="card" style={{ padding: '28px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 4 }}>1. Product Requirements</h2>
          <p style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '24px' }}>Provide detailed information about your product requirements.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Product Category <span style={{ color: 'red' }}>*</span>
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>T-Shirts</option>
                <option>Polo T-Shirts</option>
                <option>Hoodies</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Product Type <span style={{ color: 'red' }}>*</span>
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>Basic Crew Neck T-Shirt</option>
                <option>Oversized T-Shirt</option>
                <option>Polo T-Shirt</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Fabric / Material <span style={{ color: 'red' }}>*</span>
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>100% Cotton (160 GSM)</option>
                <option>Cotton Polyester Blend</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                GSM <span style={{ color: 'red' }}>*</span>
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>160 GSM</option>
                <option>180 GSM</option>
                <option>200 GSM</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Quantity Required <span style={{ color: 'red' }}>*</span>
              </label>
              <input type="number" defaultValue={1000} style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Units
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>Pieces</option>
                <option>Dozens</option>
              </select>
            </div>

          </div>

          {/* Sizes Pill Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 8 }}>
              Sizes
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL+'].map((sz) => (
                <button
                  key={sz}
                  type="button"
                  className={`size-pill ${selectedSizes.includes(sz) ? 'active' : ''}`}
                  onClick={() => toggleSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 8 }}>
              Color
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="color-swatch" style={{ background: '#000', outline: '2px solid var(--orange-500)' }} />
              <span className="color-swatch" style={{ background: '#fff' }} />
              <span className="color-swatch" style={{ background: '#CBD5E1' }} />
              <span className="color-swatch" style={{ background: '#1E3A8A' }} />
              <span className="color-swatch" style={{ background: '#14532D' }} />
              <span className="color-swatch" style={{ background: '#991B1B' }} />
              <span style={{ fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 600 }}>+ More</span>
            </div>
          </div>

          {/* Printing & Packaging */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Printing / Decoration
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>Screen Printing</option>
                <option>DTG Printing</option>
                <option>Embroidery</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Print Locations
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>Front</option>
                <option>Back</option>
                <option>Front &amp; Back</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Packaging
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>Polybag (Individual)</option>
                <option>Bulk Box</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
                Tags / Labels
              </label>
              <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}>
                <option>Custom Neck Label</option>
                <option>Standard Label</option>
              </select>
            </div>
          </div>

          {/* Textarea */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
              Additional Requirements (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Please share your sample if possible. Need soft fabric with durable stitching."
              style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.875rem' }}
            />
            <div style={{ textAlign: 'right', fontSize: '0.72rem', color: 'var(--slate-400)', marginTop: 4 }}>0/500</div>
          </div>

          {/* Submit Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--slate-200)', paddingTop: '20px' }}>
            <button className="btn btn-outline" onClick={() => navigate('/search')}>Cancel</button>
            <button className="btn btn-orange" onClick={() => navigate('/rfq/SXR-001/compare')}>
              Save &amp; Next <ArrowRight size={16} />
            </button>
          </div>

        </div>

        {/* Right Sidebar Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>RFQ Summary</h3>

            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80" alt="Preview" style={{ width: 54, height: 54, borderRadius: 8, objectFit: 'cover' }} />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--slate-900)' }}>Basic Crew Neck T-Shirt</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>T-Shirts</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>By Tirupur Clothing Co.</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Quantity</span><strong>1000 Pieces</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Fabric</span><strong>100% Cotton (160 GSM)</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Sizes</span><strong>M, L, XL</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Color</span><strong>● Black</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Printing</span><strong>Screen Printing (Front)</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Packaging</span><strong>Polybag (Individual)</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Delivery Location</span><strong>Mumbai, Maharashtra</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Required Delivery</span><strong>30 Days</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--slate-200)', paddingTop: 8 }}>
                <span style={{ color: 'var(--slate-500)' }}>Budget (Optional)</span>
                <strong>₹2,10,000 - ₹2,50,000</strong>
              </div>
            </div>
          </div>

          {/* Why Request Quote */}
          <div className="card" style={{ backgroundColor: 'var(--slate-50)' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>Why Request Quote?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.78rem', color: 'var(--slate-700)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--orange-500)" /> Compare prices from multiple manufacturers</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--orange-500)" /> Get the best quality at competitive rates</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--orange-500)" /> Secure payments with escrow protection</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--orange-500)" /> Build long-term relationships</div>
            </div>
          </div>

        </div>

      </div>

      {/* Note Footer Banner */}
      <div style={{ marginTop: '24px', backgroundColor: 'var(--blue-50)', padding: '12px 20px', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.8125rem', color: 'var(--blue-600)' }}>
        <Info size={18} />
        <span>Your request will be sent to selected verified manufacturers only. Your details are secure and confidential.</span>
      </div>

    </Layout>
  );
}
