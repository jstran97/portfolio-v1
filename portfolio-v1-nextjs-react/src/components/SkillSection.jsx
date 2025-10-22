import {
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCSharp } from "react-icons/pi";

const skillsWithComponents = [
    { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
    { name: "C#", icon: PiFileCSharp, color: "text-[#6410db]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-[#F7DF1E]" },
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" }
];

export default function SkillSection() {

    return(
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills recently used</h2>
                <div className="flex items-center justify-center gap-8 flex-wrap">
                    {
                        skillsWithComponents.map((skill, index) => (
                            <div key={index} className="skill-item bg-[var(--card-bg)] dark:bg-[var(--card-bg-dark)]" style={{
                                borderRadius: '10px',
                                padding: '2rem 2rem',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                            }}>
                                <div className="flex flex-col items-center justify-center">
                                    <skill.icon className={`text-2xl my-5 ${skill.color}`} size={50}/>
                                    <span className="font-medium text-black dark:text-[var(--light)]">{skill.name}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}