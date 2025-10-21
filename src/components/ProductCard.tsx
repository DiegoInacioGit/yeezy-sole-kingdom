import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  image: string;
  isNew?: boolean;
  colors: string[];
  sizes: number[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-card">
            <img 
              src={product.image} 
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.isNew && (
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                Nuevo
              </Badge>
            )}
          </div>
          
          <div className="p-6 space-y-2">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {product.model}
            </p>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <p className="text-xl font-bold text-foreground">
              €{product.price.toFixed(2)}
            </p>
            <div className="flex gap-2 pt-2">
              {product.colors.slice(0, 4).map((color, index) => (
                <div 
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-border"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
