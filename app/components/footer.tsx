import {Facebook, Instagram} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Mundial Imóveis</h3>
            <p className="text-gray-600">Seu parceiro para encontrar o imóvel ideal.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/sobre-nos" className="text-gray-600 hover:text-gray-900">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-600 hover:text-gray-900">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/termos-de-uso" className="text-gray-600 hover:text-gray-900">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="/politica-privacidade" className="text-gray-600 hover:text-gray-900">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Conheça nossas redes sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&#174; {new Date().getFullYear()} Mundial Imóveis.</p>
        </div>
      </div>
    </footer>
  );
}
