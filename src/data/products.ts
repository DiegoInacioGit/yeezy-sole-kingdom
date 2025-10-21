import yeezy350 from "@/assets/yeezy-350-beige.jpg";
import yeezy700 from "@/assets/yeezy-700-grey.jpg";
import yeezySlide from "@/assets/yeezy-slide-bone.jpg";
import yeezyFoam from "@/assets/yeezy-foam-sand.jpg";
import yeezy450 from "@/assets/yeezy-450-white.jpg";
import yeezy500 from "@/assets/yeezy-500-blush.jpg";

export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  isNew?: boolean;
  colors: string[];
  sizes: number[];
  features: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Yeezy Boost 350 V2 Sand",
    model: "BOOST 350 V2",
    price: 250,
    image: yeezy350,
    images: [yeezy350],
    description: "La icónica silueta de Yeezy Boost 350 V2 en un elegante tono arena. Diseñada con Primeknit superior y la legendaria tecnología BOOST para una comodidad excepcional.",
    isNew: true,
    colors: ["#C4A57B", "#E8D5B7", "#8B7355"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    features: [
      "Upper Primeknit transpirable",
      "Tecnología BOOST para máxima comodidad",
      "Suela de goma duradera",
      "Diseño minimalista y versátil"
    ],
    stock: 15
  },
  {
    id: "2",
    name: "Yeezy Boost 700 Wave Runner",
    model: "BOOST 700",
    price: 300,
    image: yeezy700,
    images: [yeezy700],
    description: "El diseño chunky que revolucionó las sneakers. Combina estilo retro con tecnología moderna para un look único y comodidad superior.",
    isNew: false,
    colors: ["#B8B8B8", "#FFFFFF", "#4A5568"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    features: [
      "Upper de malla y cuero premium",
      "Doble amortiguación BOOST",
      "Diseño chunky icónico",
      "Suela de goma con tracción mejorada"
    ],
    stock: 8
  },
  {
    id: "3",
    name: "Yeezy Slide Bone",
    model: "SLIDE",
    price: 90,
    image: yeezySlide,
    images: [yeezySlide],
    description: "Minimalismo en su máxima expresión. El Yeezy Slide ofrece comodidad incomparable en un diseño de una sola pieza.",
    isNew: true,
    colors: ["#E8DCC8", "#D4C4B0"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    features: [
      "Construcción de una sola pieza",
      "Material EVA suave y ligero",
      "Diseño ergonómico",
      "Fácil de limpiar"
    ],
    stock: 25
  },
  {
    id: "4",
    name: "Yeezy Foam Runner Sand",
    model: "FOAM RUNNER",
    price: 80,
    image: yeezyFoam,
    images: [yeezyFoam],
    description: "Innovación futurista con materiales sostenibles. El Foam Runner redefine las sneakers casuales con su diseño único y comodidad revolucionaria.",
    isNew: false,
    colors: ["#C4A57B", "#B8A48A"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    features: [
      "Material de algas sostenible",
      "Diseño de ventilación único",
      "Ultra ligero",
      "Fácil de poner y quitar"
    ],
    stock: 20
  },
  {
    id: "5",
    name: "Yeezy 450 Cloud White",
    model: "450",
    price: 200,
    image: yeezy450,
    images: [yeezy450],
    description: "Diseño futurista que desafía las convenciones. El Yeezy 450 combina una estética única con comodidad excepcional.",
    isNew: true,
    colors: ["#FFFFFF", "#F5F5F5"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    features: [
      "Upper de Primeknit elástico",
      "Suela de goma con diseño único",
      "Sistema de soporte integrado",
      "Diseño sin cordones"
    ],
    stock: 12
  },
  {
    id: "6",
    name: "Yeezy 500 Blush",
    model: "500",
    price: 200,
    image: yeezy500,
    images: [yeezy500],
    description: "Inspiración retro con un toque moderno. El Yeezy 500 ofrece estilo atemporal y comodidad duradera para el uso diario.",
    isNew: false,
    colors: ["#E8C4C4", "#D4B0B0", "#C4A0A0"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    features: [
      "Upper de malla y cuero nobuck",
      "Suela adiPRENE+ para amortiguación",
      "Diseño chunky premium",
      "Construcción duradera"
    ],
    stock: 10
  }
];
