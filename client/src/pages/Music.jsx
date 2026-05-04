import React from 'react';

const tracks = [
  { title: 'Midnight Bloom', artist: 'Cosmo Sheldrake', plays: '12.4K', emoji: '🎵' },
  { title: 'Electric Soul', artist: 'Jon Bellion', plays: '9.8K', emoji: '⚡' },
  { title: 'Forest Echoes', artist: 'Mother Mother', plays: '8.7K', emoji: '🌿' },
];

export default function MusicPage() {
  return (
    <div className="px-4 py-5">
      <h2 className="font-display text-xl font-bold text-text-primary mb-4">Trending Music</h2>
      <div className="space-y-2.5">
        {tracks.map((track, i) => (
          <div key={i} className="bg-bg-card border border-[rgba(123,79,212,0.25)] rounded-[14px] p-3.5 flex items-center gap-3">
            <div className="w-11 h-11 rounded-[10px] bg-purple-deep flex items-center justify-center text-xl flex-shrink-0">{track.emoji}</div>
            <div>
              <p className="text-text-primary font-semibold text-sm">{track.title}</p>
              <p className="text-text-secondary text-xs mt-0.5">{track.artist} · {track.plays} plays</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
