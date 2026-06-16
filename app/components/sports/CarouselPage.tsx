import SportsCarousel from '../../components/ui/SportsCarousel'

export default function SportsPage() {
  return (
      <section className="py-12 px-6 aspect-[21/9]   ">
            <div className="max-w-7xl mx-auto text-center font-medium text-xl mb-8">
            This is a carousel page
            </div>
          <SportsCarousel />
      </section>
  )
}
