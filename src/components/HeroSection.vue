<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n.js'
import { appLinks } from '../app-links.js'

const { t, money } = useI18n()

const obligations = computed(() => {
  const clients = t('hero.clients')
  return [
    { supplier: clients[0], amount: money(1250), due: t('hero.due.today'), status: 'pending' },
    { supplier: clients[1], amount: money(4800), due: t('hero.due.days3'), status: 'onTime' },
    { supplier: clients[2], amount: money(620), due: t('hero.due.late5'), status: 'pending' }
  ]
})

</script>

<template>
  <section id="inicio" class="hero">
    <div class="container hero__inner">
      <div class="hero__copy">
        <span class="eyebrow">{{ t('hero.eyebrow') }}</span>
        <h1 class="hero__title">
          {{ t('hero.titleStart') }}<span>{{ t('hero.titleHighlight') }}</span>
        </h1>
        <p class="hero__text">{{ t('hero.text') }}</p>

        <div class="hero__actions">
          <a class="btn btn--primary" :href="appLinks.obligations">{{ t('hero.ctaPrimary') }}</a>
          <a class="btn btn--ghost" :href="appLinks.newPurchase">{{ t('hero.ctaSecondary') }}</a>
        </div>

        <ul class="hero__badges">
          <li v-for="badge in t('hero.badges')" :key="badge">{{ badge }}</li>
        </ul>
      </div>

      <div class="hero__panel">
        <div class="panel">
          <div class="panel__head">
            <div>
              <p class="panel__label">{{ t('hero.portfolio') }}</p>
              <p class="panel__value">{{ money(6670) }}</p>
            </div>
            <span class="panel__tag">{{ t('hero.growth') }}</span>
          </div>

          <p class="panel__label panel__label--section">{{ t('hero.nextPayments') }}</p>
          <ul class="panel__list">
            <li v-for="obligation in obligations" :key="obligation.supplier">
              <div>
                <p class="panel__client">{{ obligation.supplier }}</p>
                <p class="panel__due">{{ t('hero.dueLabel') }} {{ obligation.due }}</p>
              </div>
              <div class="panel__right">
                <p class="panel__amount">{{ obligation.amount }}</p>
                <span class="chip">{{ t(`hero.status.${obligation.status}`) }}</span>
              </div>
            </li>
          </ul>
          <p class="sample-note">{{ t('hero.sampleNote') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sample-note { margin-top: 20px; font-size: .82rem; line-height: 1.5; color: var(--text-soft); }
.hero {
  position: relative;
  overflow: hidden;
  padding: 84px 0 96px;
  background:
    radial-gradient(900px 420px at 15% -10%, rgba(37, 99, 235, 0.16), transparent 65%),
    radial-gradient(700px 380px at 90% 0%, rgba(124, 58, 237, 0.14), transparent 60%);
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

.hero__title {
  font-size: clamp(2.1rem, 4.6vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  font-weight: 800;
}

.hero__title span {
  background: linear-gradient(120deg, var(--brand), #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__text {
  margin-top: 20px;
  font-size: 1.08rem;
  line-height: 1.65;
  color: var(--text-soft);
  max-width: 540px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
}

.hero__badges li {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-soft);
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 7px 14px;
}

.panel {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 26px;
  box-shadow: var(--shadow);
}

.panel__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.panel__label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-soft);
}

.panel__label--section {
  margin: 24px 0 12px;
}

.panel__value {
  margin-top: 6px;
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.panel__tag {
  font-size: 0.78rem;
  font-weight: 700;
  color: #047857;
  background: #d1fae5;
  border-radius: 999px;
  padding: 6px 12px;
  white-space: nowrap;
}

.panel__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 22px;
  padding: 16px;
  background: var(--surface-soft);
  border-radius: 14px;
}

.panel__stat {
  margin-top: 4px;
  font-size: 1.25rem;
  font-weight: 800;
}

.panel__stat--ok {
  color: var(--accent);
}

.panel__stat--warn {
  color: var(--warn);
}

.panel__stat--bad {
  color: var(--danger);
}

.panel__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.panel__list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
}

.panel__client {
  font-weight: 600;
  font-size: 0.95rem;
}

.panel__due {
  font-size: 0.8rem;
  color: var(--text-soft);
  margin-top: 2px;
}

.panel__right {
  text-align: right;
}

.panel__amount {
  font-weight: 700;
  font-size: 0.95rem;
}

.chip {
  display: inline-block;
  margin-top: 4px;
  font-size: 0.72rem;
  font-weight: 700;
  border-radius: 999px;
  padding: 3px 9px;
}

.chip {
  color: #047857;
  background: #d1fae5;
}

@media (max-width: 960px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 480px) {
  .panel { padding: 18px; }
  .panel__list li { flex-direction: column; align-items: flex-start; }
  .panel__right { text-align: left; }
  .hero__actions .btn { width: 100%; }
}
</style>
