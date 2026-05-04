import React from 'react';

export default function ProfilePage() {
  return (
    <div className="px-4 py-5">
      <div className="text-center mb-6">
        <div className="w-[72px] h-[72px] rounded-full bg-purple-deep flex items-center justify-center text-3xl font-bold text-purple-glow mx-auto mb-2.5 border-2 border-[rgba(123,79,212,0.5)]">M</div>
        <p className="font-display text-lg font-bold text-text-primary">user.name123</p>
        <p className="text-text-secondary text-[13px] mt-1">Music lover · Indie · Jazz</p>
        <div className="flex justify-center gap-7 mt-4">
          {[['24', 'Posts'], ['1.2K', 'Followers'], ['318', 'Following']].map(([val, label]) => (
            <div key={label} className="text-center">
              <p className="font-display font-bold text-base text-text-primary">{val}</p>
              <p className="text-text-muted text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
