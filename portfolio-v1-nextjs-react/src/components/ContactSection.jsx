import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdPaperPlane } from "react-icons/io";

export default function ContactSection({ handleEmail }) {
    return(
        <section id="contact" className="contact flex items-center">
            <div className="container">
                <h2 className="section-title">Get in touch</h2>
                    <div>
                        <h3 className="text-center text-xl mb-6">
                            Let's work together
                        </h3>
                        <p className="text-center mb-8">
                            I'm currently available for freelance work and full-time positions.
                            If you have a project that you want to get started or need help with something, get in touch.
                        </p>

                        <div className="flex flex-row justify-center mb-6">
                            <button onClick={handleEmail} className="btn btn-primary flex items-center justify-center gap-2">
                                Send a Message
                                <IoMdPaperPlane />
                            </button>
                        </div>
                    </div>
            </div>
        </section>
    );
}