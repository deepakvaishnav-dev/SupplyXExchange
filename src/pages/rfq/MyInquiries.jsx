import { useState } from 'react';
import { Search, Filter, Plus, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const inquiriesList = [
  {
    id: 'INQ-2024-05-08',
    product: 'Basic Crew Neck T-Shirt',
    quantity: '1000 Pieces',
    fabric: '100% Cotton',
    manufacturer: 'Tirupur Clothing Co.',
    initials: 'TC',
    bgColor: '#101828',
    status: 'Quoted',
    responses: '3 Quotes',
    lastUpdated: '17 May 2024 10:30 AM',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'INQ-2024-05-07',
    product: 'Hoodies',
    quantity: '500 Pieces',
    fabric: 'Fleece',
    manufacturer: 'Urban Stitchers',
    initials: 'US',
    bgColor: '#1E293B',
    status: 'New',
    responses: '1 Response',
    lastUpdated: '16 May 2024 04:15 PM',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'INQ-2024-05-06',
    product: 'Joggers',
    quantity: '800 Pieces',
    fabric: 'Cotton Blend',
    manufacturer: 'Knits & More',
    initials: 'KM',
    bgColor: '#0F172A',
    status: 'Negotiation',
    responses: '2 Quotes',
    lastUpdated: '16 May 2024 11:20 AM',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'INQ-2024-05-05',
    product: 'Canvas Tote Bags',
    quantity: '2000 Pieces',
    fabric: '12 Oz Canvas',
    manufacturer: 'Styleweave Exports',
    initials: 'SE',
    bgColor: '#047857',
    status: 'New',
    responses: '0',
    lastUpdated: '15 May 2024 09:45 AM',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=150&q=80'
  }
];

export default function MyInquiries() {
  const navigate = useNavigate();
  const [selectedInquiry, setSelectedInquiry] = useState(inquiriesList[0]);
  const [activeTab, setActiveTab] = useState('All (8)');

  return (
    <Layout title="My Inquiries">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)' }}>My Inquiries</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>Manage all your product inquiries and quotations in one place.</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <div className="topbar-search-input" style={{ width: '220px', backgroundColor: '#ffffff', display: 'flex' }}>
            <Search size={16} color="var(--slate-400)" />
            <input placeholder="Search inquiries..." />
          </div>
          <button className="btn btn-outline">
            <Filter size={16} /> Filters
          </button>
          <button className="btn btn-orange" onClick={() => navigate('/rfq/create')}>
            <Plus size={16} /> New Inquiry
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-row">
        {['All (8)', 'New (3)', 'Quoted (3)', 'Negotiation (1)', 'Converted (1)'].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Layout: Table on Left + Selected Detail Side Drawer on Right */}
      <div className="responsive-layout-detail">
        
        {/* Inquiries Table Container */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', minWidth: 0 }}>
          <div className="table-responsive-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ minWidth: '200px' }}>Inquiry Details</th>
                  <th style={{ minWidth: '150px' }}>Manufacturer</th>
                  <th>Status</th>
                  <th>Responses</th>
                  <th style={{ minWidth: '130px' }}>Last Updated</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {inquiriesList.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      backgroundColor: selectedInquiry.id === item.id ? 'var(--orange-50)' : 'transparent',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedInquiry(item)}
                  >
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <img src={item.image} alt={item.product} style={{ width: 44, height: 44, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 700, color: 'var(--slate-900)' }} className="truncate">{item.product}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>{item.quantity} • {item.fabric}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>ID: {item.id}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                        <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: item.bgColor, color: '#fff', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {item.initials}
                        </div>
                        <span style={{ fontWeight: 600 }}>{item.manufacturer}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${item.status === 'Quoted' ? 'badge-green' : item.status === 'New' ? 'badge-blue' : 'badge-amber'}`} style={{ whiteSpace: 'nowrap' }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}><strong style={{ color: 'var(--slate-900)' }}>{item.responses}</strong></td>
                    <td style={{ fontSize: '0.78rem', color: 'var(--slate-500)', whiteSpace: 'nowrap' }}>{item.lastUpdated}</td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn btn-outline btn-sm" onClick={(e) => { e.stopPropagation(); setSelectedInquiry(item); }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Inquiry Detail Side Panel */}
        <div className="card" style={{ alignSelf: 'start', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid var(--slate-200)', paddingBottom: '12px' }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-500)' }}>Inquiry ID: {selectedInquiry.id}</div>
            <span className={`badge ${selectedInquiry.status === 'Quoted' ? 'badge-green' : selectedInquiry.status === 'New' ? 'badge-blue' : 'badge-amber'}`}>
              {selectedInquiry.status}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '16px' }}>
            <img src={selectedInquiry.image} alt={selectedInquiry.product} style={{ width: 56, height: 56, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }} className="truncate">{selectedInquiry.product}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>{selectedInquiry.quantity} • {selectedInquiry.fabric}</div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--slate-200)', paddingTop: '14px', marginBottom: '16px' }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '10px' }}>Inquiry Summary</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ color: 'var(--slate-500)' }}>Quantity</span>
                <strong style={{ textAlign: 'right' }}>{selectedInquiry.quantity}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ color: 'var(--slate-500)' }}>Fabric</span>
                <strong style={{ textAlign: 'right' }}>{selectedInquiry.fabric}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ color: 'var(--slate-500)' }}>Target Price</span>
                <strong style={{ textAlign: 'right' }}>₹210 / Piece</strong>
              </div>
            </div>
          </div>

          <button className="btn btn-orange" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/rfq/SXR-001/compare')}>
            <Scale size={16} /> Compare Quotes
          </button>
        </div>

      </div>
    </Layout>
  );
}
