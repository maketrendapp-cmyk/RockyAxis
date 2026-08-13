// pages/freefiretools/[slug].js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Meta from '../../components/Meta';
import { toolsData } from '../../lib/rockyaxis/data';
import {
  FiArrowLeft,
  FiDownload,
  FiStar,
  FiCheck,
  FiShare2,
  FiPackage,
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const SITE_URL = 'https://rockyaxis.vercel.app';

export default function ToolDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [isDownloading, setIsDownloading] = useState(false);

  const tool = toolsData.find((t) => t.slug === slug);

  if (!tool) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Tool not found</h2>
          <button
            onClick={() => router.push('/freefiretools')}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
          >
            <FiArrowLeft className="w-4 h-4" /> Back to Tools
          </button>
        </div>
      </div>
    );
  }

  const mainImage = tool.thumbnail || tool.imageUrl || '';
  const imageUrl = mainImage?.startsWith('http') ? mainImage : `${SITE_URL}${mainImage.startsWith('/') ? mainImage : '/' + mainImage}`;

  const handleDownload = () => {
    if (tool.downloadUrl && tool.downloadUrl !== '#') {
      setIsDownloading(true);
      window.open(tool.downloadUrl, '_blank');
      toast.success(`Downloading ${tool.name}...`);
      setTimeout(() => setIsDownloading(false), 2000);
    } else {
      toast.error('Download link not available yet. Please check back later.');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: tool.name,
        text: tool.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <>
      <Meta
        title={`${tool.name} – Free Fire Tool by Rocky Axis`}
        description={tool.longDescription || tool.description}
        keywords={`${tool.name}, Free Fire, ${tool.category}, ${tool.platform}, Free Fire tools`}
        image={imageUrl}
        url={`/freefiretools/${tool.slug}`}
        type="article"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: tool.name,
            description: tool.longDescription || tool.description,
            applicationCategory: 'GameApplication',
            operatingSystem: tool.platform === 'All' ? 'Android, iOS, Windows' : tool.platform,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: tool.rating,
              ratingCount: parseInt(tool.downloads.replace('K', '')) * 1000 || 100,
            },
            fileSize: tool.fileSize,
            version: tool.version,
            datePublished: tool.updatedAt,
            screenshot: tool.screenshots || [],
            image: imageUrl,
          }),
        }}
      />

      <div className="min-h-screen bg-slate-900 text-white">
        {/* ── Back Button ── */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push('/freefiretools')}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
          >
            <FiArrowLeft className="w-4 h-4" /> Back to Tools
          </button>
        </div>

        {/* ── Hero ── */}
        <div className="relative w-full bg-slate-800">
          <div className="relative w-full h-64 md:h-96 bg-slate-700">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={tool.name}
                fill
                className="object-cover"
                priority
                quality={100}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
                <FiPackage className="w-24 h-24 text-purple-400/50" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col sm:flex-row items-start sm:items-end gap-4">
            {tool.imageUrl && (
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-slate-800 flex-shrink-0">
                <Image
                  src={tool.imageUrl}
                  alt={`${tool.name} icon`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{tool.name}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-300">
                <span className="bg-slate-700/80 px-3 py-0.5 rounded-full">{tool.category}</span>
                <span className="bg-slate-700/80 px-3 py-0.5 rounded-full">{tool.platform}</span>
                <span className="flex items-center gap-1"><FiStar className="w-4 h-4 text-yellow-400" /> {tool.rating}</span>
                <span className="flex items-center gap-1"><FiDownload className="w-4 h-4" /> {tool.downloads}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Description</h2>
              <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                {tool.longDescription || tool.description}
              </div>
            </div>

            {tool.features && tool.features.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <FiCheck className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tool.screenshots && tool.screenshots.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Screenshots</h2>
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-slate-700">
                  {tool.screenshots.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-40 sm:w-56 flex-shrink-0 aspect-[9/16] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg snap-center hover:shadow-purple-500/20 transition"
                    >
                      <Image
                        src={src}
                        alt={`${tool.name} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        quality={100}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 sticky top-24">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isDownloading ? <span>Starting...</span> : <><FiDownload className="w-5 h-5" /> Download Now</>}
              </button>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <div className="flex justify-between"><span>Version</span><span className="text-white">{tool.version}</span></div>
                <div className="flex justify-between"><span>File Size</span><span className="text-white">{tool.fileSize}</span></div>
                <div className="flex justify-between"><span>Updated</span><span className="text-white">{tool.updatedAt}</span></div>
                <div className="flex justify-between"><span>Downloads</span><span className="text-white">{tool.downloads}</span></div>
              </div>
              <button
                onClick={handleShare}
                className="mt-4 w-full py-2 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-700 transition flex items-center justify-center gap-2 text-sm"
              >
                <FiShare2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}