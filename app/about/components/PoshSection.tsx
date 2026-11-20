interface IccMember {
  name: string
  designation: string
  role: string
  mobile: string
  email: string
}

const members: IccMember[] = [
  {
    name: 'Ridhima Bahuguna',
    designation: 'Founder',
    role: 'Presiding Officer',
    mobile: '9818347011',
    email: 'ridhima@bahuguna.in',
  },
  {
    name: 'Ritwik Bahuguna',
    designation: 'Founder & Hon. General Secretary',
    role: 'Member',
    mobile: '9971000250',
    email: 'rb@rootsfoundation.in',
  },
  {
    name: 'Trapti Moonat',
    designation: 'Head – Growth',
    role: 'Member',
    mobile: '9930210579',
    email: 'tm@rootsfoundation.in',
  },
  {
    name: 'Amrita Chatterjee',
    designation: 'Lawyer',
    role: 'External Member',
    mobile: '9811815606',
    email: 'chatterji.amrita@gmail.com',
  },
]

const headers = ['S. No.', 'Name', 'Designation', 'Role in ICC', 'Mobile', 'Email Id']

export default function PoshSection() {
  return (
    <section className="max-w-7xl mx-auto px-2 md:px-10 py-10">
      {/* Banner */}
      <div className="bg-[#4A88C2] text-white text-center py-8 md:py-12 px-4">
        <h2 className="text-5xl md:text-7xl font-bold tracking-[0.15em]">POSH</h2>
        <p className="mt-3 text-sm md:text-base font-medium">
          Prevention of Women from Sexual Harassment
        </p>
      </div>

      <h3 className="mt-8 mb-6 text-center text-xl md:text-2xl font-semibold text-roots-text">
        Internal Complaints Committee (ICC) Members
      </h3>

      {/* Desktop / tablet: table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse bg-white text-sm">
          <thead>
            <tr className="bg-[#8BC34A] text-white">
              {headers.map((h) => (
                <th key={h} className="border border-gray-800 px-4 py-3 text-center font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={m.email}>
                <td className="border border-gray-800 px-4 py-4">{i + 1}</td>
                <td className="border border-gray-800 px-4 py-4 font-semibold">{m.name}</td>
                <td className="border border-gray-800 px-4 py-4">{m.designation}</td>
                <td className="border border-gray-800 px-4 py-4">{m.role}</td>
                <td className="border border-gray-800 px-4 py-4">
                  <a href={`tel:+91${m.mobile}`} className="hover:underline">{m.mobile}</a>
                </td>
                <td className="border border-gray-800 px-4 py-4">
                  <a href={`mailto:${m.email}`} className="hover:underline">{m.email}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-3">
        {members.map((m) => (
          <div key={m.email} className="bg-white border border-gray-300 p-4 text-sm">
            <p className="font-semibold text-base">{m.name}</p>
            <p className="text-gray-600">{m.designation}</p>
            <p className="mt-2">
              <span className="inline-block bg-[#8BC34A] text-white text-xs px-2 py-1">{m.role}</span>
            </p>
            <div className="mt-3 space-y-1">
              <a href={`tel:+91${m.mobile}`} className="block">{m.mobile}</a>
              <a href={`mailto:${m.email}`} className="block break-all">{m.email}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
