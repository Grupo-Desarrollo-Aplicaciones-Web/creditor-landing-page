<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { locales, useI18n } from '../i18n.js'

const { t, locale, setLocale } = useI18n()

const links = computed(() => [
  { href: '#caracteristicas', label: t('nav.features') },
  { href: '#como-funciona', label: t('nav.how') },
  { href: '#planes', label: t('nav.pricing') },
  { href: '#faq', label: t('nav.faq') }
])

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container header__inner">
      <a class="brand" href="#inicio">
        <span class="brand__mark">CF</span>
        <span class="brand__name">CreditFlow</span>
      </a>

      <nav class="nav" :class="{ 'nav--open': menuOpen }">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="nav__link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
        <div class="nav__actions">
          <div class="lang" role="group" :aria-label="t('nav.language')">
            <button
              v-for="item in locales"
              :key="item.code"
              type="button"
              class="lang__btn"
              :class="{ 'is-active': locale === item.code }"
              :aria-pressed="locale === item.code"
              :title="item.name"
              @click="setLocale(item.code)"
            >
              {{ item.label }}
            </button>
          </div>
          <a class="btn btn--ghost" href="#login">{{ t('nav.login') }}</a>
          <a class="btn btn--primary" href="#demo">{{ t('nav.trial') }}</a>
        </div>
      </nav>

      <button
        class="burger"
        type="button"
        :aria-expanded="menuOpen"
        :aria-label="t('nav.openMenu')"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.header--scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 8px 24px -20px rgba(16, 24, 40, 0.6);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--brand), #7c3aed);
  color: #fff;
  font-size: 0.85rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav__link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-soft);
}

.nav__link:hover {
  color: var(--text);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lang {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.lang__btn {
  border: none;
  background: transparent;
  border-radius: 999px;
  padding: 6px 12px;
  font: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--text-soft);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.lang__btn:hover {
  color: var(--text);
}

.lang__btn.is-active {
  background: #fff;
  color: var(--brand);
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.12);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}

.burger span {
  width: 18px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

@media (max-width: 900px) {
  .burger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
    padding: 18px 24px 24px;
    background: #fff;
    border-bottom: 1px solid var(--border);
    display: none;
  }

  .nav--open {
    display: flex;
  }

  .nav__link {
    padding: 10px 0;
  }

  .nav__actions {
    flex-direction: column;
    align-items: stretch;
    margin-top: 8px;
  }

  .lang {
    justify-content: center;
  }
}
</style>
