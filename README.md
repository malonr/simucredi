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


## 📝 Licencia

Este proyecto está bajo la Licencia MIT.


## 📞 Contacto

- Email: [marlon.ramirezlizcano@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/marlonramirezlizcano/]