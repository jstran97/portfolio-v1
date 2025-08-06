export default function HeroSection({ darkMode }) {
    return(
        <section id="home" className="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(147, 197, 253, 0.8) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="container hero-content" style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{maxWidth: '600px' }}>
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  marginBottom: '1.5rem',
                  color: 'black'
                }}>
                  Hi, I'm <span className="text-primary">Justin Tran</span>
                </h1>
                <p className="whitespace-nowrap" style={{
                  fontSize: '1.25rem',
                  marginBottom: '2rem',
                  color: 'var(--gray)'
                }}>
                  Full Stack Developer crafting beautiful & functional web experiences
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#projects" className="btn btn-primary">View My Work</a>
                  <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              right: '-50px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              zIndex: 1
            }}></div>
            <div style={{
              position: 'absolute',
              top: '-100px',
              left: '10%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              backgroundColor: 'rgba(59, 130, 246, 0.15)',
              zIndex: 1
            }}></div>
          </section>
    );
}