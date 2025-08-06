import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

export default function DarkModeToggleButton({ toggleDarkMode, darkMode }) {
    return(
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FiSun size={20}/> : <MdDarkMode size={20}/>}
            {/* <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i> */}
        </button>
    );
}