import React from 'react';
import { useGame } from '../context/GameContext';

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useGame();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"
            aria-label="Toggle dark mode"
        >
            <span className={`material-symbols-rounded ${darkMode ? 'hidden' : 'block'}`}>dark_mode</span>
            <span className={`material-symbols-rounded text-accent-yellow ${darkMode ? 'block' : 'hidden'}`}>light_mode</span>
        </button>
    );
};

export default DarkModeToggle;
