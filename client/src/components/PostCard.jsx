import React, { useState } from 'react';

const HeartIcon = ({ filled }) => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const CommentIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const ShareIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

export default function PostCard({ post, style }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isBlog = post.type === 'blog';
  const longCaption = post.caption?.length > 100;

  return (
    <div
      style={style}
      className="bg-bg-card border border-[rgba(123,79,212,0.25)] rounded-[14px] mx-3 mb-3.5 overflow-hidden animate-[fadeUp_0.4s_ease_both]"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 px-3.5 py-3">
        <div className="w-9 h-9 rounded-full bg-purple-deep border border-[rgba(123,79,212,0.25)] flex items-center justify-center text-[13px] font-bold text-purple-glow flex-shrink-0">
          {post.author?.[0]?.toUpperCase() ?? 'U'}
        </div>
        <p className="font-display text-[13.5px] font-semibold text-text-primary line-clamp-2 flex-1">{post.title}</p>
        <span className="text-text-muted opacity-50 text-lg ml-auto cursor-pointer">⊡ ⊞</span>
      </div>

      {/* Media */}
      {post.imageUrl && !isBlog && (
        <img src={post.imageUrl} alt={post.title} loading="lazy" className="w-full aspect-video object-cover bg-bg-secondary" />
      )}

      {/* Footer */}
      <div className="px-3.5 pb-3">
        {isBlog ? (
          // Blog: username, body text, then icons at the bottom-right (matches pic 1)
          <>
            <p className="text-[12.5px] font-medium text-purple-accent mb-1 mt-1">{post.author || 'user.name123'}</p>
            <div className="text-[13px] text-text-secondary leading-[1.7] space-y-2 mb-3">
              {post.caption?.split('\n').filter(Boolean).map((line, i) => <p key={i}>{line}</p>)}
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setLiked(!liked)}
                aria-label="Like"
                className={`flex items-center transition-colors ${liked ? 'text-danger' : 'text-text-muted hover:text-purple-glow'}`}
              >
                <HeartIcon filled={liked} />
              </button>
              <button aria-label="Comment" className="flex items-center text-text-muted hover:text-purple-glow transition-colors">
                <CommentIcon />
              </button>
              <button aria-label="Share" className="flex items-center text-text-muted hover:text-purple-glow transition-colors">
                <ShareIcon />
              </button>
            </div>
          </>
        ) : (
          // Image post: username + icons inline, caption below
          <>
            <div className="flex items-center justify-between gap-2 mb-1 mt-1">
              <p className="text-[12.5px] font-medium text-purple-accent">{post.author || 'user.name123'}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLiked(!liked)}
                  aria-label="Like"
                  className={`flex items-center transition-colors ${liked ? 'text-danger' : 'text-text-muted hover:text-purple-glow'}`}
                >
                  <HeartIcon filled={liked} />
                </button>
                <button aria-label="Comment" className="flex items-center text-text-muted hover:text-purple-glow transition-colors">
                  <CommentIcon />
                </button>
                <button aria-label="Share" className="flex items-center text-text-muted hover:text-purple-glow transition-colors">
                  <ShareIcon />
                </button>
              </div>
            </div>
            <p className="text-[13px] text-text-secondary leading-[1.55] line-clamp-3">
              {expanded ? post.caption : (longCaption ? post.caption?.slice(0, 100) + '...' : post.caption)}
              {longCaption && (
                <button onClick={() => setExpanded(!expanded)} className="text-purple-accent ml-1">
                  {expanded ? 'less' : 'more'}
                </button>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
