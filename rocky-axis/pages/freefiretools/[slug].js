// pages/freefiretools/[slug].js
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Meta from '../../components/Meta';
import Footer from '../../components/rockyaxis/Footer';
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

export default function ToolDetail() {
  const router = useRouter();
  const { slug } = router.query;

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

  const handleDownload = () => {
    toast.success(`Downloading ${tool.name}... (simulated)`);
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
        image={tool.imageUrl}
        url={`/freefiretools/${tool.slug}`}
        type="article"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push('/freefiretools')}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
          >
            <FiArrowLeft className="w-4 h-4" /> Back to Tools
          </button>
        </div>

        <div className="relative w-full h-64 md:h-96 bg-slate-800">
          {tool.imageUrl ? (
            <Image
              src={tool.imageUrl}
              alt={tool.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
              <FiPackage className="w-24 h-24 text-purple-400/50" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{tool.name}</h1>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-300">
              <span className="bg-slate-700/80 px-3 py-0.5 rounded-full">{tool.category}</span>
              <span className="bg-slate-700/80 px-3 py-0.5 rounded-full">{tool.platform}</span>
              <span className="flex items-center gap-1"><FiStar className="w-4 h-4 text-yellow-400" /> {tool.rating}</span>
              <span className="flex items-center gap-1"><FiDownload className="w-4 h-4" /> {tool.downloads}</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Description</h2>
              <p className="text-slate-300 mt-2 leading-relaxed whitespace-pre-wrap">
                {tool.longDescription || tool.description}
              </p>
            </div>

            {tool.features && tool.features.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-white">Key Features</h2>
                <ul className="mt-2 space-y-1">
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
                <h2 className="text-xl font-bold text-white">Screenshots</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {tool.screenshots.map((src, index) => (
                    <div key={index} className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
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
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <FiDownload className="w-5 h-5" /> Download Now
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

        <Footer />
      </div>
    </>
  );
}