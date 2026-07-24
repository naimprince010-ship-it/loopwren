import { MetadataRoute } from 'next'
import { districts } from '@/data/districts'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.loopwren.com'
  
  const staticRoutes = [
    '',
    '/about',
    '/work',
    '/contact',
    '/solutions',
    '/services',
    '/solutions/pos-system',
    '/solutions/hospital-management',
    '/solutions/pharmacy-pos',
    '/solutions/ecommerce',
    '/solutions/edtech',
    '/solutions/somiti-software',
    '/solutions/banking-software',
    '/work/pos-system',
    '/work/hospital-management',
    '/work/pharmacy-pos',
    '/work/ecommerce',
    '/work/edtech',
    '/work/somiti-software',
    '/work/banking-software',
  ]

  const districtRoutes = districts.map(d => `/it-company-in/${d.slug}`)
  
  const allRoutes = [...staticRoutes, ...districtRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : (route.startsWith('/it-company-in/') ? 0.6 : 0.8),
  }))
}
