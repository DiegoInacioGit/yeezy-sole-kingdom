import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/kanye-hero.jpg";
import { ArrowRight, Truck, Shield, Star } from "lucide-react";

const Index = () => {
  const featuredProducts = products.filter(p => p.isNew).slice(0, 3);
  const popularProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={0} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'center 40%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-2xl text-left">
          <Badge className="mb-4 bg-accent text-accent-foreground shadow-[0_0_20px_rgba(255,215,0,0.3)]">Nueva Colección 2025</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Diseño que
            <span className="block mt-2 bg-gradient-to-r from-[hsl(45_90%_60%)] to-[hsl(0_0%_85%)] bg-clip-text text-transparent">
              trasciende
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg drop-shadow-md">
            Explora la colección exclusiva de zapatillas Yeezy. Minimalismo, comodidad y estilo único.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/catalog">
              <Button size="lg" className="group">
                Ver Catálogo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/new-arrivals">
              <Button size="lg" variant="outline">
                Nuevos Lanzamientos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Truck className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Envío Gratuito</h3>
                <p className="text-sm text-muted-foreground">En pedidos superiores a €150</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Compra Segura</h3>
                <p className="text-sm text-muted-foreground">Garantía de autenticidad</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Calidad Premium</h3>
                <p className="text-sm text-muted-foreground">Productos 100% originales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2">Nuevos Lanzamientos</h2>
                <p className="text-muted-foreground">Los últimos modelos de la colección Yeezy</p>
              </div>
              <Link to="/new-arrivals">
                <Button variant="ghost" className="group">
                  Ver todos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Más Populares</h2>
              <p className="text-muted-foreground">Los favoritos de nuestra comunidad</p>
            </div>
            <Link to="/catalog">
              <Button variant="ghost" className="group">
                Ver catálogo completo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center" style={{ background: 'var(--gradient-silver)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(45_90%_60%_/_0.1)] to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Únete a nuestra comunidad
              </h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                Sé el primero en conocer los nuevos lanzamientos, ofertas exclusivas y contenido especial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="px-6 py-3 rounded-full flex-1 text-foreground"
                />
                <Button size="lg" variant="secondary" className="rounded-full">
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
