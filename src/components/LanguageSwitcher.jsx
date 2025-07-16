'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Para que el componente solo renderice en cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentLang = pathname.split('/')[1]
  const otherLang = currentLang === 'es' ? 'eu' : 'es'

  const handleChange = (e) => {
    const selectedLang = e.target.value
    const segments = pathname.split('/')
    segments[1] = selectedLang
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <select value={currentLang} onChange={handleChange} className="text-[#5f7254]">
      <option value="es">Es</option>
      <option value="eu">Eu</option>
    </select>
  )
}
