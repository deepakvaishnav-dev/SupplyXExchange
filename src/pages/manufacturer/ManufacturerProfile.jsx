import { useState } from 'react';
import {
  MapPin, Star, ShieldCheck, CheckCircle2, Phone, Mail, Globe, Download,
  Heart, Share2, Award, Clock, Users, Building2, ChevronRight, MessageSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function ManufacturerProfile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('About Us');

  return (
    <Layout title="Manufacturer Profile">
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '16px' }}>
        Home &gt; Manufacturers &gt; <span style={{ color: 'var(--slate-900)', fontWeight: 600 }}>Tirupur Clothing Co.</span>
      </div>

      {/* Main Profile Header Banner Card */}
      <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
        <div className="responsive-grid-2col" style={{ alignItems: 'center' }}>
          
          {/* Left Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#101828',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                flexShrink: 0
              }}>
                TC
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>Tirupur Clothing Co.</h1>
                  <span className="badge badge-green">
                    <ShieldCheck size={14} /> Verified Manufacturer
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: '0.84rem', color: 'var(--slate-500)', marginTop: 4, flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={15} /> Tirupur, Tamil Nadu, India
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--orange-500)', fontWeight: 700 }}>
                    <Star size={15} fill="var(--orange-500)" color="var(--orange-500)" /> 4.8 (120 Reviews)
                  </span>
                  <span>⏱️ 15+ Years Experience</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', marginBottom: '20px', lineHeight: 1.6 }}>
              Leading manufacturer of premium quality T-shirts and knitwear. Specialized in bulk orders with consistent quality and on-time delivery.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button className="btn btn-orange" onClick={() => navigate('/rfq/create')}>
                <MessageSquare size={16} /> Send Inquiry
              </button>
              <button className="btn btn-outline">
                <Heart size={16} /> Save
              </button>
              <button className="btn btn-outline">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>

          {/* Right Banner Factory Photo Visual */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '200px' }}>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Factory Banner"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              padding: '6px 12px',
              borderRadius: 'var(--r-md)',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--slate-900)'
            }}>
              View All Photos (25)
            </div>
          </div>

        </div>

        {/* 4 Stat Cards Row */}
        <div className="responsive-grid-4col" style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--slate-200)' }}>
          <div style={{ backgroundColor: 'var(--slate-50)', padding: '12px 16px', borderRadius: 'var(--r-md)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Monthly Capacity</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>500,000+ Pcs</div>
          </div>
          <div style={{ backgroundColor: 'var(--slate-50)', padding: '12px 16px', borderRadius: 'var(--r-md)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Employees</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>100+</div>
          </div>
          <div style={{ backgroundColor: 'var(--slate-50)', padding: '12px 16px', borderRadius: 'var(--r-md)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Factory Area</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>20,000 sq.ft.</div>
          </div>
          <div style={{ backgroundColor: 'var(--slate-50)', padding: '12px 16px', borderRadius: 'var(--r-md)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>ISO Certification</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>ISO 9001:2015</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-row">
        {['About Us', 'Products', 'Capabilities', 'Certifications', 'Factory', 'Reviews (128)', 'Trade Information'].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="responsive-layout-detail">
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* About Section */}
          <div className="card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px' }}>
              About Tirupur Clothing Co.
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '20px' }}>
              We are a leading manufacturer based in Tirupur, India – the knitwear capital of the world. With over 15 years of experience, we deliver top-quality T-shirts and knitwear to brands across India and global markets.
            </p>

            {/* Quality Pillars */}
            <div className="responsive-grid-4col">
              <div style={{ backgroundColor: 'var(--slate-50)', padding: '16px', borderRadius: 'var(--r-md)' }}>
                <CheckCircle2 size={20} color="var(--orange-500)" style={{ marginBottom: 6 }} />
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Quality Assurance</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 2 }}>Strict quality checks</div>
              </div>
              <div style={{ backgroundColor: 'var(--slate-50)', padding: '16px', borderRadius: 'var(--r-md)' }}>
                <Clock size={20} color="var(--orange-500)" style={{ marginBottom: 6 }} />
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Timely Delivery</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 2 }}>On-time delivery record</div>
              </div>
              <div style={{ backgroundColor: 'var(--slate-50)', padding: '16px', borderRadius: 'var(--r-md)' }}>
                <Award size={20} color="var(--orange-500)" style={{ marginBottom: 6 }} />
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Competitive Pricing</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 2 }}>Best quality rates</div>
              </div>
              <div style={{ backgroundColor: 'var(--slate-50)', padding: '16px', borderRadius: 'var(--r-md)' }}>
                <Users size={20} color="var(--orange-500)" style={{ marginBottom: 6 }} />
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Customer Support</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 2 }}>Dedicated team</div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Certifications</h3>
              <button style={{ fontSize: '0.8125rem', color: 'var(--orange-500)', fontWeight: 600 }}>View All Certifications &gt;</button>
            </div>
            <div className="responsive-grid-4col">
              <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', padding: '12px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--blue-50)', color: 'var(--blue-600)', fontWeight: 800, fontSize: '0.72rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ISO</div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)' }}>ISO 9001:2015</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Quality Management</div>
                </div>
              </div>
              <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', padding: '12px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--green-50)', color: 'var(--green-600)', fontWeight: 800, fontSize: '0.72rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>BCI</div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)' }}>Better Cotton</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Initiative</div>
                </div>
              </div>
              <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', padding: '12px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--red-50)', color: 'var(--red-500)', fontWeight: 800, fontSize: '0.72rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sedex</div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)' }}>SEDEX</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Member</div>
                </div>
              </div>
              <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', padding: '12px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--amber-50)', color: 'var(--amber-500)', fontWeight: 800, fontSize: '0.72rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>OEKO</div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--slate-900)' }}>OEKO-TEX</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Standard 100</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Top Products</h3>
              <button style={{ fontSize: '0.8125rem', color: 'var(--orange-500)', fontWeight: 600 }} onClick={() => navigate('/products')}>
                View All Products &gt;
              </button>
            </div>
            <div className="responsive-grid-4col">
              
              <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
                <div style={{ height: '140px', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=300&q=80" alt="Basic Crew Neck T-Shirt" style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Basic Crew Neck T-Shirt</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', margin: '4px 0' }}>100% Cotton (160 GSM)</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--orange-500)', marginTop: '6px' }}>₹210 / Piece</div>
                </div>
              </div>

              <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
                <div style={{ height: '140px', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=300&q=80" alt="Polo T-Shirt" style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Polo T-Shirt</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', margin: '4px 0' }}>Pique Cotton (200 GSM)</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--orange-500)', marginTop: '6px' }}>₹280 / Piece</div>
                </div>
              </div>

              <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
                <div style={{ height: '140px', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=300&q=80" alt="Oversized T-Shirt" style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Oversized T-Shirt</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', margin: '4px 0' }}>100% Cotton (180 GSM)</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--orange-500)', marginTop: '6px' }}>₹240 / Piece</div>
                </div>
              </div>

              <div style={{ border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
                <div style={{ height: '140px', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=300&q=80" alt="Sleeveless T-Shirt" style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Sleeveless T-Shirt</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', margin: '4px 0' }}>100% Cotton (160 GSM)</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--orange-500)', marginTop: '6px' }}>₹180 / Piece</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Key Information Card */}
        <div>
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '16px' }}>
              Key Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-500)' }}>Business Type</span>
                <strong style={{ color: 'var(--slate-900)' }}>Manufacturer</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-500)' }}>Year Established</span>
                <strong style={{ color: 'var(--slate-900)' }}>2008</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-500)' }}>Legal Entity</span>
                <strong style={{ color: 'var(--slate-900)' }}>Private Limited</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-500)' }}>GST No.</span>
                <strong style={{ color: 'var(--slate-900)' }}>33ABCDE1234F1Z5</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--slate-500)' }}>PAN No.</span>
                <strong style={{ color: 'var(--slate-900)' }}>ABCDE1234F</strong>
              </div>
              
              <div style={{ borderTop: '1px solid var(--slate-200)', paddingTop: '12px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', marginBottom: 4 }}>Bank Details</div>
                <div style={{ fontWeight: 600, color: 'var(--slate-900)' }}>HDFC Bank Ltd.</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>A/C No. 50200012345678</div>
              </div>

              <div style={{ borderTop: '1px solid var(--slate-200)', paddingTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--slate-700)', marginBottom: 6 }}>
                  <Users size={15} /> <span>Contact: <strong>Mr. Kumaravel</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--slate-700)', marginBottom: 6 }}>
                  <Phone size={15} /> <span>+91 98765 43210</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--slate-700)', marginBottom: 6 }}>
                  <Mail size={15} /> <span>info@tirupurclothing.com</span>
                </div>
              </div>

              <button className="btn btn-outline" style={{ width: '100%', marginTop: '8px' }}>
                <Download size={15} /> Download Company Profile
              </button>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  );
}
