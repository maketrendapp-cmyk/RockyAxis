// lib/rockyaxis/data.js

export const toolsData = [
  {
    id: 1,
    slug: 'zerox-ff-sensi-apk',
    name: 'Zerox FF Sensi APK',
    category: 'Sensi',
    platform: 'Android',
    imageUrl: 'https://i.postimg.cc/HkRgkF9k/quality-restoration-20260812173656270.jpg',
    thumbnail: 'https://i.postimg.cc/hGQK8KtK/file-0000000069d081fb85bf46ad63665176.png',
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
    featured: false, // Changed to false
    downloadUrl: 'https://www.mediafire.com/file/9siqclyg8pkx6x1/%25F0%259D%2590%2599%25F0%259D%2590%259E%25F0%259D%2590%25AB%25F0%259D%2590%25A8%25F0%259D%2590%25B1_%25F0%259D%2590%2585%25F0%259D%2590%2585_%25F0%259D%2590%2592%25F0%259D%2590%259E%25F0%259D%2590%25A7%25F0%259D%2590%25AC%25F0%259D%2590%25A2.apk/file',
    fileSize: '15 MB',
    version: 'v1.0.0',
    updatedAt: '2026-08-12',
    screenshots: [
      'https://i.postimg.cc/SsQstMsV/zerox-ff-sensi-1.png',
      'https://i.postimg.cc/DZfZYXZ6/zerox-ff-sensi-2.png',
      'https://i.postimg.cc/gJcJBZJ3/zerox-ff-sensi-3.png',
    ],
  },
  {
    id: 2,
    slug: 'rai-star-sensi-apk',
    name: 'Rai Star Sensi APK',
    category: 'Sensi',
    platform: 'Android',
    imageUrl: 'https://i.postimg.cc/j29jxSxq/raistar.jpg',
    thumbnail: 'https://i.postimg.cc/76cGxXsn/file-00000000cff481fa94421f2445621c1c.png',
    description: 'Professional sensitivity config for headshots and smooth gameplay.',
    longDescription: `Rai Star Sensi APK is a high‑performance sensitivity configuration tool built for Free Fire players who want consistent headshots and ultra‑smooth gameplay. It combines advanced aim assist, custom presets, and low‑latency calibration to give you a competitive edge in every match.

Key Features:
- Optimized for headshot accuracy
- Custom aim assist presets
- Real‑time sensitivity calibration
- Low latency response
- Works on all Android devices (5.0+)
- Regularly updated with new presets

Trusted by both casual and competitive players, Rai Star Sensi APK helps you dominate ranked matches with ease.`,
    features: [
      'Optimized for headshot accuracy',
      'Custom aim assist presets',
      'Real‑time sensitivity calibration',
      'Low latency response',
      'Android 5.0+ support',
      'Regular updates with new presets',
    ],
    downloads: '5.2K',
    rating: 4.8,
    featured: false, // Changed to false
    downloadUrl: 'https://www.mediafire.com/file/mlvscwg5l692g0m/%25F0%259D%2590%259A%25F0%259D%2590%25A2%25F0%259D%2590%25A8%2B%25F0%259D%2590%25A3%25F0%259D%2590%25AB%25F0%259D%2590%25A8%25F0%259D%2590%25AB%2B%25F0%259D%2590%2592%25F0%259D%2590%259E%25F0%259D%2590%25A7%25F0%259D%2590%25AC%25F0%259D%2590%25A2.apk/file',
    fileSize: '12 MB',
    version: 'v1.0.0',
    updatedAt: '2026-08-12',
    screenshots: [
      'https://i.postimg.cc/HnWMcn1t/Screenshot-20260812-214106.png',
      'https://i.postimg.cc/6q6Z2qxf/Screenshot-20260812-214115.png',
      'https://i.postimg.cc/rsy40s2C/Screenshot-20260812-214121.png',
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