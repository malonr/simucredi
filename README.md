# SimuCredi - Simulador de Crédito

Un simulador de crédito moderno y fácil de usar para calcular cuotas de tarjeta de crédito en segundos.

## 🚀 Características

- **Cálculo en tiempo real**: Simula tus cuotas instantáneamente
- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Resultados detallados**: Ve el valor de cada cuota, monto total e intereses
- **Responsive**: Funciona perfectamente en desktop y móvil
- **Sin backend**: Todo funciona en el navegador

## 🛠️ Tecnologías

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño
- **React Hooks** - Manejo de estado

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd simucredi
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
simucredi/
├── src/
│   ├── app/                    # Rutas principales (App Router)
│   │   ├── page.tsx           # Página principal (/)
│   │   ├── layout.tsx         # Layout compartido
│   │   ├── globals.css        # Estilos globales
│   │   └── simulador/         # Ruta /simulador
│   │       └── page.tsx
│   ├── components/            # Componentes reutilizables
│   │   ├── ui/               # Componentes de interfaz
│   │   └── simulador/        # Componentes específicos
│   ├── lib/                  # Utilidades y funciones
│   │   └── calculations.ts   # Lógica de cálculo de crédito
│   └── types/               # Tipos TypeScript
├── public/               # Archivos estáticos
└── package.json
```

## 🧮 Funcionalidades del Simulador

### Entradas
- **Monto de la compra**: Cantidad a financiar
- **Tasa de interés anual**: Porcentaje anual del crédito
- **Número de cuotas**: Cantidad de cuotas a pagar (1-60)

### Salidas
- **Valor de cada cuota**: Monto mensual a pagar
- **Monto total a pagar**: Suma de todas las cuotas
- **Intereses totales**: Diferencia entre el total y el monto original

## 🚀 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. ¡Listo! Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `.next`

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- Email: [tu-email@ejemplo.com]
- LinkedIn: [tu-linkedin]
- Twitter: [@tu-twitter]
