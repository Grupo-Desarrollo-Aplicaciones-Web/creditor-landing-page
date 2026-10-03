<script setup>
import { useI18n } from '../i18n.js'
import { appLinks } from '../app-links.js'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <a class="brand" href="#inicio"><span aria-hidden="true">C</span> CREDITOR</a>
        <p>{{ t('footer.text') }}</p>
      </div>
      <nav :aria-label="t('footer.product')">
        <h2>{{ t('footer.product') }}</h2>
        <a href="#caracteristicas">{{ t('footer.features') }}</a>
        <a href="#scope">{{ t('footer.scope') }}</a>
        <a href="#simulador">{{ t('footer.simulator') }}</a>
      </nav>
      <nav :aria-label="t('footer.legal')">
        <h2>{{ t('footer.legal') }}</h2>
        <a href="#/terms">{{ t('footer.terms') }}</a>
        <a href="#/privacy">{{ t('footer.privacy') }}</a>
      </nav>
      <nav :aria-label="t('footer.application')">
        <h2>{{ t('footer.application') }}</h2>
        <a :href="appLinks.obligations">{{ t('footer.obligations') }}</a>
        <a :href="appLinks.newPurchase">{{ t('footer.purchase') }}</a>
      </nav>
    </div>
    <div class="container footer__bottom">
      <p>{{ t('footer.rights', { year }) }}</p>
      <p>{{ t('footer.note') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: var(--bg); color: var(--text-invert); padding: 56px 0 28px; }
.footer__grid { display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: 32px; }
.brand { font-weight: 800; font-size: 1.25rem; }
.footer p { margin-top: 16px; max-width: 420px; line-height: 1.6; color: #cbd5e1; }
.footer nav h2 { font-size: .95rem; margin-bottom: 14px; }
.footer nav a { display: block; margin-top: 12px; width: fit-content; }
.footer a:hover { text-decoration: underline; }
.footer__bottom { margin-top: 32px; padding-top: 20px; border-top: 1px solid #334155; display: flex; gap: 32px; justify-content: space-between; }
.footer__bottom p { margin: 0; font-size: .85rem; }
@media (max-width: 720px) { .footer__grid { grid-template-columns: 1fr; } .footer__bottom { flex-direction: column; gap: 14px; } }
</style>
