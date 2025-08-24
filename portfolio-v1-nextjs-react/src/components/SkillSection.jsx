import {
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const skillsWithComponents = [
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-[#F7DF1E]" },
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" }
];

export default function SkillSection({ darkMode }) {

    return(
        // <section id="skills" className="skills flex justify-center py-24 px-4 md:px-20">
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                {
                    skillsWithComponents.map((skill, index) => (
                        <div key={index} className="skill-item bg-[var(--card-bg)] dark:bg-[var(--card-bg-dark)]" style={{
                            // backgroundColor: 'var(--card-bg)',
                            borderRadius: '10px',
                            padding: '2rem 1rem',
                            textAlign: 'center',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            border: '1px solid var(--border)',
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



// { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
//                         { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
//                         { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
//                         { name: "React", icon: "fab fa-react", color: "#61DAFB" },
//                         { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
//                         { name: "Python", icon: "fab fa-python", color: "#3776AB" },
//                         { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
//                         { name: "Sass", icon: "fab fa-sass", color: "#CC6699" }




{/* <div key={index} className="skill-item" style={{
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: '10px',
                            padding: '2rem 1rem',
                            textAlign: 'center',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            border: '1px solid var(--border)',
                            transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                        }}></div> */}





// WORKING 7/27/2025 7 PM
// return (
//     <div className="flex flex-wrap gap-4 p-6">
//         {skillsWithComponents.map((skill, index) => (
//         <div key={index} className="flex items-center gap-2 p-3 bg-blue-100 rounded-lg">
//             <skill.icon className={`text-2xl ${skill.color}`} />
//             <span className="font-medium">{skill.name}</span>
//         </div>
//         ))}
//     </div>
//     );
           