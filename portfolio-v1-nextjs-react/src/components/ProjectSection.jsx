import { LuArrowRight } from "react-icons/lu";

export default function ProjectSection ({ darkMode, projects }) {
    return (
        // <section id="projects" className="projects flex justify-center py-24 px-4 md:px-20"
        //     //     style={{
        //     //     backgroundColor: darkMode ? '#1a202c' : '#f3f4f6',
        //     //     // backgroundColor: 'white'
        //     //     display: 'flex',
        //     //     justifyContent: 'center'
        //     // }}
        // >
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                {
                    projects.map(project => (
                        <div key={project.id} className="project-card" style={{
                                backgroundColor: 'var(--card-bg)',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                border: '1px solid var(--border)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                        <img src={project.image} alt={project.title} style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{ padding: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}
                        >
                            {project.title}
                        </h3>
                        <p style={{ color: 'var(--gray)', marginBottom: '1rem' }}>
                            {project.description}
                        </p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: 'auto',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                            marginBottom: '1.5rem'
                            }}
                        >
                            {
                                project.tags.map((tag, index) => (
                                    <span key={index} style={{
                                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                        color: 'var(--primary)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 500
                                    }}>
                                        {tag}
                                    </span>
                                ))
                            }
                        </div>
                            <a href={project.link} className="btn btn-outline" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                View Project
                                <i style={{ marginLeft: '0.5rem' }}></i>
                                {/* <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i> */}
                                {console.log(LuArrowRight)}
                                {console.log(<LuArrowRight/>)}
                                <LuArrowRight />
                            </a>
                        </div>
                        </div>
                    ))
                }
                </div>

                {/* Add Project Button */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '1rem'
                    }}>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                    const newProject = {
                        id: projects.length + 1,
                        title: "New Project",
                        description: "Click to edit this project description.",
                        image: "/api/placeholder/600/400",
                        tags: ["New", "Project"],
                        link: "#"
                    };
                    setProjects([...projects, newProject]);
                    }}
                >
                    <i className="fas fa-plus" style={{ marginRight: '0.5rem' }}></i>Add Project
                </button>
                </div>
            </div>
        </section>
    );
}