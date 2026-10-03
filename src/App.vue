<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import LoanSimulator from './components/LoanSimulator.vue'
import ScopeSection from './components/ScopeSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main>
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
