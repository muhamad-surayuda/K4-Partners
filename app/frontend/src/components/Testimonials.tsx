export default function Testimonials() {
  const testimonials = [
    {
      text: 'Layanan K4 & Partners sangat profesional dan terpercaya. Mereka berhasil menyelesaikan kasus kami dengan sempurna.',
      author: 'PT. Maju Jaya Industri'
    },
    {
      text: 'Tim mereka sangat responsif dan memahami kebutuhan kami dengan baik. Saya merekomendasikan mereka kepada siapapun.',
      author: 'Ibu Sinta Wijaya'
    },
    {
      text: 'Pengalaman mereka dalam hukum bisnis sangat membantu kami mengembangkan perusahaan dengan aman secara legal.',
      author: 'PT. Teknologi Indonesia'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Testimoni Klien</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4 italic">\"{ testimonial.text}\"</p>
              <p className="font-bold text-primary">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
