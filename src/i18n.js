import { computed, ref } from 'vue'

const STORAGE_KEY = 'creditflow-locale'

export const locales = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' }
]

const messages = {
  es: {
    nav: {
      features: 'Características',
      how: 'Cómo funciona',
      pricing: 'Planes',
      faq: 'Preguntas',
      login: 'Iniciar sesión',
      trial: 'Probar gratis',
      openMenu: 'Abrir menú',
      language: 'Cambiar idioma'
    },
    hero: {
      eyebrow: 'Plataforma de gestión crediticia',
      titleStart: 'Controla tus ',
      titleHighlight: 'préstamos, créditos y deudas',
      titleEnd: ' en un solo lugar',
      text: 'CreditFlow centraliza tu cartera: registra préstamos, genera cronogramas de pago automáticos, calcula intereses y mora, y avisa a tus clientes antes de que la cuota se venza.',
      ctaPrimary: 'Empezar gratis 30 días',
      ctaSecondary: 'Ver cómo funciona',
      badges: ['Préstamos', 'Créditos', 'Deudas pendientes', 'Cobranzas'],
      portfolio: 'Cartera activa',
      growth: '+12.4% este mes',
      onTime: 'Al día',
      dueSoon: 'Por vencer',
      overdue: 'En mora',
      nextPayments: 'Próximas cuotas',
      dueLabel: 'Vence',
      due: { today: 'hoy', days3: 'en 3 días', late5: 'hace 5 días' },
      status: { onTime: 'Al día', pending: 'Pendiente', overdue: 'Vencido' },
      clients: ['María Torres', 'Grupo Andes SAC', 'Luis Ramírez']
    },
    features: {
      eyebrow: 'Características',
      title: 'Todo el ciclo del crédito, sin hojas de cálculo',
      subtitle:
        'Desde la solicitud hasta el último pago: un mismo flujo para prestamistas, cooperativas y empresas que venden al crédito.',
      items: [
        {
          title: 'Préstamos y cronogramas',
          text: 'Crea préstamos con tasa fija o variable y genera el cronograma de cuotas (francés o alemán) de forma automática.'
        },
        {
          title: 'Líneas de crédito',
          text: 'Administra líneas revolventes por cliente, con límite aprobado, saldo disponible y consumo en tiempo real.'
        },
        {
          title: 'Deudas pendientes y mora',
          text: 'Identifica cuotas vencidas, calcula intereses moratorios y clasifica la cartera por días de atraso.'
        },
        {
          title: 'Recordatorios automáticos',
          text: 'Notifica por correo o WhatsApp antes del vencimiento y tras el atraso, sin perseguir a nadie manualmente.'
        },
        {
          title: 'Registro de pagos',
          text: 'Aplica pagos totales o parciales, amortizaciones anticipadas y emite el comprobante en PDF al instante.'
        },
        {
          title: 'Reportes y KPIs',
          text: 'Mide cartera vencida, tasa de recuperación e ingresos proyectados, y exporta a Excel cuando lo necesites.'
        }
      ]
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Operativo en cuatro pasos',
      subtitle: 'Sin migraciones eternas: importa tu cartera desde Excel y empieza a cobrar el mismo día.',
      steps: [
        {
          title: 'Registra al cliente',
          text: 'Guarda datos, documentos y su historial de pagos. Cada cliente tiene su ficha con score interno.'
        },
        {
          title: 'Crea el préstamo o crédito',
          text: 'Define monto, tasa, plazo y frecuencia. El cronograma de cuotas se calcula solo.'
        },
        {
          title: 'Cobra y concilia',
          text: 'Registra pagos, aplica mora automática y envía recordatorios antes de cada vencimiento.'
        },
        {
          title: 'Analiza tu cartera',
          text: 'Revisa deudas pendientes, morosidad y proyección de ingresos desde un tablero en vivo.'
        }
      ]
    },
    stats: [
      { value: '−38%', label: 'de cartera vencida en 6 meses' },
      { value: '+12h', label: 'ahorradas por semana en cobranza' },
      { value: '99.9%', label: 'de disponibilidad del servicio' },
      { value: '2 min', label: 'para registrar un préstamo' }
    ],
    simulator: {
      eyebrow: 'Simulador',
      title: 'Calcula una cuota en segundos',
      subtitle:
        'El mismo motor de cálculo que usa CreditFlow para generar cronogramas con el método francés (cuota fija). Ajusta monto, tasa y plazo para ver el impacto real.',
      notes: [
        'Cuota fija mensual sobre saldo insoluto',
        'Interés moratorio configurable por producto',
        'Exportable a PDF y Excel desde la app'
      ],
      amount: 'Monto del préstamo',
      rate: 'Tasa anual (TEA)',
      term: 'Plazo',
      months: 'meses',
      installment: 'Cuota mensual',
      total: 'Total a pagar',
      interest: 'Intereses',
      disclaimer: 'Cálculo referencial. No incluye comisiones, seguros ni portes.'
    },
    pricing: {
      eyebrow: 'Planes',
      title: 'Precios claros, sin comisión por préstamo',
      subtitle: 'Cambia o cancela cuando quieras. Todos incluyen 30 días de prueba.',
      monthly: 'Mensual',
      yearly: 'Anual',
      save: '−20%',
      perMonth: '/mes',
      perMonthYearly: '/mes, facturado anual',
      custom: 'A medida',
      popular: 'Más elegido',
      plans: [
        {
          name: 'Emprende',
          description: 'Para prestamistas independientes que recién ordenan su cartera.',
          features: ['Hasta 100 créditos activos', '1 usuario', 'Cronogramas automáticos', 'Recordatorios por correo'],
          cta: 'Empezar gratis'
        },
        {
          name: 'Negocio',
          description: 'Para financieras y empresas que venden al crédito.',
          features: [
            'Créditos ilimitados',
            'Hasta 10 usuarios y roles',
            'Recordatorios por WhatsApp',
            'Reportes de morosidad',
            'Exportación a Excel'
          ],
          cta: 'Probar 30 días'
        },
        {
          name: 'Corporativo',
          description: 'Para cooperativas y cajas con procesos propios.',
          features: ['Usuarios ilimitados', 'API e integraciones', 'Auditoría y trazabilidad', 'Soporte dedicado y SLA'],
          cta: 'Hablar con ventas'
        }
      ]
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que suelen preguntarnos',
      items: [
        {
          q: '¿Puedo importar mi cartera actual desde Excel?',
          a: 'Sí. CreditFlow acepta plantillas en Excel o CSV con clientes, préstamos y pagos históricos, y valida los datos antes de cargarlos.'
        },
        {
          q: '¿Cómo se calcula la mora?',
          a: 'Defines la tasa moratoria y los días de gracia por producto. El sistema recalcula el interés cada día de atraso y lo refleja en el estado de cuenta del cliente.'
        },
        {
          q: '¿Los clientes pueden ver su deuda?',
          a: 'Cada cliente recibe un enlace a su portal con el cronograma, los pagos aplicados y el saldo pendiente actualizado.'
        },
        {
          q: '¿Sirve para créditos entre empresas (facturas por cobrar)?',
          a: 'Sí. Puedes registrar ventas al crédito con fecha de vencimiento y hacerles seguimiento igual que a un préstamo.'
        },
        {
          q: '¿Mis datos están seguros?',
          a: 'Cifrado en tránsito y en reposo, respaldos diarios, control de accesos por rol y bitácora de auditoría de cada operación.'
        }
      ]
    },
    cta: {
      title: 'Empieza a cobrar a tiempo',
      text: 'Prueba CreditFlow 30 días sin tarjeta. Te ayudamos a importar tu cartera y a configurar tus productos crediticios.',
      name: 'Nombre y apellido',
      email: 'Correo corporativo',
      company: 'Empresa (opcional)',
      submit: 'Solicitar acceso',
      legal: 'Al enviar aceptas nuestra política de privacidad.',
      errorRequired: 'Completa tu nombre y tu correo para continuar.',
      errorEmail: 'Ingresa un correo válido.',
      successTitle: '¡Listo, {name}!',
      successText: 'Te escribiremos a {email} con tus accesos de prueba.'
    },
    footer: {
      text: 'Gestión de préstamos, créditos y deudas pendientes para negocios que prestan dinero.',
      columns: [
        { title: 'Producto', links: ['Características', 'Simulador', 'Planes', 'Novedades'] },
        { title: 'Soluciones', links: ['Prestamistas', 'Cooperativas', 'Ventas al crédito', 'Cobranzas'] },
        { title: 'Recursos', links: ['Documentación', 'Guía de morosidad', 'Soporte', 'Estado del servicio'] }
      ],
      rights: '© {year} CreditFlow. Todos los derechos reservados.',
      terms: 'Términos',
      privacy: 'Privacidad'
    },
    meta: {
      title: 'CreditFlow — Gestión de préstamos, créditos y deudas pendientes',
      description:
        'CreditFlow centraliza tus préstamos, líneas de crédito y deudas pendientes: cronogramas automáticos, cálculo de mora, recordatorios de pago y reportes de morosidad.'
    }
  },

  en: {
    nav: {
      features: 'Features',
      how: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Log in',
      trial: 'Try for free',
      openMenu: 'Open menu',
      language: 'Change language'
    },
    hero: {
      eyebrow: 'Lending management platform',
      titleStart: 'Manage your ',
      titleHighlight: 'loans, credit lines and receivables',
      titleEnd: ' in one place',
      text: 'CreditFlow centralizes your portfolio: register loans, generate payment schedules automatically, compute interest and late fees, and remind customers before an installment is due.',
      ctaPrimary: 'Start 30-day free trial',
      ctaSecondary: 'See how it works',
      badges: ['Loans', 'Credit lines', 'Receivables', 'Collections'],
      portfolio: 'Active portfolio',
      growth: '+12.4% this month',
      onTime: 'On time',
      dueSoon: 'Due soon',
      overdue: 'Overdue',
      nextPayments: 'Upcoming installments',
      dueLabel: 'Due',
      due: { today: 'today', days3: 'in 3 days', late5: '5 days ago' },
      status: { onTime: 'On time', pending: 'Pending', overdue: 'Overdue' },
      clients: ['Maria Torres', 'Andes Group LLC', 'Luis Ramirez']
    },
    features: {
      eyebrow: 'Features',
      title: 'The whole credit cycle, without spreadsheets',
      subtitle:
        'From application to final payment: one workflow for lenders, credit unions and companies that sell on credit.',
      items: [
        {
          title: 'Loans and schedules',
          text: 'Create loans with fixed or variable rates and generate the installment schedule (French or German method) automatically.'
        },
        {
          title: 'Credit lines',
          text: 'Manage revolving lines per customer, with approved limit, available balance and usage in real time.'
        },
        {
          title: 'Receivables and late fees',
          text: 'Spot overdue installments, compute late interest and bucket the portfolio by days past due.'
        },
        {
          title: 'Automatic reminders',
          text: 'Notify by email or WhatsApp before the due date and after a delay, with no manual chasing.'
        },
        {
          title: 'Payment tracking',
          text: 'Apply full or partial payments and early amortizations, and issue the PDF receipt instantly.'
        },
        {
          title: 'Reports and KPIs',
          text: 'Track past-due portfolio, recovery rate and projected income, and export to Excel whenever you need it.'
        }
      ]
    },
    how: {
      eyebrow: 'How it works',
      title: 'Up and running in four steps',
      subtitle: 'No endless migrations: import your portfolio from Excel and start collecting the same day.',
      steps: [
        {
          title: 'Register the customer',
          text: 'Store data, documents and payment history. Every customer has a profile with an internal score.'
        },
        {
          title: 'Create the loan or credit line',
          text: 'Set amount, rate, term and frequency. The installment schedule is calculated for you.'
        },
        {
          title: 'Collect and reconcile',
          text: 'Record payments, apply late fees automatically and send reminders before every due date.'
        },
        {
          title: 'Analyze your portfolio',
          text: 'Review receivables, delinquency and income projections from a live dashboard.'
        }
      ]
    },
    stats: [
      { value: '−38%', label: 'past-due portfolio in 6 months' },
      { value: '+12h', label: 'saved per week on collections' },
      { value: '99.9%', label: 'service uptime' },
      { value: '2 min', label: 'to register a loan' }
    ],
    simulator: {
      eyebrow: 'Simulator',
      title: 'Calculate an installment in seconds',
      subtitle:
        'The same engine CreditFlow uses to build schedules with the French method (fixed installment). Adjust amount, rate and term to see the real impact.',
      notes: [
        'Fixed monthly installment on outstanding balance',
        'Late interest configurable per product',
        'Exportable to PDF and Excel from the app'
      ],
      amount: 'Loan amount',
      rate: 'Annual rate (APR)',
      term: 'Term',
      months: 'months',
      installment: 'Monthly installment',
      total: 'Total to pay',
      interest: 'Interest',
      disclaimer: 'Indicative calculation. Fees, insurance and charges not included.'
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Clear pricing, no fee per loan',
      subtitle: 'Change or cancel anytime. Every plan includes a 30-day trial.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      save: '−20%',
      perMonth: '/month',
      perMonthYearly: '/month, billed yearly',
      custom: 'Custom',
      popular: 'Most popular',
      plans: [
        {
          name: 'Starter',
          description: 'For independent lenders getting their portfolio in order.',
          features: ['Up to 100 active credits', '1 user', 'Automatic schedules', 'Email reminders'],
          cta: 'Start for free'
        },
        {
          name: 'Business',
          description: 'For finance companies and businesses selling on credit.',
          features: [
            'Unlimited credits',
            'Up to 10 users and roles',
            'WhatsApp reminders',
            'Delinquency reports',
            'Excel export'
          ],
          cta: 'Try for 30 days'
        },
        {
          name: 'Enterprise',
          description: 'For credit unions and institutions with their own processes.',
          features: ['Unlimited users', 'API and integrations', 'Audit trail', 'Dedicated support and SLA'],
          cta: 'Talk to sales'
        }
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'What people usually ask us',
      items: [
        {
          q: 'Can I import my current portfolio from Excel?',
          a: 'Yes. CreditFlow accepts Excel or CSV templates with customers, loans and payment history, and validates the data before loading it.'
        },
        {
          q: 'How are late fees calculated?',
          a: 'You define the late rate and grace days per product. The system recalculates interest for every day past due and reflects it on the customer statement.'
        },
        {
          q: 'Can customers see their debt?',
          a: 'Every customer gets a link to their portal with the schedule, applied payments and up-to-date outstanding balance.'
        },
        {
          q: 'Does it work for B2B credit (accounts receivable)?',
          a: 'Yes. You can register credit sales with a due date and track them just like a loan.'
        },
        {
          q: 'Is my data secure?',
          a: 'Encryption in transit and at rest, daily backups, role-based access control and an audit log of every operation.'
        }
      ]
    },
    cta: {
      title: 'Start collecting on time',
      text: 'Try CreditFlow for 30 days, no card required. We help you import your portfolio and set up your credit products.',
      name: 'Full name',
      email: 'Work email',
      company: 'Company (optional)',
      submit: 'Request access',
      legal: 'By submitting you accept our privacy policy.',
      errorRequired: 'Enter your name and email to continue.',
      errorEmail: 'Enter a valid email address.',
      successTitle: 'You are all set, {name}!',
      successText: 'We will email {email} with your trial credentials.'
    },
    footer: {
      text: 'Loan, credit and receivables management for businesses that lend money.',
      columns: [
        { title: 'Product', links: ['Features', 'Simulator', 'Pricing', "What's new"] },
        { title: 'Solutions', links: ['Lenders', 'Credit unions', 'Credit sales', 'Collections'] },
        { title: 'Resources', links: ['Documentation', 'Delinquency guide', 'Support', 'Service status'] }
      ],
      rights: '© {year} CreditFlow. All rights reserved.',
      terms: 'Terms',
      privacy: 'Privacy'
    },
    meta: {
      title: 'CreditFlow — Loan, credit and receivables management',
      description:
        'CreditFlow centralizes your loans, credit lines and receivables: automatic schedules, late-fee calculation, payment reminders and delinquency reports.'
    }
  }
}

const currencyByLocale = {
  es: { tag: 'es-PE', currency: 'PEN' },
  en: { tag: 'en-US', currency: 'USD' }
}

const isSupported = (code) => locales.some((item) => item.code === code)

const detectLocale = () => {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && isSupported(stored)) return stored
  return window.navigator.language?.startsWith('en') ? 'en' : 'es'
}

const locale = ref(detectLocale())

const resolve = (dictionary, path) =>
  path.split('.').reduce((value, key) => (value == null ? undefined : value[key]), dictionary)

export const setLocale = (code) => {
  if (!isSupported(code)) return
  locale.value = code
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, code)
  document.documentElement.lang = code
  const meta = messages[code].meta
  document.title = meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
}

export const toggleLocale = () => {
  const index = locales.findIndex((item) => item.code === locale.value)
  setLocale(locales[(index + 1) % locales.length].code)
}

export const useI18n = () => {
  const t = (path, params) => {
    const value = resolve(messages[locale.value], path) ?? resolve(messages.es, path) ?? path
    if (typeof value !== 'string' || !params) return value
    return value.replace(/\{(\w+)\}/g, (match, key) => params[key] ?? match)
  }

  const money = (value) => {
    const { tag, currency } = currencyByLocale[locale.value]
    return new Intl.NumberFormat(tag, { style: 'currency', currency, maximumFractionDigits: 2 }).format(
      Number.isFinite(value) ? value : 0
    )
  }

  return { locale, t, money, setLocale, toggleLocale, otherLocale: computed(() => (locale.value === 'es' ? 'en' : 'es')) }
}
