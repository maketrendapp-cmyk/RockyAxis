// lib/rockyaxis/data.js

export const toolsData = [
  {
    id: 1,
    slug: 'zerox-ff-sensi-apk',
    name: 'Zerox FF Sensi APK',
    category: 'Sensi APKs',
    platform: 'Android',
    imageUrl: '/images/rockyaxis/tools/zerox-sensi.jpg',
    thumbnail: '/images/rockyaxis/tools/zerox-sensi-thumb.jpg',
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
    downloadUrl: '#', // Replace with your actual download link (GitHub Releases, Google Drive, etc.)
    fileSize: '28 MB',
    version: 'v1.0.0',
    updatedAt: '2025-02-20',
    screenshots: [
      '/images/rockyaxis/screenshots/zerox-1.jpg',
      '/images/rockyaxis/screenshots/zerox-2.jpg',
      '/images/rockyaxis/screenshots/zerox-3.jpg',
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