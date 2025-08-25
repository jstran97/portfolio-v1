import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdPaperPlane } from "react-icons/io";

export default function ContactSection({ darkMode }) {
    return(
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl mb-6">
                            Let's Work Together
                        </h3>
                        <p className="mb-8">
                            I'm currently available for freelance work and full-time positions.
                            If you have a project that you want to get started or need help with something, get in touch.
                        </p>

                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mr-4">
                                    <MdEmail size={16}/>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p>justin.s.tran97@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mr-4">
                                    <FaLocationDot size={16}/>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p>Los Angeles, USA</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mr-4">
                                    <FaPhone size={16}/>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p>+1 (123) 456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dark:bg-[var(--card-bg-dark)] */}
                    <div>
                        <form className="bg-[var(--card-bg)] dark:bg-[var(--card-bg-dark)] p-8 rounded-[0.625rem] shadow-lg">
                        {/* border border-[var(--border)] */}
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 font-medium">
                                    <p>Name</p>
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    placeholder="Your Name" 
                                    className={`${
                                        darkMode ? 'bg-gray-700' : 'bg-white'
                                    }`}
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 font-medium">
                                    <p>Email</p>
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Your Email" 
                                    className={`${
                                        darkMode ? 'bg-gray-700' : 'bg-white'
                                    }`}
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block mb-2 font-medium">
                                    <p>Subject</p>
                                </label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    placeholder="Subject" 
                                    className={` ${
                                        darkMode ? 'bg-gray-700' : 'bg-white'
                                    }`}
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 font-medium">
                                    <p>Message</p>
                                </label>
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    placeholder="Your Message" 
                                    className={`${
                                        darkMode ? 'bg-gray-700' : 'bg-white'
                                    }`}
                                ></textarea> 
                            </div>

                            <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                                Send Message
                                <IoMdPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

// export default function ContactSection({ darkMode }) {
//     return(
//         // <section id="contact" className="contact flex justify-center py-24 px-4 md:px-20"
//         //     // style={{
//         //     // backgroundColor: darkMode ? '#1a202c' : '#f3f4f6'
//         //     // }}
//         //     >
//         <section id="contact" className="contact">
//             <div className="container">
//                 <h2 className="section-title">Get In Touch</h2>
//                 <div className="contact-content" style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '3rem',
//                 alignItems: 'center'
//                 }}>
//                 <div>
//                     <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
//                     Let's Work Together
//                     </h3>
//                     <p style={{ marginBottom: '2rem' }}>
//                     I'm currently available for freelance work and full-time positions.
//                     If you have a project that you want to get started or need help with something, get in touch.
//                     </p>

//                     <div style={{ marginBottom: '1.5rem' }}>
//                     <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         marginBottom: '1rem'
//                     }}>
//                         <div style={{
//                             width: '40px',
//                             height: '40px',
//                             backgroundColor: 'var(--primary)',
//                             borderRadius: '50%',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             color: 'white',
//                             marginRight: '1rem'
//                         }}>
//                             {/* <i className="fas fa-envelope"></i> */}
//                             <MdEmail size={16}/>
//                         </div>
//                         <div>
//                             <h4 style={{ fontWeight: 600 }}>Email</h4>
//                             <p>justin.s.tran97@gmail.com</p>
//                         </div>
//                     </div>

//                     <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         marginBottom: '1rem'
//                     }}>
//                         <div style={{
//                             width: '40px',
//                             height: '40px',
//                             backgroundColor: 'var(--primary)',
//                             borderRadius: '50%',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             color: 'white',
//                             marginRight: '1rem'
//                         }}>
//                             {/* <i className="fas fa-map-marker-alt"></i> */}
//                             <FaLocationDot size={16}/>
//                         </div>
//                         <div>
//                             <h4 style={{ fontWeight: 600 }}>Location</h4>
//                             <p>Los Angeles, USA</p>
//                         </div>
//                     </div>

//                     <div style={{
//                         display: 'flex',
//                         alignItems: 'center'
//                     }}>
//                         <div style={{
//                             width: '40px',
//                             height: '40px',
//                             backgroundColor: 'var(--primary)',
//                             borderRadius: '50%',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             color: 'white',
//                             marginRight: '1rem'
//                         }}>
//                             {/* <i className="fas fa-phone"></i> */}
//                             <FaPhone size={16}/>
//                         </div>
//                         <div>
//                             <h4 style={{ fontWeight: 600 }}>Phone</h4>
//                             <p>+1 (123) 456-7890</p>
//                         </div>
//                     </div>
//                 </div>

//                     {/* <div style={{
//                     display: 'flex',
//                     gap: '1rem',
//                     marginTop: '2rem'
//                     }}>
//                     <a href="#" style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: '40px',
//                         height: '40px',
//                         borderRadius: '50%',
//                         backgroundColor: '#333',
//                         color: 'white'
//                     }}>
//                         <i className="fab fa-github"></i>
//                     </a>
//                     </div> */}
//                 </div>

//                 <div>
//                     <form style={{
//                         backgroundColor: 'var(--card-bg)',
//                         padding: '2rem',
//                         borderRadius: '10px',
//                         boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//                         border: '1px solid var(--border)'
//                     }}>
//                         <div style={{ marginBottom: '1.5rem' }}>
//                             <label htmlFor="name" style={{
//                             display: 'block',
//                             marginBottom: '0.5rem',
//                             fontWeight: 500
//                             }}>
//                                 <p>Name</p>
//                             </label>
//                             <input type="text" id="name" placeholder="Your Name" style={{
//                             width: '100%',
//                             padding: '0.75rem',
//                             borderRadius: '0.375rem',
//                             border: '1px solid var(--border)',
//                             backgroundColor: darkMode ? '#2d3748' : 'white'
//                             }} />
//                         </div>

//                         <div style={{ marginBottom: '1.5rem' }}>
//                             <label htmlFor="email" style={{
//                                 display: 'block',
//                                 marginBottom: '0.5rem',
//                                 fontWeight: 500
//                             }}>
//                                 <p>Email</p>
//                             </label>
//                             <input type="email" id="email" placeholder="Your Email" style={{
//                                 width: '100%',
//                                 padding: '0.75rem',
//                                 borderRadius: '0.375rem',
//                                 border: '1px solid var(--border)',
//                                 backgroundColor: darkMode ? '#2d3748' : 'white'
//                             }} />
//                         </div>

//                         <div style={{ marginBottom: '1.5rem' }}>
//                             <label htmlFor="subject" style={{
//                                 display: 'block',
//                                 marginBottom: '0.5rem',
//                                 fontWeight: 500
//                             }}>
//                                 <p>Subject</p>
//                             </label>
//                             <input type="text" id="subject" placeholder="Subject" style={{
//                                 width: '100%',
//                                 padding: '0.75rem',
//                                 borderRadius: '0.375rem',
//                                 border: '1px solid var(--border)',
//                                 backgroundColor: darkMode ? '#2d3748' : 'white'
//                             }} />
//                         </div>

//                         <div className='text-black dark:text-white' style={{ marginBottom: '1.5rem' }}>
//                             <label htmlFor="message" style={{
//                                 display: 'block',
//                                 marginBottom: '0.5rem',
//                                 fontWeight: 500
//                             }}>
//                                 <p>Message</p>
//                             </label>
    
                            
//                             <textarea id="message" rows="5" placeholder="Your Message" style={{
//                             width: '100%',
//                             padding: '0.75rem',
//                             borderRadius: '0.375rem',
//                             border: '1px solid var(--border)',
//                             resize: 'vertical',
//                             backgroundColor: darkMode ? '#2d3748' : 'white'
//                             }}></textarea> 
                            
//                             {/* <textarea id="message" rows="5" placeholder="Your Message"></textarea> */}
//                         </div>

//                         {/* <button type="submit" className="btn btn-primary" style={{
//                             width: '100%'
//                         }}>
//                             Send Message
//                             <i style={{ marginLeft: '0.5rem' }}></i>
//                             <IoMdPaperPlane />
//                         </button> */}

//                         <button className="btn btn-primary flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
//                             Send Message
//                             <IoMdPaperPlane />
//                         </button>
//                     </form>
//                 </div>
//                 </div>
//             </div>
//         </section>
//     );
// }