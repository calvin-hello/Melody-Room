import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import BottomBar from './components/BottomBar';
import Home from './pages/Home';
import MusicPage from './pages/Music';
import SavedPage from './pages/Saved';
import ProfilePage from './pages/Profile';

export default function App() {
  const [activeTab, setActiveTab] = useState('foryou');

  return (
    <BrowserRouter>
      <div className="app-shell">
        <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home activeTab={activeTab} />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}
