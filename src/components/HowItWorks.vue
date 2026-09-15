<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const steps = computed(() =>
  t('how.steps').map((step, index) => ({ ...step, n: String(index + 1).padStart(2, '0') }))
)
</script>

<template>
  <section id="como-funciona" class="section section--soft">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">{{ t('how.eyebrow') }}</span>
        <h2 class="section__title">{{ t('how.title') }}</h2>
        <p class="section__subtitle">{{ t('how.subtitle') }}</p>
      </div>

      <ol class="steps">
        <li v-for="step in steps" :key="step.n" class="step">
          <span class="step__n">{{ step.n }}</span>
          <h3 class="step__title">{{ step.title }}</h3>
          <p class="step__text">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  counter-reset: step;
}

.step {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  position: relative;
}

.step__n {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--brand);
  background: var(--brand-soft);
  border-radius: 8px;
  padding: 5px 10px;
  margin-bottom: 14px;
}

.step__title {
  font-size: 1.05rem;
  font-weight: 700;
}

.step__text {
  margin-top: 8px;
  color: var(--text-soft);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 960px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
