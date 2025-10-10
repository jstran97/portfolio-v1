import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function AboutSection({ darkMode }) {
    return(
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                opacity: '1',
                transform: 'translate(0px)'
                }} className="grid about-content">
                <div>
                    <img src="/api/placeholder/500/500" alt="Your Name" style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }} />
                </div>
                <div className="about-content">
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                    A passionate developer based in <span className="text-primary">Los Angeles, USA</span>
                    </h3>
                    {/* <p style={{ marginBottom: '1.5rem' }}>
                    I'm a full stack developer committed to creating intuitive, dynamic user experiences. With expertise in modern web technologies, I build responsive web applications that solve real-world problems.
                    </p> */}
                    <p style={{ marginBottom: '1.5rem' }}>
                    Over the past 5 years, I’ve worked in various aspects of aerospace industry, including test lead, manufacturing inspection, and software development. I’m grateful to have had the opportunity to wear many hats.
                    </p>
                    <p style={{ marginBottom: '1.5rem'}}>
                    Given my interest in programming back in high school, I've decided to pursue programming again and dive deeper into more recent and popular programming languages and frameworks. During my time at Boeing, I developed and deployed an autonomous data processing feature in C#, which eliminated manual data checks and achieved 51% efficiency. This tool also removed the chances of having human-related errors resulting from manual data reviews.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>I’m currently focused on developing web applications to further solidify my foundation in full-stack development and engineering principles for performance and useability.
                    I enjoy the constant learning and challenges that come with staying on top of this ever-evolving field.</p>
                    <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    // marginTop: '2rem'
                    }}>
                    <div style={{ marginRight: '2rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Name</h4>
                        <p>Justin Tran</p>
                    </div>
                    <div style={{ marginRight: '2rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Email</h4>
                        <p>justin.s.tran97@gmail.com</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Location</h4>
                        <p>Los Angeles, USA</p>
                    </div>
                    </div>
                    <div style={{
                    marginTop: '2rem',
                    }}>
                    <div style={{
                        display: 'inline-flex',
                        gap: '1rem',
                    }}>
                    <a
                        href="/documents/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        Résumé
                    </a>
                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#0A66C2',
                        color: 'white'
                        }}>
                        <FaLinkedinIn size={16}/>
                    </a>
                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#333',
                        color: 'white'
                        }}>
                        {/* <i className="fas fa-github"></i> */}
                        <FaGithub size={16}/>
                    </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </section>



    );
}