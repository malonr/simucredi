# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js development server with Turbopack
- **Build**: `npm run build` - Builds the production application with Turbopack
- **Production server**: `npm start` - Starts the production server
- **Lint**: `npm run lint` - Runs ESLint for code quality checks

## Project Architecture

SimuCredi is a credit card installment simulator built with Next.js 15, TypeScript, and Tailwind CSS. The application calculates loan installments using amortization tables and provides detailed financial breakdowns.

### Key Architecture Patterns

- **App Router Structure**: Uses Next.js 15 App Router with page-based routing
- **Client-Side Calculations**: All financial computations happen in the browser using optimized calculation functions
- **Performance Optimization**: Implements memoization, caching, and lazy loading for optimal user experience
- **Component Composition**: Modular UI components with clear separation of concerns

### Core Financial Logic

The application centers around credit calculation logic in `src/lib/calculations.ts`:

- `calcularTablaAmortizacion()` - Generates complete amortization schedules with caching
- `calcularResumen()` - Provides loan summary (monthly payment, total amount, total interest)
- `formatearMoneda()` - Formats currency values in Argentine Peso format

### Component Structure

- **UI Components** (`src/components/ui/`): Reusable interface elements (Header, Footer, HeroSection, FeatureCards)
- **Simulator Components** (`src/components/simulador/`): Credit calculation specific components
  - `CreditSimulator.tsx` - Main simulator with state management and performance optimizations
  - `CreditForm.tsx` - Input form for loan parameters
  - `CreditSummary.tsx` - Displays calculation results
  - `AmortizationTable.tsx` - Detailed installment breakdown table
  - `CreditSimulatorClient.tsx` - Client wrapper for the simulator

### State Management

Uses React hooks with performance optimizations:
- `useState` for form data and UI state
- `useMemo` for expensive calculations with dependency tracking
- `useCallback` for event handlers to prevent unnecessary re-renders
- Component memoization with `memo()` to optimize renders

### Performance Features

- **Calculation Caching**: Results are cached using Map-based storage with automatic cleanup
- **Lazy Loading**: Amortization table loads on-demand using dynamic imports
- **SSR Handling**: Proper hydration handling to prevent server-client mismatches
- **Turbopack**: Uses Next.js Turbopack for faster builds and development

### Path Aliases

- `@/*` maps to `src/*` for clean imports

### Configuration

- TypeScript with strict mode enabled
- ESLint with Next.js and TypeScript rules
- Tailwind CSS v4 for styling
- Next.js optimizations for images, caching, and compression