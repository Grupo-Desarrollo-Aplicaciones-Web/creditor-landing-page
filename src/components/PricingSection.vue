<script setup>
import { computed, ref } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const anual = ref(false)

const pricing = [
  { monthly: 39, highlight: false },
  { monthly: 89, highlight: true },
  { monthly: null, highlight: false }
]

const plans = computed(() => t('pricing.plans').map((plan, index) => ({ ...plan, ...pricing[index] })))

const priceOf = (plan) =>
  plan.monthly === null ? null : anual.value ? Math.round(plan.monthly * 0.8) : plan.monthly

const periodLabel = computed(() => (anual.value ? t('pricing.perMonthYearly') : t('pricing.perMonth')))
</script>

<template>
  <section id="planes" class="section section--soft">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">{{ t('pricing.eyebrow') }}</span>
        <h2 class="section__title">{{ t('pricing.title') }}</h2>
        <p class="section__subtitle">{{ t('pricing.subtitle') }}</p>

        <div class="toggle">
          <button type="button" :class="{ 'is-active': !anual }" @click="anual = false">
            {{ t('pricing.monthly') }}
          </button>
          <button type="button" :class="{ 'is-active': anual }" @click="anual = true">
            {{ t('pricing.yearly') }} <span class="toggle__save">{{ t('pricing.save') }}</span>
          </button>
        </div>
      </div>

      <div class="grid plans">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="card plan"
          :class="{ 'plan--highlight': plan.highlight }"
        >
          <span v-if="plan.highlight" class="plan__tag">{{ t('pricing.popular') }}</span>
          <h3 class="plan__name">{{ plan.name }}</h3>
          <p class="plan__desc">{{ plan.description }}</p>

          <p class="plan__price">
            <template v-if="priceOf(plan) !== null">
              <span class="plan__amount">${{ priceOf(plan) }}</span>
              <span class="plan__period">{{ periodLabel }}</span>
            </template>
            <span v-else class="plan__amount">{{ t('pricing.custom') }}</span>
          </p>

          <ul class="plan__features">
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>

          <a class="btn" :class="plan.highlight ? 'btn--primary' : 'btn--ghost'" href="#demo">
            {{ plan.cta }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.toggle {
  display: inline-flex;
  gap: 4px;
  margin-top: 24px;
  padding: 4px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 999px;
}

.toggle button {
  border: none;
  background: transparent;
  border-radius: 999px;
  padding: 9px 18px;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-soft);
  cursor: pointer;
}

.toggle button.is-active {
  background: var(--brand);
  color: #fff;
}

.toggle__save {
  font-size: 0.75rem;
  opacity: 0.9;
}

.plans {
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
}

.plan {
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
}

.plan--highlight {
  border-color: var(--brand);
  box-shadow: var(--shadow);
}

.plan__tag {
  position: absolute;
  top: -12px;
  right: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  background: var(--brand);
  border-radius: 999px;
  padding: 5px 12px;
}

.plan__name {
  font-size: 1.15rem;
  font-weight: 700;
}

.plan__desc {
  margin-top: 6px;
  color: var(--text-soft);
  font-size: 0.92rem;
  line-height: 1.55;
  min-height: 46px;
}

.plan__price {
  margin: 18px 0;
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
}

.plan__amount {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.plan__period {
  font-size: 0.85rem;
  color: var(--text-soft);
}

.plan__features {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: grid;
  gap: 10px;
  flex: 1;
}

.plan__features li {
  position: relative;
  padding-left: 24px;
  font-size: 0.93rem;
  color: var(--text-soft);
}

.plan__features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--brand);
  font-weight: 800;
}

@media (max-width: 900px) {
  .plans {
    grid-template-columns: 1fr;
  }

  .plan__desc {
    min-height: 0;
  }
}
</style>
