import '../styles/globals.css'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'

export const metadata = {
  title: 'Roots Foundation',
  description: 'Building structured, on-ground programs that address real needs and deliver sustained outcomes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FEF9F1] text-[#4A4749] flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
