<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const icons = ['📄', '💳', '⏰', '🔔', '🧾', '📊']

const features = computed(() => t('features.items').map((item, index) => ({ ...item, icon: icons[index] })))
</script>

<template>
  <section id="caracteristicas" class="section">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">{{ t('features.eyebrow') }}</span>
        <h2 class="section__title">{{ t('features.title') }}</h2>
        <p class="section__subtitle">{{ t('features.subtitle') }}</p>
      </div>

      <div class="grid features">
        <article v-for="feature in features" :key="feature.title" class="card feature">
          <span class="feature__icon">{{ feature.icon }}</span>
          <h3 class="feature__title">{{ feature.title }}</h3>
          <p class="feature__text">{{ feature.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  grid-template-columns: repeat(3, 1fr);
}

.feature {
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.feature:hover {
  transform: translateY(-4px);
  border-color: #c9d7f5;
  box-shadow: var(--shadow);
}

.feature__icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--brand-soft);
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.feature__title {
  font-size: 1.08rem;
  font-weight: 700;
}

.feature__text {
  margin-top: 8px;
  color: var(--text-soft);
  line-height: 1.6;
  font-size: 0.96rem;
}

@media (max-width: 960px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
