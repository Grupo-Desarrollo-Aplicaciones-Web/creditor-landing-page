export const messages = {
  'en-US': {
    nav: { features: 'Features', how: 'How it works', scope: 'This version', faq: 'Questions', login: 'Open application', openMenu: 'Open navigation', closeMenu: 'Close navigation', language: 'Choose language', skip: 'Skip to content', home: 'CREDITOR home' },
    hero: {
      eyebrow: 'Accounts payable for small businesses',
      titleStart: 'Know what you owe. ', titleHighlight: 'Plan your next payment.',
      text: 'CREDITOR brings supplier purchases, due dates and payment records into one workspace for your small business.',
      ctaPrimary: 'Review my obligations', ctaSecondary: 'Record a purchase',
      badges: ['Supplier purchases', 'Due dates', 'Payment history'],
      portfolio: 'Outstanding obligations', growth: 'Illustrative data',
      nextPayments: 'Supplier obligations', dueLabel: 'Due',
      due: { today: '05 Oct 2026', days3: '10 Oct 2026', late5: '15 Oct 2026' },
      status: { onTime: 'Partly paid', pending: 'Pending', overdue: 'Pending' },
      clients: ['Andes Supplies', 'Pacific Packaging', 'Central Services'],
      sampleNote: 'Illustrative preview in PEN. These are fictional records, not your account.'
    },
    features: {
      eyebrow: 'One place to keep track', title: 'From purchase to outstanding balance',
      subtitle: 'A clear record of each obligation helps owners and administrators review the same information.',
      items: [
        { title: 'Supplier purchases', text: 'Record supplier, amount, currency and due date for a purchase on credit.' },
        { title: 'Obligations overview', text: 'Review outstanding balances and upcoming due dates without mixing currencies.' },
        { title: 'Payment records', text: 'Link payments to a purchase and review how its balance is composed.' },
        { title: 'Supplier context', text: 'Find the obligations associated with each supplier.' },
        { title: 'Movement history', text: 'Review purchase and payment information together in the obligation detail.' },
        { title: 'Clear demo status', text: 'The local application identifies demonstration records and storage limitations.' }
      ]
    },
    how: {
      eyebrow: 'How it works', title: 'A shared view of your obligations',
      subtitle: 'Start with a purchase and follow its balance through each recorded payment.',
      steps: [
        { title: 'Identify the supplier', text: 'Keep supplier information associated with the business.' },
        { title: 'Record the purchase', text: 'Add amount, currency and due date to establish the obligation.' },
        { title: 'Record a payment', text: 'Associate a payment with the purchase and check its remaining balance.' },
        { title: 'Review the detail', text: 'See due dates and movements before planning the next payment.' }
      ]
    },
    scope: {
      eyebrow: 'TB1 local version', title: 'Explore the first application increment',
      subtitle: 'This version is prepared for local review. It is not a production financial service.',
      owner: 'For business owners', ownerText: 'Review balances and due dates in the obligations overview.', ownerCta: 'Open obligations',
      admin: 'For finance administrators', adminText: 'Start recording a purchase with supplier, amount, currency and due date.', adminCta: 'Open purchase form',
      note: 'The frontend destination is configured per environment. A running local application is required. There is no production API, shared database or live notification service in this local version.'
    },
    simulator: {
      eyebrow: 'Optional loan estimate', title: 'Estimate a business loan installment',
      subtitle: 'For a loan taken by your business, compare principal, effective annual rate and monthly term. This estimate is separate from supplier purchases.',
      notes: ['Fixed monthly installments: French amortization method', 'Amount and results remain in PEN', 'No fees, insurance, taxes or late charges included'],
      amount: 'Loan amount (PEN)', rate: 'Effective annual rate (EAR / TEA)', term: 'Term', months: 'months',
      installment: 'Estimated monthly installment', total: 'Estimated total', interest: 'Estimated interest',
      disclaimer: 'Illustrative estimate, not a loan offer or a quote.'
    },
    faq: {
      eyebrow: 'Questions', title: 'What to expect from this version',
      items: [
        { q: 'Who is CREDITOR designed for?', a: 'Small business owners and finance administrators who need to organize obligations to suppliers and review payment records.' },
        { q: 'Is the application connected to a production backend?', a: 'No. The first local frontend uses demonstration data and storage on the current device. It does not connect to a production API.' },
        { q: 'Will the contact form send an email?', a: 'No. It only checks the example you enter on this page. Nothing is sent or saved by the form.' },
        { q: 'Does changing the language convert currency?', a: 'No. Language changes labels and formatting. The example amounts and the loan estimate stay in PEN.' },
        { q: 'Are these financial performance claims?', a: 'No. The preview uses fictional obligations. This version makes no promises about savings, returns or service availability.' }
      ]
    },
    cta: {
      title: 'Try the contact form locally', text: 'This is a form demonstration. Use fictional data; it does not request real access or send a message.',
      name: 'Full name', email: 'Email', company: 'Business (optional)', submit: 'Check example',
      legal: 'Read how this local demo handles data:', privacy: 'Privacy',
      required: 'Required', errorRequired: 'Enter a name.', errorEmail: 'Enter a valid email address.',
      successTitle: 'Example checked', successText: 'Nothing was sent or saved. Your entries have been cleared.',
      reset: 'Clear fields', again: 'Try another example', errorSummary: 'Review the indicated fields.', cleared: 'Fields cleared.'
    },
    footer: {
      text: 'A workspace for supplier obligations and payment records in small businesses.',
      product: 'Explore', features: 'Features', scope: 'This version', simulator: 'Loan estimate',
      application: 'Application', obligations: 'Obligations', purchase: 'New purchase',
      legal: 'Information', terms: 'Terms of this demo', privacy: 'Privacy',
      rights: '© {year} CREDITOR. Academic project.',
      note: 'Local version prepared for review; no publication or production service is implied.'
    },
    legal: {
      back: 'Back to CREDITOR', updated: 'Local demo information · 03 October 2026',
      terms: { title: 'Terms of this local demo', sections: [
        { title: 'Academic demonstration', text: 'CREDITOR is an academic application increment prepared for local review. It is not a live lending, payment or financial advice service. The sample records are fictional.' },
        { title: 'Use fictional information', text: 'Explore the interface with fictional data. No loan is offered, no payment is processed and no real account is opened through this landing.' },
        { title: 'Linked application', text: 'The calls to action open the separately configured frontend. The local frontend must be running. Its demonstration storage is on the current device; it does not provide shared production persistence or authentication.' },
        { title: 'Loan estimate', text: 'The optional estimate uses a fixed monthly installment and an effective annual rate. It excludes additional charges and does not constitute a quote.' },
        { title: 'Availability of this version', text: 'These local changes have not been published. No uptime, financial outcome, commercial price or support commitment is offered.' }
      ] },
      privacy: { title: 'Privacy in this local demo', sections: [
        { title: 'Contact example', text: 'The contact form validates entries in memory. It sends no network request and does not save them. Successful validation clears all entries; the Clear fields button clears them at any time. Leaving or reloading the page also discards them.' },
        { title: 'Language preference', text: 'The landing saves only the selected language in this browser under creditor-locale in localStorage. If storage is unavailable, it still works. Clear that site storage in your browser to remove the preference.' },
        { title: 'Loan estimate and preview', text: 'The slider values are held in memory and discarded when the page is reloaded. The preview contains fictional supplier names and amounts.' },
        { title: 'Separate frontend', text: 'The linked local frontend stores its demonstration records on the current device and provides a demo-data reset action. Consult its Privacy page for the exact storage keys and reset behavior before entering information.' },
        { title: 'Network and hosting', text: 'The landing bundles its own styles and uses system fonts. Loading it requests files from the server you run it on. Following a frontend link connects to the destination configured by the developer. A future public hosting provider may maintain access logs; no future deployment is implied by this page.' }
      ] }
    },
    meta: {
      title: 'CREDITOR | Accounts payable for small businesses',
      description: 'Organize supplier purchases, due dates and payment records. Explore the first local CREDITOR frontend.'
    }
  },
  'es-419': {
    nav: { features: 'Funciones', how: 'Cómo funciona', scope: 'Esta versión', faq: 'Preguntas', login: 'Abrir aplicación', openMenu: 'Abrir navegación', closeMenu: 'Cerrar navegación', language: 'Elegir idioma', skip: 'Ir al contenido', home: 'Inicio de CREDITOR' },
    hero: {
      eyebrow: 'Cuentas por pagar para mypes',
      titleStart: 'Conoce tus obligaciones. ', titleHighlight: 'Organiza tu próximo pago.',
      text: 'CREDITOR reúne compras a proveedores, vencimientos y registros de abonos en un espacio de trabajo para tu mype.',
      ctaPrimary: 'Revisar mis obligaciones', ctaSecondary: 'Registrar una compra',
      badges: ['Compras a proveedores', 'Vencimientos', 'Historial de abonos'],
      portfolio: 'Obligaciones pendientes', growth: 'Datos ilustrativos',
      nextPayments: 'Obligaciones con proveedores', dueLabel: 'Vence',
      due: { today: '05 oct 2026', days3: '10 oct 2026', late5: '15 oct 2026' },
      status: { onTime: 'Abonado parcialmente', pending: 'Pendiente', overdue: 'Pendiente' },
      clients: ['Suministros Andes', 'Empaques Pacífico', 'Servicios Central'],
      sampleNote: 'Vista ilustrativa en PEN. Son registros ficticios, no tu cuenta.'
    },
    features: {
      eyebrow: 'Información organizada', title: 'De la compra al saldo pendiente',
      subtitle: 'Un registro claro de cada obligación ayuda a propietarios y administradores a revisar la misma información.',
      items: [
        { title: 'Compras a proveedores', text: 'Registra proveedor, importe, moneda y vencimiento de una compra a crédito.' },
        { title: 'Resumen de obligaciones', text: 'Revisa saldos y próximos vencimientos sin mezclar monedas.' },
        { title: 'Registro de abonos', text: 'Relaciona los abonos con una compra y revisa cómo se compone su saldo.' },
        { title: 'Información por proveedor', text: 'Encuentra las obligaciones asociadas a cada proveedor.' },
        { title: 'Historial de movimientos', text: 'Revisa la información de la compra y sus abonos en el detalle de la obligación.' },
        { title: 'Estado de demo visible', text: 'La aplicación local identifica los registros de demostración y sus límites de almacenamiento.' }
      ]
    },
    how: {
      eyebrow: 'Cómo funciona', title: 'Una vista compartida de tus obligaciones',
      subtitle: 'Empieza con una compra y sigue su saldo con cada abono registrado.',
      steps: [
        { title: 'Identifica al proveedor', text: 'Mantén la información del proveedor asociada al negocio.' },
        { title: 'Registra la compra', text: 'Agrega importe, moneda y vencimiento para establecer la obligación.' },
        { title: 'Registra un abono', text: 'Asocia un abono a la compra y comprueba el saldo pendiente.' },
        { title: 'Revisa el detalle', text: 'Consulta vencimientos y movimientos antes de organizar el siguiente pago.' }
      ]
    },
    scope: {
      eyebrow: 'Versión local TB1', title: 'Explora el primer incremento de la aplicación',
      subtitle: 'Esta versión está preparada para revisión local. No es un servicio financiero de producción.',
      owner: 'Para propietarios', ownerText: 'Revisa saldos y vencimientos en el resumen de obligaciones.', ownerCta: 'Abrir obligaciones',
      admin: 'Para administradores', adminText: 'Empieza a registrar una compra con proveedor, importe, moneda y vencimiento.', adminCta: 'Abrir formulario de compra',
      note: 'El destino del frontend se configura por entorno. Se requiere una aplicación local en ejecución. Esta versión no tiene API de producción, base de datos compartida ni servicio de notificaciones.'
    },
    simulator: {
      eyebrow: 'Estimación opcional de préstamo', title: 'Estima la cuota de un préstamo para tu mype',
      subtitle: 'Para un préstamo recibido por tu negocio, compara principal, tasa efectiva anual y plazo mensual. Esta estimación es independiente de las compras a proveedores.',
      notes: ['Cuotas mensuales fijas: método de amortización francés', 'Importe y resultados siempre en PEN', 'No incluye comisiones, seguros, impuestos ni mora'],
      amount: 'Monto del préstamo (PEN)', rate: 'Tasa efectiva anual (TEA)', term: 'Plazo', months: 'meses',
      installment: 'Cuota mensual estimada', total: 'Total estimado', interest: 'Intereses estimados',
      disclaimer: 'Estimación ilustrativa; no es una oferta ni una cotización de préstamo.'
    },
    faq: {
      eyebrow: 'Preguntas', title: 'Qué esperar de esta versión',
      items: [
        { q: '¿Para quién está pensado CREDITOR?', a: 'Para propietarios y administradores financieros de mypes que necesitan organizar obligaciones con proveedores y revisar sus abonos.' },
        { q: '¿La aplicación está conectada a un backend de producción?', a: 'No. El primer frontend local usa datos de demostración y almacenamiento en el dispositivo actual. No se conecta a una API de producción.' },
        { q: '¿El formulario de contacto enviará un correo?', a: 'No. Solo comprueba el ejemplo ingresado en esta página. El formulario no envía ni guarda datos.' },
        { q: '¿Cambiar el idioma convierte la moneda?', a: 'No. Cambia las etiquetas y el formato. Los importes de ejemplo y la estimación de préstamo permanecen en PEN.' },
        { q: '¿Se presentan resultados financieros reales?', a: 'No. La vista usa obligaciones ficticias. Esta versión no promete ahorros, rentabilidad ni disponibilidad del servicio.' }
      ]
    },
    cta: {
      title: 'Prueba el formulario localmente', text: 'Este es un formulario de demostración. Usa datos ficticios; no solicita acceso real ni envía un mensaje.',
      name: 'Nombre completo', email: 'Correo', company: 'Negocio (opcional)', submit: 'Comprobar ejemplo',
      legal: 'Consulta cómo esta demo local trata los datos:', privacy: 'Privacidad',
      required: 'Obligatorio', errorRequired: 'Ingresa un nombre.', errorEmail: 'Ingresa un correo válido.',
      successTitle: 'Ejemplo comprobado', successText: 'No se envió ni guardó nada. Los campos se han borrado.',
      reset: 'Borrar campos', again: 'Probar otro ejemplo', errorSummary: 'Revisa los campos indicados.', cleared: 'Campos borrados.'
    },
    footer: {
      text: 'Un espacio de trabajo para obligaciones con proveedores y abonos de mypes.',
      product: 'Explorar', features: 'Funciones', scope: 'Esta versión', simulator: 'Estimación de préstamo',
      application: 'Aplicación', obligations: 'Obligaciones', purchase: 'Nueva compra',
      legal: 'Información', terms: 'Términos de esta demo', privacy: 'Privacidad',
      rights: '© {year} CREDITOR. Proyecto académico.',
      note: 'Versión local preparada para revisión; no implica publicación ni servicio de producción.'
    },
    legal: {
      back: 'Volver a CREDITOR', updated: 'Información de la demo local · 03 de octubre de 2026',
      terms: { title: 'Términos de esta demo local', sections: [
        { title: 'Demostración académica', text: 'CREDITOR es un incremento de aplicación académico preparado para revisión local. No es un servicio real de préstamos, pagos ni asesoría financiera. Los registros de ejemplo son ficticios.' },
        { title: 'Usa información ficticia', text: 'Explora la interfaz con datos ficticios. Esta landing no ofrece préstamos, no procesa pagos ni abre cuentas reales.' },
        { title: 'Aplicación vinculada', text: 'Los botones abren el frontend configurado por separado. El frontend local debe estar en ejecución. Su almacenamiento de demostración está en el dispositivo actual; no ofrece persistencia compartida ni autenticación de producción.' },
        { title: 'Estimación de préstamo', text: 'La estimación opcional utiliza una cuota mensual fija y una tasa efectiva anual. Excluye cargos adicionales y no constituye una cotización.' },
        { title: 'Disponibilidad de esta versión', text: 'Estos cambios locales no se han publicado. No se ofrece un compromiso de disponibilidad, resultados financieros, precios comerciales ni soporte.' }
      ] },
      privacy: { title: 'Privacidad en esta demo local', sections: [
        { title: 'Ejemplo de contacto', text: 'El formulario valida los campos en memoria. No envía solicitudes de red ni los guarda. Al validar correctamente borra todas las entradas; el botón Borrar campos las elimina en cualquier momento. Salir o recargar la página también las descarta.' },
        { title: 'Preferencia de idioma', text: 'La landing guarda únicamente el idioma seleccionado en este navegador con la clave creditor-locale de localStorage. Funciona aunque ese almacenamiento no esté disponible. Borra el almacenamiento de este sitio en el navegador para eliminar la preferencia.' },
        { title: 'Estimación y vista previa', text: 'Los valores de los controles se mantienen en memoria y se descartan al recargar. La vista previa contiene nombres de proveedores e importes ficticios.' },
        { title: 'Frontend separado', text: 'El frontend local vinculado guarda sus registros de demostración en el dispositivo actual y ofrece una acción para restablecer la demo. Consulta su página de Privacidad para conocer las claves y el comportamiento de restablecimiento antes de ingresar información.' },
        { title: 'Red y alojamiento', text: 'La landing incluye sus estilos y utiliza fuentes del sistema. Cargarla solicita archivos al servidor donde la ejecutes. Abrir un enlace del frontend conecta con el destino configurado por el desarrollador. Un futuro proveedor público podría mantener registros de acceso; esta página no implica un despliegue futuro.' }
      ] }
    },
    meta: {
      title: 'CREDITOR | Cuentas por pagar para mypes',
      description: 'Organiza compras a proveedores, vencimientos y abonos. Explora el primer frontend local de CREDITOR.'
    }
  }
}
