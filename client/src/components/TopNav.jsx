import React, { useState } from 'react';

export default function TopNav({ activeTab, setActiveTab }) {
  const [search, setSearch] = useState('');

  return (
    <>
      <nav className="glass fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] h-16 z-50 flex items-end px-4 pb-2">
        <div className="flex items-center justify-between w-full">
          <button className="w-8 h-8 flex items-center justify-center text-text-secondary text-2xl font-light hover:text-purple-glow transition-colors">
            ＋
          </button>
          <div className="flex items-center gap-1 font-display text-sm font-semibold">
            <button
              onClick={() => setActiveTab('following')}
              className={`relative px-3 py-1 rounded-full transition-colors ${activeTab === 'following' ? 'text-white' : 'text-text-muted'}`}
            >
              Following
              {activeTab === 'following' && (
                <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-purple-accent rounded-full" />
              )}
            </button>
            <span className="text-text-muted opacity-40">|</span>
            <button
              onClick={() => setActiveTab('foryou')}
              className={`relative px-3 py-1 rounded-full transition-colors ${activeTab === 'foryou' ? 'text-white' : 'text-text-muted'}`}
            >
              For You
              {activeTab === 'foryou' && (
                <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-purple-accent rounded-full" />
              )}
            </button>
          </div>
          <div className="relative w-8 h-8 flex items-center justify-center text-text-secondary">
            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-purple-accent rounded-full border-2 border-bg-primary" />
          </div>
        </div>
      </nav>
      <div className="sticky top-16 z-40 px-4 pt-2.5 pb-1.5 bg-gradient-to-b from-bg-primary via-bg-primary to-transparent">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">🔍</span>
          <input
            type="text"
            placeholder={activeTab === 'foryou' ? 'Search anything posts...' : 'Search anything music...'}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-bg-card border border-[rgba(123,79,212,0.25)] rounded-3xl py-2.5 pl-10 pr-4 text-text-primary text-[13.5px] outline-none placeholder:text-text-muted focus:border-purple-bright transition-colors"
          />
        </div>
      </div>
    </>
  );
}
