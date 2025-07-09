'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (e) => {
    const newLocale = e.target.value

    // Cambia la ruta agregando el nuevo locale manualmente
    const segments = pathname.split('/')
    segments[1] = newLocale // reemplaza el locale actual
    const newPath = segments.join('/')

    router.push(newPath)
  }

  return (
    <select
      onChange={handleChange}
      className="border rounded px-2 py-1"
      defaultValue={pathname.split('/')[1]} // idioma actual
    >
      <option value="es">Castellano</option>
      <option value="eu">Euskera</option>
    </select>
  )
}

