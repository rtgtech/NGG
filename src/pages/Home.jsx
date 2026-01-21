import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import Button from '../components/Button';
import DarkModeToggle from '../components/DarkModeToggle';

const Home = () => {
    const navigate = useNavigate();
    const { startGame } = useGame();

    const handlePlayNow = () => {
        startGame();
        navigate('/game');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="fixed top-10 left-10 text-accent-yellow/20 select-none pointer-events-none hidden lg:block">
                <span className="material-symbols-rounded text-6xl">grade</span>
            </div>
            <div className="fixed bottom-10 right-10 text-accent-blue/20 select-none pointer-events-none hidden lg:block">
                <span className="material-symbols-rounded text-8xl">rocket_launch</span>
            </div>
            <div className="fixed top-1/4 right-20 text-accent-green/10 select-none pointer-events-none hidden lg:block rotate-12">
                <span className="material-symbols-rounded text-7xl">stars</span>
            </div>
            <div className="fixed bottom-1/4 left-20 text-primary/10 select-none pointer-events-none hidden lg:block -rotate-12">
                <span className="material-symbols-rounded text-5xl">auto_awesome</span>
            </div>

            <main className="w-full max-w-lg bg-card-light dark:bg-card-dark rounded-xl shadow-2xl p-8 md:p-12 border-4 border-white dark:border-slate-700 relative overflow-hidden">
                {/* Blur effects */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-yellow opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl"></div>

                {/* Header */}
                <header className="text-center mb-12 relative">
                    <div className="w-24 h-24 bg-accent-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-rounded text-accent-yellow text-6xl">question_mark</span>
                    </div>
                    <h1 className="display-font text-4xl md:text-5xl font-bold text-primary dark:text-pink-400 mb-4 drop-shadow-sm leading-tight">
                        Number Guessing Game
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
                        Can you find the magic number? Let's play!
                    </p>
                </header>

                {/* Buttons */}
                <div className="space-y-4 flex flex-col items-center">
                    <Button
                        variant="accent"
                        icon="play_circle"
                        onClick={handlePlayNow}
                        fullWidth
                        className="h-20 text-2xl"
                    >
                        Play Now
                    </Button>
                    <Button
                        variant="secondary"
                        icon="settings"
                        onClick={() => navigate('/settings')}
                        fullWidth
                        className="h-16 text-xl"
                    >
                        Settings
                    </Button>
                </div>

                {/* Stats */}
                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-700">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-800/50">
                            <span className="material-symbols-rounded text-accent-blue block mb-1">trending_up</span>
                            <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Top Score</span>
                            <span className="display-font text-xl font-bold text-slate-700 dark:text-slate-200">1,250</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-green-50/50 dark:bg-slate-800/50">
                            <span className="material-symbols-rounded text-accent-green block mb-1">emoji_events</span>
                            <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Games Won</span>
                            <span className="display-font text-xl font-bold text-slate-700 dark:text-slate-200">42</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-pink-50/50 dark:bg-slate-800/50">
                            <span className="material-symbols-rounded text-primary block mb-1">history</span>
                            <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Level</span>
                            <span className="display-font text-xl font-bold text-slate-700 dark:text-slate-200">9</span>
                        </div>
                    </div>
                </div>

                {/* Dark mode toggle */}
                <div className="mt-8 flex justify-center">
                    <DarkModeToggle />
                </div>
            </main>
        </div>
    );
};

export default Home;
