import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Game from './pages/Game';

function App() {
    return (
        <GameProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </Router>
        </GameProvider>
    );
}

export default App;
