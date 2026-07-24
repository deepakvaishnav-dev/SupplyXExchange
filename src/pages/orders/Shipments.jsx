import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import {
  Download, Truck, MapPin, CheckCircle2, RefreshCw, ShieldCheck,
  Phone, Mail, Clock, ExternalLink, Navigation, Layers, FileText,
  Package, AlertCircle, ArrowLeft, Share2
} from 'lucide-react';

const mockItems = [
  { sku: 'SKU-TSH-001', name: 'Basic Crew Neck T-Shirt (Black, M)', qty: '400 pcs', weight: '48 kg', carton: 'Box #1 - #4' },
  { sku: 'SKU-TSH-002', name: 'Basic Crew Neck T-Shirt (Black, L)', qty: '400 pcs', weight: '48 kg', carton: 'Box #5 - #8' },
  { sku: 'SKU-TSH-003', name: 'Basic Crew Neck T-Shirt (Black, XL)', qty: '200 pcs', weight: '24 kg', carton: 'Box #9 - #10' },
];

const mockDocuments = [
  { name: 'Proof of Delivery (POD)', type: 'PDF', size: '1.2 MB', date: 'May 22, 2024' },
  { name: 'Lorry Receipt (LR) #VRL-8821', type: 'PDF', size: '850 KB', date: 'May 20, 2024' },
  { name: 'Commercial Invoice & Packing List', type: 'PDF', size: '2.4 MB', date: 'May 18, 2024' },
  { name: 'E-Way Bill #381029384912', type: 'PDF', size: '420 KB', date: 'May 20, 2024' },
];

const mockLogs = [
  { time: 'May 22, 2024 - 10:45 AM', location: 'Hosur Toll Plaza Hub, TN', status: 'Arrived at Transit Hub', detail: 'Vehicle scanner registered shipment at toll automated RFID gates.' },
  { time: 'May 21, 2024 - 08:30 PM', location: 'Salem Express Highway', status: 'In Transit', detail: 'Driver milestone ping: 140 km traveled without delay.' },
  { time: 'May 20, 2024 - 09:15 AM', location: 'Tirupur Industrial Area', status: 'Dispatched from Factory', detail: 'Loaded onto Container Truck #TN-38-AX-9021.' },
  { time: 'May 15, 2024 - 11:30 AM', location: 'SupplyX Platform', status: 'Order Confirmed', detail: 'Escrow payment verified and production order locked.' },
];

