// lib/rockyaxis/data.js

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
    longDescription: `The Regedit Pro Pack is a collection of carefully crafted registry files that optimize Windows performance specifically for Free Fire. This pack includes tweaks for network latency, graphics rendering, CPU priority, and memory management. Users report a 20-30% increase in FPS and significantly reduced stuttering.

Key Benefits:
- Boost FPS up to 30%
- Reduce network lag
- Improve game stability
- Optimize system resources for gaming`,
    features: [
      'FPS Boost up to 30%',
      'Network latency reduction',
      'CPU priority optimization',
      'Memory management tweaks',
    ],
    downloads: '12.4K',
    rating: 4.8,
    featured: true,
    downloadUrl: '#', // Replace with real URL later
    fileSize: '1.2 MB',
    version: 'v3.2.1',
    updatedAt: '2025-01-15',
    screenshots: [
      '/images/rockyaxis/screenshots/regedit-1.jpg',
      '/images/rockyaxis/screenshots/regedit-2.jpg',
    ],
  },
  {
    id: 2,
    slug: 'headshot-master-config',
    name: 'Headshot Master Config',
    category: 'Headshot Configs',
    platform: 'All',
    imageUrl: '/images/rockyaxis/tools/headshot-master.jpg',
    thumbnail: '/images/rockyaxis/tools/headshot-master-thumb.jpg',
    description: 'One‑tap headshot settings that work on all devices and servers.',
    longDescription: `Professional configuration file optimized for headshot accuracy. Adjusts sensitivity, crosshair, and aim assist to give you a competitive edge. Compatible with all Free Fire versions.

Key Features:
- One-tap headshot settings
- Optimized for all devices
- Works on all servers
- Easy to install
- Regularly updated`,
    features: [
      'One‑tap headshot precision',
      'Enhanced aim assist',
      'Custom crosshair styles',
      'Low‑ping server optimization',
    ],
    downloads: '9.8K',
    rating: 4.7,
    featured: true,
    downloadUrl: '#',
    fileSize: '0.8 MB',
    version: 'v4.0',
    updatedAt: '2025-01-20',
    screenshots: [
      '/images/rockyaxis/screenshots/headshot-1.jpg',
      '/images/rockyaxis/screenshots/headshot-2.jpg',
    ],
  },
  {
    id: 3,
    slug: 'sensi-pro-apk',
    name: 'Sensi Pro APK v3.2',
    category: 'Sensi APKs',
    platform: 'Android',
    imageUrl: '/images/rockyaxis/tools/sensi-pro.jpg',
    thumbnail: '/images/rockyaxis/tools/sensi-pro-thumb.jpg',
    description: 'Advanced sensitivity APK for improved aim and control.',
    longDescription: `Sensi Pro APK is a standalone app that lets you fine‑tune your sensitivity settings beyond the game's default limits. It supports all Android devices and is designed to give you a competitive edge.

Key Features:
- Custom sensitivity profiles
- Real‑time aim calibration
- Low‑latency response
- Works on all Android 8+ devices`,
    features: [
      'Custom sensitivity profiles',
      'Real‑time aim calibration',
      'Low‑latency response',
      'Android 8+ support',
    ],
    downloads: '15.2K',
    rating: 4.9,
    featured: true,
    downloadUrl: '#',
    fileSize: '25 MB',
    version: 'v3.2',
    updatedAt: '2025-02-10',
    screenshots: [
      '/images/rockyaxis/screenshots/sensi-1.jpg',
      '/images/rockyaxis/screenshots/sensi-2.jpg',
    ],
  },
  {
    id: 4,
    slug: 'gfx-tool-pro',
    name: 'GFX Tool Pro',
    category: 'GFX Tools',
    platform: 'Android',
    imageUrl: '/images/rockyaxis/tools/gfx-tool.jpg',
    thumbnail: '/images/rockyaxis/tools/gfx-tool-thumb.jpg',
    description: 'Graphics optimizer for low‑end devices – unlock 60 FPS easily.',
    longDescription: `GFX Tool Pro is a powerful graphics optimizer that unlocks hidden graphics settings in Free Fire. It allows you to customize resolution, frame rate, texture quality, and more to get the best performance on any Android device.

Key Features:
- Unlock 60 FPS
- Custom resolution settings
- Texture quality control
- Anti‑aliasing adjustments`,
    features: [
      '60 FPS unlock',
      'Custom resolution',
      'Texture quality control',
      'Anti‑aliasing adjustments',
    ],
    downloads: '18.6K',
    rating: 4.8,
    featured: false,
    downloadUrl: '#',
    fileSize: '18 MB',
    version: 'v4.0',
    updatedAt: '2025-01-20',
    screenshots: [
      '/images/rockyaxis/screenshots/gfx-1.jpg',
    ],
  },
  {
    id: 5,
    slug: 'free-fire-optimizer-pro',
    name: 'Free Fire Optimizer Pro',
    category: 'GFX Tools',
    platform: 'Android',
    imageUrl: '/images/rockyaxis/tools/optimizer-pro.jpg',
    thumbnail: '/images/rockyaxis/tools/optimizer-pro-thumb.jpg',
    description: 'All‑in‑one performance booster: reduce lag, increase FPS, and stabilize ping.',
    longDescription: `Free Fire Optimizer Pro is the ultimate tool for a smooth gaming experience. It combines graphics optimization, network tweaks, and system cleanup to give you the best performance on any Android device.

Key Features:
- One‑tap performance boost
- Network stabilizer for low ping
- Graphics presets (Low / Medium / High)
- Battery saver mode
- Real‑time FPS counter`,
    features: [
      'One‑tap performance boost',
      'Network stabilizer',
      'Graphics presets',
      'Battery saver mode',
      'Real‑time FPS counter',
    ],
    downloads: '7.3K',
    rating: 4.6,
    featured: false,
    downloadUrl: '#',
    fileSize: '32 MB',
    version: 'v2.1.0',
    updatedAt: '2025-02-18',
    screenshots: [
      '/images/rockyaxis/screenshots/optimizer-1.jpg',
      '/images/rockyaxis/screenshots/optimizer-2.jpg',
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