<script setup>
import { computed, ref } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const faqs = computed(() => t('faq.items'))

const open = ref(0)
const toggle = (index) => {
  open.value = open.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" class="section">
    <div class="container faq">
      <div class="section__head">
        <span class="eyebrow">{{ t('faq.eyebrow') }}</span>
        <h2 class="section__title">{{ t('faq.title') }}</h2>
      </div>

      <div class="faq__list">
        <div v-for="(faq, index) in faqs" :key="faq.q" class="faq__item">
          <button
            class="faq__q"
            type="button"
            :aria-expanded="open === index"
            @click="toggle(index)"
          >
            <span>{{ faq.q }}</span>
            <span class="faq__icon" :class="{ 'is-open': open === index }">+</span>
          </button>
          <p v-show="open === index" class="faq__a">{{ faq.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  max-width: 820px;
}

.faq__list {
  display: grid;
  gap: 12px;
}

.faq__item {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 4px 20px;
  background: #fff;
}

.faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: none;
  border: none;
  padding: 18px 0;
  font: inherit;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.faq__icon {
  font-size: 1.3rem;
  color: var(--brand);
  transition: transform 0.2s ease;
}

.faq__icon.is-open {
  transform: rotate(45deg);
}

.faq__a {
  padding: 0 0 18px;
  color: var(--text-soft);
  line-height: 1.65;
  font-size: 0.96rem;
}
</style>
