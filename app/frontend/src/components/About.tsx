export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Tentang Kami</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-4">
              K4 & Partners adalah firma hukum terkemuka yang berdedikasi untuk memberikan solusi hukum terbaik kepada klien kami.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Dengan tim yang berpengalaman dan profesional, kami siap membantu Anda mengatasi berbagai permasalahan hukum.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-secondary mr-3">✓</span>
                <span>Pengalaman lebih dari 20 tahun</span>
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-3">✓</span>
                <span>Tim profesional bersertifikat</span>
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-3">✓</span>
                <span>Kepercayaan ribuan klien</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-secondary to-yellow-600 h-96 rounded-lg"></div>
        </div>
      </div>
    </section>
  )
}
