import { useState } from 'react';
import {
  ShoppingBag, FileText, IndianRupee, Truck, Calendar, TrendingUp,
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Award, Bell, MessageSquare
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const chartData = [
  { name: '10 May', ordersPlaced: 10, ordersCompleted: 5, amount: 40 },
  { name: '11 May', ordersPlaced: 14, ordersCompleted: 8, amount: 60 },
  { name: '12 May', ordersPlaced: 13, ordersCompleted: 7, amount: 55 },
  { name: '13 May', ordersPlaced: 10, ordersCompleted: 4, amount: 45 },
  { name: '14 May', ordersPlaced: 16, ordersCompleted: 9, amount: 80 },
  { name: '15 May', ordersPlaced: 12, ordersCompleted: 6, amount: 50 },
  { name: '16 May', ordersPlaced: 15, ordersCompleted: 10, amount: 90 },
  { name: '17 May', ordersPlaced: 18, ordersCompleted: 12, amount: 110 },
];

export default function BuyerDashboard() {
  const navigate = useNavigate();

  return (
    <Layout title="Buyer Dashboard">
      
      {/* Welcome Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>
            Welcome back, Shrishail! 👋
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>
            Here's what's happening with your business today.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: '#ffffff', border: '1px solid var(--slate-200)', borderRadius: 'var(--r-md)', padding: '8px 14px', fontSize: '0.84rem', fontWeight: 600, color: 'var(--slate-700)' }}>
          <Calendar size={16} />
          <span>10 May 2024 – 17 May 2024</span>
        </div>
      </div>

      {/* 4 KPI Metric Cards */}
      <div className="responsive-grid-4col" style={{ marginBottom: '24px' }}>
        
        {/* Card 1 */}
        <div className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--purple-100, #F3E8FF)', color: 'var(--purple-600, #7E22CE)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ShoppingBag size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>Total Orders</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)' }}>12</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingUp size={12} /> ↑ 20% vs last 7 days
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--blue-50)', color: 'var(--blue-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FileText size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>Total Inquiries</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)' }}>8</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingUp size={12} /> ↑ 14% vs last 7 days
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--green-50)', color: 'var(--green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <IndianRupee size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>Total Spend</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)' }}>₹4,18,000</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingUp size={12} /> ↑ 18% vs last 7 days
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--orange-50)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Truck size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>Active Shipments</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)' }}>5</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--green-600)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingUp size={12} /> ↑ 25% vs last 7 days
            </div>
          </div>
        </div>

      </div>

      {/* Main Grid: Overview Line Chart + Tasks & Notifications */}
      <div className="responsive-layout-detail" style={{ marginBottom: '24px' }}>
        
        {/* Order Overview Chart */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Order Overview</h3>
            </div>
            <select style={{ padding: '6px 12px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.78rem' }}>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>

          <div style={{ height: '240px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} />
                <Tooltip />
                <Line type="monotone" dataKey="ordersPlaced" stroke="#1570EF" strokeWidth={2.5} name="Orders Placed" />
                <Line type="monotone" dataKey="ordersCompleted" stroke="#12B76A" strokeWidth={2.5} name="Orders Completed" />
                <Line type="monotone" dataKey="amount" stroke="#FF5400" strokeWidth={2.5} name="Amount (k)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tasks & Notifications List */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Tasks &amp; Notifications</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--orange-500)', fontWeight: 600, cursor: 'pointer' }}>View All</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'var(--blue-50)', color: 'var(--blue-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FileText size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>3 quotations pending</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Need your response</div>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>10m ago</div>
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'var(--orange-50)', color: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShoppingBag size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Order #SX-2024-05-011</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Production started</div>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>1h ago</div>
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'var(--green-50)', color: 'var(--green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <IndianRupee size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>Payment of ₹1,05,000</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Due in 2 days</div>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>2h ago</div>
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'var(--purple-100)', color: 'var(--purple-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MessageSquare size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--slate-900)' }}>New message from Tirupur Clothing</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>Tirupur Clothing Co.</div>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>3h ago</div>
            </div>

          </div>
        </div>

      </div>

      {/* Grid Row 2: Top Categories + Top Manufacturers + Recent Activity & Banner */}
      <div className="responsive-grid-3col" style={{ marginBottom: '24px' }}>
        
        {/* Top Categories Card */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Top Categories</h3>
            <select style={{ padding: '4px 8px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.75rem' }}>
              <option>By Orders</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: 110, height: 110, flexShrink: 0 }}>
              <svg width="110" height="110" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1570EF" strokeWidth="5" strokeDasharray="37.5, 100" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FF5400" strokeWidth="5" strokeDasharray="25, 100" strokeDashoffset="-37.5" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F79009" strokeWidth="5" strokeDasharray="14.6, 100" strokeDashoffset="-62.5" />
              </svg>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--slate-500)' }}>Total</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)' }}>48</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.78rem' }}>
              <div><span style={{ color: '#1570EF', fontWeight: 700 }}>● T-Shirts</span> — 18 (37.5%)</div>
              <div><span style={{ color: '#FF5400', fontWeight: 700 }}>● Hoodies</span> — 12 (25.0%)</div>
              <div><span style={{ color: '#F79009', fontWeight: 700 }}>● Polo Shirts</span> — 7 (14.6%)</div>
              <div><span style={{ color: '#12B76A', fontWeight: 700 }}>● Track Pants</span> — 6 (12.5%)</div>
            </div>
          </div>
        </div>

        {/* Top Manufacturers Ranking */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>Top Manufacturers</h3>
            <select style={{ padding: '4px 8px', borderRadius: 'var(--r-md)', border: '1px solid var(--slate-200)', fontSize: '0.75rem' }}>
              <option>By Order Value</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.84rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#101828', color: '#fff', fontSize: '0.68rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TC</div>
                <span style={{ fontWeight: 700, color: 'var(--slate-900)' }}>Tirupur Clothing</span>
              </div>
              <div><strong>₹1,82,000</strong></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#1E293B', color: '#fff', fontSize: '0.68rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>US</div>
                <span style={{ fontWeight: 700, color: 'var(--slate-900)' }}>Urban Stitchers</span>
              </div>
              <div><strong>₹1,05,000</strong></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#0F172A', color: '#fff', fontSize: '0.68rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>KM</div>
                <span style={{ fontWeight: 700, color: 'var(--slate-900)' }}>Knits &amp; More</span>
              </div>
              <div><strong>₹68,000</strong></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#047857', color: '#fff', fontSize: '0.68rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SE</div>
                <span style={{ fontWeight: 700, color: 'var(--slate-900)' }}>Styleweave Exports</span>
              </div>
              <div><strong>₹53,000</strong></div>
            </div>
          </div>
        </div>

        {/* Become a Verified Buyer Card */}
        <div style={{ backgroundColor: 'var(--blue-600)', color: '#ffffff', borderRadius: 'var(--r-lg)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <ShieldCheck size={20} />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: 6 }}>Become a Verified Buyer</h3>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
              Get better deals, priority support &amp; exclusive benefits.
            </p>
          </div>
          <button className="btn btn-black btn-sm" style={{ width: '100%', marginTop: 16 }}>
            Get Verified Now <ArrowRight size={14} />
          </button>
        </div>

      </div>

    </Layout>
  );
}
