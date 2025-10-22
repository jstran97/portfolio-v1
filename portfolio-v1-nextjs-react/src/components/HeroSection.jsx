export default function HeroSection() {
    return(
        <section id="home" className="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(147, 197, 253, 0.8) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="container" style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div>
                <p className="whitespace" style={{
                  fontSize: '1.25rem',
                  color: 'var(--gray)',
                  textAlign: 'center'
                }}>
                  Hi, my name is
                </p>
                <h1 className="text-primary" style={{
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  Justin Tran
                </h1>
                <p className="whitespace" style={{
                  fontSize: '1.25rem',
                  marginBottom: '2rem',
                  color: 'var(--gray)',
                  textAlign: 'center'
                }}>
                  Software Engineer crafting functional applications and scripts
                </p>
                <div style={{ display: 'flex', flexDirection: 'col', justifyContent: 'center', gap: '1rem' }}>
                  <a href="#projects" className="btn btn-primary">View My Work</a>
                  <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
              </div>
            </div>
            {/* Circles for background */}
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