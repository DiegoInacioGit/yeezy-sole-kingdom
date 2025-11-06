# StyDrops by ADYeezy

Tienda online premium de zapatillas Yeezy con diseño moderno y funcionalidades completas de ecommerce.

## 🌟 Características

### Funcionalidades Principales

- **Página Principal**: Hero section con imagen de fondo de Kanye West, productos destacados y promociones
- **Catálogo Completo**: 
  - Visualización de todos los modelos Yeezy disponibles
  - Filtros por precio, talla y modelo
  - Ordenamiento por precio (mayor/menor), nombre y popularidad
  - Diseño responsive con grid adaptativo

- **Página de Detalle del Producto**:
  - Imágenes de alta calidad
  - Descripción completa con especificaciones
  - Selector de talla (35-48)
  - Control de cantidad
  - Botón para agregar al carrito
  - Información de envío

- **Carrito de Compras**:
  - Gestión completa de productos
  - Cálculo automático de subtotal, envío e impuestos
  - Visualización del total
  - Interfaz lista para integración de checkout

- **Página de Contacto**:
  - Formulario de contacto
  - Información de la tienda
  - Preguntas frecuentes

### Diseño

- **Sistema de Colores**: Esquema elegante con fondo blanco, toques plateados y acentos dorados
- **Responsive**: Totalmente adaptado a dispositivos móviles, tablets y desktop
- **Animaciones**: Transiciones suaves y efectos hover
- **Tipografía**: Sistema tipográfico limpio y legible

### SEO Optimizado

- Meta tags completos (title, description, keywords)
- Open Graph para redes sociales
- URLs semánticas
- Estructura HTML semántica
- Imágenes optimizadas con alt text

## 🚀 Tecnologías

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM
- **Estilos**: Tailwind CSS con sistema de diseño personalizado
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Iconos**: Lucide React

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build de producción
npm run preview
```

## 🛣️ Rutas

- `/` - Página principal
- `/catalog` - Catálogo de productos
- `/product/:id` - Detalle de producto
- `/cart` - Carrito de compras
- `/contact` - Página de contacto
- `/new-arrivals` - Nuevos lanzamientos

## 🎨 Estructura del Proyecto

```
src/
├── assets/          # Imágenes (hero, productos)
├── components/      # Componentes React
│   ├── ui/         # Componentes UI de shadcn
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── data/           # Datos mock de productos
├── pages/          # Páginas de la aplicación
├── hooks/          # Custom hooks
└── lib/            # Utilidades
```

## 🔮 Próximas Funcionalidades

- [ ] Sistema de autenticación de usuarios
- [ ] Integración con Lovable Cloud (base de datos)
- [ ] Sistema de reviews y valoraciones
- [ ] Integración de pagos con Stripe
- [ ] Historial de pedidos
- [ ] Panel de administración
- [ ] Sistema de búsqueda avanzada
- [ ] Wishlist/Favoritos
- [ ] Newsletter
- [ ] Notificaciones push

## 📄 Licencia

© 2025 StyDrops by ADYeezy. Todos los derechos reservados.

## 🔗 Enlaces

- **Lovable Project**: [https://lovable.dev/projects/688b8fff-3cdc-4732-8f70-1a839a545159](https://lovable.dev/projects/688b8fff-3cdc-4732-8f70-1a839a545159)
- **Documentación**: [https://docs.lovable.dev](https://docs.lovable.dev)
