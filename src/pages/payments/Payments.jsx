import { useState } from 'react';
import { Download, ShieldCheck, CheckCircle2, AlertCircle, Clock, CreditCard, Lock, Plus, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function Payments() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Payment Overview');

  return (
    <Layout title="Payments">
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '16px' }}>
        Dashboard &gt; Payments &gt; <span style={{ color: 'var(--slate-900)', fontWeight: 600 }}>Order #SX-2024-05-001</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>Payments</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>All payments are secure and managed through our escrow protection.</p>
        </div>

        <button className="btn btn-outline">
          <Download size={16} /> Download Statement
        </button>
      </div>

      {/* Order Summary Top Card */}
      <div className="card" style={{ padding: '20px', marginBottom: '24px', display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#101828', color: '#fff', fontSize: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TC</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="badge badge-green">In Production</span>
            </div>
            <div style={{ fontWeight: 800, color: 'var(--slate-900)', fontSize: '1rem' }}>Tirupur Clothing Co.</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Order #SX-2024-05-001 • Tirupur, Tamil Nadu</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Product</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>Basic Crew Neck T-Shirt</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Quantity: 1000 Pieces</div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Total Order Value</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--slate-900)' }}>₹2,10,000</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Payment Terms: 50% Advance</div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <button className="btn btn-orange btn-sm" onClick={() => navigate('/orders/ORD-001/tracking')}>
            View Order Details
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-row">
        {['Payment Overview', 'Transactions', 'Invoices', 'Payment Methods', 'Escrow Protection'].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '24px' }}>
        
        {/* Left Column: Escrow Overview & Transactions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Escrow Timeline Panel */}
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '20px' }}>
              Escrow Payment Overview
            </h3>

            {/* Stepper horizontal */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', position: 'relative', marginBottom: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--green-500)', color: '#fff', fontWeight: 800, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>✓</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Advance Paid</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>15 May 2024</div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--green-600)', marginTop: 4 }}>₹1,05,000</div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--green-500)', color: '#fff', fontWeight: 800, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>✓</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>In Production</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>17 May 2024</div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--orange-500)', color: '#fff', fontWeight: 800, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>!</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Pending Final Payment</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Before Dispatch</div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--orange-500)', marginTop: 4 }}>₹1,05,000</div>
              </div>

              <div style={{ textAlign: 'center', opacity: 0.5 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--slate-200)', color: 'var(--slate-600)', fontWeight: 800, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>🔒</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Order Completed</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Release to Supplier</div>
              </div>
            </div>

            {/* Financial metric breakdown boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid var(--slate-200)', paddingTop: '20px' }}>
              <div style={{ backgroundColor: 'var(--slate-50)', padding: '14px', borderRadius: 'var(--r-md)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Total Paid (50%)</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--green-600)', margin: '4px 0' }}>₹1,05,000</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>15 May 2024</div>
              </div>

              <div style={{ backgroundColor: 'var(--slate-50)', padding: '14px', borderRadius: 'var(--r-md)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Balance Pending (50%)</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--orange-500)', margin: '4px 0' }}>₹1,05,000</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Before Dispatch</div>
              </div>

              <div style={{ backgroundColor: 'var(--slate-50)', padding: '14px', borderRadius: 'var(--r-md)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Escrow Balance</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--slate-900)', margin: '4px 0' }}>₹1,05,000</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Secured in Escrow</div>
              </div>
            </div>
          </div>

          {/* Transaction History Table */}
          <div className="card" style={{ padding: 0 }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--slate-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Transaction History</h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--orange-500)', fontWeight: 600, cursor: 'pointer' }}>View All Transactions &gt;</span>
            </div>

            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>15 May 2024, 11:30 AM</td>
                    <td><strong>Advance Payment</strong><div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Order #SX-2024-05-001</div></td>
                    <td><span className="badge badge-green">Credit</span></td>
                    <td><strong style={{ color: 'var(--slate-900)' }}>₹1,05,000</strong></td>
                    <td><span className="badge badge-green">Completed</span></td>
                    <td><button className="btn-icon-only" style={{ padding: 4 }}><Download size={14} /></button></td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>15 May 2024, 11:32 AM</td>
                    <td><strong>Escrow Hold</strong><div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Funds secured</div></td>
                    <td><span className="badge badge-blue">Hold</span></td>
                    <td><strong style={{ color: 'var(--slate-900)' }}>₹1,05,000</strong></td>
                    <td><span className="badge badge-blue">In Escrow</span></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>-</td>
                    <td><strong>Final Payment</strong><div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Before dispatch</div></td>
                    <td><span className="badge badge-amber">Pending</span></td>
                    <td><strong style={{ color: 'var(--slate-900)' }}>₹1,05,000</strong></td>
                    <td><span className="badge badge-amber">Pending</span></td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column: Doughnut Chart & Escrow Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Payment Summary Doughnut */}
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>Payment Summary</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ position: 'relative', width: 110, height: 110 }}>
                <svg width="110" height="110" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--green-500)" strokeWidth="4" strokeDasharray="50, 100" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--amber-500)" strokeWidth="4" strokeDasharray="50, 100" strokeDashoffset="-50" />
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.78rem' }}>
                <div><span style={{ color: 'var(--green-500)', fontWeight: 700 }}>● Paid (50%)</span> — ₹1,05,000</div>
                <div><span style={{ color: 'var(--amber-500)', fontWeight: 700 }}>● Pending (50%)</span> — ₹1,05,000</div>
                <div><span style={{ color: 'var(--slate-400)', fontWeight: 700 }}>● Other Charges</span> — ₹0</div>
              </div>
            </div>
          </div>

          {/* Protected Notice */}
          <div className="card" style={{ backgroundColor: 'var(--green-50)', borderColor: 'var(--green-100)' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <ShieldCheck size={22} color="var(--green-600)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 4 }}>Your payment is protected</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: 8 }}>
                  Funds are held securely in escrow and will be released only after you confirm order completion.
                </p>
                <a href="#escrow" onClick={(e) => e.preventDefault()} style={{ fontSize: '0.78rem', color: 'var(--green-600)', fontWeight: 700 }}>
                  How Escrow Works &gt;
                </a>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--slate-900)' }}>Payment Methods</h3>
              <button style={{ fontSize: '0.75rem', color: 'var(--orange-500)', fontWeight: 700 }}>+ Add New</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CreditCard size={18} color="var(--slate-700)" />
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700 }}>HDFC Bank</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>•••• •••• •••• 4567</div>
                  </div>
                </div>
                <span className="badge badge-green" style={{ fontSize: '0.68rem' }}>Primary</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CreditCard size={18} color="var(--slate-700)" />
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700 }}>ICICI Bank</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>•••• •••• •••• 8910</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
