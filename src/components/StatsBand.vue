<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const stats = computed(() => t('stats'))
</script>

<template>
  <section class="band">
    <div class="container band__grid">
      <div v-for="stat in stats" :key="stat.label" class="band__item">
        <p class="band__value">{{ stat.value }}</p>
        <p class="band__label">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band {
  padding: 44px 0;
  background: linear-gradient(120deg, var(--bg), var(--bg-soft));
  color: var(--text-invert);
}

.band__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
}

.band__value {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.band__label {
  margin-top: 6px;
  font-size: 0.9rem;
  color: rgba(238, 242, 255, 0.72);
}

@media (max-width: 720px) {
  .band__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
