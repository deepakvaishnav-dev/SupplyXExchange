import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: 'buyer',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '70px 32px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={14} /> GET IN TOUCH
          </div>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '16px' }}>Contact SupplyX Support</h1>
          <p style={{ color: 'var(--slate-300)', fontSize: '1.1rem' }}>
            Have questions about posting RFQs, factory onboarding, or escrow transactions? Our team is here to help.
          </p>
        </div>
      </div>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 32px', flex: 1, width: '100%' }}>
        <div className="responsive-grid-2col" style={{ gap: '60px' }}>
          
          {/* Left Form */}
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '24px' }}>Send Us a Message</h2>
            
            {submitted ? (
              <div style={{ backgroundColor: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
                <CheckCircle2 size={48} color="var(--green-600)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '8px' }}>Message Received!</h3>
                <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                  Thank you for contacting SupplyX Exchange. A sourcing specialist will reach out to you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>Company Name</label>
                    <input
                      type="text"
                      placeholder="Your Apparel Brand / Factory"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>You are a:</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                  >
                    <option value="buyer">Apparel Buyer / Fashion Brand</option>
                    <option value="manufacturer">Garment Manufacturer / Textile Mill</option>
                    <option value="partner">Logistics / QC Service Partner</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>How can we help? *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your inquiry or Sourcing RFQ requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                  />
                </div>

                <button type="submit" className="btn btn-orange btn-lg" style={{ width: '100%' }}>
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Right Info Offices */}
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '24px' }}>Our Office Locations</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  city: 'Bangalore Corporate HQ',
                  address: '4th Floor, Salarpuria Towers, Koramangala 7th Block, Bangalore, Karnataka 560034',
                  phone: '+91 80 4567 8900',
                  email: 'bangalore@supplyexchange.com'
                },
                {
                  city: 'Tirupur Sourcing Hub',
                  address: '12, PN Road, Near Textile Association Building, Tirupur, Tamil Nadu 641602',
                  phone: '+91 421 2233 445',
                  email: 'tirupur@supplyexchange.com'
                },
                {
                  city: 'Ludhiana Regional Office',
                  address: 'Industrial Area B, Near Focal Point, Ludhiana, Punjab 141003',
                  phone: '+91 161 5006 789',
                  email: 'ludhiana@supplyexchange.com'
                }
              ].map((office, i) => (
                <div key={i} style={{ border: '1px solid var(--slate-200)', borderRadius: '14px', padding: '24px', backgroundColor: 'var(--slate-50)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '10px' }}>
                    <MapPin size={18} color="var(--orange-500)" />
                    {office.city}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '12px', lineHeight: 1.5 }}>{office.address}</p>
                  <div style={{ fontSize: '0.84rem', color: 'var(--slate-700)', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Phone size={14} /> {office.phone}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Mail size={14} /> {office.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
