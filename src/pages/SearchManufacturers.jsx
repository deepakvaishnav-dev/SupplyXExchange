import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Search, Filter, Star, MapPin, Award, Clock, Package, ArrowRight, SlidersHorizontal } from 'lucide-react';

const manufacturers = [
  { id: 'MFGR-001', name: 'Sunrise Garments Pvt. Ltd.', location: 'Mumbai, India', rating: 4.9, reviews: 284, category: 'Apparel & Garments', moq: '500 pcs', capacity: '65,000 pcs/mo', leadTime: '20–28 days', verified: true, certifications: ['ISO 9001', 'GOTS', 'OEKO-TEX'], tags: ['T-Shirts', 'Polos', 'Uniforms'], bg: 'linear-gradient(135deg, #1D4ED8, #06B6D4)' },
  { id: 'MFGR-002', name: 'Blue River Textiles', location: 'Dhaka, Bangladesh', rating: 4.7, reviews: 198, category: 'Denim & Jeans', moq: '1000 pcs', capacity: '45,000 pcs/mo', leadTime: '25–35 days', verified: true, certifications: ['ISO 9001', 'BSCI', 'WRAP'], tags: ['Jeans', 'Shorts', 'Denim Jackets'], bg: 'linear-gradient(135deg, #059669, #06B6D4)' },
  { id: 'MFGR-003', name: 'UniStitch Co.', location: 'Tirupur, India', rating: 4.8, reviews: 342, category: 'Knitwear', moq: '300 pcs', capacity: '80,000 pcs/mo', leadTime: '15–22 days', verified: true, certifications: ['GOTS', 'SA8000', 'GRS'], tags: ['Knitwear', 'Sweaters', 'Sportswear'], bg: 'linear-gradient(135deg, #7C3AED, #2563EB)' },
  { id: 'MFGR-004', name: 'Istanbul Fashion Group', location: 'Istanbul, Turkey', rating: 4.6, reviews: 167, category: 'Woven Garments', moq: '200 pcs', capacity: '30,000 pcs/mo', leadTime: '18–26 days', verified: true, certifications: ['ISO 14001', 'OEKO-TEX'], tags: ['Shirts', 'Blazers', 'Dresses'], bg: 'linear-gradient(135deg, #DC2626, #D97706)' },
  { id: 'MFGR-005', name: 'Saigon Apparel Co.', location: 'Ho Chi Minh, Vietnam', rating: 4.5, reviews: 132, category: 'Sportswear', moq: '500 pcs', capacity: '55,000 pcs/mo', leadTime: '22–30 days', verified: false, certifications: ['ISO 9001', 'BSCI'], tags: ['Activewear', 'Jerseys', 'Tracksuits'], bg: 'linear-gradient(135deg, #D97706, #059669)' },
  { id: 'MFGR-006', name: 'Nordic Workwear AB', location: 'Stockholm, Sweden', rating: 4.9, reviews: 89, category: 'Workwear', moq: '100 pcs', capacity: '15,000 pcs/mo', leadTime: '30–45 days', verified: true, certifications: ['ISO 9001', 'ISO 14001', 'OEKO-TEX'], tags: ['Workwear', 'PPE', 'Safety'], bg: 'linear-gradient(135deg, #0891B2, #7C3AED)' },
];

const categories = ['All Categories', 'Apparel & Garments', 'Denim & Jeans', 'Knitwear', 'Woven Garments', 'Sportswear', 'Workwear'];
const countries = ['India', 'Bangladesh', 'China', 'Vietnam', 'Turkey', 'Indonesia'];
const certList = ['ISO 9001', 'ISO 14001', 'GOTS', 'OEKO-TEX', 'SA8000', 'BSCI', 'WRAP'];

