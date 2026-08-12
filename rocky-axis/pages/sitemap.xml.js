import { toolsData } from '../lib/rockyaxis/data';

function generateSiteMap() {
  const baseUrl = 'https://rockyaxis.vercel.app';
  const staticPages = ['', '/freefiretools'];

  const toolUrls = toolsData.map(
    (tool) => `
  <url>
    <loc>${baseUrl}/freefiretools/${tool.slug}</loc>
    <lastmod>${tool.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  );

  const staticUrls = staticPages.map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.7'}</priority>
  </url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.join('')}
  ${toolUrls.join('')}
</urlset>`;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSiteMap());
  res.end();
  return { props: {} };
}