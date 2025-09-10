import Link from 'next/link'

export default function Nav() {
  return (
    <header className="py-6 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold">
        Craig Edwards
      </Link>
      <nav className="flex gap-6 text-sm text-gray-300">
        <Link href="#services">Services</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  )
}
