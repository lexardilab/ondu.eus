'use client'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <div className="text-xl font-bold">Mi Web</div>
      <LanguageSwitcher />
    </nav>
  )
}
