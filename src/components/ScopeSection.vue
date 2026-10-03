<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>

<template>
  <section id="scope" class="section section--soft" aria-labelledby="scope-title">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">{{ t('scope.eyebrow') }}</span>
        <h2 id="scope-title" class="section__title">{{ t('scope.title') }}</h2>
        <p class="section__subtitle">{{ t('scope.subtitle') }}</p>
      </div>
      <div class="scope grid">
        <article class="card">
          <h3>{{ t('scope.owner') }}</h3>
          <p>{{ t('scope.ownerText') }}</p>
          <a class="btn btn--primary" href="#inicio">{{ t('scope.ownerCta') }}</a>
        </article>
        <article class="card">
          <h3>{{ t('scope.admin') }}</h3>
          <p>{{ t('scope.adminText') }}</p>
          <a class="btn btn--ghost" href="#inicio">{{ t('scope.adminCta') }}</a>
        </article>
      </div>
      <p class="scope__note">{{ t('scope.note') }}</p>
    </div>
  </section>
</template>

<style scoped>
.scope { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.scope h3 { font-size: 1.3rem; }
.scope p { margin: 16px 0 24px; line-height: 1.6; color: var(--text-soft); }
.scope__note { margin-top: 24px; line-height: 1.6; color: var(--text-soft); text-align: center; }
@media (max-width: 720px) { .scope { grid-template-columns: 1fr; } }
</style>
