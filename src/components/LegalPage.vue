<script setup>
import { useI18n } from '../i18n.js'
defineProps({ page: { type: String, required: true } })
const { t } = useI18n()
</script>

<template>
  <article class="legal-page container">
    <a class="legal-back" href="#inicio">{{ t('legal.back') }}</a>
    <h1 tabindex="-1">{{ t('legal.' + page + '.title') }}</h1>
    <p class="legal-date">{{ t('legal.updated') }}</p>
    <section v-for="section in t('legal.' + page + '.sections')" :key="section.title">
      <h2>{{ section.title }}</h2>
      <p>{{ section.text }}</p>
    </section>
    <p><a :href="page === 'terms' ? '#/privacy' : '#/terms'">{{ t(page === 'terms' ? 'footer.privacy' : 'footer.terms') }}</a></p>
  </article>
</template>

<style scoped>
.legal-page { max-width: 800px; padding-top: 48px; padding-bottom: 72px; }
.legal-back, .legal-page a { color: var(--brand-dark); text-decoration: underline; }
.legal-page h1 { margin: 28px 0 12px; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; }
.legal-date { color: var(--text-soft); }
.legal-page section { margin: 32px 0; }
.legal-page h2 { font-size: 1.3rem; margin-bottom: 12px; }
.legal-page p { line-height: 1.7; }
</style>
