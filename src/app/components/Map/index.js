'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/app/components/Map/Map.jsx'), {
  ssr: false,
})

export { Map }
