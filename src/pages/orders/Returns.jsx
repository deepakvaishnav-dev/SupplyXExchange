import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { RotateCcw, Package, AlertTriangle, CheckCircle, Clock, Upload, ArrowRight, FileText } from 'lucide-react';

const mockReturns = [
  {
    id: 'RMA-2026-089',
    orderId: 'ORD-8842',
    manufacturer: 'Tirupur Clothing Co.',
    item: 'Custom Heavyweight Cotton Hoodies',
    qty: 25,
    reason: 'Defective seam stitching on sleeve cuff',
    status: 'In Review',
    date: '2026-07-20',
    refundAmount: '$625.00'
  },
  {
    id: 'RMA-2026-042',
    orderId: 'ORD-7619',
    manufacturer: 'Urban Stitchers',
    item: 'Over-sized Graphic Tees',
    qty: 10,
    reason: 'Color mismatch (Navy vs Royal Blue)',
    status: 'Approved',
    date: '2026-06-14',
    refundAmount: '$180.00'
  }
];

export default function Returns() {
  const [showNewReturnModal, setShowNewReturnModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState('ORD-9104');
  const [reason, setReason] = useState('Stitching Defect');
  const [notes, setNotes] = useState('');

  return (
    <Layout title="Returns & Claims" subtitle="Manage defective goods, RMA requests, and escrow refunds.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        {/* Banner Header */}
        <div className="card" style={{ padding: 24, background: 'linear-gradient(135deg, var(--slate-900), var(--slate-800))', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: 'rgba(255,84,0,0.15)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <RotateCcw size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>SupplyX Quality Guarantee &amp; Returns</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)', marginTop: 4 }}>
                  All production orders are backed by escrow protection. Report defects within 14 days of delivery.
                </p>
              </div>
            </div>
            <button className="btn btn-orange" onClick={() => setShowNewReturnModal(true)}>
              <RotateCcw size={16} /> File New Claim (RMA)
            </button>
          </div>
        </div>

        {/* Status Metrics */}
        <div className="responsive-grid-3col">
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slate-500)' }}>Active RMA Claims</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: 4 }}>1</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--amber-500)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
              <Clock size={14} /> 1 Under Factory Inspection
            </div>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slate-500)' }}>Resolved Returns</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--green-600)', marginTop: 4 }}>4</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--green-600)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle size={14} /> 100% Escrow Refunded
            </div>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slate-500)' }}>Quality Rating</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: 4 }}>99.2%</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 4 }}>
              Defect Rate Across 12 Shipments
            </div>
          </div>
        </div>

        {/* RMA Table */}
        <div className="card" style={{ padding: 0 }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--slate-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Recent Claims &amp; Returns</h3>
            <span className="badge badge-orange">2 Records</span>
          </div>

          <div className="table-responsive">
            <table className="data-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>RMA ID</th>
                  <th>Order / Product</th>
                  <th>Manufacturer</th>
                  <th>Qty</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockReturns.map((ret) => (
                  <tr key={ret.id}>
                    <td style={{ fontWeight: 700, color: 'var(--orange-600)' }}>{ret.id}</td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{ret.orderId}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>{ret.item}</div>
                    </td>
                    <td>{ret.manufacturer}</td>
                    <td>{ret.qty} Pcs</td>
                    <td>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--slate-700)' }}>{ret.reason}</span>
                    </td>
                    <td>
                      <span className={`badge ${ret.status === 'Approved' ? 'badge-green' : 'badge-orange'}`}>
                        {ret.status}
                      </span>
                    </td>
                    <td style={{ fontWeight: 700 }}>{ret.refundAmount}</td>
                    <td>
                      <button className="btn btn-outline btn-sm">
                        Details <ArrowRight size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New RMA Modal */}
        {showNewReturnModal && (
          <div className="modal-backdrop" onClick={() => setShowNewReturnModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 540 }}>
              <div style={{ padding: 24, borderBottom: '1px solid var(--slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800 }}>File Return / Quality Claim</h3>
                <button className="btn-icon-only" onClick={() => setShowNewReturnModal(false)}>✕</button>
              </div>
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label className="form-label">Select Order</label>
                  <select className="form-input" value={selectedOrder} onChange={(e) => setSelectedOrder(e.target.value)}>
                    <option value="ORD-9104">ORD-9104 — Tirupur Clothing Co. (1,000 Heavyweight Tees)</option>
                    <option value="ORD-8842">ORD-8842 — Urban Stitchers (500 Hoodies)</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Claim Type / Defect Category</label>
                  <select className="form-input" value={reason} onChange={(e) => setReason(e.target.value)}>
                    <option value="Stitching Defect">Stitching / Seam Defect</option>
                    <option value="Fabric Measurement">Sizing / Dimension Out of Tolerance</option>
                    <option value="Color Discrepancy">Color Shade / Dye Mismatch</option>
                    <option value="Quantity Shortage">Missing Quantity in Shipment</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Detailed Explanation &amp; Inspection Notes</label>
                  <textarea
                    className="form-input"
                    rows={4}
                    placeholder="Describe defect details, box numbers affected..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div style={{ border: '2px dashed var(--slate-300)', borderRadius: 12, padding: 20, textAlign: 'center', backgroundColor: 'var(--slate-50)' }}>
                  <Upload size={24} color="var(--slate-500)" style={{ margin: '0 auto 8px auto' }} />
                  <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Upload Defect Photos / QC Inspection Sheet</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 4 }}>Supports PNG, JPG, PDF up to 15MB</div>
                </div>

                <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 12 }}>
                  <button className="btn btn-outline" onClick={() => setShowNewReturnModal(false)}>Cancel</button>
                  <button className="btn btn-orange" onClick={() => setShowNewReturnModal(false)}>Submit RMA Claim</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}
