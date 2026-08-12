// components/Meta.js
import React from 'react';
import Head from 'next/head';

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
  const siteUrl = 'https://rockyaxis.vercel.app';
  const fullUrl = url ? `${siteUrl}${url.startsWith('/') ? url : '/' + url}` : siteUrl;
  const canonicalUrl = canonical ? `${siteUrl}${canonical.startsWith('/') ? canonical : '/' + canonical}` : fullUrl;
  // Ensure image is absolute
  const ogImage = image?.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? image : '/' + image}`;

  return (
    <Head>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
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
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@RockyAxis" />

      {/* Additional */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#1a1a2e" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {children}
    </Head>
  );
}