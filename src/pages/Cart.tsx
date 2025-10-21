import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Trash2 } from "lucide-react";

const Cart = () => {
  // Mock cart data - will be replaced with real cart state later
  const cartItems: any[] = [];
  const subtotal: number = 0;
  const shipping: number = 0;
  const total: number = 0;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar cartItemsCount={0} />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-4xl font-bold mb-4">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-8">
              Explora nuestra colección y encuentra tus Yeezy perfectos
            </p>
            <Link to="/catalog">
              <Button size="lg">
                Explorar Catálogo
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={cartItems.length} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Carrito de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Talla: {item.size}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-4">
                          <Button variant="outline" size="sm">-</Button>
                          <span>{item.quantity}</span>
                          <Button variant="outline" size="sm">+</Button>
                        </div>
                        <p className="font-bold text-xl">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold mb-6">Resumen del Pedido</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">€{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envío</span>
                    <span className="font-semibold">
                      {shipping === 0 ? "Gratis" : `€${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">€{total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full mt-6" size="lg">
                  Proceder al Pago
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Envío gratuito en pedidos superiores a €150
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
