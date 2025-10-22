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
                        <p className="text-center mb-8">
                            I'm always happy to connect! Feel free to reach out with any questions or just to start a conversation!
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