<script setup>
import { useI18n } from './i18n.js'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import LoanSimulator from './components/LoanSimulator.vue'
import ScopeSection from './components/ScopeSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import TheFooter from './components/TheFooter.vue'
import LegalPage from './components/LegalPage.vue'
const { t } = useI18n()
const pageFromHash = () => {
  const hash = window.location.hash
  return hash === '#/terms' ? 'terms' : hash === '#/privacy' ? 'privacy' : 'home'
}
const page = ref(pageFromHash())
const onHashChange = async () => {
  page.value = pageFromHash()
  await nextTick()
  const target = page.value === 'home'
    ? document.getElementById(window.location.hash.slice(1) || 'inicio')
    : document.querySelector('.legal-page h1')
  if (target) {
    target.scrollIntoView({ block: 'start' })
    const focusTarget = target.matches('section') ? target.querySelector('h1, h2') : target
    focusTarget?.setAttribute('tabindex', '-1')
    focusTarget?.focus({ preventScroll: true })
  }
}
onMounted(() => window.addEventListener('hashchange', onHashChange))
onUnmounted(() => window.removeEventListener('hashchange', onHashChange))
</script>

<template>
  <a class="skip-link" href="#main-content">{{ t('nav.skip') }}</a>
  <TheHeader />
  <main id="main-content" tabindex="-1">
    <LegalPage v-if="page !== 'home'" :page="page" />
    <template v-else>
    <HeroSection />
    <FeaturesSection />
    <HowItWorks />
    <LoanSimulator />
    <ScopeSection />
    <FaqSection />
    <CtaSection />
    </template>
  </main>
  <TheFooter />
</template>
