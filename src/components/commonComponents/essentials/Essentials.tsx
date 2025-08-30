import React from 'react';

interface Store {
  id: number;
  name: string;
  image: string;
  address: string;
  distance: string;
  description: string;
  phone: string;
  hours: string;
}

interface EssentialsProps {
  title: string;
  stores: Store[];
}

const Essentials: React.FC<EssentialsProps> = ({ title, stores }) => {
  const cardStyle = {
    display: 'flex',
    alignItems: 'stretch',
    marginBottom: '3rem',
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    minHeight: '320px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const cardHoverStyle = {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 48px rgba(0,0,0,0.15)'
  };

  const imageStyle = {
    flex: '0 0 40%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '320px'
  };

  const contentStyle = {
    flex: '1',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '1rem',
    lineHeight: '1.3'
  };

  const descriptionStyle = {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontSize: '1rem'
  };

  const detailsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem'
  };

  const detailItemStyle = {
    padding: '0.75rem',
    background: '#f8f9fa',
    borderRadius: '8px',
    fontSize: '0.9rem'
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#2c3e50',
    display: 'block',
    marginBottom: '0.25rem'
  };

  const distanceBadgeStyle = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginTop: '1rem'
  };

  return (
    <>
      <main style={{
        marginTop: '8rem', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        minHeight: '70vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: '#2c3e50', 
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            {title}
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Find the perfect {title} near you with fresh produce, organic options, and healthy lifestyle products.
          </p>
        </div>

        {stores.map((store, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={store.id}
              style={{
                ...cardStyle,
                flexDirection: isEven ? 'row' : 'row-reverse'
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, cardHoverStyle);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
              }}
            >
              <div
                style={{
                  ...imageStyle,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${store.image})`
                }}
              />
              
              <div style={contentStyle}>
                <div>
                  <h2 style={titleStyle}>{store.name}</h2>
                  <p style={descriptionStyle}>{store.description}</p>
                  
                  <div style={detailsStyle}>
                    <div style={detailItemStyle}>
                      <span style={labelStyle}>📍 Address</span>
                      {store.address}
                    </div>
                    <div style={detailItemStyle}>
                      <span style={labelStyle}>📞 Phone</span>
                      {store.phone}
                    </div>
                    <div style={{...detailItemStyle, gridColumn: '1 / -1'}}>
                      <span style={labelStyle}>🕒 Hours</span>
                      {store.hours}
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={distanceBadgeStyle}>
                    📍 {store.distance} away
                  </span>
                  <button
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '25px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Visit Store
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Essentials;