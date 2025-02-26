import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://francisseverino.com',
      lastModified: new Date(),
    },
  ];
}
