import '../styles/globals.css'
import Link from 'next/link'

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FEF9F1] text-[#4A4749] flex items-center justify-center px-6">
        <main className="max-w-xl w-full rounded-3xl border border-[#09569a]/10 bg-white/90 shadow-[0_20px_60px_rgba(9,86,154,0.12)] p-8 sm:p-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-roots-primary mb-4">
            Roots Foundation
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-roots-text mb-4">
            Page not found
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-[#4A4749]/85 mb-8">
            The page you’re looking for does not exist or has moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-roots-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Return home
          </Link>
        </main>
      </body>
    </html>
  )
}