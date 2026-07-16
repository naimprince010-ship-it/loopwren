import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.loopwren.com'
  
  const routes = [
    '',
    '/about',
    '/work',
    '/contact',
    '/solutions',
    '/solutions/pos-system',
    '/solutions/hospital-management',
    '/solutions/pharmacy-pos',
    '/solutions/ecommerce',
    '/solutions/edtech',
    '/solutions/somiti-software',
    '/solutions/banking-software',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
