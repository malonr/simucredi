export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)' }}>
            Simulador de Crédito Gratuito
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Calcula fácilmente cuánto pagarás en cada cuota y descubre el costo real de tu compra.
          </p>
          <a
            href="/simulador"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Probar el simulador
          </a>
        </div>
      </div>
    </section>
  );
}