export default function SearchManufacturers() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All Categories');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCerts, setSelectedCerts] = useState([]);
  const [onlyVerified, setOnlyVerified] = useState(false);

  const toggleCountry = (c) => setSelectedCountries(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);
  const toggleCert = (c) => setSelectedCerts(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

  const filtered = manufacturers.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.category.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCat === 'All Categories' || m.category === selectedCat;
    const matchCountry = selectedCountries.length === 0 || selectedCountries.some(c => m.location.includes(c));
    const matchCert = selectedCerts.length === 0 || selectedCerts.every(c => m.certifications.includes(c));
    const matchVerified = !onlyVerified || m.verified;
    return matchSearch && matchCat && matchCountry && matchCert && matchVerified;
  });

  return (
    <Layout role="buyer" title="Find Manufacturers" subtitle={`${filtered.length} verified manufacturers found`}>
      {/* Search Bar */}
      <div className="search-top mb-6">
        <div className="search-input-lg">
          <Search size={20} color="var(--text-muted)" />
          <input placeholder="Search by product, category, or factory name..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {categories.slice(0, 4).map(c => (
            <button key={c} className={`btn btn-sm ${selectedCat === c ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setSelectedCat(c)}>
              {c === 'All Categories' ? 'All' : c}
            </button>
          ))}
        </div>
      </div>

      <div className="search-layout">
        {/* Filters Panel */}
        <div className="filters-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
            <SlidersHorizontal size={16} color="var(--text-primary)" />
            <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>Filters</span>
            <button className="btn btn-ghost btn-sm" style={{ marginLeft: 'auto' }} onClick={() => { setSelectedCountries([]); setSelectedCerts([]); setOnlyVerified(false); }}>Clear</button>
          </div>

          <div className="filter-section">
            <div className="filter-title">Verified Only</div>
            <label className="filter-option">
              <input type="checkbox" checked={onlyVerified} onChange={e => setOnlyVerified(e.target.checked)} />
              <label style={{ cursor: 'pointer' }}>Show verified manufacturers only</label>
            </label>
          </div>

          <div className="filter-section">
            <div className="filter-title">Country</div>
            {countries.map(c => (
              <div key={c} className="filter-option">
                <input type="checkbox" id={`country-${c}`} checked={selectedCountries.includes(c)} onChange={() => toggleCountry(c)} />
                <label htmlFor={`country-${c}`}>{c}</label>
              </div>
            ))}
          </div>

          <div className="filter-section">
            <div className="filter-title">Certifications</div>
            {certList.map(c => (
              <div key={c} className="filter-option">
                <input type="checkbox" id={`cert-${c}`} checked={selectedCerts.includes(c)} onChange={() => toggleCert(c)} />
                <label htmlFor={`cert-${c}`}>{c}</label>
              </div>
            ))}
          </div>

          <div className="filter-section">
            <div className="filter-title">MOQ Range (units)</div>
            <div className="filter-range">
              <input type="number" placeholder="Min" className="form-input" style={{ padding: '8px 12px' }} />
              <input type="number" placeholder="Max" className="form-input" style={{ padding: '8px 12px' }} />
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-title">Lead Time</div>
            {['Under 15 days', '15–30 days', '30–60 days', '60+ days'].map(t => (
              <div key={t} className="filter-option">
                <input type="checkbox" id={t} />
                <label htmlFor={t}>{t}</label>
              </div>
            ))}
          </div>

          <div className="filter-section">
            <div className="filter-title">Min Rating</div>
            {['4.5+', '4.0+', '3.5+'].map(r => (
              <div key={r} className="filter-option">
                <input type="radio" name="rating" id={`rating-${r}`} />
                <label htmlFor={`rating-${r}`}>{r} stars</label>
              </div>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div>
          <div className="section-header">
            <div>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{filtered.length} manufacturers</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}> found matching your criteria</span>
            </div>
            <select className="form-select" style={{ width: 'auto' }}>
              <option>Sort: Best Match</option>
              <option>Highest Rated</option>
              <option>Most Reviews</option>
              <option>Lowest MOQ</option>
              <option>Fastest Lead Time</option>
            </select>
          </div>

          <div className="mfr-grid">
            {filtered.map(m => (
              <div key={m.id} className="mfr-card" onClick={() => navigate(`/manufacturer/${m.id}`)}>
                <div className="mfr-card-image" style={{ background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '2.5rem', color: 'rgba(255,255,255,0.3)' }}>
                    {m.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  {m.verified && (
                    <div className="mfr-card-verified">
                      <span className="badge badge-verified"><Award size={10} /> Verified</span>
                    </div>
                  )}
                </div>
                <div className="mfr-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                    <div className="mfr-card-name">{m.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                      <Star size={13} color="#FBBF24" fill="#FBBF24" />
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700 }}>{m.rating}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>({m.reviews})</span>
                    </div>
                  </div>
                  <div className="mfr-card-location">
                    <MapPin size={12} /> {m.location}
                  </div>
                  <div className="mfr-card-tags">
                    {m.tags.map(t => <span key={t} className="badge badge-slate">{t}</span>)}
                  </div>
                  <div className="mfr-card-stats">
                    <div className="mfr-stat">
                      <div className="mfr-stat-val">{m.moq}</div>
                      <div className="mfr-stat-lbl">Min Order</div>
                    </div>
                    <div className="mfr-stat">
                      <div className="mfr-stat-val">{m.leadTime}</div>
                      <div className="mfr-stat-lbl">Lead Time</div>
                    </div>
                    <div className="mfr-stat">
                      <div className="mfr-stat-val">{m.capacity}</div>
                      <div className="mfr-stat-lbl">Capacity</div>
                    </div>
                    <div className="mfr-stat">
                      <div className="mfr-stat-val">{m.certifications.length}</div>
                      <div className="mfr-stat-lbl">Certifications</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-primary btn-sm" style={{ flex: 1 }} onClick={e => { e.stopPropagation(); navigate('/rfq/create'); }}>
                      Send RFQ
                    </button>
                    <button className="btn btn-ghost btn-sm" onClick={e => { e.stopPropagation(); navigate(`/manufacturer/${m.id}`); }}>
                      View Profile <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
