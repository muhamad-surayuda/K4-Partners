export default function PracticeAreas() {
  const areas = [
    {
      title: 'Hukum Perdata',
      description: 'Penanganan kasus perdata, kontrak, dan perjanjian'
    },
    {
      title: 'Hukum Pidana',
      description: 'Pertahanan pidana dan penasehat hukum pidana'
    },
    {
      title: 'Hukum Bisnis',
      description: 'Konsultasi bisnis, korporat, dan komersial'
    },
    {
      title: 'Hukum Keluarga',
      description: 'Penanganan perkara perceraian, waris, dan keluarga'
    },
    {
      title: 'Hukum Properti',
      description: 'Transaksi tanah, bangunan, dan properti'
    },
    {
      title: 'Hukum Tenaga Kerja',
      description: 'Konsultasi hubungan industrial dan ketenagakerjaan'
    }
  ]

  return (
    <section id="practices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Bidang Praktik</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-secondary mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
