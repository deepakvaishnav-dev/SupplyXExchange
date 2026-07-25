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
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = [
  {
    name: "Over-sized & Heavyweight Tees",
    count: "185 Verified Factories",
    desc: "180 to 280 GSM French Terry & Bio-Washed Combed Cotton",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Custom Polo T-Shirts",
    count: "120 Verified Factories",
    desc: "Matty Pique, Honeycomb & Cotton-Poly Blends with Collar Tipping",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Hoodies & Fleece Wear",
    count: "95 Verified Factories",
    desc: "320-400 GSM Heavy Fleece, Zippered & Pullover Designs",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Formal Shirts & Workwear",
    count: "110 Verified Factories",
    desc: "Poplin, Twill, Linen Blends with Precision Collar Construction",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Activewear & Sportswear",
    count: "80 Verified Factories",
    desc: "4-Way Stretch, Moisture Wicking Polyester & Spandex Synthetics",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Kids & Infant Apparel",
    count: "65 Verified Factories",
    desc: "100% GOTS Certified Organic Cotton & Hypoallergenic Dyes",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80",
  },
];

const clusters = [
  {
    city: "Tirupur",
    state: "Tamil Nadu",
    specialty: "Knitwear, T-Shirts & Polos",
    factories: "180+ Units",
    leadTime: "3-5 Days",
  },
  {
    city: "Ludhiana",
    state: "Punjab",
    specialty: "Woolens, Fleece Hoodies & Sweaters",
    factories: "120+ Units",
    leadTime: "4-6 Days",
  },
  {
    city: "Surat",
    state: "Gujarat",
    specialty: "Polyester Synthetics & Activewear",
    factories: "95+ Units",
    leadTime: "4 Days",
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    specialty: "Hand Prints & Cotton Resortwear",
    factories: "75+ Units",
    leadTime: "5 Days",
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    specialty: "Woven Shirts & Denim Wear",
    factories: "110+ Units",
    leadTime: "3 Days",
  },
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

    if (fabricType.includes("240 GSM") || fabricType.includes("320 GSM"))
      basePrice += 30;
    if (quantity >= 1000) basePrice *= 0.85;
    else if (quantity >= 500) basePrice *= 0.92;

    const minPrice = Math.round(basePrice * 0.92);
    const maxPrice = Math.round(basePrice * 1.08);
    const totalMin = (minPrice * quantity).toLocaleString("en-IN");
    const totalMax = (maxPrice * quantity).toLocaleString("en-IN");

    return { minPrice, maxPrice, totalMin, totalMax };
  };

  const priceEstimate = calculateEstimatedPrice();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/search");
    }
  };

  const handleOpenModal = (m = null) => {
    setModalManufacturer(m);
    setIsRfqModalOpen(true);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >


      <Navbar activePage="how" />

      {/* ── Hero Section (Same to Same Design as Reference Image) ── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "48px 32px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div
            className="responsive-grid-2col"
            style={{ alignItems: "center", gap: "60px" }}
          >
            {/* Left Hero Content */}
            <div>
              {/* B2B Marketplace Badge */}
              <div
                style={{
                  backgroundColor: "#FFF5F0",
                  color: "#FF5400",
                  border: "1px solid #FFE0D1",
                  marginBottom: "24px",
                  padding: "6px 14px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "20px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                <Building2 size={14} color="#FF5400" /> B2B MARKETPLACE
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: "3.2rem",
                  fontWeight: 800,
                  color: "#101828",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Find Trusted <br />
                Manufacturers. <br />
                Build <span style={{ color: "#FF5400" }}>Your Brand.</span>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#475467",
                  lineHeight: 1.6,
                  maxWidth: "520px",
                  marginBottom: "32px",
                }}
              >
                SupplyXExchange connects brand owners with verified
                manufacturers for high-quality apparel production.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: "44px",
                }}
              >
                <button
                  onClick={() => navigate("/search")}
                  style={{
                    backgroundColor: "#101828",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "14px 28px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 4px 12px rgba(16, 24, 40, 0.15)",
                    transition: "transform 0.15s, background-color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1D2939")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#101828")
                  }
                >
                  Find Manufacturers <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => navigate("/register/manufacturer")}
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#101828",
                    border: "1px solid #D0D5DD",
                    borderRadius: "9999px",
                    padding: "14px 28px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#F8FAFC")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ffffff")
                  }
                >
                  Become a Manufacturer <ArrowRight size={18} />
                </button>
              </div>

              {/* Trust Indicators (3 Horizontal Features) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "1px solid #EAECF0",
                      backgroundColor: "#F8FAFC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={18} color="#344054" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#101828",
                      lineHeight: 1.3,
                    }}
                  >
                    Verified &amp; Trusted <br />
                    Manufacturers
                  </span>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "1px solid #EAECF0",
                      backgroundColor: "#F8FAFC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MessageSquare size={18} color="#344054" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#101828",
                      lineHeight: 1.3,
                    }}
                  >
                    Transparent <br />
                    Communication
                  </span>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "1px solid #EAECF0",
                      backgroundColor: "#F8FAFC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Lock size={18} color="#344054" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#101828",
                      lineHeight: 1.3,
                    }}
                  >
                    Secure Payments <br />
                    &amp; Quality Assurance
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual & Floating Card */}
            <div style={{ position: "relative" }}>
              {/* T-Shirt Rack Image */}
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                  border: "1px solid #EAECF0",
                  backgroundColor: "#F8FAFC",
                }}
              >
                <img
                  src="/tshirt_rack_hero.png"
                  alt="Premium T-Shirts on Rack"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Floating Overlay Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                  border: "1px solid #EAECF0",
                  maxWidth: "330px",
                  width: "90%",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "#FFF2EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  <Shirt size={20} color="#FF5400" />
                </div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#101828",
                    marginBottom: "14px",
                    lineHeight: 1.3,
                  }}
                >
                  Premium Quality T-Shirts <br />
                  for Your Brand
                </h4>
                <button
                  onClick={() => handleOpenModal()}
                  style={{
                    width: "100%",
                    backgroundColor: "#FF5400",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 18px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "12px",
                    boxShadow: "0 4px 12px rgba(255, 84, 0, 0.25)",
                  }}
                >
                  Start Your Order <ArrowRight size={16} />
                </button>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#667085",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <CheckCircle2 size={13} color="#12B76A" /> Low MOQ • Best
                  Quality • Timely Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Dark Stats Bar matching exact design */}
          <div
            style={{
              backgroundColor: "#0F172A",
              borderRadius: "16px",
              padding: "28px 40px",
              marginTop: "56px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* Stat 1 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 84, 0, 0.3)",
                  backgroundColor: "rgba(255, 84, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Building2 size={24} color="#FF5400" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.1,
                  }}
                >
                  500+
                </div>
                <div
                  style={{
                    fontSize: "0.825rem",
                    color: "#98A2B3",
                    marginTop: "2px",
                  }}
                >
                  Verified Manufacturers
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 84, 0, 0.3)",
                  backgroundColor: "rgba(255, 84, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Package size={24} color="#FF5400" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.1,
                  }}
                >
                  10,000+
                </div>
                <div
                  style={{
                    fontSize: "0.825rem",
                    color: "#98A2B3",
                    marginTop: "2px",
                  }}
                >
                  Products Listed
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 84, 0, 0.3)",
                  backgroundColor: "rgba(255, 84, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Users size={24} color="#FF5400" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.1,
                  }}
                >
                  2,500+
                </div>
                <div
                  style={{
                    fontSize: "0.825rem",
                    color: "#98A2B3",
                    marginTop: "2px",
                  }}
                >
                  Brands Connected
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 84, 0, 0.3)",
                  backgroundColor: "rgba(255, 84, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Truck size={24} color="#FF5400" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.1,
                  }}
                >
                  50,000+
                </div>
                <div
                  style={{
                    fontSize: "0.825rem",
                    color: "#98A2B3",
                    marginTop: "2px",
                  }}
                >
                  Orders Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust & Audit Gateway Strip ── */}
      <section
        className="landing-section-padding"
        style={{
          backgroundColor: "#F8FAFC",
          borderBottom: "1px solid var(--slate-200)",
        }}
      >
        <div
          style={{ maxWidth: "1360px", margin: "0 auto" }}
          className="responsive-grid-4col"
        >
          {[
            {
              title: "35-Point Factory Audit",
              desc: "On-site machinery verification & GST credentials check.",
              icon: Building2,
            },
            {
              title: "100% Payment Security",
              desc: "Milestone payments locked in RBI nodal escrow bank accounts.",
              icon: Lock,
            },
            {
              title: "AQL 2.5 Quality Inspection",
              desc: "Pre-shipment fabric testing & seam strength clearance.",
              icon: ShieldCheck,
            },
            {
              title: "Direct Mill Pricing",
              desc: "Zero broker commissions or hidden agent markups.",
              icon: Award,
            },
          ].map((item, i) => {
            const IconComp = item.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  backgroundColor: "#ffffff",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  border: "1px solid var(--slate-200)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "#FFF2EC",
                    color: "var(--orange-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <IconComp size={22} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--slate-900)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--slate-600)",
                      lineHeight: 1.4,
                      marginTop: "2px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Strategic Manufacturing Clusters Hub Section ── */}
      <section
        className="landing-section-padding"
        style={{
          backgroundColor: "#FAFAFA",
          borderBottom: "1px solid var(--slate-200)",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "32px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--orange-500)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                PAN-INDIA SOURCING NETWORK
              </span>
              <h2
                className="landing-section-title"
                style={{ color: "var(--slate-900)", marginTop: "6px" }}
              >
                Strategic Garment Manufacturing Clusters
              </h2>
              <p
                style={{
                  color: "var(--slate-600)",
                  fontSize: "1rem",
                  marginTop: "6px",
                }}
              >
                Connect directly with regional textile clusters specialized in
                specific fabric formulations and garment styles.
              </p>
            </div>

            <button
              className="btn btn-outline"
              onClick={() => navigate("/about")}
            >
              View All Regional Hubs <ArrowRight size={16} />
            </button>
          </div>

          <div className="responsive-grid-5col" style={{ gap: "20px" }}>
            {clusters.map((c, idx) => (
              <div
                key={idx}
                className="card-hover-lift"
                onClick={() =>
                  navigate(`/search?location=${encodeURIComponent(c.city)}`)
                }
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--slate-200)",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "var(--shadow-sm)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--orange-500)",
                    marginBottom: "8px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  <MapPin size={14} /> {c.state}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "var(--slate-900)",
                    marginBottom: "8px",
                  }}
                >
                  {c.city}
                </h3>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--slate-600)",
                    marginBottom: "16px",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>Specialty:</strong> {c.specialty}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid var(--slate-100)",
                    paddingTop: "12px",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  <span
                    className="badge badge-gray"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {c.factories}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--green-600)",
                      fontWeight: 600,
                    }}
                  >
                    ⚡ {c.leadTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Verified Manufacturers Showcase ── */}
      <section
        className="landing-section-padding"
        style={{ maxWidth: "1360px", margin: "0 auto", width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            justify: "space-between",
            alignItems: "flex-end",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "var(--orange-500)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              AUDITED MILLS
            </span>
            <h2
              className="landing-section-title"
              style={{ color: "var(--slate-900)", marginTop: "6px" }}
            >
              Top Verified Apparel Manufacturers
            </h2>
            <p
              style={{
                color: "var(--slate-600)",
                fontSize: "1rem",
                marginTop: "6px",
              }}
            >
              Pre-audited textile mills ready for custom sampling and
              high-volume production.
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
              <div
                style={{
                  height: "170px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  className="badge badge-green"
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <CheckCircle2 size={12} /> AUDITED FACTORY
                </span>
              </div>

              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.8rem",
                    color: "var(--slate-500)",
                    marginBottom: "6px",
                  }}
                >
                  <MapPin size={14} color="var(--orange-500)" />
                  <span>{m.location}</span>
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "var(--slate-900)",
                    marginBottom: "10px",
                  }}
                >
                  {m.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      backgroundColor: "#FEF3C7",
                      color: "#92400E",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                    }}
                  >
                    <Star size={14} fill="#D97706" color="#D97706" /> {m.rating}
                  </div>
                  <span
                    style={{ fontSize: "0.8rem", color: "var(--slate-500)" }}
                  >
                    ({m.reviews} ratings)
                  </span>
                </div>

                {/* Capacity Meter Box */}
                <div
                  style={{
                    backgroundColor: "var(--slate-50)",
                    borderRadius: "10px",
                    padding: "12px",
                    marginBottom: "16px",
                    fontSize: "0.82rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: "var(--slate-500)" }}>
                      Min Order MOQ:
                    </span>
                    <strong style={{ color: "var(--slate-900)" }}>
                      {m.minOrder}
                    </strong>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: "var(--slate-500)" }}>
                      Monthly Capacity:
                    </span>
                    <strong style={{ color: "var(--slate-900)" }}>
                      {m.capacity}
                    </strong>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: "var(--slate-500)" }}>
                      Sample Turnaround:
                    </span>
                    <strong style={{ color: "var(--green-600)" }}>
                      {m.sampleTime}
                    </strong>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "20px",
                  }}
                >
                  {m.tags.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.72rem",
                        backgroundColor: "var(--slate-100)",
                        color: "var(--slate-700)",
                        padding: "3px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                    marginTop: "auto",
                  }}
                >
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
      <section
        className="landing-section-padding"
        style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid var(--slate-200)", color: "var(--slate-900)" }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 40px",
            }}
          >
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "var(--orange-500)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              PRODUCT CATALOG
            </span>
            <h2 className="landing-section-title" style={{ color: "var(--slate-900)", marginTop: "6px" }}>
              Garment Categories &amp; Fabric Capabilities
            </h2>
            <p
              style={{
                color: "var(--slate-600)",
                fontSize: "1rem",
                marginTop: "8px",
              }}
            >
              Explore certified manufacturers across all knitwear, woven,
              formalwear, and activewear segments.
            </p>
          </div>

          <div className="responsive-grid-3col" style={{ gap: "24px" }}>
            {categories.map((cat, index) => (
              <div
                key={index}
                className="card-hover-lift"
                onClick={() =>
                  navigate(`/products?cat=${encodeURIComponent(cat.name)}`)
                }
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--slate-200)",
                  boxShadow: "var(--shadow-sm)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    className="badge badge-black"
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {cat.count}
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "var(--slate-900)",
                      marginBottom: "6px",
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--slate-600)",
                      lineHeight: 1.5,
                      marginBottom: "16px",
                    }}
                  >
                    {cat.desc}
                  </p>
                  <span
                    style={{
                      fontSize: "0.84rem",
                      fontWeight: "600",
                      color: "var(--orange-500)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Browse Manufacturers <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual Interactive How It Works Section ── */}
      <section
        className="landing-section-padding"
        style={{ maxWidth: "1360px", margin: "0 auto", width: "100%" }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 36px",
          }}
        >
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--orange-500)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            STREAMLINED WORKFLOW
          </span>
          <h2
            className="landing-section-title"
            style={{ color: "var(--slate-900)", marginTop: "6px" }}
          >
            How SupplyX Exchange Works
          </h2>
          <p
            style={{
              color: "var(--slate-600)",
              fontSize: "1rem",
              marginTop: "8px",
            }}
          >
            A digitized, transparent B2B workflow designed for fashion brands
            and audited garment mills.
          </p>

          {/* Responsive Tab Switcher */}
          <div className="workflow-tabs-wrap">
            <button
              className={`btn workflow-tab-btn ${activeWorkflowTab === "buyer" ? "btn-black" : "btn-ghost"}`}
              onClick={() => setActiveWorkflowTab("buyer")}
              style={{
                borderRadius: "8px",
                fontSize: "0.9rem",
                padding: "10px 24px",
              }}
            >
              For Fashion Brands &amp; Buyers
            </button>
            <button
              className={`btn workflow-tab-btn ${activeWorkflowTab === "manufacturer" ? "btn-black" : "btn-ghost"}`}
              onClick={() => setActiveWorkflowTab("manufacturer")}
              style={{
                borderRadius: "8px",
                fontSize: "0.9rem",
                padding: "10px 24px",
              }}
            >
              For Garment Manufacturers
            </button>
          </div>
        </div>

        {activeWorkflowTab === "buyer" ? (
          <div className="responsive-grid-4col" style={{ gap: "24px" }}>
            {[
              {
                step: "01",
                icon: FileText,
                title: "1. Submit Sourcing RFQ",
                desc: "Specify garment type, fabric GSM, target quantity, tech packs, and target delivery dates.",
              },
              {
                step: "02",
                icon: Layers,
                title: "2. Receive Itemized Bids",
                desc: "Audited factories bid with transparent cost breakdowns (yarn, stitching, printing).",
              },
              {
                step: "03",
                icon: Lock,
                title: "3. Escrow Advance Deposit",
                desc: "Deposit 30% advance into RBI nodal escrow account to authorize raw material procurement.",
              },
              {
                step: "04",
                icon: Truck,
                title: "4. AQL 2.5 QC & Delivery",
                desc: "Pre-shipment quality testing clearance before door-to-door logistics shipping.",
              },
            ].map((s, i) => {
              const IconComponent = s.icon;
              return (
                <div
                  key={i}
                  className="card-hover-lift"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid var(--slate-200)",
                    borderRadius: "16px",
                    padding: "24px",
                    position: "relative",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "20px",
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "var(--slate-200)",
                    }}
                  >
                    {s.step}
                  </span>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "var(--orange-50)",
                      color: "var(--orange-500)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--slate-900)",
                      marginBottom: "10px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--slate-600)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="responsive-grid-4col" style={{ gap: "24px" }}>
            {[
              {
                step: "01",
                icon: CheckCircle2,
                title: "1. Complete 35-Pt Audit",
                desc: "Pass our physical factory audit, GSTIN check, and machinery capacity verification.",
              },
              {
                step: "02",
                icon: MessageSquare,
                title: "2. Access Verified RFQs",
                desc: "View live RFQs from verified fashion brands searching for your exact specialty.",
              },
              {
                step: "03",
                icon: Lock,
                title: "3. Escrow Payment Guarantee",
                desc: "Start production with 100% confidence knowing buyer advance is locked in escrow.",
              },
              {
                step: "04",
                icon: Award,
                title: "4. Instant Payout Release",
                desc: "Receive instant milestone payouts upon pre-shipment quality clearance.",
              },
            ].map((s, i) => {
              const IconComponent = s.icon;
              return (
                <div
                  key={i}
                  className="card-hover-lift"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid var(--slate-200)",
                    borderRadius: "16px",
                    padding: "24px",
                    position: "relative",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "20px",
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "var(--slate-200)",
                    }}
                  >
                    {s.step}
                  </span>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "var(--slate-100)",
                      color: "var(--slate-900)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--slate-900)",
                      marginBottom: "10px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--slate-600)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>



      {/* ── Brand & Factory Testimonials ── */}
      <section
        className="landing-section-padding"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 40px",
            }}
          >
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "var(--orange-500)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              CLIENT REVIEWS
            </span>
            <h2
              className="landing-section-title"
              style={{ color: "var(--slate-900)", marginTop: "6px" }}
            >
              Trusted by 500+ D2C Brands &amp; Mills
            </h2>
          </div>

          <div className="responsive-grid-3col" style={{ gap: "24px" }}>
            {[
              {
                quote:
                  "SupplyX eliminated our sourcing delays completely. We launched our 240 GSM Oversized T-shirt collection in just 18 days with 0 defective pieces.",
                author: "Anand R. Verma",
                role: "Founder, Kulture D2C Apparel",
                metric: "18 Days Lead Time",
                stars: 5,
              },
              {
                quote:
                  "As a Tirupur factory owner, SupplyX gave us direct access to top D2C clothing brands without paying third-party broker commissions. Escrow payouts arrive instantly.",
                author: "Senthil Kumar",
                role: "Managing Director, Tirupur Knits Ltd.",
                metric: "3x Order Volume",
                stars: 5,
              },
              {
                quote:
                  "The AQL 2.5 pre-shipment inspection is fantastic. We received 2,500 fleece hoodies with complete peace of mind. Highly recommended!",
                author: "Meera Deshmukh",
                role: "Head of Sourcing, UrbanThread",
                metric: "0% Defect Rate",
                stars: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="card-hover-lift"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--slate-200)",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      marginBottom: "16px",
                    }}
                  >
                    {[...Array(t.stars)].map((_, s) => (
                      <Star key={s} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--slate-700)",
                      lineHeight: 1.65,
                      marginBottom: "24px",
                    }}
                  >
                    "{t.quote}"
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--slate-100)",
                    paddingTop: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--slate-900)",
                      }}
                    >
                      {t.author}
                    </h4>
                    <span
                      style={{ fontSize: "0.8rem", color: "var(--slate-500)" }}
                    >
                      {t.role}
                    </span>
                  </div>
                  <span
                    className="badge badge-green"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Searchable Accordion FAQ Section ── */}
      <section
        className="landing-section-padding"
        style={{ maxWidth: "960px", margin: "0 auto", width: "100%" }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--orange-500)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2
            className="landing-section-title"
            style={{ color: "var(--slate-900)", marginTop: "6px" }}
          >
            Got Questions? We're Here to Help.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            {
              q: "How does SupplyX Exchange verify apparel manufacturers?",
              a: "Every factory undergoes a 35-point physical audit inspecting GSTIN credentials, machinery inventory (automatic cutting & stitching lines), daily production capacity, labor compliance, and ISO/OEKO-TEX certifications.",
            },
            {
              q: "What is the typical Minimum Order Quantity (MOQ)?",
              a: "MOQs start from 100 pieces per style/color for T-shirts and Polos, making it accessible for growing D2C brands. Custom outerwear and hoodies start around 120-200 pieces.",
            },
            {
              q: "How does the Escrow Payment Guarantee protect my money?",
              a: "Your advance deposit is held safely in an RBI-regulated bank escrow account. Funds are released strictly against milestone signoffs and pre-shipment quality clearance.",
            },
            {
              q: "Can I request fabric samples before placing a bulk production order?",
              a: "Yes! You can request sample creation directly through our RFQ tool. Sample turnaround typically takes 3 to 5 business days.",
            },
          ].map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: "1px solid var(--slate-200)",
                  borderRadius: "14px",
                  backgroundColor: isOpen ? "var(--slate-50)" : "#ffffff",
                  overflow: "hidden",
                  transition: "all 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    display: "flex",
                    justify: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--slate-900)",
                    gap: "12px",
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp
                      size={20}
                      color="var(--orange-500)"
                      style={{ flexShrink: 0 }}
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      color="var(--slate-400)"
                      style={{ flexShrink: 0 }}
                    />
                  )}
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 20px 18px 20px",
                      fontSize: "0.92rem",
                      color: "var(--slate-600)",
                      lineHeight: 1.6,
                      borderTop: "1px dashed var(--slate-200)",
                      paddingTop: "14px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button className="btn btn-outline" onClick={() => navigate("/faqs")}>
            View Complete FAQ Center <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ── High-Converting Bottom Conversion Banner ── */}
      <section
        className="landing-section-padding"
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",
          borderTop: "1px solid var(--slate-200)",
          borderBottom: "1px solid var(--slate-200)",
          color: "var(--slate-900)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <div
            className="badge"
            style={{
              backgroundColor: "#FFF2EC",
              color: "var(--orange-500)",
              border: "1px solid #FFD6C4",
              marginBottom: "20px",
              padding: "6px 16px",
            }}
          >
            START SOURCING TODAY
          </div>
          <h2
            className="landing-banner-title"
            style={{ color: "var(--slate-900)", marginBottom: "20px", lineHeight: 1.2 }}
          >
            Ready to Connect with Audited Garment Manufacturers?
          </h2>
          <p
            style={{
              color: "var(--slate-600)",
              fontSize: "1.1rem",
              marginBottom: "36px",
              lineHeight: 1.6,
            }}
          >
            Join over 500 fashion brands sourcing high-quality apparel across
            India with 100% Payment Guarantee.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn btn-orange btn-lg glow-orange"
              onClick={() => handleOpenModal()}
            >
              Post Your RFQ Free <ArrowRight size={18} />
            </button>
            <button
              className="btn btn-outline btn-lg"
              onClick={() => navigate("/register/manufacturer")}
            >
              Register as Manufacturer
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── Interactive Quick RFQ Modal ── */}
      {isRfqModalOpen && (
        <div className="landing-modal-overlay">
          <div className="landing-modal-card">
            <button
              onClick={() => setIsRfqModalOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "var(--slate-400)",
              }}
            >
              <X size={24} />
            </button>

            <div style={{ marginBottom: "24px" }}>
              <span
                className="badge badge-orange"
                style={{ marginBottom: "8px" }}
              >
                QUICK RFQ SUBMISSION
              </span>
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                }}
              >
                {modalManufacturer
                  ? `Request Quote from ${modalManufacturer.name}`
                  : "Post Your Apparel Sourcing RFQ"}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--slate-600)",
                  marginTop: "4px",
                }}
              >
                Audited mills will review your specs and submit competitive
                quotes within 24 hours.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "RFQ submitted successfully! Verified manufacturers will contact you shortly.",
                );
                setIsRfqModalOpen(false);
              }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    color: "var(--slate-700)",
                    marginBottom: "6px",
                  }}
                >
                  Garment &amp; Style Title *
                </label>
                <input
                  type="text"
                  required
                  defaultValue={
                    garmentType
                      ? `${quantity} Pcs ${garmentType} (${fabricType})`
                      : ""
                  }
                  placeholder="e.g. 500 Pcs Heavyweight 240 GSM Oversized T-Shirts"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--slate-300)",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div className="landing-modal-grid-2">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      color: "var(--slate-700)",
                      marginBottom: "6px",
                    }}
                  >
                    Order Quantity (Pcs) *
                  </label>
                  <input
                    type="number"
                    required
                    min={50}
                    defaultValue={quantity}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid var(--slate-300)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      color: "var(--slate-700)",
                      marginBottom: "6px",
                    }}
                  >
                    Target Delivery (Days)
                  </label>
                  <select
                    defaultValue="21"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid var(--slate-300)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <option value="14">Standard (14 Days)</option>
                    <option value="21">Flexible (21 Days)</option>
                    <option value="30">High Volume (30 Days)</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    color: "var(--slate-700)",
                    marginBottom: "6px",
                  }}
                >
                  Fabric &amp; Printing Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention fabric GSM, printing type (Puff, Screen, DTG), size breakdown (S-XXL)..."
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid var(--slate-300)",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div
                style={{
                  backgroundColor: "var(--orange-50)",
                  border: "1px solid var(--orange-200)",
                  borderRadius: "10px",
                  padding: "12px",
                  fontSize: "0.82rem",
                  color: "var(--slate-700)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <ShieldCheck
                  size={18}
                  color="var(--orange-600)"
                  style={{ flexShrink: 0 }}
                />
                <span>
                  Protected by SupplyX Quality Guarantee &amp; Non-Disclosure
                  Agreement.
                </span>
              </div>

              <div className="landing-modal-actions">
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                  onClick={() => setIsRfqModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-orange"
                  style={{ flex: 2 }}
                >
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
