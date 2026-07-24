import { useState } from 'react';
import { Download, MessageSquare, MapPin, CheckCircle2, AlertCircle, Share2, FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function ProductionTracking() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Order Overview');

  return (
    <Layout title="Order Details & Tracking">
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '16px' }}>
        My Orders &gt; <span style={{ color: 'var(--slate-900)', fontWeight: 600 }}>Order #SX-2024-05-001</span>
      </div>

      {/* Order Header Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>Order #SX-2024-05-001</h1>
          <span className="badge badge-green">In Production</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn btn-outline">
            <Download size={16} /> Download Invoice
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/messages')}>
            <MessageSquare size={16} /> Chat with Supplier
          </button>
          <button className="btn btn-outline">More ▾</button>
        </div>
      </div>

      {/* Metric Cards Header */}
      <div className="card" style={{ padding: '16px 24px', marginBottom: '24px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Order Date</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>15 May 2024</div>
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Manufacturer</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', cursor: 'pointer' }} onClick={() => navigate('/manufacturer/TC-001')}>
            Tirupur Clothing Co.
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Product</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>Basic Crew Neck T-Shirt</div>
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Quantity</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>1000 Pieces</div>
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Order Value</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--slate-900)' }}>₹2,10,000</div>
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Expected Delivery</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>10 Jun 2024</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-row">
        {['Order Overview', 'Production Tracking', 'Payments', 'Documents', 'Communication', 'Quality Checks'].map((t) => (
          <button
            key={t}
            className={`tab-btn ${activeTab === t ? 'active' : ''}`}
            onClick={() => setActiveTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Main Grid Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px' }}>
        
        {/* Left Column: Details & Payments */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            
            {/* Order Details Panel */}
            <div className="card">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>Order Details</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Order ID</span><strong>SX-2024-05-001</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Product</span><strong>Basic Crew Neck T-Shirt</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Fabric</span><strong>100% Cotton (160 GSM)</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Color</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span className="color-swatch" style={{ background: '#000', width: 14, height: 14 }} /> Black
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Sizes</span><strong>M, L, XL</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Printing</span><strong>Screen Printing (Front)</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Packaging</span><strong>Polybag (Individual)</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Total Quantity</span><strong>1000 Pieces</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Unit Price</span><strong>₹210.00 / Piece</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--slate-200)', paddingTop: '8px' }}>
                  <span style={{ color: 'var(--slate-900)', fontWeight: 700 }}>Total Order Value</span>
                  <strong style={{ color: 'var(--slate-900)', fontSize: '0.95rem' }}>₹2,10,000</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Payment Terms</span><strong style={{ fontSize: '0.78rem' }}>50% Advance, 50% Before Dispatch</strong></div>
              </div>
            </div>

            {/* Shipping Details Panel */}
            <div className="card">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>Shipping Details</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.84rem' }}>
                <div>
                  <div style={{ color: 'var(--slate-500)', marginBottom: 2 }}>Delivery Location</div>
                  <div style={{ fontWeight: 600, color: 'var(--slate-900)', lineHeight: 1.4 }}>
                    SupplyXExchange <br />
                    Office No. 123, 2nd Floor, Koramangala, Bangalore, Karnataka - 560034, India
                  </div>
                  <a href="#map" onClick={(e) => e.preventDefault()} style={{ fontSize: '0.78rem', color: 'var(--orange-500)', fontWeight: 600, marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={13} /> View on Map
                  </a>
                </div>

                <div style={{ borderTop: '1px solid var(--slate-200)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Shipping Method</span>
                  <strong>Road Transport</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Expected Delivery</span>
                  <strong>10 Jun 2024</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Contact Person</span>
                  <strong>Shrishail Kalagi</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--slate-500)' }}>Mobile</span>
                  <strong>+91 98765 43210</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Payment Summary Box with Chart */}
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>Payment Summary</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: '24px', alignItems: 'center' }}>
              
              {/* Doughnut SVG Visual */}
              <div style={{ position: 'relative', width: '140px', height: '140px' }}>
                <svg width="140" height="140" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#EAECF0" strokeWidth="4" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--green-500)" strokeWidth="4" strokeDasharray="50, 100" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--amber-500)" strokeWidth="4" strokeDasharray="50, 100" strokeDashoffset="-50" />
                </svg>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--slate-500)' }}>Total Order Value</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--slate-900)' }}>₹2,10,000</div>
                </div>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'var(--green-500)' }} />
                    Advance Paid (50%)
                  </span>
                  <strong>₹1,05,000</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'var(--amber-500)' }} />
                    Balance Pending (50%)
                  </span>
                  <strong>₹1,05,000</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'var(--slate-400)' }} />
                    Other Charges
                  </span>
                  <strong>₹0</strong>
                </div>
              </div>

              <button className="btn btn-outline btn-sm" onClick={() => navigate('/payments')}>
                View Payment History
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Production Tracking Timeline */}
        <div>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Production Tracking</h3>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--green-600)' }}>60%</span>
            </div>

            {/* Overall Progress bar */}
            <div className="progress-bar-bg" style={{ marginBottom: '24px' }}>
              <div className="progress-bar-fill" style={{ width: '60%' }} />
            </div>

            {/* Vertical timeline steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
              
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: 'var(--green-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Order Confirmed</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>15 May 2024, 11:30 AM</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: 'var(--green-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Advance Payment Confirmed</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>15 May 2024, 02:45 PM</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: 'var(--green-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Fabric Procured</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>17 May 2024, 10:20 AM</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, backgroundColor: 'var(--green-50)', padding: '8px', borderRadius: 'var(--r-md)', margin: '0 -8px' }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid var(--green-600)', backgroundColor: '#fff', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--green-600)' }}>Cutting in Progress</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-600)' }}>20 May 2024, 09:15 AM</div>
                </div>
              </div>

              {['Stitching', 'Quality Check', 'Packing', 'Ready to Dispatch', 'Delivered'].map((step) => (
                <div key={step} style={{ display: 'flex', gap: 12, opacity: 0.6 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid var(--slate-300)', backgroundColor: '#fff', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)' }}>{step}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Pending</div>
                  </div>
                </div>
              ))}

            </div>

            {/* Production Photo Card */}
            <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', padding: '12px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80" alt="Production Photo" style={{ width: 48, height: 48, borderRadius: 6, objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--slate-900)' }}>Cutting &amp; Stitching Photos</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Uploaded today</div>
              </div>
              <button className="btn btn-outline btn-sm" style={{ fontSize: '0.72rem' }}>
                View Production Photos
              </button>
            </div>

            {/* Chat Box */}
            <div style={{ backgroundColor: 'var(--slate-50)', padding: '14px', borderRadius: 'var(--r-md)', marginTop: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)' }}>Have a Question?</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 10 }}>Chat with your supplier or our support team.</div>
              <button className="btn btn-outline btn-sm" style={{ width: '100%' }} onClick={() => navigate('/messages')}>
                Chat Now
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Need Assistance / Bottom Quick Actions Bar */}
      <div className="card" style={{ marginTop: '24px', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'var(--blue-50)', color: 'var(--blue-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            🎧
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>Need Assistance?</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>Our team is here to help you at every step.</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn btn-outline btn-sm">Raise Dispute</button>
          <button className="btn btn-outline btn-sm">Request Change</button>
          <button className="btn btn-outline btn-sm">Download Contract</button>
        </div>
      </div>
    </Layout>
  );
}
