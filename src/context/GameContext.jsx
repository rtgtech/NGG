import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};

export const GameProvider = ({ children }) => {
    // Settings state with localStorage persistence
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('gameSettings');
        return saved ? JSON.parse(saved) : {
            upperLimit: 100,
            lowerLimit: 1,
            tries: 10,
        };
    });

    // Game state
    const [gameState, setGameState] = useState({
        randomNumber: null,
        triesLeft: settings.tries,
        gameStatus: 'idle', // 'idle', 'playing', 'won', 'lost'
        message: 'Click Start to Play!',
        currentGuess: '',
    });

    // Dark mode state
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    // Save settings to localStorage
    useEffect(() => {
        localStorage.setItem('gameSettings', JSON.stringify(settings));
    }, [settings]);

    // Save dark mode to localStorage and update HTML class
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Update settings
    const updateSettings = (newSettings) => {
        setSettings(newSettings);
    };

    // Reset settings to defaults
    const resetSettings = () => {
        setSettings({
            upperLimit: 100,
            lowerLimit: 1,
            tries: 10,
        });
    };

    // Start game
    const startGame = () => {
        const randomNum = Math.round(Math.random() * (settings.upperLimit - settings.lowerLimit)) + settings.lowerLimit;
        setGameState({
            randomNumber: randomNum,
            triesLeft: settings.tries,
            gameStatus: 'playing',
            message: 'Enter a number',
            currentGuess: '',
        });
    };

    // Make a guess
    const makeGuess = (guess) => {
        const guessNum = Number(guess);

        if (isNaN(guessNum)) {
            setGameState(prev => ({
                ...prev,
                message: 'Please enter a valid number',
            }));
            return;
        }

        if (guessNum < settings.lowerLimit || guessNum > settings.upperLimit) {
            setGameState(prev => ({
                ...prev,
                message: `Number must be between ${settings.lowerLimit} and ${settings.upperLimit}`,
            }));
            return;
        }

        const newTriesLeft = gameState.triesLeft - 1;

        if (guessNum === gameState.randomNumber) {
            setGameState(prev => ({
                ...prev,
                triesLeft: newTriesLeft,
                gameStatus: 'won',
                message: '🎉 You Win! Click Reset to play again',
                currentGuess: '',
            }));
        } else if (newTriesLeft === 0) {
            setGameState(prev => ({
                ...prev,
                triesLeft: 0,
                gameStatus: 'lost',
                message: `😢 Out of Tries! The number was ${gameState.randomNumber}`,
                currentGuess: '',
            }));
        } else if (guessNum > gameState.randomNumber) {
            setGameState(prev => ({
                ...prev,
                triesLeft: newTriesLeft,
                message: '📉 A Little Lower',
                currentGuess: '',
            }));
        } else {
            setGameState(prev => ({
                ...prev,
                triesLeft: newTriesLeft,
                message: '📈 A Little Higher',
                currentGuess: '',
            }));
        }
    };

    // Reset game
    const resetGame = () => {
        setGameState({
            randomNumber: null,
            triesLeft: settings.tries,
            gameStatus: 'idle',
            message: 'Click Start to Play!',
            currentGuess: '',
        });
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    const value = {
        settings,
        updateSettings,
        resetSettings,
        gameState,
        setGameState,
        startGame,
        makeGuess,
        resetGame,
        darkMode,
        toggleDarkMode,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
