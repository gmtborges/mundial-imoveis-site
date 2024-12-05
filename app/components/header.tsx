export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Mundial Imóveis
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Início
            </a>
            <a href="/sobre-nos" className="text-gray-700 hover:text-gray-900 transition-colors">
              Sobre Nós
            </a>
            <a href="/contato" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
