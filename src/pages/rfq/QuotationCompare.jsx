import { useState } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function QuotationCompare() {
  const navigate = useNavigate();

  return (
    <Layout title="Compare Quotations">
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '16px', flexWrap: 'wrap' }}>
        Home &gt; My Inquiries &gt; RFQ-2024-05-001 &gt; <span style={{ color: 'var(--slate-900)', fontWeight: 600 }}>Compare Quotations</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>Compare Quotations</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>Review and compare quotes from verified manufacturers and choose the best one.</p>
        </div>
        <button className="btn btn-outline">
          <Download size={16} /> Download Comparison (PDF)
        </button>
      </div>

      {/* Top RFQ Specs Summary Card */}
      <div className="card" style={{ padding: '20px', marginBottom: '24px', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px', flex: 1 }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>RFQ ID</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>RFQ-2024-05-001</div>
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
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Fabric</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>100% Cotton (160 GSM)</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Delivery Location</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>Mumbai, Maharashtra</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Required Delivery</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)' }}>30 Days</div>
            </div>
          </div>

          <button className="btn btn-outline btn-sm" onClick={() => navigate('/rfq/SXR-001')}>
            View RFQ Details
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="responsive-layout-sidebar">
        
        {/* Left Filter Sidebar */}
        <div className="card" style={{ padding: '16px', alignSelf: 'start' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>Sort By</div>
          <select style={{ width: '100%', padding: '8px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', marginBottom: '20px', fontSize: '0.8125rem' }}>
            <option>Total Price (Low to High)</option>
            <option>Lead Time (Shortest)</option>
            <option>Rating (Highest)</option>
          </select>

          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>Compare</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem', marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> Select All</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> Tirupur Clothing Co.</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> Urban Stitchers</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> Knits &amp; More</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> Styleweave Exports</label>
          </div>

          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>Preferences</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> Verified Manufacturer</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> High Rating (4★ &amp; above)</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" /> ISO Certified</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" /> Fastest Delivery</label>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', minWidth: 0 }}>
          <div className="table-responsive-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ minWidth: '180px', backgroundColor: '#ffffff' }}>Manufacturer</th>
                  
                  {/* Column 1: TC */}
                  <th style={{ backgroundColor: '#ffffff', minWidth: '220px' }}>
                    <div style={{ textAlign: 'center', padding: '12px 8px' }}>
                      <span className="badge badge-green" style={{ marginBottom: 8 }}>Best Price</span>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#101828', color: '#fff', fontWeight: 800, fontSize: '0.84rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TC</div>
                        <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '0.9rem' }}>Tirupur Clothing Co.</div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--orange-500)', fontWeight: 700 }}>★ 4.8 (120 Reviews)</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Tirupur, Tamil Nadu</div>
                    </div>
                  </th>

                  {/* Column 2: US */}
                  <th style={{ backgroundColor: '#ffffff', minWidth: '220px' }}>
                    <div style={{ textAlign: 'center', padding: '12px 8px' }}>
                      <span className="badge badge-blue" style={{ marginBottom: 8 }}>Best Quality</span>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#1E293B', color: '#fff', fontWeight: 800, fontSize: '0.84rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>US</div>
                        <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '0.9rem' }}>Urban Stitchers</div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--orange-500)', fontWeight: 700 }}>★ 4.7 (98 Reviews)</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Ludhiana, Punjab</div>
                    </div>
                  </th>

                  {/* Column 3: KM */}
                  <th style={{ backgroundColor: '#ffffff', minWidth: '220px' }}>
                    <div style={{ textAlign: 'center', padding: '12px 8px' }}>
                      <span className="badge badge-orange" style={{ marginBottom: 8 }}>Fastest Delivery</span>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#0F172A', color: '#fff', fontWeight: 800, fontSize: '0.84rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>KM</div>
                        <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '0.9rem' }}>Knits &amp; More</div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--orange-500)', fontWeight: 700 }}>★ 4.6 (76 Reviews)</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Delhi NCR</div>
                    </div>
                  </th>

                  {/* Column 4: SE */}
                  <th style={{ backgroundColor: '#ffffff', minWidth: '220px' }}>
                    <div style={{ textAlign: 'center', padding: '12px 8px' }}>
                      <div style={{ height: '24px' }}></div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#047857', color: '#fff', fontWeight: 800, fontSize: '0.84rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SE</div>
                        <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '0.9rem' }}>Styleweave Exports</div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--orange-500)', fontWeight: 700 }}>★ 4.9 (150 Reviews)</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Bangalore, Karnataka</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Unit Price (Per Piece)</strong></td>
                  <td><strong style={{ color: 'var(--green-600)', fontSize: '1rem' }}>₹210.00</strong></td>
                  <td><strong style={{ color: 'var(--slate-900)' }}>₹228.00</strong></td>
                  <td><strong style={{ color: 'var(--slate-900)' }}>₹215.00</strong></td>
                  <td><strong style={{ color: 'var(--slate-900)' }}>₹235.00</strong></td>
                </tr>
                <tr>
                  <td><strong>Total Price</strong></td>
                  <td>
                    <strong style={{ color: 'var(--green-600)', fontSize: '1.05rem' }}>₹2,10,000</strong>
                    <span className="badge badge-green" style={{ marginLeft: 6 }}>Lowest</span>
                  </td>
                  <td><strong style={{ color: 'var(--slate-900)' }}>₹2,28,000</strong></td>
                  <td><strong style={{ color: 'var(--slate-900)' }}>₹2,15,000</strong></td>
                  <td><strong style={{ color: 'var(--slate-900)' }}>₹2,35,000</strong></td>
                </tr>
                <tr>
                  <td><strong>MOQ</strong></td>
                  <td>100 Pcs</td>
                  <td>100 Pcs</td>
                  <td>150 Pcs</td>
                  <td>200 Pcs</td>
                </tr>
                <tr>
                  <td><strong>Fabric / GSM</strong></td>
                  <td>100% Cotton (160 GSM)</td>
                  <td>100% Cotton (160 GSM)</td>
                  <td>100% Cotton (160 GSM)</td>
                  <td>100% Cotton (160 GSM)</td>
                </tr>
                <tr>
                  <td><strong>Printing</strong></td>
                  <td>Screen Printing (Front)</td>
                  <td>Screen Printing (Front)</td>
                  <td>Screen Printing (Front)</td>
                  <td>Screen Printing (Front)</td>
                </tr>
                <tr>
                  <td><strong>Sizes</strong></td>
                  <td>M, L, XL</td>
                  <td>M, L, XL</td>
                  <td>M, L, XL</td>
                  <td>M, L, XL</td>
                </tr>
                <tr>
                  <td><strong>Colors Available</strong></td>
                  <td><div style={{ display: 'flex', gap: 4 }}><span className="color-swatch" style={{ background: '#000' }} /><span className="color-swatch" style={{ background: '#fff' }} /><span className="color-swatch" style={{ background: '#1E3A8A' }} /><span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>+3</span></div></td>
                  <td><div style={{ display: 'flex', gap: 4 }}><span className="color-swatch" style={{ background: '#000' }} /><span className="color-swatch" style={{ background: '#fff' }} /><span className="color-swatch" style={{ background: '#EF4444' }} /><span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>+3</span></div></td>
                  <td><div style={{ display: 'flex', gap: 4 }}><span className="color-swatch" style={{ background: '#000' }} /><span className="color-swatch" style={{ background: '#10B981' }} /><span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>+3</span></div></td>
                  <td><div style={{ display: 'flex', gap: 4 }}><span className="color-swatch" style={{ background: '#000' }} /><span className="color-swatch" style={{ background: '#fff' }} /><span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>+3</span></div></td>
                </tr>
                <tr>
                  <td><strong>Production Time</strong></td>
                  <td>3 – 5 Days</td>
                  <td>5 – 7 Days</td>
                  <td><span style={{ color: 'var(--orange-500)', fontWeight: 700 }}>3 – 4 Days (Fastest)</span></td>
                  <td>5 – 6 Days</td>
                </tr>
                <tr>
                  <td><strong>Delivery Time</strong></td>
                  <td>25 – 30 Days</td>
                  <td>30 – 35 Days</td>
                  <td><span style={{ color: 'var(--orange-500)', fontWeight: 700 }}>20 – 25 Days (Fastest)</span></td>
                  <td>28 – 32 Days</td>
                </tr>
                <tr>
                  <td><strong>Total Lead Time</strong></td>
                  <td><strong>28 – 35 Days</strong></td>
                  <td><strong>35 – 42 Days</strong></td>
                  <td><strong style={{ color: 'var(--orange-500)' }}>23 – 29 Days</strong></td>
                  <td><strong>33 – 38 Days</strong></td>
                </tr>
                <tr>
                  <td><strong>Payment Terms</strong></td>
                  <td>50% Advance, 50% Before Dispatch</td>
                  <td>60% Advance, 40% Before Dispatch</td>
                  <td>50% Advance, 50% Before Dispatch</td>
                  <td>50% Advance, 50% Before Dispatch</td>
                </tr>
                <tr>
                  <td><strong>Certifications</strong></td>
                  <td>ISO 9001:2015, BSCI</td>
                  <td>ISO 9001:2015</td>
                  <td>ISO 9001:2015, SEDEX</td>
                  <td>ISO 9001:2015, OEKO-TEX</td>
                </tr>
                <tr>
                  <td><strong>Notes</strong></td>
                  <td style={{ fontSize: '0.78rem', color: 'var(--slate-600)' }}>Good quality with competitive price.</td>
                  <td style={{ fontSize: '0.78rem', color: 'var(--slate-600)' }}>Premium quality fabrics.</td>
                  <td style={{ fontSize: '0.78rem', color: 'var(--slate-600)' }}>Fastest delivery option.</td>
                  <td style={{ fontSize: '0.78rem', color: 'var(--slate-600)' }}>Good for bulk repeat orders.</td>
                </tr>
                <tr>
                  <td><strong>Action</strong></td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn btn-green btn-sm" style={{ width: '100%' }} onClick={() => navigate('/orders/ORD-001/tracking')}>
                      Select This Supplier
                    </button>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn btn-outline btn-sm" style={{ width: '100%' }}>Select This Supplier</button>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn btn-orange btn-sm" style={{ width: '100%' }}>Select This Supplier</button>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn btn-outline btn-sm" style={{ width: '100%' }}>Select This Supplier</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Bottom Actions Bar */}
      <div className="card" style={{ marginTop: '24px', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)' }}>
          4 of 4 manufacturers selected
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-outline">
            Save Comparison
          </button>
          <button className="btn btn-orange" onClick={() => navigate('/orders/ORD-001/tracking')}>
            Continue to Next Step <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
