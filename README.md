# CreditFlow — Landing page (Vite + Vue 3)

Landing page para una aplicación de gestión de préstamos, créditos y deudas pendientes.

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # salida en dist/
```

Requiere Node 20.19+ o 22.12+.

## Estructura

- `index.html` — metadatos SEO/Open Graph y fuente Inter.
- `src/i18n.js` — traducciones ES/EN y composable `useI18n()` (`t`, `money`, `locale`, `setLocale`).
- `src/style.css` — variables de diseño (colores, radios, sombras) y utilidades globales (`.container`, `.section`, `.btn`, `.card`).
- `src/components/`
  - `TheHeader.vue` — navegación sticky, menú responsive y botón de idioma ES/EN.
  - `HeroSection.vue` — titular, CTAs y panel de cartera de ejemplo.
  - `FeaturesSection.vue` — seis capacidades del producto.
  - `HowItWorks.vue` — flujo en cuatro pasos.
  - `StatsBand.vue` — franja de métricas.
  - `LoanSimulator.vue` — simulador de cuota (método francés) reactivo.
  - `PricingSection.vue` — planes con conmutador mensual/anual.
  - `FaqSection.vue` — acordeón de preguntas frecuentes.
  - `CtaSection.vue` — formulario de solicitud de demo con validación.
  - `TheFooter.vue` — pie con enlaces y legales.

## Conectar con el backend (ASP.NET / C#)

El formulario de `CtaSection.vue` valida en cliente y marca el envío como exitoso sin llamar a
ningún servicio. Para integrarlo, reemplaza el `TODO` del método `submit` por una llamada a tu
API, por ejemplo `POST /api/demo-requests`, y configura el proxy en `vite.config.js`:

```js
server: {
  proxy: {
    '/api': { target: 'https://localhost:7001', changeOrigin: true, secure: false }
  }
}
```

## Internacionalización

El idioma se detecta desde `navigator.language`, se puede cambiar con el botón ES/EN del header y
se guarda en `localStorage` (`creditflow-locale`). Al cambiar también se actualizan `<html lang>`,
el `<title>` y la meta descripción, y el formato de moneda (`es-PE`/`PEN` y `en-US`/`USD`).

Para añadir un idioma: agrégalo a `locales` y replica el bloque de textos en `messages` dentro de
`src/i18n.js`. Los componentes leen todo con `t('ruta.a.la.clave')`, así que no hay que tocarlos.

Los textos, montos y monedas son de ejemplo: cámbialos según tu mercado.
