import { useState } from 'react';
import { Search, Star, ShieldCheck, MapPin, Grid, List, RotateCcw, Filter, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const manufacturersData = [
  {
    id: 'TC-001',
    name: 'Tirupur Clothing Co.',
    initials: 'TC',
    bgColor: '#101828',
    verified: true,
    location: 'Tirupur, Tamil Nadu, India',
    rating: 4.8,
    reviewsCount: 120,
    tags: ['T-Shirts', 'Polo T-Shirts', 'Hoodies', '+2 more'],
    minOrder: '100 Pcs',
    experience: '15+ Years',
    capacity: '500,000+ Pcs',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'US-002',
    name: 'Urban Stitchers',
    initials: 'US',
    bgColor: '#1E293B',
    verified: true,
    location: 'Ludhiana, Punjab, India',
    rating: 4.7,
    reviewsCount: 98,
    tags: ['T-Shirts', 'Hoodies', 'Polo T-Shirts', '+1 more'],
    minOrder: '120 Pcs',
    experience: '10+ Years',
    capacity: '300,000+ Pcs',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'KM-003',
    name: 'Knits & More',
    initials: 'KM',
    bgColor: '#0F172A',
    verified: true,
    location: 'Delhi NCR, India',
    rating: 4.6,
    reviewsCount: 76,
    tags: ['T-Shirts', 'Lower Wear', 'Kids Wear', '+2 more'],
    minOrder: '150 Pcs',
    experience: '8+ Years',
    capacity: '200,000+ Pcs',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'SE-004',
    name: 'Styleweave Exports',
    initials: 'SE',
    bgColor: '#047857',
    verified: true,
    location: 'Bangalore, Karnataka, India',
    rating: 4.9,
    reviewsCount: 150,
    tags: ['Polo T-Shirts', 'T-Shirts', 'Shirts', '+2 more'],
    minOrder: '200 Pcs',
    experience: '12+ Years',
    capacity: '400,000+ Pcs',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80'
  }
];

export default function SearchManufacturers() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('T-Shirts');
  const [viewMode, setViewMode] = useState('list');
  const [moqRange, setMoqRange] = useState(500);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <Layout title="Browse Verified Manufacturers">
      {/* Mobile Filter Toggle Button */}
      <div className="mobile-filter-bar" style={{ marginBottom: '16px' }}>
        <button
          className="btn btn-outline btn-sm"
          onClick={() => setShowMobileFilters(prev => !prev)}
          style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '10px 16px' }}
        >
          {showMobileFilters ? <X size={16} /> : <Filter size={16} />}
          <span>{showMobileFilters ? 'Close Filters' : 'Filter & Refine Results'}</span>
        </button>
      </div>

      <div className="responsive-layout-sidebar">
        
        {/* Left Sidebar Filters */}
        <div className={`card filter-card ${showMobileFilters ? 'show-mobile' : ''}`} style={{ padding: '20px', alignSelf: 'start' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Filters</h3>
            <button style={{ fontSize: '0.78rem', color: 'var(--slate-500)', display: 'flex', alignItems: 'center', gap: 4 }}>
              Reset All <RotateCcw size={12} />
            </button>
          </div>

          {/* Categories */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>
              Categories
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--slate-700)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>T-Shirts</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Polo T-Shirts</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Hoodies &amp; Sweatshirts</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Shirts</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Lower / Bottom Wear</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Kids Wear</span>
              </label>
            </div>
          </div>

          {/* Location */}
          <div style={{ marginBottom: '24px', borderTop: '1px solid var(--slate-200)', paddingTop: '16px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>
              Location
            </div>
            <div className="topbar-search-input" style={{ width: '100%', marginBottom: '12px', padding: '6px 10px', display: 'flex' }}>
              <Search size={14} color="var(--slate-400)" />
              <input placeholder="Search location..." style={{ fontSize: '0.78rem' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--slate-700)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>Tirupur, Tamil Nadu</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Ludhiana, Punjab</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Delhi NCR</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Mumbai, Maharashtra</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" />
                <span>Bangalore, Karnataka</span>
              </label>
            </div>
          </div>

          {/* MOQ */}
          <div style={{ marginBottom: '24px', borderTop: '1px solid var(--slate-200)', paddingTop: '16px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>
              Minimum Order Quantity
            </div>
            <input
              type="range"
              min="50"
              max="1000"
              value={moqRange}
              onChange={(e) => setMoqRange(e.target.value)}
              style={{ width: '100%', accentColor: 'var(--orange-500)', marginBottom: '10px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--slate-600)', fontWeight: 600 }}>
              <span>100</span>
              <span>{moqRange}+</span>
            </div>
          </div>

          {/* Certifications */}
          <div style={{ borderTop: '1px solid var(--slate-200)', paddingTop: '16px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>
              Certifications
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.84rem', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked />
              <span>ISO Certified</span>
            </label>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ minWidth: 0, width: '100%' }}>
          {/* Top Search & Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <div className="topbar-search-input" style={{ flex: 1, minWidth: '200px', backgroundColor: '#ffffff', display: 'flex' }}>
              <Search size={16} color="var(--slate-400)" />
              <input placeholder="Search manufacturers, products, services..." />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <select style={{ padding: '9px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', backgroundColor: '#ffffff', fontSize: '0.84rem', fontWeight: 600 }}>
                <option>Sort by: Relevance</option>
                <option>Rating: High to Low</option>
                <option>MOQ: Low to High</option>
              </select>

              <div style={{ display: 'flex', border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', overflow: 'hidden', backgroundColor: '#ffffff' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{ padding: '8px', backgroundColor: viewMode === 'grid' ? 'var(--slate-100)' : 'transparent' }}
                  aria-label="Grid view"
                >
                  <Grid size={16} color={viewMode === 'grid' ? 'var(--orange-500)' : 'var(--slate-600)'} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  style={{ padding: '8px', backgroundColor: viewMode === 'list' ? 'var(--slate-100)' : 'transparent' }}
                  aria-label="List view"
                >
                  <List size={16} color={viewMode === 'list' ? 'var(--orange-500)' : 'var(--slate-600)'} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Pills Row */}
          <div className="pill-filter-row">
            {['All Categories', 'T-Shirts', 'Polo T-Shirts', 'Hoodies', 'Shirts', 'Lower Wear', 'Kids Wear'].map((cat) => (
              <button
                key={cat}
                className={`pill-filter ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count text */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--slate-600)', marginBottom: '16px', flexWrap: 'wrap', gap: 8 }}>
            <div>Showing 1 – 12 of 248 manufacturers</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, color: 'var(--slate-700)' }}>
              <ShieldCheck size={16} color="var(--green-600)" />
              <span>All manufacturers are verified by SupplyXExchange</span>
            </div>
          </div>

          {/* Manufacturers List */}
          <div className={viewMode === 'grid' ? 'responsive-grid-2col' : 'manufacturer-list-container'}>
            {manufacturersData.map((mf) => (
              <div key={mf.id} className="manufacturer-card">
                
                {/* Manufacturer Avatar / Logo */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: mf.bgColor,
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {mf.initials}
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <h3
                      style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--slate-900)', cursor: 'pointer' }}
                      onClick={() => navigate(`/manufacturer/${mf.id}`)}
                    >
                      {mf.name}
                    </h3>
                    <span className="badge badge-blue" style={{ padding: '2px 6px' }}>
                      <Check size={12} /> Verified
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: 10, flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={14} /> {mf.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700, color: 'var(--orange-500)' }}>
                      <Star size={14} fill="var(--orange-500)" color="var(--orange-500)" />
                      {mf.rating} ({mf.reviewsCount})
                    </span>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                    {mf.tags.map((t, idx) => (
                      <span key={idx} className="badge badge-gray">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right specs & actions */}
                <div className="manufacturer-card-actions">
                  <div style={{ fontSize: '0.8125rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div><span style={{ color: 'var(--slate-500)' }}>Min. Order: </span><strong>{mf.minOrder}</strong></div>
                    <div><span style={{ color: 'var(--slate-500)' }}>Experience: </span><strong>{mf.experience}</strong></div>
                    <div><span style={{ color: 'var(--slate-500)' }}>Capacity: </span><strong>{mf.capacity}</strong></div>
                  </div>

                  <div className="manufacturer-action-buttons">
                    <button className="btn btn-orange btn-sm" onClick={() => navigate(`/manufacturer/${mf.id}`)}>
                      View Profile
                    </button>
                    <button className="btn btn-outline btn-sm" onClick={() => navigate('/rfq/create')}>
                      Request Quote
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: '32px', flexWrap: 'wrap' }}>
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
