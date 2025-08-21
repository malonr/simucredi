import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3" aria-hidden="true">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Simucredi</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Navegación principal">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium" aria-label="Ir a inicio">
              Inicio
            </Link>
            <Link href="/simulador" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium" aria-label="Ir al simulador de crédito">
              Simulador
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium" aria-label="Ir a educación financiera">
              Educación financiera
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600" aria-label="Abrir menú de navegación">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
