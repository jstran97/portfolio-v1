import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function AboutSection({ darkMode }) {
    return(
        // <div className="about-preview">
        //       <h2 style={{ fontSize: '2rem', marginBottom: '2rem', position: 'relative', display: 'inline-block' }}>
        //         About Me
        //         <div style={{
        //           position: 'absolute',
        //           bottom: '-10px',
        //           left: '0',
        //           width: '50px',
        //           height: '4px',
        //           backgroundColor: '#2563eb',
        //           borderRadius: '2px'
        //         }}></div>
        //       </h2>

        //       <div style={{
        //         maxWidth: '800px',
        //         margin: '0 auto',
        //         display: 'flex',
        //         flexDirection: 'column',
        //         gap: '2rem',
        //         alignItems: 'center',
        //         textAlign: 'left'
        //       }}>
        //         <div style={{
        //           width: '150px',
        //           height: '150px',
        //           backgroundColor: '#e5e7eb',
        //           borderRadius: '50%',
        //           display: 'flex',
        //           justifyContent: 'center',
        //           alignItems: 'center',
        //           color: '#6b7280',
        //           fontSize: '0.875rem'
        //         }}>
        //           Profile Image
        //         </div>

        //         <div>
        //           <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
        //             A passionate developer based in <span style={{ color: '#2563eb' }}>Your Location</span>
        //           </h3>

        //           <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>
        //             I'm a full stack developer with a passion for creating intuitive, dynamic user experiences.
        //             With expertise in modern web technologies, I build responsive web applications that solve real-world problems.
        //           </p>

        //           <p style={{ fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>
        //             My journey in web development started 5 years ago, and I've been in love with creating for the web ever since.
        //             I enjoy the constant learning and challenges that come with staying on top of this ever-evolving field.
        //           </p>
        //         </div>
        //       </div>
        //     </div>


        // <section id="about" className="about flex justify-center py-24 px-4 md:px-20"
        //     // style={{
        //     //     display: 'flex',
        //     //     justifyContent: 'center'
        //     // bg-gray-800
        //     // dark:bg-gray-800
        //     // }}
        // >
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
                    A passionate developer based in <span className="text-primary">Your Location</span>
                    </h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                    I'm a full stack developer with a passion for creating intuitive, dynamic user experiences.
                    With expertise in modern web technologies, I build responsive web applications that solve real-world problems.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                    My journey in web development started 5 years ago, and I've been in love with creating for the web ever since.
                    I enjoy the constant learning and challenges that come with staying on top of this ever-evolving field.
                    </p>
                    <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    // marginTop: '2rem'
                    }}>
                    <div style={{ marginRight: '2rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Name</h4>
                        <p>Your Name</p>
                    </div>
                    <div style={{ marginRight: '2rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Email</h4>
                        <p>your.email@example.com</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Location</h4>
                        <p>Your City, Country</p>
                    </div>
                    </div>
                    <div style={{
                    marginTop: '2rem',
                    }}>
                    <div style={{
                        display: 'inline-flex',
                        gap: '1rem',
                    }}>
                    <a href="#" className="btn btn-primary"
                        // style={{ marginRight: '1rem' }}>
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        Download CV
                        <i style={{ marginLeft: '0.5rem' }}></i>
                        <IoMdDownload />
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
                        {/* <i className="fab fa-linkedin-in"></i> */}
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