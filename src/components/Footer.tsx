import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">YEEZY</h3>
            <p className="text-sm text-muted-foreground">
              Diseño minimalista y comodidad excepcional en cada paso.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Comprar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/catalog" className="hover:text-foreground transition-colors">Catálogo</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-foreground transition-colors">Nuevos Lanzamientos</Link></li>
              <li><Link to="/catalog?filter=popular" className="hover:text-foreground transition-colors">Más Populares</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link to="/shipping" className="hover:text-foreground transition-colors">Envíos</Link></li>
              <li><Link to="/returns" className="hover:text-foreground transition-colors">Devoluciones</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Yeezy Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
