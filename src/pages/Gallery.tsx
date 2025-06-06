import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    // Marine Projects
    {
      category: 'marine',
      image: '/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png',
      title: '40ft Yacht Hull',
      description: 'Full hull respray - took her from tired to brilliant'
    },
    {
      category: 'marine',
      image: '/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bate4db61w6mqvjymv9.png',
      title: 'Racing Boat Anti-Foul',
      description: 'Annual anti-foul service - keeps her fast and clean'
    },
    {
      category: 'marine',
      image: '/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bavfm7tjnzchcfq5emv.png',
      title: 'Classic Wooden Boat',
      description: 'Varnish work on a beauty - 8 coats for that mirror finish'
    },
    {
      category: 'marine',
      image: '/images/marine/20250606_1652_Sleek Boat Deck_simple_compose_01jx2fhsjxe9vvmmwspyxw55gm.png',
      title: 'Deck Refinishing',
      description: 'Non-slip deck coating - safe and looks sharp'
    },
    // Residential Projects  
    {
      category: 'residential',
      image: '/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png',
      title: 'Victorian Terrace',
      description: 'Full house refresh - brought it into this century'
    },
    {
      category: 'residential',
      image: '/images/residential/20250606_1638_Freshly Painted Interiors_simple_compose_01jx2eq5a8f28ryq8v2s832b32.png',
      title: 'Modern Living Room',
      description: 'Feature wall and full room - transformed the space'
    },
    {
      category: 'residential',
      image: '/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf3f6vtaekphaggg9jb.png',
      title: 'Country Cottage',
      description: 'Traditional colours, modern finish - kept the character'
    },
    {
      category: 'residential',
      image: '/images/residential/20250605_2209_Joyful Home Walkthrough_simple_compose_01jx0f9mr4e5ks3gkc3fjqs2fm.png',
      title: 'Exterior Render',
      description: 'Weather-proof coating - looks good, lasts years'
    },
    // Commercial Projects
    {
      category: 'commercial',
      image: '/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png',
      title: 'Tech Office',
      description: 'Weekend job - they opened Monday morning as normal'
    },
    {
      category: 'commercial',
      image: '/images/commercial/20250606_1655_Modern Creative Workspace_simple_compose_01jx2fpqrhfgaae5az618crc1c.png',
      title: 'Design Studio',
      description: 'Their brand colours throughout - looks professional'
    },
    {
      category: 'commercial',
      image: '/images/commercial/20250606_1643_Elegant Retail Showcase_simple_compose_01jx2f0a27f6c8y1mp1cz2vrsk.png',
      title: 'Boutique Shop',
      description: 'Overnight work - no lost trading days'
    },
    {
      category: 'commercial',
      image: '/images/commercial/20250606_1654_Modern Boutique Interior_simple_compose_01jx2fn3vkfrvt20v2c9ayqpfe.png',
      title: 'Restaurant Refresh',
      description: 'Quick turnaround between lunch and dinner service'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="paint-splash-accent">
          <img src="/client-images/paint splash.png" alt="" />
        </div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="fade-in">Recent Work</h1>
            <p className="lead fade-in">15 years of boats, houses and businesses - here's what I've been up to</p>
          </div>
        </div>
      </section>

      <section className="gallery-content section">
        <div className="container">
          <div className="gallery-filters fade-in">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Work
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'marine' ? 'active' : ''}`}
              onClick={() => setActiveFilter('marine')}
            >
              🛥️ Boats
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveFilter('residential')}
            >
              🏠 Houses
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercial')}
            >
              🏢 Business
            </button>
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="gallery-item card fade-in">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="fade-in">Like What You See?</h2>
            <p className="lead fade-in">
              Let's talk about your project. Free quotes, no pressure.
            </p>
            <div className="cta-actions fade-in">
              <a href="tel:07453817030" className="btn btn-large btn-white">
                📞 Call: 07453 817030
              </a>
              <Link to="/booking" className="btn btn-large btn-outline-white">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;