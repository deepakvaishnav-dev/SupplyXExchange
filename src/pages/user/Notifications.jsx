import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { CheckCheck, Settings, Bell } from 'lucide-react';

const notifications = [
  { id: 1, type: 'quote', icon: '💰', title: 'New Quote Received', desc: 'UniStitch Co. submitted a quote of $24,750 for RFQ SXR-0112 (Men\'s Polo Shirts).', time: '3 minutes ago', unread: true, color: 'var(--blue-50)' },
  { id: 2, type: 'production', icon: '⚙️', title: 'Production Update', desc: 'ORD-4821 — Stitching stage is now 65% complete. Estimated completion: Aug 5, 2026.', time: '28 minutes ago', unread: true, color: 'var(--blue-50)' },
  { id: 3, type: 'message', icon: '💬', title: 'New Message', desc: 'Sunrise Garments sent: "Sure, we can accommodate the embroidery change on the sleeve."', time: '1 hour ago', unread: true, color: 'var(--blue-50)' },
  { id: 4, type: 'quote', icon: '💰', title: 'Quote Accepted', desc: 'You accepted Blue River Textiles\'s quote for ORD-4819 (Denim Jeans). Order is now confirmed.', time: '3 hours ago', unread: false, color: 'transparent' },
  { id: 5, type: 'order', icon: '✅', title: 'Order Delivered', desc: 'ORD-4809 — Sports Jerseys have been delivered to your warehouse. Please confirm receipt.', time: '1 day ago', unread: false, color: 'transparent' },
  { id: 6, type: 'rfq', icon: '📋', title: 'RFQ Expiring Soon', desc: 'RFQ SXR-0104 (Formal Trousers) expires in 2 days. Only 2 quotes received so far.', time: '1 day ago', unread: false, color: 'var(--amber-50)' },
  { id: 7, type: 'review', icon: '⭐', title: 'Review Received', desc: 'Sunrise Garments left you a 5-star review: "Excellent buyer — clear requirements and fast approvals."', time: '2 days ago', unread: false, color: 'transparent' },
  { id: 8, type: 'system', icon: '🔔', title: 'Account Verified', desc: 'Your buyer account has been fully verified. You now have access to all premium features.', time: '5 days ago', unread: false, color: 'var(--emerald-50)' },
  { id: 9, type: 'shipping', icon: '🚢', title: 'Shipment Update', desc: 'ORD-4801 (Winter Jackets) has departed JNPT, Mumbai. Expected arrival: Aug 25, 2026.', time: '5 days ago', unread: false, color: 'transparent' },
  { id: 10, type: 'promo', icon: '🎉', title: 'New Feature: Production Photos', desc: 'Manufacturers can now upload production photos directly to your order timeline. Try it now.', time: '1 week ago', unread: false, color: 'transparent' },
];

const typeFilters = ['All', 'Quotes', 'Orders', 'Messages', 'Production', 'System'];

export default function Notifications() {
  const [filter, setFilter] = useState('All');
  const [items, setItems] = useState(notifications);

  const unreadCount = items.filter(n => n.unread).length;
  const markAllRead = () => setItems(items.map(n => ({ ...n, unread: false })));
  const markRead = (id) => setItems(items.map(n => n.id === id ? { ...n, unread: false } : n));

  return (
    <Layout role="buyer" title="Notifications" subtitle={`${unreadCount} unread notifications`}>
      {/* Notification Preferences Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--blue-50), var(--emerald-50))', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-4) var(--sp-6)', marginBottom: 'var(--sp-5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Bell size={20} color="var(--blue-600)" />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>Stay on top of your business</div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Get real-time updates on quotes, orders, and messages</div>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm"><Settings size={14} /> Preferences</button>
      </div>

      {/* Filters + Mark All Read */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--sp-5)' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {typeFilters.map(f => (
            <button key={f} className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        {unreadCount > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={markAllRead}>
            <CheckCheck size={14} /> Mark all read ({unreadCount})
          </button>
        )}
      </div>

      {/* Notification List */}
      <div className="card">
        {items.map((n, i) => (
          <div
            key={n.id}
            className={`notif-item${n.unread ? ' unread' : ''}`}
            onClick={() => markRead(n.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="notif-icon" style={{
              background: n.type === 'quote' ? 'var(--blue-100)' : n.type === 'message' ? 'var(--purple-100)' :
                n.type === 'order' ? 'var(--emerald-100)' : n.type === 'production' ? 'var(--amber-100)' :
                n.type === 'review' ? 'var(--amber-100)' : 'var(--slate-100)'
            }}>
              <span style={{ fontSize: '1.25rem' }}>{n.icon}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div className="notif-title">{n.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  <span className="notif-time">{n.time}</span>
                  {n.unread && <div className="notif-dot" />}
                </div>
              </div>
              <div className="notif-desc">{n.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div style={{ textAlign: 'center', marginTop: 'var(--sp-6)' }}>
        <button className="btn btn-ghost btn-md">Load older notifications</button>
      </div>
    </Layout>
  );
}
