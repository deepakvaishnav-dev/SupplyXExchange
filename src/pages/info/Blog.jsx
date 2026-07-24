import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: 'Complete Sourcing Guide: How to Work with Tirupur Garment Manufacturers',
      category: 'Sourcing Strategy',
      author: 'Rajesh Kumar, Head of Supply',
      date: 'July 18, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Tirupur produces over 80% of India knitwear exports. Learn how to draft tech packs, negotiate MOQs, and establish quality control with Tirupur knitwear units.'
    },
    {
      id: 2,
      title: 'Understanding GSM, Yarn Counts & Combed Cotton for T-Shirt Brands',
      category: 'Fabric Technicals',
      author: 'Priya Sharma, Lead Textile Engineer',
      date: 'July 10, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80',
      excerpt: 'What is the difference between 180 GSM bio-wash single jersey and 240 GSM heavy terry? Here is everything D2C founders must know about cotton fabrics.'
    },
    {
      id: 3,
      title: '5 Pre-Shipment Quality Checkpoints Every Apparel Buyer Must Enforce',
      category: 'Quality Control',
      author: 'Vikramaditya S., QC Director',
      date: 'June 28, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Prevent rejected shipments by enforcing AQL 2.5 inspection standards across seam strength, color fastness, shrinkage tolerance, and packaging compliance.'
    },
    {
      id: 4,
      title: 'How Escrow Protection Prevents Manufacturing Fraud in B2B Trade',
      category: 'Financial Safety',
      author: 'Ananya Verma, Risk Lead',
      date: 'June 15, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Why traditional 50% advance bank transfers put buyers at risk and how digital milestone escrow ensures zero financial loss.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <div style={{ backgroundColor: 'var(--slate-900)', color: '#ffffff', padding: '70px 32px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={14} /> SOURCING INSIGHTS &amp; BLOG
          </div>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '16px' }}>Apparel Sourcing Masterclass</h1>
          <p style={{ color: 'var(--slate-300)', fontSize: '1.1rem' }}>
            Industry insights, fabric guides, and factory management tips for fashion brand founders &amp; apparel buyers.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 32px', flex: 1, width: '100%' }}>
        <div className="responsive-grid-2col" style={{ gap: '32px' }}>
          {posts.map((post) => (
            <div key={post.id} style={{ border: '1px solid var(--slate-200)', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-black" style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '0.75rem' }}>
                  {post.category}
                </span>
              </div>

              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--slate-500)', marginBottom: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> {post.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><User size={14} /> {post.author}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>

                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  {post.excerpt}
                </p>

                <button className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }} onClick={() => alert(`Reading full article: ${post.title}`)}>
                  Read Article <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
