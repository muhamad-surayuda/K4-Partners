import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Hubungi Kami</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded text-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded text-primary"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded text-primary"
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded text-primary"
              required
            >
              <option value="">Pilih Bidang Hukum</option>
              <option value="perdata">Hukum Perdata</option>
              <option value="pidana">Hukum Pidana</option>
              <option value="bisnis">Hukum Bisnis</option>
              <option value="keluarga">Hukum Keluarga</option>
              <option value="properti">Hukum Properti</option>
              <option value="tenagakerja">Hukum Tenaga Kerja</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Pesan Anda"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 rounded text-primary"
            required
          />
          <button
            type="submit"
            className="w-full bg-secondary text-primary font-bold py-3 rounded hover:bg-opacity-90 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  )
}
