import { useState } from 'react';
import { Search, Bookmark, Grid, List, RotateCcw, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const productsData = [
  {
    id: 'prod-001',
    name: 'Basic Crew Neck T-Shirt',
    gsm: '160 GSM',
    fabric: '100% Cotton',
    price: '₹210',
    moq: '100 Pcs',
    badge: 'Best Seller',
    badgeType: 'dark',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-002',
    name: 'Oversized T-Shirt',
    gsm: '180 GSM',
    fabric: '100% Cotton',
    price: '₹240',
    moq: '100 Pcs',
    badge: 'New',
    badgeType: 'green',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-003',
    name: 'Printed T-Shirt',
    gsm: '180 GSM',
    fabric: '100% Cotton',
    price: '₹260',
    moq: '100 Pcs',
    badge: 'Best Seller',
    badgeType: 'dark',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-004',
    name: 'Polo T-Shirt',
    gsm: '200 GSM',
    fabric: 'Pique Cotton',
    price: '₹280',
    moq: '100 Pcs',
    badge: 'New',
    badgeType: 'green',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-005',
    name: 'Drop Shoulder T-Shirt',
    gsm: '180 GSM',
    fabric: '100% Cotton',
    price: '₹230',
    moq: '100 Pcs',
    badge: 'Trending',
    badgeType: 'orange',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-006',
    name: 'Henley T-Shirt',
    gsm: '160 GSM',
    fabric: 'Cotton Lycra',
    price: '₹250',
    moq: '100 Pcs',
    badge: 'Best Seller',
    badgeType: 'dark',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-007',
    name: 'Sleeveless T-Shirt',
    gsm: '160 GSM',
    fabric: '100% Cotton',
    price: '₹180',
    moq: '100 Pcs',
    badge: 'New',
    badgeType: 'green',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-008',
    name: 'Full Sleeve T-Shirt',
    gsm: '180 GSM',
    fabric: '100% Cotton',
    price: '₹270',
    moq: '100 Pcs',
    badge: 'Trending',
    badgeType: 'orange',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80'
  }
];

export default function ProductListing() {
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState('All T-Shirts');

  return (
    <Layout title="Product Catalog - T-Shirts">
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '16px' }}>
        Home &gt; Manufacturers &gt; Tirupur Clothing Co. &gt; Products &gt; <span style={{ color: 'var(--slate-900)', fontWeight: 600 }}>T-Shirts</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '24px' }}>
        
        {/* Left Filter Sidebar */}
        <div className="card" style={{ padding: '16px', alignSelf: 'start' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--slate-900)' }}>Categories</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--slate-700)', marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: 'var(--orange-500)', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked />
              <span>T-Shirts</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input type="checkbox" />
              <span>Polo T-Shirts</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input type="checkbox" />
              <span>Hoodies</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input type="checkbox" />
              <span>Shirts</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input type="checkbox" />
              <span>Lower Wear</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input type="checkbox" />
              <span>Kids Wear</span>
            </label>
          </div>

          {/* Filters */}
          <div style={{ borderTop: '1px solid var(--slate-200)', paddingTop: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--slate-900)' }}>Filters</h3>
              <button style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Reset</button>
            </div>

            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 8 }}>Fabric</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.8125rem', color: 'var(--slate-700)', marginBottom: 16 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> 100% Cotton</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" /> Cotton Polyester</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" /> Polyester</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" /> Lycra Blend</label>
            </div>

            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 8 }}>GSM</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.8125rem', color: 'var(--slate-700)', marginBottom: 16 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" /> 140 - 160 GSM</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" defaultChecked /> 160 - 180 GSM</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" /> 180 - 200 GSM</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" /> 200+ GSM</label>
            </div>

            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 8 }}>Sizes</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL+'].map((sz) => (
                <span key={sz} className="size-pill">{sz}</span>
              ))}
            </div>

            <button className="btn btn-orange btn-sm" style={{ width: '100%' }}>Apply Filters</button>
          </div>
        </div>

        {/* Main Products Grid Column */}
        <div>
          {/* Header Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)' }}>T-Shirts</h1>
              <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>Showing 1 – 12 of 248 products</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="topbar-search-input" style={{ width: '220px', backgroundColor: '#ffffff' }}>
                <Search size={15} color="var(--slate-400)" />
                <input placeholder="Search T-shirts..." />
              </div>

              <select style={{ padding: '8px 12px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.8125rem' }}>
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflowX: 'auto', paddingBottom: 8, marginBottom: 20 }}>
            {['All T-Shirts', 'Basic T-Shirts', 'Oversized T-Shirts', 'Printed T-Shirts', 'Polo T-Shirts', 'Sleeveless'].map((pill) => (
              <button
                key={pill}
                className={`pill-filter ${selectedSubCategory === pill ? 'active' : ''}`}
                onClick={() => setSelectedSubCategory(pill)}
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Product Cards Grid (4 columns) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {productsData.map((prod) => (
              <div key={prod.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '180px', backgroundColor: '#F3F4F6', position: 'relative', overflow: 'hidden' }}>
                  <img src={prod.image} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    className={`badge ${prod.badgeType === 'dark' ? 'badge-gray' : prod.badgeType === 'green' ? 'badge-green' : 'badge-orange'}`}
                    style={{ position: 'absolute', top: 10, left: 10, fontSize: '0.68rem', textTransform: 'uppercase' }}
                  >
                    {prod.badge}
                  </span>
                </div>

                <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 4 }}>{prod.name}</h3>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 8 }}>{prod.gsm} • {prod.fabric}</div>
                    <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
                      <span className="color-swatch" style={{ background: '#000', width: 12, height: 12 }} />
                      <span className="color-swatch" style={{ background: '#fff', width: 12, height: 12 }} />
                      <span className="color-swatch" style={{ background: '#1E3A8A', width: 12, height: 12 }} />
                      <span style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>+5</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>From <strong style={{ fontSize: '1rem', color: 'var(--orange-500)', fontWeight: 800 }}>{prod.price}</strong> / Piece</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>MOQ {prod.moq}</span>
                    </div>

                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-outline btn-sm" style={{ flex: 1, fontSize: '0.78rem' }} onClick={() => navigate(`/product/${prod.id}`)}>
                        View Details
                      </button>
                      <button className="btn-icon-only" style={{ padding: 6 }}>
                        <Bookmark size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: '32px' }}>
            <button className="btn btn-outline btn-sm">&lt;</button>
            <button className="btn btn-orange btn-sm" style={{ padding: '6px 12px' }}>1</button>
            <button className="btn btn-outline btn-sm" style={{ padding: '6px 12px' }}>2</button>
            <button className="btn btn-outline btn-sm" style={{ padding: '6px 12px' }}>3</button>
            <button className="btn btn-outline btn-sm" style={{ padding: '6px 12px' }}>4</button>
            <button className="btn btn-outline btn-sm" style={{ padding: '6px 12px' }}>5</button>
            <span>...</span>
            <button className="btn btn-outline btn-sm">21</button>
            <button className="btn btn-outline btn-sm">&gt;</button>
          </div>

        </div>

      </div>
    </Layout>
  );
}
