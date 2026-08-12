export const toolsData = [
  {
    id: 1,
    slug: 'regedit-pro-pack',
    name: 'Regedit Pro Pack',
    category: 'Regedit',
    platform: 'Windows',
    imageUrl: '/images/rockyaxis/tools/regedit-pro.jpg',
    thumbnail: '/images/rockyaxis/tools/regedit-pro-thumb.jpg',
    description: 'Ultimate Windows registry tweaks for max FPS and minimal lag.',
    longDescription: 'The Regedit Pro Pack is a collection...',
    features: ['FPS Boost up to 30%', 'Network latency reduction', 'CPU priority optimization', 'Memory management tweaks'],
    downloads: '12.4K',
    rating: 4.8,
    featured: true,
    downloadUrl: '#',
    fileSize: '1.2 MB',
    version: 'v3.2.1',
    updatedAt: '2025-01-15',
    screenshots: ['/images/rockyaxis/screenshots/regedit-1.jpg'],
  },
  // Add more tools following the same pattern
];

export const CATEGORIES = ['All', ...new Set(toolsData.map(t => t.category))];
export const PLATFORMS = ['All', ...new Set(toolsData.map(t => t.platform))];
export const SORT_OPTIONS = [
  { value: 'popular', label: 'Popular' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
  { value: 'featured', label: 'Featured' },
];