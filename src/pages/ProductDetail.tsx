import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Truck, RotateCcw, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar cartItemsCount={0} />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
          <Link to="/catalog">
            <Button>Volver al Catálogo</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.model === product.model).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecciona una talla",
        description: "Por favor, selecciona una talla antes de agregar al carrito",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Agregado al carrito",
      description: `${product.name} - Talla ${selectedSize} agregado exitosamente`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={0} />
      
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Inicio</Link>
          {" / "}
          <Link to="/catalog" className="hover:text-foreground">Catálogo</Link>
          {" / "}
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {product.model}
              </p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              {product.isNew && (
                <Badge className="bg-accent text-accent-foreground mb-4">
                  Nuevo Lanzamiento
                </Badge>
              )}
            </div>

            <div className="flex items-baseline gap-4">
              <p className="text-4xl font-bold">€{product.price.toFixed(2)}</p>
              {product.stock < 10 && (
                <Badge variant="outline" className="text-destructive border-destructive">
                  ¡Solo {product.stock} disponibles!
                </Badge>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div>
              <h3 className="font-semibold mb-3">Colores disponibles</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-semibold mb-3">Selecciona tu talla</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map(size => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-full"
                  >
                    EU {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Cantidad</h3>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Agregar al Carrito
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Envío gratuito</p>
                  <p className="text-sm text-muted-foreground">En pedidos superiores a €150</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Devoluciones gratis</p>
                  <p className="text-sm text-muted-foreground">Hasta 30 días después de la compra</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">100% Auténtico</p>
                  <p className="text-sm text-muted-foreground">Garantía de autenticidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="features" className="mb-20">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger value="features" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
              Características
            </TabsTrigger>
            <TabsTrigger value="shipping" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
              Envío y Devoluciones
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="pt-8">
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="shipping" className="pt-8 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Envío</h3>
              <p className="text-muted-foreground">
                Ofrecemos envío gratuito en todos los pedidos superiores a €150. Los pedidos se procesan en 1-2 días hábiles y la entrega tarda entre 3-5 días hábiles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Devoluciones</h3>
              <p className="text-muted-foreground">
                Aceptamos devoluciones gratuitas dentro de los 30 días posteriores a la compra. Los productos deben estar sin usar y en su embalaje original.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">También te puede gustar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
