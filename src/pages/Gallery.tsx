import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      category: 'marine',
      image: '/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png',
      title: 'Luxury Yacht Hull Refinishing',
      description: 'Complete hull restoration with premium marine coatings'
    },
    {
      category: 'marine',
      image: '/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bate4db61w6mqvjymv9.png',
      title: 'Professional Marine Coating',
      description: 'Expert application of marine-grade protective finishes'
    },
    {
      category: 'residential',
      image: '/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png',
      title: 'Modern Home Interior',
      description: 'Contemporary residential painting with premium finishes'
    },
    {
      category: 'residential',
      image: '/images/residential/20250606_1638_Freshly Painted Interiors_simple_compose_01jx2eq5a8f28ryq8v2s832b32.png',
      title: 'Elegant Interior Design',
      description: 'Sophisticated colour schemes and expert application'
    },
    {
      category: 'commercial',
      image: '/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png',
      title: 'Modern Office Space',
      description: 'Professional commercial painting with minimal disruption'
    },
    {
      category: 'commercial',
      image: '/images/commercial/20250606_1655_Modern Creative Workspace_simple_compose_01jx2fpqrhfgaae5az618crc1c.png',
      title: 'Creative Workspace',
      description: 'Inspiring work environments through thoughtful design'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p className="lead">Showcasing our finest work across marine, residential, and commercial projects</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'marine' ? 'active' : ''}`}
              onClick={() => setActiveFilter('marine')}
            >
              Marine
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="gallery-item fade-in">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} className="zoom-image" />
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
    </div>
  );
};

export default Gallery;