<script setup>
import { computed, ref } from 'vue'
import { useI18n } from '../i18n.js'
import { estimateLoan } from '../lib/loan.js'

const { t, money } = useI18n()

const principal = ref(10000)
const annualRate = ref(24)
const months = ref(12)

const estimate = computed(() => estimateLoan(principal.value, annualRate.value, months.value))
</script>

<template>
  <section id="simulador" class="section">
    <div class="container simulator">
      <div class="simulator__copy">
        <span class="eyebrow">{{ t('simulator.eyebrow') }}</span>
        <h2 class="section__title">{{ t('simulator.title') }}</h2>
        <p class="section__subtitle">{{ t('simulator.subtitle') }}</p>
        <ul class="simulator__notes">
          <li v-for="note in t('simulator.notes')" :key="note">{{ note }}</li>
        </ul>
      </div>

      <div class="card simulator__card">
        <label class="field">
          <span class="field__label">{{ t('simulator.amount') }}</span>
          <span class="field__value">{{ money(principal) }}</span>
          <input v-model.number="principal" type="range" min="500" max="100000" step="500" :aria-valuetext="money(principal)" />
        </label>

        <label class="field">
          <span class="field__label">{{ t('simulator.rate') }}</span>
          <span class="field__value">{{ annualRate }}%</span>
          <input v-model.number="annualRate" type="range" min="0" max="80" step="0.5" :aria-valuetext="annualRate + '%'" />
        </label>

        <label class="field">
          <span class="field__label">{{ t('simulator.term') }}</span>
          <span class="field__value">{{ months }} {{ t('simulator.months') }}</span>
          <input v-model.number="months" type="range" min="3" max="60" step="1" :aria-valuetext="months + ' ' + t('simulator.months')" />
        </label>

        <div class="result" aria-live="polite" aria-atomic="true">
          <div class="result__main">
            <p class="result__label">{{ t('simulator.installment') }}</p>
            <p class="result__amount">{{ money(estimate.installment) }}</p>
          </div>
          <div class="result__grid">
            <div>
              <p class="result__label">{{ t('simulator.total') }}</p>
              <p class="result__sub">{{ money(estimate.total) }}</p>
            </div>
            <div>
              <p class="result__label">{{ t('simulator.interest') }}</p>
              <p class="result__sub">{{ money(estimate.interest) }}</p>
            </div>
          </div>
        </div>

        <p class="disclaimer">{{ t('simulator.disclaimer') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.simulator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.simulator__copy .section__subtitle {
  max-width: none;
}

.simulator__notes {
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.simulator__notes li {
  position: relative;
  padding-left: 26px;
  color: var(--text-soft);
  font-size: 0.96rem;
}

.simulator__notes li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #d1fae5;
  color: #047857;
  font-size: 0.7rem;
  font-weight: 800;
}

.simulator__card {
  box-shadow: var(--shadow);
}

.field {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 6px 12px;
  margin-bottom: 20px;
}

.field__label {
  font-size: 0.9rem;
  color: var(--text-soft);
  font-weight: 500;
}

.field__value {
  font-weight: 700;
  font-size: 0.95rem;
}

.field input[type='range'] {
  grid-column: 1 / -1;
  width: 100%;
  accent-color: var(--brand);
  cursor: pointer;
}

.result {
  background: var(--surface-soft);
  border-radius: 14px;
  padding: 18px;
  margin-top: 4px;
}

.result__label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-soft);
}

.result__amount {
  margin-top: 4px;
  font-size: clamp(1.35rem, 5.5vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--brand-dark);
}

.result__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.result__sub {
  margin-top: 4px;
  font-weight: 700;
}

.disclaimer {
  margin-top: 14px;
  font-size: 0.8rem;
  color: var(--text-soft);
}

@media (max-width: 900px) {
  .simulator {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .simulator__card { padding: 18px; }
  .result__grid { grid-template-columns: 1fr; }
  .field { grid-template-columns: 1fr; }
}
</style>