export default function Shipments() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Tracking Details');
  const [mapType, setMapType] = useState('m'); // 'm' | 'k' | 'p'
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState('22 May 2024, 10:45 AM');

  const handleRefreshMap = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const now = new Date();
      setLastRefreshed(`${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (Just now)`);
    }, 800);
  };

  return (
    <Layout role="buyer" title="Shipment Tracking" subtitle="Real-time GPS tracking and transit milestone monitoring">
      
      {/* Breadcrumb & Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ cursor: 'pointer', color: 'var(--orange-500)', fontWeight: 600 }} onClick={() => navigate('/orders')}>
            Dashboard
          </span> &gt;
          <span style={{ cursor: 'pointer', color: 'var(--orange-500)', fontWeight: 600 }} onClick={() => navigate('/orders')}>
            Shipments
          </span> &gt;
          <span style={{ color: 'var(--slate-900)', fontWeight: 700 }}>SX-2024-05-001</span>
        </div>

        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/orders')}>
          <ArrowLeft size={14} /> Back to My Orders
        </button>
      </div>

      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--slate-900)', letterSpacing: '-0.02em' }}>
            Shipment #SX-2024-05-001
          </h1>
          <span className="badge badge-green" style={{ fontSize: '0.84rem' }}>
            <Truck size={13} /> In Transit
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-outline btn-sm">
            <Download size={14} /> Download POD
          </button>
          <button className="btn btn-outline btn-sm">
            <Share2 size={14} /> Share Tracking Link
          </button>
        </div>
      </div>

      {/* Responsive Top Summary Banner (5 cols desktop -> 3 tablet -> 1 mobile) */}
      <div className="shipment-banner-grid">
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Product Cargo</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--slate-900)' }}>Basic Crew Neck T-Shirt</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>1,000 Pieces • 120 kg</div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Shipment Date</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--slate-900)' }}>20 May 2024</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Dispatched 09:15 AM</div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Expected Delivery</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--slate-900)' }}>10 Jun 2024</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 700 }}>On Schedule (2 Days Left)</div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Logistics Carrier</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--slate-900)' }}>VRL Logistics</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--orange-500)', fontWeight: 600 }}>Tracking: VRL123456789</div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: 2 }}>Current GPS Location</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--slate-900)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <MapPin size={14} color="var(--orange-500)" /> Hosur Hub, TN
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 600 }}>Active Vehicle Signal</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs-row">
        {['Tracking Details', 'Shipment Items', 'Documents', 'Updates Log', 'Supplier Info'].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Responsive Grid Layout (Timeline + Google Map + Carrier Summary) */}
      <div className="shipment-main-grid">
        
        {/* Left Column: Vertical Milestone Timeline */}
        <div className="card" style={{ height: 'fit-content' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>Transit Timeline</h3>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--green-600)' }}>60% Completed</span>
          </div>
          
          <div className="timeline-stepper" style={{ margin: 0 }}>
            <div className="timeline-step completed">
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--slate-900)' }}>Order Confirmed &amp; Packed</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>15 May 2024, 11:30 AM</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Tirupur Garment Complex</div>
            </div>

            <div className="timeline-step completed">
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--slate-900)' }}>Dispatched from Factory</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>20 May 2024, 09:15 AM</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>VRL Container #TN-38-AX-9021</div>
            </div>

            <div className="timeline-step active">
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--orange-500)', display: 'flex', alignItems: 'center', gap: 6 }}>
                In Transit <span className="live-pulse-dot" style={{ width: 8, height: 8 }} />
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-600)', fontWeight: 600 }}>22 May 2024, 10:45 AM</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-700)', fontWeight: 700 }}>Hosur Transit Toll Hub, TN</div>
            </div>

            <div className="timeline-step">
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)' }}>Out for Final Delivery</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Expected: 09 Jun 2024</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Bangalore Logistics Park</div>
            </div>

            <div className="timeline-step">
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)' }}>Delivered &amp; POD Signed</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Expected: 10 Jun 2024</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Buyer Central Warehouse</div>
            </div>
          </div>

          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--slate-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate-500)' }}>
            <span>Carrier Helpline</span>
            <strong style={{ color: 'var(--slate-900)' }}>1800-425-9000</strong>
          </div>
        </div>

        {/* Center Column: Interactive Google Map Container */}
        <div className="card" style={{ padding: 16, display: 'flex', flexDirection: 'column' }}>
          
          {/* Map Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="badge badge-green" style={{ fontSize: '0.78rem' }}>
                <span className="live-pulse-dot" style={{ width: 7, height: 7 }} /> Live GPS Tracker
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                Vehicle #TN-38-AX-9021
              </span>
            </div>

            <button
              className="btn btn-outline btn-sm"
              onClick={handleRefreshMap}
              disabled={isRefreshing}
              style={{ fontSize: '0.78rem' }}
            >
              <RefreshCw size={13} className={isRefreshing ? 'spin' : ''} /> {isRefreshing ? 'Updating...' : 'Refresh GPS'}
            </button>
          </div>

          {/* Interactive Google Map Embed Frame */}
          <div className="google-map-wrapper">
            
            {/* Top Live Badge Overlay */}
            <div className="map-live-overlay">
              <span className="live-pulse-dot" />
              <span>LIVE: Hosur Hub, Tamil Nadu</span>
            </div>

            {/* Map View Controls */}
            <div className="map-controls-overlay">
              <button
                className="map-control-btn"
                style={{ background: mapType === 'm' ? 'var(--orange-500)' : '#fff', color: mapType === 'm' ? '#fff' : 'var(--slate-700)' }}
                onClick={() => setMapType('m')}
              >
                Map
              </button>
              <button
                className="map-control-btn"
                style={{ background: mapType === 'k' ? 'var(--orange-500)' : '#fff', color: mapType === 'k' ? '#fff' : 'var(--slate-700)' }}
                onClick={() => setMapType('k')}
              >
                Satellite
              </button>
            </div>

            {/* Live Google Maps Iframe */}
            <iframe
              title="Google Map Live Shipment Tracker"
              className="google-map-iframe"
              src={`https://maps.google.com/maps?q=Hosur,Tamil+Nadu,India&t=${mapType}&z=11&ie=UTF8&iwloc=&output=embed`}
              loading="lazy"
              allowFullScreen
            />

            {/* Bottom Floating GPS Vehicle Status Card */}
            <div className="map-vehicle-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: 'var(--orange-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Truck size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--slate-900)', fontSize: '0.875rem' }}>
                    VRL Logistics Express Truck
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>
                    Driver: Ramesh Kumar • Speed: 48 km/h
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Route Progress</div>
                <div style={{ fontWeight: 800, color: 'var(--green-600)', fontSize: '0.875rem' }}>
                  Tirupur ➔ Hosur ➔ Bangalore
                </div>
              </div>
            </div>

          </div>

          {/* Map Footer Note */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: '12px' }}>
            <span>Last GPS Sync: {lastRefreshed}</span>
            <a
              href="https://maps.google.com/?q=Hosur,Tamil+Nadu,India"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--orange-500)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}
            >
              Open in Google Maps App <ExternalLink size={12} />
            </a>
          </div>

        </div>

        {/* Right Column: Shipment Summary & Supplier info */}
        <div className="shipment-summary-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '16px' }}>Shipment Summary</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Total Quantity</span><strong>1,000 Pieces</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Total Weight</span><strong>120.5 kg</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Cartons</span><strong>10 Sealed Boxes</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Declared Value</span><strong>₹2,10,000</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--slate-500)' }}>Shipping Mode</span><strong>Surface Heavy Cargo</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--slate-500)' }}>Escrow Status</span>
                <span className="badge badge-emerald">Funded &amp; Locked</span>
              </div>
            </div>

            <button className="btn btn-outline btn-sm" style={{ width: '100%', marginTop: '16px' }} onClick={() => navigate('/orders')}>
              View Original Order #ORD-4821
            </button>
          </div>

          {/* Supplier Card */}
          <div className="card">
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '14px' }}>Manufacturer Partner</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--slate-900)', color: '#fff', fontSize: '0.9rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                🇮🇳
              </div>
              <div>
                <div style={{ fontWeight: 800, color: 'var(--slate-900)' }}>Tirupur Clothing Co.</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 700 }}>Verified Exporter • ★ 4.9</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.78rem', color: 'var(--slate-600)', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={13} color="var(--orange-500)" /> Tirupur Garment Zone, TN, India</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Phone size={13} /> +91 98765 43210</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Mail size={13} /> dispatch@tirupurclothing.com</div>
            </div>

            <button className="btn btn-orange btn-sm" style={{ width: '100%' }} onClick={() => navigate('/messages')}>
              Contact Supplier Dispatch
            </button>
          </div>

        </div>

      </div>

      {/* Tab Specific Content Panels */}
      {activeTab === 'Shipment Items' && (
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: 16 }}>Manifest Packing List</h3>
          <div className="table-responsive-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>SKU Code</th>
                  <th>Item Description</th>
                  <th>Quantity</th>
                  <th>Net Weight</th>
                  <th>Packaging Boxes</th>
                </tr>
              </thead>
              <tbody>
                {mockItems.map((item) => (
                  <tr key={item.sku}>
                    <td style={{ fontWeight: 700, color: 'var(--orange-500)' }}>{item.sku}</td>
                    <td style={{ fontWeight: 600 }}>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.weight}</td>
                    <td>{item.carton}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'Documents' && (
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: 16 }}>Shipment Compliance Documents</h3>
          <div className="responsive-grid-2col">
            {mockDocuments.map((doc) => (
              <div key={doc.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 14, border: '1px solid var(--slate-200)', borderRadius: 'var(--r-lg)', background: 'var(--slate-50)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <FileText size={22} color="var(--orange-500)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--slate-900)' }}>{doc.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>{doc.type} • {doc.size} • {doc.date}</div>
                  </div>
                </div>
                <button className="btn btn-outline btn-sm">
                  <Download size={14} /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Updates Log' && (
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: 16 }}>Live Carrier Audit Log</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {mockLogs.map((log, idx) => (
              <div key={idx} style={{ padding: 14, borderLeft: '3px solid var(--orange-500)', background: 'var(--slate-50)', borderRadius: '0 var(--r-md) var(--r-md) 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <strong style={{ fontSize: '0.875rem', color: 'var(--slate-900)' }}>{log.status} — {log.location}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>{log.time}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--slate-600)' }}>{log.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Overall Progress Card */}
      <div className="card" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--slate-900)' }}>Shipment Completion Status</h3>
          <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--green-600)' }}>60% Completed</span>
        </div>

        <div className="progress-bar-bg" style={{ height: 10 }}>
          <div className="progress-bar-fill" style={{ width: '60%', background: 'linear-gradient(90deg, var(--orange-500), var(--green-500))' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: 8, flexWrap: 'wrap', gap: 8 }}>
          <span>Order Confirmed (15 May)</span>
          <span>Dispatched (20 May)</span>
          <span style={{ fontWeight: 800, color: 'var(--orange-500)' }}>In Transit (22 May)</span>
          <span>Out for Delivery (09 Jun)</span>
          <span>Delivered (10 Jun)</span>
        </div>
      </div>

    </Layout>
  );
}
