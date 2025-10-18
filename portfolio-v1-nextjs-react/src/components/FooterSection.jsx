import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection({ darkMode }) {
    return (
        <footer className="bg-[#151c2c] dark:bg-[var(--card-bg-dark)]" style={{
            color: 'white',
            padding: '2rem 0',
            textAlign: 'center'
          }}>
            <div className="container">
                <p className="text-[var(--light)] dark:text-[var(--light)]">© {new Date().getFullYear()} | Coded by yours truly.</p>
                <p className="text-[var(--light)] dark:text-[var(--light)]">
                    Built with React, Next.js and Tailwind CSS. Deployed with Vercel.
                </p>
            </div>
        </footer>
    );
}