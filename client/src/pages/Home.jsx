import React, { useState } from 'react';
import PostCard from '../components/PostCard';

// Feed posts (collapsed view) — matches pic 2 style
const FOLLOWING_POSTS = [
  {
    id: 1, type: 'image',
    title: 'Still my favourite album of all time',
    author: 'user.name123',
    caption: 'This is a post caption...',
    imageUrl: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80',
  },
  {
    id: 2, type: 'blog',
    title: 'Need some new music, share some of your favourites!',
    author: 'user.name123',
    caption: 'This is a post caption for blog posts...\n\nThere are no pictures, no videos, no songs.\n\nJust simply plain text.\n\nThey essentially behave the same as other posts.',
  },
  {
    id: 3, type: 'image',
    title: 'An honest headphone review',
    author: 'user.name123',
    caption: 'This is a longer caption to show how longer captions fill out the space in the captions area of posts...',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
  },
];

const FORYOU_POSTS = [
  {
    id: 1, type: 'image',
    title: "Best concert I've been to so far!",
    author: 'user.name123',
    caption: 'This is a longer caption to show how longer captions fill out the space in the captions area of posts...',
    imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
  },
  {
    id: 2, type: 'image',
    title: 'An honest headphone review',
    author: 'user.name123',
    caption: 'This is a shorter post caption...',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
  },
  {
    id: 3, type: 'blog',
    title: 'Looking for budget speakers!',
    author: 'user.name123',
    caption: 'This is a post caption for blog posts...\n\nThere are no pictures, no videos, no songs. Just simply plain text.\n\nThey essentially behave the same as other posts.',
  },
];

// Following expanded grid (mixed: blog posts + images)
const FOLLOWING_GRID_ITEMS = [
  { id: 1, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&q=80', user: '@username123' },
  {
    id: 2, type: 'blog', user: '@username123',
    title: 'This is a blog post title',
    body: 'Blog posts only display text, no media. Text that overflows uses an ellipsis...',
  },
  {
    id: 3, type: 'blog', user: '@username123',
    title: 'This is a blog post title',
    body: 'Blog posts only display text, no media. Text that overflows uses an ellipsis...',
  },
  { id: 4, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', user: '@username123' },
  { id: 5, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80', user: '@username123' },
  { id: 6, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1459233313842-cd392ee2c388?w=400&q=80', user: '@username123' },
  { id: 7, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80', user: '@username123' },
  { id: 8, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80', user: '@username123' },
];

// For You expanded grid (mixed: more diverse, includes album-cover-style content + blogs)
const FORYOU_GRID_ITEMS = [
  { id: 1, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', user: '@username123' },
  { id: 2, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80', user: '@username123' },
  { id: 3, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=400&q=80', user: '@username123' },
  { id: 4, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&q=80', user: '@username123' },
  { id: 5, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80', user: '@username123' },
  { id: 6, type: 'image', imageUrl: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&q=80', user: '@username123' },
  {
    id: 7, type: 'blog', user: '@username123',
    title: 'This is a blog post title',
    body: 'Blog posts only display text, no media. Text that overflows uses an ellipsis...',
  },
  {
    id: 8, type: 'blog', user: '@username123',
    title: 'Need some artist recommendations',
    body: 'Looking for new artists to follow! Drop your favorite underrated musicians below...',
  },
];

// Toggle icon: bracket-style "expand" icon (matches pic 2)
const ExpandIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 9 4 4 9 4" />
    <polyline points="20 9 20 4 15 4" />
    <polyline points="4 15 4 20 9 20" />
    <polyline points="20 15 20 20 15 20" />
  </svg>
);

const CollapseIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 4 4 4 4 9" />
    <polyline points="15 4 20 4 20 9" />
    <polyline points="9 20 4 20 4 15" />
    <polyline points="15 20 20 20 20 15" />
  </svg>
);

function ImageGridItem({ item }) {
  return (
    <div className="relative overflow-hidden aspect-square bg-bg-secondary">
      <img src={item.imageUrl} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-purple-mid flex items-center justify-center text-[9px] font-bold text-white">U</div>
          <span className="text-[11px] text-white font-medium">{item.user}</span>
        </div>
      </div>
    </div>
  );
}

function BlogGridItem({ item }) {
  return (
    <div className="relative overflow-hidden aspect-square bg-bg-card border border-[rgba(123,79,212,0.25)] p-2.5 flex flex-col">
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-5 h-5 rounded-full bg-purple-mid flex items-center justify-center text-[9px] font-bold text-white">U</div>
        <span className="text-[11px] text-text-secondary">{item.user}</span>
      </div>
      <p className="font-display text-[12px] font-bold text-text-primary line-clamp-2 mb-1">{item.title}</p>
      <p className="text-[11px] text-text-muted leading-[1.5] line-clamp-3 flex-1">{item.body}</p>
      <button className="text-[11px] text-purple-accent mt-1">more</button>
    </div>
  );
}

export default function Home({ activeTab }) {
  // expanded = false → simple image-only grid (pic 4)
  // expanded = true  → mixed grid w/ blog cards (Following) or full feed (For You)
  const [expanded, setExpanded] = useState(false);

  const renderContent = () => {
    if (!expanded) {
      // Collapsed → full post feed (pic 2 style) for both tabs
      const posts = activeTab === 'foryou' ? FORYOU_POSTS : FOLLOWING_POSTS;
      return (
        <div className="pt-1">
          {posts.map((post, i) => (
            <PostCard key={post.id} post={post} style={{ animationDelay: `${i * 0.08}s` }} />
          ))}
        </div>
      );
    }

    // Expanded → mixed 2-col grid for both tabs
    const items = activeTab === 'foryou' ? FORYOU_GRID_ITEMS : FOLLOWING_GRID_ITEMS;
    return (
      <div className="grid grid-cols-2 gap-0.5 p-0.5">
        {items.map(item => (
          item.type === 'image'
            ? <ImageGridItem key={item.id} item={item} />
            : <BlogGridItem key={item.id} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="relative pb-2">
      {renderContent()}

      {/* View-toggle: fixed within the centered app container so it stays visible on scroll (matches pic 1) */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-30 pointer-events-none">
        <div className="absolute right-2 bottom-0 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-md px-1.5 py-1 pointer-events-auto">
          <button
            onClick={() => setExpanded(false)}
            aria-label="Simple grid view"
            aria-pressed={!expanded}
            className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${!expanded ? 'text-purple-glow bg-white/10' : 'text-text-muted hover:text-text-secondary'}`}
          >
            <CollapseIcon />
          </button>
          <button
            onClick={() => setExpanded(true)}
            aria-label="Expanded view"
            aria-pressed={expanded}
            className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${expanded ? 'text-purple-glow bg-white/10' : 'text-text-muted hover:text-text-secondary'}`}
          >
            <ExpandIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
