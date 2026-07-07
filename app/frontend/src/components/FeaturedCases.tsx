export default function FeaturedCases() {
  const cases = [
    {
      title: 'Kasus Pertanahan Komersial',
      result: 'Menang - Rp 5 Miliar'
    },
    {
      title: 'Dispute Kontrak Bisnis',
      result: 'Penyelesaian Damai - Rp 2.5 Miliar'
    },
    {
      title: 'Kasus Keluarga (Waris)',
      result: 'Menang - Aset Terbukti'
    }
  ]

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Kasus Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-primary mb-2">{caseItem.title}</h3>
              <p className="text-secondary font-bold">{caseItem.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
