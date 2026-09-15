<script setup>
import { computed, ref } from 'vue'
import { useI18n } from '../i18n.js'

const { t, money } = useI18n()

const monto = ref(10000)
const tasaAnual = ref(24)
const meses = ref(12)

const tasaMensual = computed(() => tasaAnual.value / 100 / 12)

const cuota = computed(() => {
  const i = tasaMensual.value
  const n = meses.value
  if (i === 0) return monto.value / n
  return (monto.value * i) / (1 - Math.pow(1 + i, -n))
})

const totalPagar = computed(() => cuota.value * meses.value)
const totalInteres = computed(() => totalPagar.value - monto.value)
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
          <span class="field__value">{{ money(monto) }}</span>
          <input v-model.number="monto" type="range" min="500" max="100000" step="500" />
        </label>

        <label class="field">
          <span class="field__label">{{ t('simulator.rate') }}</span>
          <span class="field__value">{{ tasaAnual }}%</span>
          <input v-model.number="tasaAnual" type="range" min="0" max="80" step="0.5" />
        </label>

        <label class="field">
          <span class="field__label">{{ t('simulator.term') }}</span>
          <span class="field__value">{{ meses }} {{ t('simulator.months') }}</span>
          <input v-model.number="meses" type="range" min="3" max="60" step="1" />
        </label>

        <div class="result">
          <div class="result__main">
            <p class="result__label">{{ t('simulator.installment') }}</p>
            <p class="result__amount">{{ money(cuota) }}</p>
          </div>
          <div class="result__grid">
            <div>
              <p class="result__label">{{ t('simulator.total') }}</p>
              <p class="result__sub">{{ money(totalPagar) }}</p>
            </div>
            <div>
              <p class="result__label">{{ t('simulator.interest') }}</p>
              <p class="result__sub">{{ money(totalInteres) }}</p>
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
  font-size: 2rem;
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
</style>
