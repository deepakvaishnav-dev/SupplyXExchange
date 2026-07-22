import { useState } from 'react';
import Layout from '../components/Layout';
import { Send, Paperclip, Search, Phone, Video, MoreVertical, Check, CheckCheck } from 'lucide-react';

const conversations = [
  { id: 1, name: 'Sunrise Garments', sub: 'RFQ-0112 · Polo Shirts', avatar: 'SG', color: '#2563EB', unread: 2, time: '2m ago', last: 'Sure, we can accommodate the embroidery change.', online: true },
  { id: 2, name: 'Blue River Textiles', sub: 'ORD-4819 · Denim Jeans', avatar: 'BR', color: '#059669', unread: 0, time: '1h ago', last: 'Shipment leaves tomorrow morning.', online: false },
  { id: 3, name: 'UniStitch Co.', sub: 'RFQ-0112 · Polo Shirts', avatar: 'US', color: '#7C3AED', unread: 1, time: '3h ago', last: 'Please find the revised quote attached.', online: true },
  { id: 4, name: 'Istanbul Fashion Group', sub: 'Inquiry · Winter Jackets', avatar: 'IF', color: '#DC2626', unread: 0, time: 'Yesterday', last: 'Can you share the tech pack?', online: false },
  { id: 5, name: 'Saigon Apparel', sub: 'Inquiry · Sportswear', avatar: 'SA', color: '#D97706', unread: 0, time: 'Monday', last: 'We specialize in activewear sublimation.', online: false },
];

const messagesData = {
  1: [
    { id: 1, type: 'received', text: 'Hello! Thank you for your RFQ. We have reviewed your requirements for 5,000 polo shirts.', time: '10:22 AM', read: true },
    { id: 2, type: 'received', text: 'Our quote is $26,500 total ($5.30/pc). This includes embroidery setup, fabric sourcing, and 22-day production.', time: '10:23 AM', read: true },
    { id: 3, type: 'sent', text: 'Thanks for the quick response! Can you accommodate a logo change on the sleeve as well?', time: '10:45 AM', read: true },
    { id: 4, type: 'sent', text: 'Also, can you confirm if GOTS certified fabric is available for this order?', time: '10:45 AM', read: true },
    { id: 5, type: 'received', text: 'Sure, we can accommodate the embroidery change. Sleeve logo will be an additional $0.20/pc.', time: '10:52 AM', read: true },
    { id: 6, type: 'received', text: 'Yes! We have GOTS certified cotton at our warehouse. No additional cost for quantities above 3,000 pcs.', time: '10:53 AM', read: false },
    { id: 7, type: 'received', text: 'Would you like us to send fabric swatches before confirming the order?', time: '10:53 AM', read: false },
  ]
};

export default function Chat() {
  const [activeConv, setActiveConv] = useState(conversations[0]);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(messagesData[1]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, { id: Date.now(), type: 'sent', text: input, time: 'Just now', read: false }]);
    setInput('');
  };

  return (
    <Layout role="buyer" title="Messages" subtitle="Communicate with manufacturers securely">
      <div className="chat-layout">
        {/* Sidebar */}
        <div className="chat-sidebar">
          <div className="chat-search">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--slate-50)', border: '1px solid var(--border)', borderRadius: 'var(--r-full)', padding: '8px 14px' }}>
              <Search size={15} color="var(--text-muted)" />
              <input placeholder="Search conversations..." style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.875rem', width: '100%' }} />
            </div>
          </div>
          <div className="chat-list">
            {conversations.map(c => (
              <div key={c.id} className={`chat-item${activeConv.id === c.id ? ' active' : ''}`} onClick={() => setActiveConv(c)}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div className="avatar avatar-md" style={{ background: c.color, color: 'white' }}>{c.avatar}</div>
                  {c.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderRadius: '50%', background: 'var(--emerald-500)', border: '2px solid white' }} />}
                </div>
                <div className="chat-item-info">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <div className="chat-item-name">{c.name}</div>
                    <div className="chat-item-time">{c.time}</div>
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: 2 }}>{c.sub}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="chat-item-last">{c.last}</div>
                    {c.unread > 0 && <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--blue-600)', color: 'white', fontSize: '0.6875rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.unread}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Main */}
        <div className="chat-main">
          {/* Header */}
          <div className="chat-header">
            <div className="avatar avatar-md" style={{ background: activeConv.color, color: 'white' }}>{activeConv.avatar}</div>
            <div style={{ flex: 1 }}>
              <div className="chat-header-name">{activeConv.name}</div>
              <div className="chat-header-status">{activeConv.online ? '● Online' : 'Last seen 1h ago'} · {activeConv.sub}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn-icon"><Phone size={16} /></button>
              <button className="btn-icon"><Video size={16} /></button>
              <button className="btn-icon"><MoreVertical size={16} /></button>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {/* Date separator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0' }}>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Today, July 22, 2026</span>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>

            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.type}`}>
                <div className="message-bubble">{msg.text}</div>
                <div className="message-time">
                  {msg.time}
                  {msg.type === 'sent' && (
                    msg.read ? <CheckCheck size={12} style={{ display: 'inline', marginLeft: 4, color: 'var(--blue-400)' }} />
                    : <Check size={12} style={{ display: 'inline', marginLeft: 4 }} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <button className="btn-icon"><Paperclip size={16} /></button>
            <input
              className="chat-input"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={sendMessage}
              style={{ borderRadius: 'var(--r-full)', padding: '8px 16px' }}
            >
              <Send size={15} /> Send
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
