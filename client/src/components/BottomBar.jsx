import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomeIcon = () => (
  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const MusicIcon = () => (
  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
  </svg>
);
const SaveIcon = () => (
  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
);

export default function BottomBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    { path: '/', icon: <HomeIcon /> },
    { path: '/music', icon: <MusicIcon /> },
    { path: '/saved', icon: <SaveIcon /> },
    { path: '/profile', icon: null },
  ];

  return (
    <div className="glass fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] h-[68px] flex items-center justify-around px-2 z-50">
      {items.map(({ path, icon }) => {
        const active = pathname === path;
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`flex-1 h-full flex items-center justify-center transition-colors ${active ? 'text-purple-accent' : 'text-text-muted'}`}
          >
            {icon ?? (
              <div className={`w-7 h-7 rounded-full bg-purple-deep flex items-center justify-center text-xs font-bold text-white ${active ? 'ring-2 ring-purple-accent' : ''}`}>
                M
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
