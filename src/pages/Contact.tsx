import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={0} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
            <p className="text-muted-foreground text-lg">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  info@yeezystore.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-sm text-muted-foreground">
                  +34 900 123 456
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Lun-Vie 9:00-18:00
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 p-8 rounded-2xl bg-muted/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground mb-6">
              Antes de contactarnos, revisa nuestras preguntas frecuentes
            </p>
            <Button variant="outline">
              Ver FAQ
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
