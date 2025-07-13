import React from 'react';

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{
        backgroundColor: 'rgb(56, 126, 209)',
        color: 'white',
        padding: '40px 0',
        fontFamily: 'Segoe UI, sans-serif',
        maxWidth: '1650px',
        margin: '0 auto'
      }}
    >
      <div
        id="supportWrapper"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 80px 30px',
        }}
      >
        <h4 style={{ fontSize: '28px', fontWeight: '600', margin: 0 }}>
          Support Portal
        </h4>
        <a
          href=""
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            backgroundColor: '#2f6fc1',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'background 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1e4c92')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2f6fc1')}
        >
          Track Tickets
        </a>
      </div>

      <div className="row px-4">
        <div className="col-6 px-3">
          <h1 className="fs-3" style={{ fontWeight: '500', marginBottom: '16px' }}>
            Find quick answers or raise a ticket
          </h1>
          <input
            placeholder="Eg. How do I activate F&O"
            style={{
              padding: '16px 40px',
              width: '100%',
              fontSize: '18px',
              borderRadius: '10px',
              border: 'none',
              marginBottom: '16px'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Track account opening', 'Track segment activation', 'Intraday margins', 'Kite user manual'].map((text, index) => (
              <a
                key={index}
                href=""
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '15px',
                  padding: '6px 10px',
                  borderRadius: '5px',
                  transition: 'background 0.2s',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className="col-6 px-3">
          <h1 className="fs-3" style={{ fontWeight: '500', marginBottom: '16px' }}>
            Featured Articles
          </h1>
          <ol style={{ paddingLeft: '20px' }}>
            {["Current Takeovers and Delisting - January 2024", "Latest Intraday leverages - MIS & CO"].map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <a
                  href=""
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#e0e0e0')}
                  onMouseOut={(e) => (e.target.style.color = 'white')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;