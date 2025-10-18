
import { LuArrowRight } from "react-icons/lu";

export default function ProjectSection ({ projects }) {
    return (
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
                        <div key={project.id} className="flex flex-col project-card bg-[var(--card-bg)] dark:bg-[var(--card-bg-dark)]" style={{
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
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
                            {/* Project Image or Video */}
                            <div style={{
                                width: '100%',
                                paddingTop: '56.25%', // 16:9 aspect ratio (9/16 * 100)
                                position: 'relative',
                                backgroundColor: '#f3f4f6'
                            }}>
                                {project.mediaType === "video" ? (
                                        <video autoPlay loop muted playsInline
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain' // Shows full video with letterboxing
                                            }}
                                        >
                                            <source src={project.image} type="video/mp4" />
                                        </video>
                                    ) :
                                    (
                                        <img src={project.image} alt={project.title} style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                            }}
                                        />
                                    )
                                }
                            </div>

                            <div style={{
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: '1'
                            }}
                            >

                                {/* Project Title */}
                                <h3 className="text-center" style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                }}
                                >
                                    {project.title}
                                </h3>

                                {/* Project Description */}
                                <p style={{ marginBottom: '1rem' }}>
                                    {project.description}
                                </p>

                                {/* Project Tags */}
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

                                <a href={project.link} className="btn btn-outline"
                                target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    marginTop: 'auto'
                                }}>
                                    View Project
                                    <i style={{ marginLeft: '0.5rem' }}></i>
                                    <LuArrowRight />
                                </a>

                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    );
}