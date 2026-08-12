// components/Meta.js
import React from 'react';
import Head from 'next/head';

const SITE_URL = 'https://rockyaxis.vercel.app';

export default function Meta({
  title = 'Rocky Axis – Free Fire Tools, Hacks & Configs',
  description = 'Download the best Free Fire tools, Regedit files, headshot configs, sensi APKs, and gameplay improvement files. 100% free!',
  keywords = 'Free Fire, Free Fire tools, Free Fire hacks, Regedit, headshot config, sensi APK, GFX tool, gameplay improvement',
  image = '/images/rockyaxis/og-image.jpg',
  url = '',
  canonical = '',
  type = 'website',
  noindex = false,
  children = null,
}) {
  // Build absolute URLs
  const fullUrl = url ? `${SITE_URL}${url.startsWith('/') ? url : '/' + url}` : SITE_URL;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical.startsWith('/') ? canonical : '/' + canonical}` : fullUrl;
  const imageUrl = image?.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : '/' + image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Rocky Axis" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@RockyAxis" />

      {/* Extra */}
      <meta name="theme-color" content="#1a1a2e" />

      {children}
    </Head>
  );
}