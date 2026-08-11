'use client'

export default function SharedCommitmentSection() {
  return (
    <section className="bg-roots-primary text-white py-15">
      <div className="max-w-7xl mx-auto  p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold">
              Shared Commitment
            </h2>
          </div>

          {/* Right */}
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-white/90 max-w-2xl">
              We actively co-fund projects where needed, sharing responsibility
              with our partners and strengthening our commitment to long-term
              outcomes.
            </p>

            <div className="mt-8">
              <h3 className="text-6xl font-bold leading-none">
                100<span className="ml-1">+</span>
              </h3>

              <p className="mt-2 text-lg text-white/90">
                Projects supported through collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}