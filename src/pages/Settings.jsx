import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import Button from '../components/Button';
import Input from '../components/Input';
import DarkModeToggle from '../components/DarkModeToggle';

const Settings = () => {
    const navigate = useNavigate();
    const { settings, updateSettings, resetSettings } = useGame();

    const [localSettings, setLocalSettings] = useState(settings);

    const handleSave = () => {
        updateSettings(localSettings);
        navigate('/');
    };

    const handleReset = () => {
        const defaults = {
            upperLimit: 100,
            lowerLimit: 1,
            tries: 10,
        };
        setLocalSettings(defaults);
        resetSettings();
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
            <main className="w-full max-w-lg bg-card-light dark:bg-card-dark rounded-xl shadow-2xl p-8 border-4 border-white dark:border-slate-700 relative overflow-hidden">
                {/* Blur effects */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-yellow opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl"></div>

                {/* Header */}
                <header className="text-center mb-8 relative">
                    <h1 className="display-font text-4xl md:text-5xl font-bold text-primary dark:text-pink-400 mb-2 drop-shadow-sm">
                        Game Settings
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Adjust the game to make it just right!</p>
                </header>

                {/* Settings inputs */}
                <div className="space-y-6">
                    <Input
                        label="Upper Limit"
                        icon="keyboard_double_arrow_up"
                        helperText="The highest number possible."
                        value={localSettings.upperLimit}
                        onChange={(e) => setLocalSettings({ ...localSettings, upperLimit: Number(e.target.value) })}
                        id="upper-limit"
                        colorVariant="blue"
                    />

                    <Input
                        label="Lower Limit"
                        icon="keyboard_double_arrow_down"
                        helperText="The lowest number possible."
                        value={localSettings.lowerLimit}
                        onChange={(e) => setLocalSettings({ ...localSettings, lowerLimit: Number(e.target.value) })}
                        id="lower-limit"
                        colorVariant="green"
                    />

                    <Input
                        label="Number of Tries"
                        icon="stars"
                        helperText="How many guesses you get!"
                        value={localSettings.tries}
                        onChange={(e) => setLocalSettings({ ...localSettings, tries: Number(e.target.value) })}
                        id="tries"
                        colorVariant="yellow"
                    />
                </div>

                {/* Action buttons */}
                <footer className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                        variant="secondary"
                        icon="restart_alt"
                        onClick={handleReset}
                        className="h-14 text-lg"
                    >
                        Reset Values
                    </Button>
                    <Button
                        variant="primary"
                        icon="save"
                        onClick={handleSave}
                        className="h-14 text-lg"
                    >
                        Save Changes
                    </Button>
                    <Button
                        variant="accent"
                        icon="arrow_back"
                        onClick={() => navigate('/')}
                        className="h-14 text-lg sm:col-span-2"
                    >
                        Go Back
                    </Button>
                </footer>

                {/* Dark mode toggle */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-center">
                    <DarkModeToggle />
                </div>
            </main>

            {/* Decorative background elements */}
            <div className="fixed top-10 left-10 text-accent-yellow/20 animate-bounce select-none pointer-events-none hidden lg:block">
                <span className="material-symbols-rounded text-6xl">grade</span>
            </div>
            <div className="fixed bottom-10 right-10 text-accent-blue/20 animate-pulse select-none pointer-events-none hidden lg:block">
                <span className="material-symbols-rounded text-8xl">rocket_launch</span>
            </div>
        </div>
    );
};

export default Settings;
