import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection({ darkMode }) {
    return (
        <footer className="bg-[#151c2c] dark:bg-[var(--card-bg-dark)]" style={{
            color: 'white',
            padding: '2rem 0',
            textAlign: 'center'
          }}>
            <div className="container">
                <p className="text-[var(--light)] dark:text-[var(--light)]">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '1rem'
                }}>
                    <a href="#" className="dark:bg-[var(--clr-surface-tonal-a30)]" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        color: 'white'
                        }}>
                        <FaLinkedinIn size={16}/>
                    </a>
                    <a href="#" className="dark:bg-[var(--clr-surface-tonal-a30)] "style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        color: 'white'
                        }}>
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