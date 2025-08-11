import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";


export default function ContactSection({ darkMode }) {
    return(
        // <section id="contact" className="contact flex justify-center py-24 px-4 md:px-20"
        //     // style={{
        //     // backgroundColor: darkMode ? '#1a202c' : '#f3f4f6'
        //     // }}
        //     >
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center'
                }}>
                <div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                    Let's Work Together
                    </h3>
                    <p style={{ marginBottom: '2rem' }}>
                    I'm currently available for freelance work and full-time positions.
                    If you have a project that you want to get started or need help with something, get in touch.
                    </p>

                    <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '1rem'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'var(--primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            marginRight: '1rem'
                        }}>
                            {/* <i className="fas fa-envelope"></i> */}
                            <MdEmail size={16}/>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 600 }}>Email</h4>
                            <p>your.email@example.com</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '1rem'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'var(--primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            marginRight: '1rem'
                        }}>
                            {/* <i className="fas fa-map-marker-alt"></i> */}
                            <FaLocationDot size={16}/>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 600 }}>Location</h4>
                            <p>Your City, Country</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'var(--primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            marginRight: '1rem'
                        }}>
                            {/* <i className="fas fa-phone"></i> */}
                            <FaPhone size={16}/>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 600 }}>Phone</h4>
                            <p>+1 234 567 890</p>
                        </div>
                    </div>
                    </div>

                    <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: '2rem'
                    }}>
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
                        <i className="fab fa-github"></i>
                    </a>
                    </div>
                </div>

                <div>
                    <form style={{
                    backgroundColor: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid var(--border)'
                    }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="name" style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 500
                        }}>
                        Name
                        </label>
                        <input type="text" id="name" placeholder="Your Name" style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid var(--border)',
                        backgroundColor: darkMode ? '#2d3748' : 'white'
                        }} />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="email" style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 500
                        }}>
                        Email
                        </label>
                        <input type="email" id="email" placeholder="Your Email" style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid var(--border)',
                        backgroundColor: darkMode ? '#2d3748' : 'white'
                        }} />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="subject" style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 500
                        }}>
                        Subject
                        </label>
                        <input type="text" id="subject" placeholder="Subject" style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid var(--border)',
                        backgroundColor: darkMode ? '#2d3748' : 'white'
                        }} />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="message" style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 500
                        }}>
                        Message
                        </label>
                        <textarea id="message" rows="5" placeholder="Your Message" style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid var(--border)',
                        resize: 'vertical',
                        backgroundColor: darkMode ? '#2d3748' : 'white'
                        }}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{
                        width: '100%'
                    }}>
                        Send Message <i className="fas fa-paper-plane" style={{ marginLeft: '0.5rem' }}></i>
                    </button>
                    </form>
                </div>
                </div>
            </div>
        </section>
    );
}