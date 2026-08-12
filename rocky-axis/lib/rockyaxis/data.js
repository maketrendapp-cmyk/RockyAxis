// lib/rockyaxis/data.js

export const toolsData = [
  {
    id: 1,
    slug: 'zerox-ff-sensi-apk',
    name: 'Zerox FF Sensi APK',
    category: 'Sensi APKs',
    platform: 'Android',
    imageUrl: 'https://i.postimg.cc/XvBSNNPd/zerox-ff-sensi.png',
    thumbnail: 'https://i.postimg.cc/nLhr3mMG/zerox-ff-sensi-thumb.jpg',
    description: 'Advanced sensitivity optimizer for pro-level gameplay and one-tap headshots.',
    longDescription: `Zerox FF Sensi APK is a powerful sensitivity optimization tool designed specifically for Free Fire players who want to achieve pro-level accuracy. This APK provides advanced sensitivity settings, aim assist tweaks, and real-time calibration to help you land one-tap headshots consistently.

Key Features:
- Pro-level sensitivity presets
- One-tap headshot optimization
- Real-time aim calibration
- Low latency response
- Works on all Android devices (5.0+)
- Regular updates with new presets

Zerox FF Sensi APK is trusted by thousands of players worldwide to improve their gameplay and dominate in ranked matches.`,
    features: [
      'Pro-level sensitivity presets',
      'One-tap headshot optimization',
      'Real-time aim calibration',
      'Low latency response',
      'Android 5.0+ support',
      'Regular updates with new presets',
    ],
    downloads: '8.7K',
    rating: 4.9,
    featured: true,
    downloadUrl: 'https://www.mediafire.com/file/9siqclyg8pkx6x1/%25F0%259D%2590%2599%25F0%259D%2590%259E%25F0%259D%2590%25AB%25F0%259D%2590%25A8%25F0%259D%2590%25B1_%25F0%259D%2590%2585%25F0%259D%2590%2585_%25F0%259D%2590%2592%25F0%259D%2590%259E%25F0%259D%2590%25A7%25F0%259D%2590%25AC%25F0%259D%2590%25A2.apk/file', // Replace with your actual download link (GitHub Releases, Google Drive, etc.)
    fileSize: '15 MB',
    version: 'v1.0.0',
    updatedAt: '2026-08-12',
    screenshots: [
      'https://i.postimg.cc/SsQstMsV/zerox-ff-sensi-1.png',
      'https://i.postimg.cc/DZfZYXZ6/zerox-ff-sensi-2.png',
      'https://i.postimg.cc/gJcJBZJ3/zerox-ff-sensi-3.png',
    ],
  },
];

export const CATEGORIES = ['All', ...new Set(toolsData.map(t => t.category))];
export const PLATFORMS = ['All', ...new Set(toolsData.map(t => t.platform))];
export const SORT_OPTIONS = [
  { value: 'popular', label: 'Popular' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
  { value: 'featured', label: 'Featured' },
];