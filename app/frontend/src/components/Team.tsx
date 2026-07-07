export default function Team() {
  const team = [
    {
      name: 'Budi Santoso, S.H., M.H.',
      position: 'Partner & Founder',
      expertise: 'Hukum Bisnis & Korporat'
    },
    {
      name: 'Siti Rahma, S.H.',
      position: 'Senior Associate',
      expertise: 'Hukum Perdata & Properti'
    },
    {
      name: 'Ahmad Wijaya, S.H.',
      position: 'Associate',
      expertise: 'Hukum Pidana'
    },
    {
      name: 'Dewi Lestari, S.H.',
      position: 'Associate',
      expertise: 'Hukum Keluarga & Waris'
    }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Tim Kami</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-primary">{member.name}</h3>
              <p className="text-secondary">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
