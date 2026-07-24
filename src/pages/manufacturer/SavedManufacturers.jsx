import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Heart, MapPin, Star, Shirt, ArrowRight, Trash2, MessageSquare } from 'lucide-react';

const mockSaved = [
  {
    id: 'TC-001',
    name: 'Tirupur Clothing Co.',
    location: 'Tirupur, Tamil Nadu',
    rating: 4.8,
    reviews: 120,
    minOrder: '100 Pcs',
    capacity: '500,000 Pcs/mo',
    tags: ['T-Shirts', 'Polo Shirts', 'Hoodies'],
    verified: true
  },
  {
    id: 'US-002',
    name: 'Urban Stitchers',
    location: 'Ludhiana, Punjab',
    rating: 4.7,
    reviews: 98,
    minOrder: '120 Pcs',
    capacity: '300,000 Pcs/mo',
    tags: ['T-Shirts', 'Hoodies', 'Sweatshirts'],
    verified: true
  },
  {
    id: 'SE-004',
    name: 'Styleweave Exports',
    location: 'Bangalore, Karnataka',
    rating: 4.9,
    reviews: 150,
    minOrder: '200 Pcs',
    capacity: '400,000 Pcs/mo',
    tags: ['Polo Shirts', 'Shirts', 'Custom Wear'],
    verified: true
  }
];

export default function SavedManufacturers() {
  const navigate = useNavigate();
  const [savedList, setSavedList] = useState(mockSaved);

  const handleRemove = (id) => {
    setSavedList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Layout title="Saved Manufacturers" subtitle="Shortlisted factory suppliers for quick RFQ requests and orders.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--slate-600)' }}>
            Showing <strong style={{ color: 'var(--slate-900)' }}>{savedList.length}</strong> shortlisted suppliers
          </div>
          <button className="btn btn-black btn-sm" onClick={() => navigate('/search')}>
            <Heart size={14} /> Find More Manufacturers
          </button>
        </div>

        {savedList.length === 0 ? (
          <div className="card" style={{ padding: 48, textAlign: 'center' }}>
            <Heart size={40} color="var(--slate-300)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>No Saved Manufacturers Yet</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginTop: 4, marginBottom: 20 }}>
              Bookmark suppliers while searching the catalog to view them quickly here.
            </p>
            <button className="btn btn-orange" onClick={() => navigate('/search')}>
              Browse Verified Factories
            </button>
          </div>
        ) : (
          <div className="responsive-grid-3col">
            {savedList.map((mfg) => (
              <div key={mfg.id} className="card" style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="badge badge-green">Verified</span>
                    <button className="btn-icon-only" style={{ border: 'none', color: 'var(--red-500)' }} onClick={() => handleRemove(mfg.id)} title="Remove bookmark">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, marginTop: 12, color: 'var(--slate-900)' }}>{mfg.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8125rem', color: 'var(--slate-500)', marginTop: 4 }}>
                    <MapPin size={14} /> {mfg.location}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '12px 0' }}>
                    <Star size={14} fill="var(--amber-500)" color="var(--amber-500)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{mfg.rating}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>({mfg.reviews} reviews)</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '12px 0' }}>
                    {mfg.tags.map((t, idx) => (
                      <span key={idx} className="badge" style={{ backgroundColor: 'var(--slate-100)', color: 'var(--slate-700)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ padding: '12px 0', borderTop: '1px solid var(--slate-100)', fontSize: '0.8125rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--slate-500)' }}>Min Order: <strong>{mfg.minOrder}</strong></span>
                    <span style={{ color: 'var(--slate-500)' }}>Capacity: <strong>{mfg.capacity}</strong></span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                  <button className="btn btn-outline btn-sm" style={{ flex: 1 }} onClick={() => navigate('/messages')}>
                    <MessageSquare size={14} /> Chat
                  </button>
                  <button className="btn btn-orange btn-sm" style={{ flex: 1 }} onClick={() => navigate('/rfq/create')}>
                    Request RFQ <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
}
