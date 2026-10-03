<script setup>
import { useI18n } from './i18n.js'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import LoanSimulator from './components/LoanSimulator.vue'
import ScopeSection from './components/ScopeSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import TheFooter from './components/TheFooter.vue'
const { t } = useI18n()
</script>

<template>
  <a class="skip-link" href="#main-content">{{ t('nav.skip') }}</a>
  <TheHeader />
  <main id="main-content" tabindex="-1">
    <HeroSection />
    <FeaturesSection />
    <HowItWorks />
    <LoanSimulator />
    <ScopeSection />
    <FaqSection />
    <CtaSection />
  </main>
  <TheFooter />
</template>
