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
                    <div>
                        <form className="bg-[var(--card-bg)] dark:bg-[var(--card-bg-dark)] p-8 rounded-[0.625rem] shadow-lg">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 font-medium">
                                    <p>Name</p>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="contact-reg-input-box"
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
                                    className="contact-reg-input-box"
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
                                    className="contact-reg-input-box"
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
                                    className="contact-msg-box"
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