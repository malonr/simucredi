'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cómo funciona el simulador de crédito?",
    answer: "El simulador calcula las cuotas mensuales basándose en el monto del préstamo, la tasa de interés anual y el número de cuotas. Utiliza la fórmula de amortización francesa para generar una tabla completa con capital, intereses y saldo pendiente."
  },
  {
    question: "¿Es gratuito usar Simucredi?",
    answer: "Sí, Simucredi es completamente gratuito. No requiere registro, no tiene límites de uso y no solicita información personal. Puedes usar el simulador las veces que necesites."
  },
  {
    question: "¿Qué información necesito para simular un crédito?",
    answer: "Solo necesitas tres datos básicos: el monto que deseas financiar, la tasa de interés anual (TNA) que te ofrece la entidad financiera, y el número de cuotas en las que quieres dividir el pago."
  },
  {
    question: "¿Los resultados del simulador son exactos?",
    answer: "Los cálculos utilizan fórmulas financieras estándar con precisión de centavos. Sin embargo, siempre consulta con tu entidad financiera los términos exactos de tu crédito, ya que pueden aplicarse costos adicionales como seguros o comisiones."
  },
  {
    question: "¿Puedo simular diferentes tipos de crédito?",
    answer: "Sí, el simulador funciona para cualquier tipo de crédito que use el sistema de amortización francés: tarjetas de crédito, préstamos personales, créditos hipotecarios, préstamos para autos, etc."
  },
  {
    question: "¿Qué es la tabla de amortización?",
    answer: "La tabla de amortización muestra el detalle cuota por cuota de cómo se compone cada pago: cuánto va al capital, cuánto a intereses, y qué saldo queda pendiente. Es muy útil para entender la evolución del préstamo."
  },
  {
    question: "¿Cómo interpretar los resultados?",
    answer: "El simulador te muestra tres valores clave: el valor de cada cuota mensual, el monto total que pagarás al final, y los intereses totales. Estos datos te ayudan a evaluar si el crédito se ajusta a tu capacidad de pago."
  },
  {
    question: "¿Puedo guardar o imprimir los resultados?",
    answer: "Puedes usar las funciones de tu navegador para imprimir o guardar como PDF la página con los resultados. También puedes tomar una captura de pantalla de la tabla de amortización para tus registros."
  }
];

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900 pr-4">{item.question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // Primer item abierto por defecto

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvé tus dudas sobre el simulador de crédito y cómo aprovechar al máximo esta herramienta financiera gratuita.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Tenés alguna otra pregunta?
          </p>
          <a
            href="mailto:marlon.ramirezlizcano@gmail.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contactanos por email
          </a>
        </div>
      </div>
    </section>
  );
}