import { useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { MdDarkMode } from "react-icons/md";

const ThemeController = () => {
    const [darkMode, setDardMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === "dark") {
            setDardMode(true)
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    const toggleButton = () => {
        setDardMode(!darkMode);
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark")
        }
    }

    return (
        <div>
            <button className='text-bgPriColor' onClick={toggleButton}> {darkMode ? <MdDarkMode className="text-2xl" /> : <FiSun className="text-2xl" />} </button>
        </div>
    );
};

export default ThemeController;