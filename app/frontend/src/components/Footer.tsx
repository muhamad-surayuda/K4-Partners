export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">K4 & Partners</h3>
            <p className="text-gray-400">Firma hukum terpercaya sejak 2004</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Bidang Praktik</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-secondary">Hukum Perdata</a></li>
              <li><a href="#" className="hover:text-secondary">Hukum Bisnis</a></li>
              <li><a href="#" className="hover:text-secondary">Hukum Keluarga</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Telepon: (021) 1234-5678</li>
              <li>Email: info@k4partners.co.id</li>
              <li>Alamat: Jakarta Selatan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-secondary">Facebook</a></li>
              <li><a href="#" className="hover:text-secondary">LinkedIn</a></li>
              <li><a href="#" className="hover:text-secondary">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 K4 & Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
