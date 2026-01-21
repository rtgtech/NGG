import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import Button from '../components/Button';
import DarkModeToggle from '../components/DarkModeToggle';

const Game = () => {
    const navigate = useNavigate();
    const { settings, gameState, setGameState, makeGuess, resetGame, startGame } = useGame();

    const handleGuessChange = (e) => {
        setGameState(prev => ({ ...prev, currentGuess: e.target.value }));
    };

    const handleSubmitGuess = () => {
        if (gameState.currentGuess) {
            makeGuess(gameState.currentGuess);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && gameState.gameStatus === 'playing') {
            handleSubmitGuess();
        }
    };

    const handleReset = () => {
        resetGame();
        startGame();
    };

    const isGameOver = gameState.gameStatus === 'won' || gameState.gameStatus === 'lost';
    const isPlaying = gameState.gameStatus === 'playing';

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
            <main className="w-full max-w-lg bg-card-light dark:bg-card-dark rounded-xl shadow-2xl p-8 border-4 border-white dark:border-slate-700 relative overflow-hidden">
                {/* Blur effects */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-yellow opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl"></div>

                {/* Header */}
                <header className="text-center mb-8 relative">
                    <h1 className="display-font text-4xl md:text-5xl font-bold text-primary dark:text-pink-400 mb-2 drop-shadow-sm">
                        Guess Away!
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Can you find the magic number?</p>
                </header>

                <div className="space-y-6">
                    {/* Game info */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="display-font text-lg text-slate-700 dark:text-slate-200 flex items-center gap-2">
                                <span className="material-symbols-rounded text-accent-yellow">stars</span>
                                Tries Left
                            </label>
                            <div className="w-full h-14 flex items-center px-6 text-xl font-bold rounded-2xl border-4 border-accent-yellow/20 bg-yellow-50/50 dark:bg-slate-800 dark:border-slate-600 dark:text-accent-yellow shadow-inner-soft">
                                {gameState.triesLeft}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="display-font text-lg text-slate-700 dark:text-slate-200 flex items-center gap-2">
                                <span className="material-symbols-rounded text-accent-green">straighten</span>
                                Range
                            </label>
                            <div className="w-full h-14 flex items-center px-6 text-xl font-bold rounded-2xl border-4 border-accent-green/20 bg-green-50/50 dark:bg-slate-800 dark:border-slate-600 dark:text-accent-green shadow-inner-soft">
                                {settings.lowerLimit} - {settings.upperLimit}
                            </div>
                        </div>
                    </div>

                    {/* Message display */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent-blue/10 dark:from-primary/20 dark:to-accent-blue/20 border-2 border-primary/20 dark:border-primary/30">
                        <p className="text-center text-xl font-bold text-slate-700 dark:text-slate-200">
                            {gameState.message}
                        </p>
                    </div>

                    {/* Input */}
                    <div className="space-y-2 pt-4">
                        <label
                            className="display-font text-2xl text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2"
                            htmlFor="user-guess"
                        >
                            <span className="material-symbols-rounded text-accent-blue text-3xl">question_mark</span>
                            Your Guess
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                id="user-guess"
                                value={gameState.currentGuess}
                                onChange={handleGuessChange}
                                onKeyPress={handleKeyPress}
                                placeholder="?"
                                disabled={!isPlaying}
                                className="w-full h-20 px-6 text-4xl text-center font-bold rounded-2xl border-4 border-accent-blue/20 bg-blue-50/50 dark:bg-slate-800 dark:border-slate-600 dark:text-white focus:border-accent-blue focus:ring-0 transition-all shadow-inner-soft disabled:opacity-50"
                            />
                        </div>
                        <p className="text-center text-slate-400 dark:text-slate-500 font-medium italic">
                            {isPlaying ? 'Is it higher or lower? Give it a try!' : 'Start a new game to play!'}
                        </p>
                    </div>
                </div>

                {/* Action buttons */}
                <footer className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                        variant="secondary"
                        icon="restart_alt"
                        onClick={handleReset}
                        className="h-14 text-lg"
                    >
                        Reset Game
                    </Button>
                    <Button
                        variant="primary"
                        icon="check_circle"
                        onClick={handleSubmitGuess}
                        disabled={!isPlaying || !gameState.currentGuess}
                        className="h-14 text-lg"
                    >
                        Enter Guess
                    </Button>
                    <Button
                        variant="accent"
                        icon="settings"
                        onClick={() => navigate('/settings')}
                        className="h-14 text-lg sm:col-span-2"
                    >
                        Game Settings
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
            <div className="fixed top-20 right-20 text-accent-green/20 select-none pointer-events-none hidden lg:block">
                <span className="material-symbols-rounded text-7xl">psychology</span>
            </div>
        </div>
    );
};

export default Game;
