import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Shirt,
  Package,
  Users,
  Truck,
  FileText,
  Award,
  Star,
  MapPin,
  ChevronRight,
  Lock,
  Sparkles,
  Building2,
  Search,
  Zap,
  Check,
  Layers,
  HelpCircle,
  BarChart3,
  Globe2,
  Clock,
  ChevronDown,
  ChevronUp,
  X,
  Sliders,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const topManufacturers = [
  {
    id: "TC-001",
    name: "Tirupur Clothing Co.",
    initials: "TC",
    location: "Tirupur, Tamil Nadu",
    rating: 4.9,
    reviews: 128,
    minOrder: "100 Pcs",
    capacity: "500,000 Pcs/mo",
    capacityUtilized: 78,
    sampleTime: "3-5 Days",
    certifications: ["ISO 9001", "GOTS Organic", "BSCI Certified"],
    tags: ["240 GSM Oversized Tees", "Pique Polos", "French Terry Hoodies"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "US-002",
    name: "Urban Stitchers Mills",
    initials: "US",
    location: "Ludhiana, Punjab",
    rating: 4.85,
    reviews: 94,
    minOrder: "120 Pcs",
    capacity: "350,000 Pcs/mo",
    capacityUtilized: 82,
    sampleTime: "4-6 Days",
    certifications: ["OEKO-TEX 100", "ISO 9001"],
    tags: ["320 GSM Fleece Hoodies", "Sweatshirts", "Thermal Wear"],
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "SE-004",
    name: "Styleweave Apparel Exports",
    initials: "SE",
    location: "Bangalore, Karnataka",
    rating: 4.95,
    reviews: 156,
    minOrder: "150 Pcs",
    capacity: "450,000 Pcs/mo",
    capacityUtilized: 88,
    sampleTime: "3 Days",
    certifications: ["WRAP Certified", "GOTS Organic"],
    tags: ["Formal Shirts", "Woven Trousers", "Corporate Wear"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ST-003",
    name: "Surat Textech Activewear",
    initials: "ST",
    location: "Surat, Gujarat",
    rating: 4.8,
    reviews: 82,
    minOrder: "200 Pcs",
    capacity: "600,000 Pcs/mo",
    capacityUtilized: 75,
    sampleTime: "4 Days",
    certifications: ["ISO 14001", "OEKO-TEX"],
    tags: ["Dri-Fit Activewear", "Gym Leggings", "Sublimation Tees"],
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
  },
];

const categories = [
  {
    name: "Over-sized & Heavyweight Tees",
    count: "185 Verified Factories",
    desc: "180 to 280 GSM French Terry & Bio-Washed Combed Cotton",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Custom Polo T-Shirts",
    count: "120 Verified Factories",
    desc: "Matty Pique, Honeycomb & Cotton-Poly Blends with Collar Tipping",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Hoodies & Fleece Wear",
    count: "95 Verified Factories",
    desc: "320-400 GSM Heavy Fleece, Zippered & Pullover Designs",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Formal Shirts & Workwear",
    count: "110 Verified Factories",
    desc: "Poplin, Twill, Linen Blends with Precision Collar Construction",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Activewear & Sportswear",
    count: "80 Verified Factories",
    desc: "4-Way Stretch, Moisture Wicking Polyester & Spandex Synthetics",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Kids & Infant Apparel",
    count: "65 Verified Factories",
    desc: "100% GOTS Certified Organic Cotton & Hypoallergenic Dyes",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80",
  },
];

const clusters = [
  { city: "Tirupur", state: "Tamil Nadu", specialty: "Knitwear, T-Shirts & Polos", factories: "180+ Units", leadTime: "3-5 Days" },
  { city: "Ludhiana", state: "Punjab", specialty: "Woolens, Fleece Hoodies & Sweaters", factories: "120+ Units", leadTime: "4-6 Days" },
  { city: "Surat", state: "Gujarat", specialty: "Polyester Synthetics & Activewear", factories: "95+ Units", leadTime: "4 Days" },
  { city: "Jaipur", state: "Rajasthan", specialty: "Hand Prints & Cotton Resortwear", factories: "75+ Units", leadTime: "5 Days" },
  { city: "Bangalore", state: "Karnataka", specialty: "Woven Shirts & Denim Wear", factories: "110+ Units", leadTime: "3 Days" },
];

export default function Landing() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeWorkflowTab, setActiveWorkflowTab] = useState("buyer");

  // Hero Quick Estimator State
  const [garmentType, setGarmentType] = useState("T-Shirt");
  const [quantity, setQuantity] = useState(250);
  const [fabricType, setFabricType] = useState("240 GSM Bio-Wash");

  // Quick RFQ Modal State
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [modalManufacturer, setModalManufacturer] = useState(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Price Calculation Logic
  const calculateEstimatedPrice = () => {
    let basePrice = 190;
    if (garmentType === "Hoodie") basePrice = 450;
    else if (garmentType === "Polo T-Shirt") basePrice = 240;
    else if (garmentType === "Formal Shirt") basePrice = 380;
    else if (garmentType === "Activewear") basePrice = 280;

    if (fabricType.includes("240 GSM") || fabricType.includes("320 GSM")) basePrice += 30;
    if (quantity >= 1000) basePrice *= 0.85;
    else if (quantity >= 500) basePrice *= 0.92;

    const minPrice = Math.round(basePrice * 0.92);
    const maxPrice = Math.round(basePrice * 1.08);
    const totalMin = (minPrice * quantity).toLocaleString('en-IN');
    const totalMax = (maxPrice * quantity).toLocaleString('en-IN');

    return { minPrice, maxPrice, totalMin, totalMax };
  };

  const priceEstimate = calculateEstimatedPrice();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/search');
    }
  };

  const handleOpenModal = (m = null) => {
    setModalManufacturer(m);
    setIsRfqModalOpen(true);
  };

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* ── Top Live B2B Market Ticker ── */}
      <div style={{ backgroundColor: '#0B0F19', color: 'var(--slate-300)', fontSize: '0.8125rem', padding: '10px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="pulse-dot" />
            <span style={{ fontWeight: 700, color: '#ffffff' }}>LIVE MARKET:</span>
            <span style={{ color: 'var(--slate-300)' }}>
              Tirupur Mill #TC-001 accepted 500 Pcs Oversized Tees Order • Bangalore Brand posted 1,200 Pcs Pique Polos RFQ
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.8rem' }}>
            <span style={{ color: 'var(--green-500)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} /> 500+ Verified Factories Online
            </span>
            <span style={{ cursor: 'pointer', color: 'var(--orange-500)', fontWeight: 600 }} onClick={() => navigate('/escrow-protection')}>
              100% Escrow Protection →
            </span>
          </div>
        </div>
      </div>

      <Navbar activePage="how" />

      {/* ── Hero Section (Dark & Ambient Orange Glow Theme) ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #101828 0%, #1D2939 100%)",
          color: "#ffffff",
          padding: "64px 32px 90px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Glow Effect */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,84,0,0.15) 0%, rgba(255,84,0,0) 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1360px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="responsive-grid-2col" style={{ alignItems: "center", gap: "56px" }}>
            
            {/* Left Hero Content */}
            <div>
              <div
                className="badge"
                style={{
                  backgroundColor: "rgba(255, 84, 0, 0.15)",
                  color: "var(--orange-500)",
                  border: "1px solid rgba(255, 84, 0, 0.3)",
                  marginBottom: "24px",
                  padding: "6px 16px",
                  fontSize: "0.8125rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "20px",
                }}
              >
                <Shirt size={14} /> INDIA'S #1 B2B APPAREL SOURCING PLATFORM
              </div>

              <h1
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  marginBottom: "24px",
                }}
              >
                Find Trusted Manufacturers. <br />
                <span className="text-gradient-orange">Build Your Brand.</span>
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  color: "var(--slate-300)",
                  marginBottom: "36px",
                  maxWidth: "580px",
                  lineHeight: 1.65,
                }}
              >
                SupplyX Exchange connects D2C apparel brands with 500+ audited textile mills across India. Transparent RFQs, 100% Escrow milestone security, and AQL 2.5 pre-shipment quality inspection.
              </p>

              {/* Live Search Bar */}
              <form
                onSubmit={handleSearchSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "16px",
                  padding: "6px 8px 6px 20px",
                  marginBottom: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  maxWidth: "600px",
                }}
              >
                <Search size={22} color="var(--orange-500)" style={{ flexShrink: 0, marginRight: "12px" }} />
                <input
                  type="text"
                  placeholder="Search by apparel, fabric GSM, or cluster (e.g. 240 GSM Hoodies, Tirupur)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontSize: "0.95rem",
                    color: "#ffffff",
                  }}
                />
                <button type="submit" className="btn btn-orange glow-orange-sm" style={{ borderRadius: "12px", padding: "12px 24px" }}>
                  Search Mills
                </button>
              </form>

              {/* Popular Search Tag Pills */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--slate-400)', fontWeight: 600 }}>Popular:</span>
                {["Oversized T-Shirts", "240 GSM French Terry", "Pique Polos", "Tirupur Knitwear", "Fleece Hoodies"].map((tag, i) => (
                  <span
                    key={i}
                    onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
                    style={{
                      fontSize: "0.78rem",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "var(--slate-300)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "32px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "24px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>500+</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--slate-400)" }}>Audited Factories</div>
                </div>
                <div style={{ width: "1px", height: "30px", backgroundColor: "rgba(255,255,255,0.1)" }} />
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>10M+</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--slate-400)" }}>Garments Produced</div>
                </div>
                <div style={{ width: "1px", height: "30px", backgroundColor: "rgba(255,255,255,0.1)" }} />
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--orange-500)" }}>100% Escrow</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--slate-400)" }}>Milestone Guaranteed</div>
                </div>
              </div>

            </div>

            {/* Right Hero RFQ Cost & Lead-Time Estimator Card */}
            <div className="glass-dark glow-orange" style={{ borderRadius: "24px", padding: "36px", position: "relative" }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <span className="badge badge-orange" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>INSTANT RFQ ESTIMATOR</span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>Calculate Production Quote</h3>
                </div>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255,84,0,0.15)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={22} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-300)', marginBottom: '6px' }}>Apparel Category</label>
                  <select
                    value={garmentType}
                    onChange={(e) => setGarmentType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    <option value="T-Shirt">Oversized T-Shirt (Combed Cotton)</option>
                    <option value="Polo T-Shirt">Pique Polo T-Shirt (Honeycomb Knit)</option>
                    <option value="Hoodie">Heavyweight French Terry Hoodie</option>
                    <option value="Formal Shirt">Woven Formal / Casual Shirt</option>
                    <option value="Activewear">Sublimated Dri-Fit Activewear</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-300)', marginBottom: '6px' }}>Quantity (Pcs)</label>
                    <input
                      type="number"
                      min={50}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(50, Number(e.target.value)))}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-300)', marginBottom: '6px' }}>Fabric Specs</label>
                    <select
                      value={fabricType}
                      onChange={(e) => setFabricType(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    >
                      <option value="240 GSM Bio-Wash">240 GSM Bio-Wash Cotton</option>
                      <option value="180 GSM Combed Cotton">180 GSM Combed Cotton</option>
                      <option value="320 GSM French Terry">320 GSM Heavy Terry</option>
                      <option value="220 GSM Honeycomb Pique">220 GSM Pique Knit</option>
                    </select>
                  </div>
                </div>

                {/* Calculation Result Box */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '14px', padding: '16px 20px', border: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.84rem', color: 'var(--slate-300)' }}>Estimated Unit Price:</span>
                    <strong style={{ fontSize: '1.15rem', color: 'var(--orange-500)' }}>₹{priceEstimate.minPrice} - ₹{priceEstimate.maxPrice} / pc</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--slate-400)' }}>
                    <span>Estimated Total Budget:</span>
                    <span>₹{priceEstimate.totalMin} - ₹{priceEstimate.totalMax}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--green-500)', marginTop: '6px' }}>
                    <span>Sample Turnaround:</span>
                    <span>3 - 5 Days • 4 to 8 Factory Bids</span>
                  </div>
                </div>

                <button
                  className="btn btn-orange btn-lg glow-orange"
                  style={{ width: '100%', marginTop: '6px', fontSize: '1rem' }}
                  onClick={() => handleOpenModal()}
                >
                  Post RFQ &amp; Get Verified Quotes <ArrowRight size={18} />
                </button>

                <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', textAlign: 'center' }}>
                  🔒 Non-Disclosure Protected • No Commission Markups
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust & Audit Gateway Strip ── */}
      <section style={{ backgroundColor: 'var(--slate-900)', borderBottom: '1px solid var(--slate-800)', padding: '36px 32px' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }} className="responsive-grid-4col">
          {[
            { title: '35-Point Factory Audit', desc: 'On-site machinery verification & GST credentials check.', icon: Building2 },
            { title: '100% Escrow Guarantee', desc: 'Milestone payments locked in RBI nodal escrow bank accounts.', icon: Lock },
            { title: 'AQL 2.5 Quality Inspection', desc: 'Pre-shipment fabric testing & seam strength clearance.', icon: ShieldCheck },
            { title: 'Direct Mill Pricing', desc: 'Zero broker commissions or hidden agent markups.', icon: Award }
          ].map((item, i) => {
            const IconComp = item.icon;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(255,84,0,0.15)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconComp size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--slate-400)', lineHeight: 1.4, marginTop: '2px' }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Strategic Manufacturing Clusters Hub Section ── */}
      <section style={{ backgroundColor: "#FAFAFA", padding: "80px 32px", borderBottom: "1px solid var(--slate-200)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PAN-INDIA SOURCING NETWORK</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: '6px' }}>
                Strategic Garment Manufacturing Clusters
              </h2>
              <p style={{ color: 'var(--slate-600)', fontSize: '1rem', marginTop: '6px' }}>
                Connect directly with regional textile clusters specialized in specific fabric formulations and garment styles.
              </p>
            </div>

            <button className="btn btn-outline" onClick={() => navigate('/about')}>
              View All Regional Hubs <ArrowRight size={16} />
            </button>
          </div>

          <div className="responsive-grid-5col" style={{ gap: '20px' }}>
            {clusters.map((c, idx) => (
              <div
                key={idx}
                className="card-hover-lift"
                onClick={() => navigate(`/search?location=${encodeURIComponent(c.city)}`)}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--slate-200)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--orange-500)', marginBottom: '10px', fontSize: '0.8rem', fontWeight: 700 }}>
                  <MapPin size={14} /> {c.state}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '8px' }}>{c.city}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '16px', lineHeight: 1.5 }}>
                  <strong>Specialty:</strong> {c.specialty}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--slate-100)', paddingTop: '12px' }}>
                  <span className="badge badge-gray" style={{ fontSize: '0.75rem' }}>{c.factories}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--green-600)', fontWeight: 600 }}>⚡ {c.leadTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Verified Manufacturers Showcase ── */}
      <section style={{ padding: "80px 32px", maxWidth: "1360px", margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "flex",
            justify: "space-between",
            alignItems: "flex-end",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>AUDITED MILLS</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--slate-900)", marginTop: '6px' }}>
              Top Verified Apparel Manufacturers
            </h2>
            <p style={{ color: "var(--slate-600)", fontSize: "1rem", marginTop: "6px" }}>
              Pre-audited textile mills ready for custom sampling and high-volume production.
            </p>
          </div>

          <button className="btn btn-black" onClick={() => navigate("/search")}>
            Explore All 500+ Manufacturers <ArrowRight size={16} />
          </button>
        </div>

        <div className="responsive-grid-4col" style={{ gap: "24px" }}>
          {topManufacturers.map((m) => (
            <div
              key={m.id}
              className="card-hover-lift"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--slate-200)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "170px", overflow: "hidden", position: "relative" }}>
                <img src={m.image} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span className="badge badge-green" style={{ position: "absolute", top: "12px", right: "12px", display: "flex", alignItems: "center", gap: "4px", boxShadow: "var(--shadow-sm)" }}>
                  <CheckCircle2 size={12} /> AUDITED FACTORY
                </span>
              </div>

              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--slate-500)", marginBottom: "6px" }}>
                  <MapPin size={14} color="var(--orange-500)" />
                  <span>{m.location}</span>
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--slate-900)", marginBottom: "10px" }}>
                  {m.name}
                </h3>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", backgroundColor: "#FEF3C7", color: "#92400E", padding: "2px 8px", borderRadius: "6px", fontSize: "0.8rem", fontWeight: "700" }}>
                    <Star size={14} fill="#D97706" color="#D97706" /> {m.rating}
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--slate-500)" }}>({m.reviews} ratings)</span>
                </div>

                {/* Capacity Meter Box */}
                <div style={{ backgroundColor: "var(--slate-50)", borderRadius: "10px", padding: "12px", marginBottom: "16px", fontSize: "0.82rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--slate-500)" }}>Min Order MOQ:</span>
                    <strong style={{ color: "var(--slate-900)" }}>{m.minOrder}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--slate-500)" }}>Monthly Capacity:</span>
                    <strong style={{ color: "var(--slate-900)" }}>{m.capacity}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--slate-500)" }}>Sample Turnaround:</span>
                    <strong style={{ color: "var(--green-600)" }}>{m.sampleTime}</strong>
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {m.tags.map((t, idx) => (
                    <span key={idx} style={{ fontSize: "0.72rem", backgroundColor: "var(--slate-100)", color: "var(--slate-700)", padding: "3px 8px", borderRadius: "4px" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: 'auto' }}>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => navigate(`/manufacturer/${m.id}`)}
                  >
                    View Profile
                  </button>
                  <button
                    className="btn btn-orange btn-sm"
                    onClick={() => handleOpenModal(m)}
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Garment Sourcing Categories ── */}
      <section style={{ backgroundColor: "var(--slate-900)", color: "#ffffff", padding: "80px 32px" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PRODUCT CATALOG</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: "800", marginTop: '6px' }}>
              Garment Categories &amp; Fabric Capabilities
            </h2>
            <p style={{ color: "var(--slate-400)", fontSize: "1rem", marginTop: "8px" }}>
              Explore certified manufacturers across all knitwear, woven, formalwear, and activewear segments.
            </p>
          </div>

          <div className="responsive-grid-3col" style={{ gap: "24px" }}>
            {categories.map((cat, index) => (
              <div
                key={index}
                className="card-hover-lift"
                onClick={() => navigate(`/products?cat=${encodeURIComponent(cat.name)}`)}
                style={{
                  backgroundColor: "var(--slate-800)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--slate-700)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  <img src={cat.image} alt={cat.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span className="badge badge-black" style={{ position: "absolute", top: "12px", left: "12px", fontSize: "0.75rem" }}>
                    {cat.count}
                  </span>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#ffffff", marginBottom: "6px" }}>{cat.name}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--slate-400)", lineHeight: 1.5, marginBottom: "16px" }}>{cat.desc}</p>
                  <span style={{ fontSize: "0.84rem", fontWeight: "600", color: "var(--orange-500)", display: "flex", alignItems: "center", gap: "6px" }}>
                    Browse Manufacturers <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual Interactive How It Works Section ── */}
      <section style={{ padding: "80px 32px", maxWidth: "1360px", margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 36px" }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>STREAMLINED WORKFLOW</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--slate-900)", marginTop: '6px' }}>
            How SupplyX Exchange Works
          </h2>
          <p style={{ color: "var(--slate-600)", fontSize: "1rem", marginTop: "8px" }}>
            A digitized, transparent B2B workflow designed for fashion brands and audited garment mills.
          </p>

          {/* Tab Switcher */}
          <div style={{ display: 'inline-flex', backgroundColor: 'var(--slate-100)', padding: '6px', borderRadius: '12px', marginTop: '24px' }}>
            <button
              className={`btn ${activeWorkflowTab === 'buyer' ? 'btn-black' : 'btn-ghost'}`}
              onClick={() => setActiveWorkflowTab('buyer')}
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px 24px' }}
            >
              For Fashion Brands &amp; Buyers
            </button>
            <button
              className={`btn ${activeWorkflowTab === 'manufacturer' ? 'btn-black' : 'btn-ghost'}`}
              onClick={() => setActiveWorkflowTab('manufacturer')}
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px 24px' }}
            >
              For Garment Manufacturers
            </button>
          </div>
        </div>

        {activeWorkflowTab === 'buyer' ? (
          <div className="responsive-grid-4col" style={{ gap: '24px' }}>
            {[
              { step: '01', icon: FileText, title: '1. Submit Sourcing RFQ', desc: 'Specify garment type, fabric GSM, target quantity, tech packs, and target delivery dates.' },
              { step: '02', icon: Layers, title: '2. Receive Itemized Bids', desc: 'Audited factories bid with transparent cost breakdowns (yarn, stitching, printing).' },
              { step: '03', icon: Lock, title: '3. Escrow Advance Deposit', desc: 'Deposit 30% advance into RBI nodal escrow account to authorize raw material procurement.' },
              { step: '04', icon: Truck, title: '4. AQL 2.5 QC & Delivery', desc: 'Pre-shipment quality testing clearance before door-to-door logistics shipping.' }
            ].map((s, i) => {
              const IconComponent = s.icon;
              return (
                <div key={i} className="card-hover-lift" style={{ backgroundColor: '#ffffff', border: '1px solid var(--slate-200)', borderRadius: '16px', padding: '28px', position: 'relative', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '2rem', fontWeight: 900, color: 'var(--slate-200)' }}>{s.step}</span>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--orange-50)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComponent size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="responsive-grid-4col" style={{ gap: '24px' }}>
            {[
              { step: '01', icon: CheckCircle2, title: '1. Complete 35-Pt Audit', desc: 'Pass our physical factory audit, GSTIN check, and machinery capacity verification.' },
              { step: '02', icon: MessageSquare, title: '2. Access Verified RFQs', desc: 'View live RFQs from verified fashion brands searching for your exact specialty.' },
              { step: '03', icon: Lock, title: '3. Escrow Payment Guarantee', desc: 'Start production with 100% confidence knowing buyer advance is locked in escrow.' },
              { step: '04', icon: Award, title: '4. Instant Payout Release', desc: 'Receive instant milestone payouts upon pre-shipment quality clearance.' }
            ].map((s, i) => {
              const IconComponent = s.icon;
              return (
                <div key={i} className="card-hover-lift" style={{ backgroundColor: '#ffffff', border: '1px solid var(--slate-200)', borderRadius: '16px', padding: '28px', position: 'relative', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '2rem', fontWeight: 900, color: 'var(--slate-200)' }}>{s.step}</span>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--slate-100)', color: 'var(--slate-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComponent size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Escrow Security Comparison Box ── */}
      <section style={{ backgroundColor: 'var(--slate-50)', padding: '80px 32px', borderTop: '1px solid var(--slate-200)', borderBottom: '1px solid var(--slate-200)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>FINANCIAL PROTECTION</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: '6px' }}>
              Why Escrow is Essential for B2B Sourcing
            </h2>
          </div>

          <div className="responsive-grid-2col" style={{ gap: '32px' }}>
            <div style={{ backgroundColor: '#FFF5F5', border: '1px solid #FEB2B2', borderRadius: '20px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#C53030', marginBottom: '20px', fontWeight: 800, fontSize: '1.25rem' }}>
                <AlertTriangle size={24} /> Traditional Direct Wire Transfer (High Risk)
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.95rem', color: '#742A2A', paddingLeft: '20px' }}>
                <li>Direct 50% advance bank transfer puts all financial risk on the buyer.</li>
                <li>Zero recourse if the factory delays delivery or uses inferior fabric GSM.</li>
                <li>No formalized dispute panel or quality inspection guarantees.</li>
                <li>Protracted legal disputes lasting months without refund guarantees.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '20px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#15803D', marginBottom: '20px', fontWeight: 800, fontSize: '1.25rem' }}>
                <ShieldCheck size={24} /> SupplyX Nodal Escrow Protection (100% Safe)
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.95rem', color: '#166534', paddingLeft: '20px' }}>
                <li>Buyer funds locked in RBI-regulated nodal escrow bank account.</li>
                <li>Payouts released strictly against photo/video milestones &amp; QC clearance.</li>
                <li>100% Money-Back Guarantee for non-conforming or rejected garment batches.</li>
                <li>Dedicated SupplyX Arbitration Panel resolves disputes within 5 business days.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand & Factory Testimonials ── */}
      <section style={{ padding: "80px 32px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>CLIENT REVIEWS</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--slate-900)", marginTop: '6px' }}>
              Trusted by 500+ D2C Brands &amp; Mills
            </h2>
          </div>

          <div className="responsive-grid-3col" style={{ gap: "24px" }}>
            {[
              {
                quote: "SupplyX eliminated our sourcing delays completely. We launched our 240 GSM Oversized T-shirt collection in just 18 days with 0 defective pieces.",
                author: "Anand R. Verma",
                role: "Founder, Kulture D2C Apparel",
                metric: "18 Days Lead Time",
                stars: 5
              },
              {
                quote: "As a Tirupur factory owner, SupplyX gave us direct access to top D2C clothing brands without paying third-party broker commissions. Escrow payouts arrive instantly.",
                author: "Senthil Kumar",
                role: "Managing Director, Tirupur Knits Ltd.",
                metric: "3x Order Volume",
                stars: 5
              },
              {
                quote: "The AQL 2.5 pre-shipment inspection is fantastic. We received 2,500 fleece hoodies with complete peace of mind. Highly recommended!",
                author: "Meera Deshmukh",
                role: "Head of Sourcing, UrbanThread",
                metric: "0% Defect Rate",
                stars: 5
              }
            ].map((t, i) => (
              <div key={i} className="card-hover-lift" style={{ backgroundColor: "#ffffff", border: "1px solid var(--slate-200)", borderRadius: "16px", padding: "32px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                    {[...Array(t.stars)].map((_, s) => (
                      <Star key={s} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--slate-700)", lineHeight: 1.65, marginBottom: "24px" }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--slate-100)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)" }}>{t.author}</h4>
                    <span style={{ fontSize: "0.8rem", color: "var(--slate-500)" }}>{t.role}</span>
                  </div>
                  <span className="badge badge-green" style={{ fontSize: "0.75rem" }}>{t.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Searchable Accordion FAQ Section ── */}
      <section style={{ padding: "80px 32px", maxWidth: "960px", margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--orange-500)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "var(--slate-900)", marginTop: '6px' }}>
            Got Questions? We're Here to Help.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              q: "How does SupplyX Exchange verify apparel manufacturers?",
              a: "Every factory undergoes a 35-point physical audit inspecting GSTIN credentials, machinery inventory (automatic cutting & stitching lines), daily production capacity, labor compliance, and ISO/OEKO-TEX certifications."
            },
            {
              q: "What is the typical Minimum Order Quantity (MOQ)?",
              a: "MOQs start from 100 pieces per style/color for T-shirts and Polos, making it accessible for growing D2C brands. Custom outerwear and hoodies start around 120-200 pieces."
            },
            {
              q: "How does the Escrow Payment Guarantee protect my money?",
              a: "Your advance deposit is held safely in an RBI-regulated bank escrow account. Funds are released strictly against milestone signoffs and pre-shipment quality clearance."
            },
            {
              q: "Can I request fabric samples before placing a bulk production order?",
              a: "Yes! You can request sample creation directly through our RFQ tool. Sample turnaround typically takes 3 to 5 business days."
            }
          ].map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--slate-200)',
                  borderRadius: '14px',
                  backgroundColor: isOpen ? 'var(--slate-50)' : '#ffffff',
                  overflow: 'hidden',
                  transition: 'all 0.2s'
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--slate-900)'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} color="var(--orange-500)" /> : <ChevronDown size={20} color="var(--slate-400)" />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px 24px', fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: 1.6, borderTop: '1px dashed var(--slate-200)', paddingTop: '16px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button className="btn btn-outline" onClick={() => navigate('/faqs')}>
            View Complete FAQ Center <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ── High-Converting Bottom Conversion Banner ── */}
      <section style={{ background: "linear-gradient(180deg, #101828 0%, #1D2939 100%)", color: "#ffffff", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <div className="badge" style={{ backgroundColor: "rgba(255,84,0,0.15)", color: "var(--orange-500)", border: "1px solid rgba(255,84,0,0.3)", marginBottom: "20px", padding: "6px 16px" }}>
            START SOURCING TODAY
          </div>
          <h2 style={{ fontSize: "2.75rem", fontWeight: "800", marginBottom: "20px", lineHeight: 1.2 }}>
            Ready to Connect with Audited Garment Manufacturers?
          </h2>
          <p style={{ color: "var(--slate-300)", fontSize: "1.15rem", marginBottom: "36px", lineHeight: 1.6 }}>
            Join over 500 fashion brands sourcing high-quality apparel across India with 100% Escrow Protection.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn btn-orange btn-lg glow-orange" onClick={() => handleOpenModal()}>
              Post Your RFQ Free <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/register/manufacturer")}>
              Register as Manufacturer
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── Interactive Quick RFQ Modal ── */}
      {isRfqModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(16,24,40,0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', maxWidth: '600px', width: '100%', padding: '32px', boxShadow: 'var(--shadow-lg)', position: 'relative', border: '1px solid var(--slate-200)' }}>
            <button
              onClick={() => setIsRfqModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}
            >
              <X size={24} />
            </button>

            <div style={{ marginBottom: '24px' }}>
              <span className="badge badge-orange" style={{ marginBottom: '8px' }}>QUICK RFQ SUBMISSION</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                {modalManufacturer ? `Request Quote from ${modalManufacturer.name}` : 'Post Your Apparel Sourcing RFQ'}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginTop: '4px' }}>
                Audited mills will review your specs and submit competitive quotes within 24 hours.
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('RFQ submitted successfully! Verified manufacturers will contact you shortly.'); setIsRfqModalOpen(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>Garment &amp; Style Title *</label>
                <input
                  type="text"
                  required
                  defaultValue={garmentType ? `${quantity} Pcs ${garmentType} (${fabricType})` : ''}
                  placeholder="e.g. 500 Pcs Heavyweight 240 GSM Oversized T-Shirts"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>Order Quantity (Pcs) *</label>
                  <input
                    type="number"
                    required
                    min={50}
                    defaultValue={quantity}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>Target Delivery (Days)</label>
                  <select defaultValue="21" style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}>
                    <option value="14">Standard (14 Days)</option>
                    <option value="21">Flexible (21 Days)</option>
                    <option value="30">High Volume (30 Days)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)', marginBottom: '6px' }}>Fabric &amp; Printing Notes</label>
                <textarea
                  rows={3}
                  placeholder="Mention fabric GSM, printing type (Puff, Screen, DTG), size breakdown (S-XXL)..."
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--slate-300)', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ backgroundColor: 'var(--orange-50)', border: '1px solid var(--orange-200)', borderRadius: '10px', padding: '12px', fontSize: '0.82rem', color: 'var(--slate-700)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="var(--orange-600)" style={{ flexShrink: 0 }} />
                <span>Protected by SupplyX Escrow Guarantee &amp; Non-Disclosure Agreement.</span>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => setIsRfqModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-orange" style={{ flex: 2 }}>
                  Submit RFQ to Factories <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
