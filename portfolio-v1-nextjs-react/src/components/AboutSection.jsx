import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function AboutSection() {
    return(
        // gap: '2rem' → gap-8
        // marginBottom: '1.5rem' → mb-6
        // fontSize: '1.75rem' → text-3xl
        // fontSize: '1.2rem', fontWeight: 600 → text-xl font-semibold
        // width: '40px', height: '40px' → w-10 h-10
        // borderRadius: '50%' → rounded-full
        // max-w-6xl = 1152px
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="flex justify-center">
                    <div className="grid gap-8 items-center w-full max-w-6xl"
                        style={{
                            gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))'
                        }}
                    >
                        <div className="flex justify-center">
                            <img
                                src="/images/photo_of_me.png"
                                alt="Your Name"
                                className="w-full max-w-[250px] rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="about-content">
                            <h3 className="text-3xl mb-6">
                                A passionate developer based in <span className="text-primary">Los Angeles, USA</span>
                            </h3>
                            <p className="mb-6">
                            Over the past 5 years, I’ve worked in various aspects of aerospace industry, including test lead, manufacturing inspection, and software development. I’m grateful to have had the opportunity to wear many hats.
                            </p>
                            <p className="mb-6">
                            Given my interest in programming back in high school, I've decided to pursue programming again and dive deeper into more recent and popular programming languages and frameworks.
                            </p>
                            <p className="mb-6">
                            I’m currently focused on developing software applications and scripts to further solidify my programming foundation and engineering principles for performance and usability.
                            I enjoy the constant learning and challenges that come with staying on top of this ever-evolving field.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="mr-8">
                                    <h4 className="text-xl font-semibold">Name</h4>
                                    <p>Justin Tran</p>
                                </div>
                                <div className="mr-8">
                                    <h4 className="text-xl font-semibold">Email</h4>
                                    <p>justin.s.tran97@gmail.com</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">Location</h4>
                                    <p>Los Angeles, USA</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="inline-flex gap-4">
                                    <a
                                        href="/documents/Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary flex items-center justify-center"
                                    >
                                        Résumé
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/justin-tran-957552178/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                                    >
                                        <FaLinkedinIn size={16}/>
                                    </a>
                                    <a
                                        href="https://github.com/jstran97"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-white hover:opacity-90 transition-opacity"
                                    >
                                        <FaGithub size={16}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}