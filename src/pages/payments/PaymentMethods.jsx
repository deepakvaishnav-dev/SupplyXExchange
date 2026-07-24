import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { CreditCard, Wallet, ShieldCheck, Plus, CheckCircle, Lock, Building2 } from 'lucide-react';

export default function PaymentMethods() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [methods, setMethods] = useState([
    { id: 1, type: 'Corporate Card', cardHolder: 'Shrishail Kalagi', brand: 'HDFC Visa Platinum', last4: '4892', expiry: '09/28', default: true },
    { id: 2, type: 'Bank Wire (RTGS/NEFT)', cardHolder: 'Kalagi Apparel Corp', brand: 'ICICI Current Account', last4: '9910', expiry: 'N/A', default: false }
  ]);

  return (
    <Layout title="Payment Methods & Escrow Wallet" subtitle="Manage payment instruments, corporate cards, and Escrow deposit balances.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        {/* Wallet Balance Header */}
        <div className="responsive-grid-2col">
          <div className="card" style={{ padding: 24, background: 'linear-gradient(135deg, var(--orange-500), var(--orange-600))', color: '#fff' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.9 }}>SupplyX Escrow Reserve Balance</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: 4 }}>$45,000.00</div>
            <div style={{ fontSize: '0.8125rem', marginTop: 8, opacity: 0.9, display: 'flex', alignItems: 'center', gap: 6 }}>
              <ShieldCheck size={16} /> 100% Guaranteed Escrow Protected
            </div>
          </div>

          <div className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-500)' }}>Active Escrow Hold</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>$12,400.00</div>
              </div>
              <button className="btn btn-outline" onClick={() => setShowAddModal(true)}>
                <Plus size={16} /> Add Payment Method
              </button>
            </div>
          </div>
        </div>

        {/* Saved Payment Methods */}
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>Saved Payment Instruments</h3>
          <div className="responsive-grid-2col">
            {methods.map((m) => (
              <div key={m.id} style={{ border: m.default ? '2px solid var(--orange-500)' : '1px solid var(--slate-200)', borderRadius: 12, padding: 20, backgroundColor: m.default ? 'var(--orange-50)' : '#fff', position: 'relative' }}>
                {m.default && (
                  <span className="badge badge-orange" style={{ position: 'absolute', top: 16, right: 16 }}>
                    Default
                  </span>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: 'var(--slate-900)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {m.type.includes('Card') ? <CreditCard size={20} /> : <Building2 size={20} />}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700 }}>{m.brand}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>{m.type}</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)', marginTop: 8 }}>
                  •••• •••• •••• {m.last4}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 4 }}>
                  Holder: {m.cardHolder} {m.expiry !== 'N/A' && `• Exp: ${m.expiry}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showAddModal && (
          <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 480 }}>
              <div style={{ padding: 20, borderBottom: '1px solid var(--slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800 }}>Add Payment Instrument</h3>
                <button className="btn-icon-only" onClick={() => setShowAddModal(false)}>✕</button>
              </div>
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label className="form-label">Cardholder Name</label>
                  <input type="text" className="form-input" placeholder="e.g. Shrishail Kalagi" />
                </div>
                <div>
                  <label className="form-label">Card Number</label>
                  <input type="text" className="form-input" placeholder="4532 •••• •••• 8812" />
                </div>
                <div className="form-grid-2">
                  <div>
                    <label className="form-label">Expiry Date</label>
                    <input type="text" className="form-input" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="form-label">CVC / CVV</label>
                    <input type="text" className="form-input" placeholder="123" />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 12 }}>
                  <button className="btn btn-outline" onClick={() => setShowAddModal(false)}>Cancel</button>
                  <button className="btn btn-orange" onClick={() => setShowAddModal(false)}>Save Card</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}
