import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection({ darkMode }) {
    return (
            // backgroundColor: darkMode ? '#111827' : '#1f2937',
        <footer className="bg-[#151c2c] dark:bg-[#1f2937]" style={{
            // backgroundColor: darkMode ? '#111827' : '#1f2937',
            color: 'white',
            padding: '2rem 0',
            textAlign: 'center'
          }}>
            <div className="container">
                <p className="text-white dark:text-white">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '1rem'
                }}>
                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: '#333',
                        color: 'white'
                        }}>
                        {/* <i className="fab fa-linkedin-in"></i> */}
                        <FaLinkedinIn size={16}/>
                    </a>
                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: '#333',
                        color: 'white'
                        }}>
                        {/* <i className="fas fa-github"></i> */}
                        <FaGithub size={16}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

// DARK MODE TOGGLE LOGIC:
// export default function FooterSection({ darkMode }) {return (); }
// backgroundColor: darkMode ? '#111827' : '#1f2937'
// <p style={{color: darkMode ? '#1f2937' : 'white'}}>© {new Date().getFullYear()} Your Name. All rights reserved.</p>