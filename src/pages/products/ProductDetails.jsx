import { useState } from 'react';
import { Star, ShieldCheck, Heart, MessageSquare, ArrowRight, CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function ProductDetails() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('Product Details');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <Layout title="Product Details">
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '16px' }}>
        Home &gt; Manufacturers &gt; Tirupur Clothing Co. &gt; Products &gt; <span style={{ color: 'var(--slate-900)', fontWeight: 600 }}>Basic Crew Neck T-Shirt</span>
      </div>

      {/* Main Grid: Gallery + Main Specs + Manufacturer Sidebar */}
      <div style={{ display: 'grid', gridTemplateColumns: '440px 1fr 320px', gap: '24px', marginBottom: '32px' }}>
        
        {/* Left Column: Image Gallery */}
        <div>
          <div style={{ height: '380px', backgroundColor: '#F3F4F6', borderRadius: 'var(--r-lg)', overflow: 'hidden', position: 'relative', marginBottom: '12px' }}>
            <img src={images[activeImageIndex]} alt="Basic Crew Neck T-Shirt" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span className="badge badge-gray" style={{ position: 'absolute', top: 12, left: 12, textTransform: 'uppercase', fontSize: '0.72rem' }}>
              Best Seller
            </span>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 'var(--r-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeImageIndex === idx ? '2px solid var(--orange-500)' : '1px solid var(--slate-200)'
                }}
              >
                <img src={img} alt="Thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
            <div style={{ width: 64, height: 64, borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--slate-500)', cursor: 'pointer', backgroundColor: 'var(--slate-50)' }}>
              +5 More
            </div>
          </div>
        </div>

        {/* Middle Column: Details & Order Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: 8 }}>
              <ShieldCheck size={13} /> Verified Manufacturer
            </span>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>Basic Crew Neck T-Shirt</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.84rem', color: 'var(--slate-500)', marginTop: 4 }}>
              <span>By <strong style={{ color: 'var(--slate-900)' }}>Tirupur Clothing Co.</strong></span>
              <span>•</span>
              <span style={{ color: 'var(--orange-500)', fontWeight: 700 }}>★ 4.8 (120 Reviews)</span>
            </div>
          </div>

          {/* Pricing */}
          <div style={{ backgroundColor: 'var(--slate-50)', padding: '14px 18px', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <div>
              <span style={{ fontSize: '0.84rem', color: 'var(--slate-500)' }}>From </span>
              <strong style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--orange-500)' }}>₹210</strong>
              <span style={{ fontSize: '0.84rem', color: 'var(--slate-500)' }}> / Piece</span>
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--slate-600)', fontWeight: 600 }}>
              MOQ: 100 Pcs | Lead Time: 3 – 5 Days
            </div>
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
            Premium quality basic crew neck t-shirt made with 100% combed cotton. Perfect for your brand, events, uniforms and everyday wear.
          </p>

          {/* Fabric Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
              Fabric
            </label>
            <select style={{ width: '100%', padding: '9px 12px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.84rem' }}>
              <option>100% Cotton (160 GSM)</option>
              <option>100% Cotton (180 GSM)</option>
            </select>
          </div>

          {/* Color Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
              Colors
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="color-swatch" style={{ background: '#000', outline: '2px solid var(--orange-500)' }} />
              <span className="color-swatch" style={{ background: '#fff' }} />
              <span className="color-swatch" style={{ background: '#CBD5E1' }} />
              <span className="color-swatch" style={{ background: '#1E3A8A' }} />
              <span className="color-swatch" style={{ background: '#14532D' }} />
              <span className="color-swatch" style={{ background: '#991B1B' }} />
              <span style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>+6</span>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 6 }}>
              Sizes
            </label>
            <div style={{ display: 'flex', gap: 6 }}>
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL+'].map((sz) => (
                <button
                  key={sz}
                  className={`size-pill ${selectedSize === sz ? 'active' : ''}`}
                  onClick={() => setSelectedSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
            <button className="btn btn-orange btn-lg" style={{ flex: 1 }} onClick={() => navigate('/rfq/create')}>
              Request Quotation
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => navigate('/messages')}>
              <MessageSquare size={18} /> Chat with Supplier
            </button>
            <button className="btn-icon-only" style={{ padding: 12 }}>
              <Bookmark size={20} />
            </button>
          </div>

        </div>

        {/* Right Column: Manufacturer Details Box */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="card">
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', marginBottom: 8 }}>Manufacturer</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#101828', color: '#fff', fontSize: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TC</div>
              <div>
                <div style={{ fontWeight: 800, color: 'var(--slate-900)' }}>Tirupur Clothing Co.</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Tirupur, Tamil Nadu, India</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>15+ Years Experience</div>
              </div>
            </div>
            <button className="btn btn-outline btn-sm" style={{ width: '100%' }} onClick={() => navigate('/manufacturer/TC-001')}>
              View Manufacturer Profile &gt;
            </button>
          </div>

          {/* Key Highlights */}
          <div className="card">
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 12 }}>Key Highlights</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.8125rem' }}>
              <div>📦 <strong>500,000+ Pcs</strong> <span style={{ color: 'var(--slate-500)' }}>Monthly Capacity</span></div>
              <div>👥 <strong>100+</strong> <span style={{ color: 'var(--slate-500)' }}>Employees</span></div>
              <div>🏢 <strong>20,000 sq.ft.</strong> <span style={{ color: 'var(--slate-500)' }}>Factory Area</span></div>
              <div>🏆 <strong>ISO 9001:2015</strong> <span style={{ color: 'var(--slate-500)' }}>Certified</span></div>
            </div>
          </div>

          {/* Secure Points */}
          <div className="card" style={{ backgroundColor: 'var(--slate-50)' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 10 }}>Secure &amp; Safe</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.78rem', color: 'var(--slate-700)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--green-600)" /> Secure Payments (Escrow)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--green-600)" /> Quality Inspection</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--green-600)" /> On-time Delivery</div>
            </div>
          </div>

        </div>

      </div>

      {/* Tabs & Specifications Details */}
      <div className="tabs-row">
        {['Product Details', 'Specifications', 'Customization', 'Bulk Pricing', 'Reviews (120)', 'FAQs'].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${selectedTab === tab ? 'active' : ''}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px', marginBottom: '32px' }}>
        
        {/* Bullet Features */}
        <div className="card">
          <p style={{ fontSize: '0.84rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: 16 }}>
            Our Basic Crew Neck T-Shirt is made with premium combed cotton to ensure superior comfort, durability and perfect printing surface for your brand.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.8125rem', color: 'var(--slate-700)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--orange-500)" /> Pre-shrunk fabric</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--orange-500)" /> Bio-washed for soft finish</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--orange-500)" /> Double stitched for extra durability</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={14} color="var(--orange-500)" /> Ideal for branding, events and uniforms</div>
          </div>
        </div>

        {/* Specs Table Grid */}
        <div className="card">
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: 14 }}>Specifications</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', fontSize: '0.84rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: 6 }}>
              <span style={{ color: 'var(--slate-500)' }}>Fabric</span><strong>100% Combed Cotton</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: 6 }}>
              <span style={{ color: 'var(--slate-500)' }}>Printing Method</span><strong>Screen, DTF, DTG</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: 6 }}>
              <span style={{ color: 'var(--slate-500)' }}>GSM</span><strong>160 GSM</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: 6 }}>
              <span style={{ color: 'var(--slate-500)' }}>Wash Care</span><strong>Machine Wash</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: 6 }}>
              <span style={{ color: 'var(--slate-500)' }}>Fit</span><strong>Regular Fit</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: 6 }}>
              <span style={{ color: 'var(--slate-500)' }}>Shrinkage</span><strong>Pre-shrunk</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: 6 }}>
              <span style={{ color: 'var(--slate-500)' }}>Neck</span><strong>Crew Neck</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: 6 }}>
              <span style={{ color: 'var(--slate-500)' }}>Gender</span><strong>Unisex</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sticky Banner Card */}
      <div className="card" style={{ padding: '20px 28px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>Looking for Bulk Order?</h3>
          <p style={{ fontSize: '0.8125rem', color: 'var(--slate-600)' }}>Get the best pricing for large quantities. MOQ 100 Pcs | Lead Time 3 – 5 Days</p>
        </div>
        <button className="btn btn-orange btn-lg" onClick={() => navigate('/rfq/create')}>
          Request Quotation Now <ArrowRight size={18} />
        </button>
      </div>

    </Layout>
  );
}
