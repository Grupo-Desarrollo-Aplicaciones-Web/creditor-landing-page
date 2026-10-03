<script setup>
import { nextTick, reactive, ref } from 'vue'
import { useI18n } from '../i18n.js'
import { validateContact } from '../lib/contact.js'

const { t } = useI18n()
const form = reactive({ name: '', email: '', business: '' })
const errors = ref({})
const status = ref('')
const nameInput = ref(null)
const emailInput = ref(null)
const statusElement = ref(null)
const clearEntries = () => Object.assign(form, { name: '', email: '', business: '' })
const submit = async () => {
  status.value = ''
  errors.value = validateContact(form)
  if (Object.keys(errors.value).length) {
    await nextTick()
    ;(errors.value.name ? nameInput : emailInput).value?.focus()
    return
  }
  // Deliberately no fetch, storage or delivery claim in this local demonstration.
  clearEntries()
  status.value = 'success'
  await nextTick()
  statusElement.value?.focus()
}
const reset = () => {
  clearEntries()
  errors.value = {}
  status.value = 'cleared'
  nameInput.value?.focus()
}
</script>

<template>
  <section id="contact" class="cta" aria-labelledby="contact-title">
    <div class="container cta__inner">
      <div class="cta__copy">
        <h2 id="contact-title" class="cta__title">{{ t('cta.title') }}</h2>
        <p id="contact-description" class="cta__text">{{ t('cta.text') }}</p>
      </div>
      <form class="cta__form" novalidate aria-describedby="contact-description" @submit.prevent="submit">
        <div class="contact-field">
          <label for="contact-name">{{ t('cta.name') }} · {{ t('cta.required') }}</label>
          <input id="contact-name" ref="nameInput" v-model="form.name" type="text" required maxlength="100" autocomplete="off"
            :aria-invalid="Boolean(errors.name)" :aria-describedby="errors.name ? 'contact-name-error' : undefined" />
          <p v-if="errors.name" id="contact-name-error" class="cta__error">{{ t('cta.' + errors.name) }}</p>
        </div>
        <div class="contact-field">
          <label for="contact-email">{{ t('cta.email') }} · {{ t('cta.required') }}</label>
          <input id="contact-email" ref="emailInput" v-model="form.email" type="email" required maxlength="254" autocomplete="off"
            :aria-invalid="Boolean(errors.email)" :aria-describedby="errors.email ? 'contact-email-error' : undefined" />
          <p v-if="errors.email" id="contact-email-error" class="cta__error">{{ t('cta.' + errors.email) }}</p>
        </div>
        <div class="contact-field">
          <label for="contact-business">{{ t('cta.company') }}</label>
          <input id="contact-business" v-model="form.business" type="text" maxlength="100" autocomplete="off" />
        </div>
        <p v-if="Object.keys(errors).length" class="cta__error" role="alert">{{ t('cta.errorSummary') }}</p>
        <div class="contact-actions">
          <button class="btn btn--light" type="submit">{{ t('cta.submit') }}</button>
          <button class="btn btn--outline-light" type="button" @click="reset">{{ t('cta.reset') }}</button>
        </div>
        <p class="cta__legal">{{ t('cta.legal') }} <a href="#/privacy">{{ t('cta.privacy') }}</a></p>
        <div ref="statusElement" class="contact-status" tabindex="-1" role="status" aria-live="polite" aria-atomic="true">
          <template v-if="status === 'success'">
            <strong>{{ t('cta.successTitle') }}</strong>
            <p>{{ t('cta.successText') }}</p>
          </template>
          <p v-else-if="status === 'cleared'">{{ t('cta.cleared') }}</p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.cta { color: white; background: linear-gradient(120deg, #1e3a8a, #1d4ed8); padding: 72px 0; }
.cta__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
.cta__title { font-size: clamp(1.8rem, 3vw, 2.5rem); line-height: 1.2; }
.cta__text { margin-top: 18px; font-size: 1.05rem; line-height: 1.65; }
.cta__form { display: grid; gap: 16px; }
.contact-field { display: grid; gap: 8px; }
.contact-field label { font-weight: 600; line-height: 1.5; }
.contact-field input { padding: 13px 14px; border: 2px solid transparent; border-radius: 8px; font: inherit; color: var(--text); width: 100%; }
.contact-field input[aria-invalid="true"] { border-color: #fbbf24; }
.cta__error { color: #fff2c6; line-height: 1.5; font-weight: 600; }
.contact-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.cta__legal, .contact-status { line-height: 1.6; font-size: .9rem; }
.cta__legal a { text-decoration: underline; font-weight: 700; }
.contact-status:empty { display: none; }
.contact-status { padding: 14px; border: 1px solid #93c5fd; border-radius: 8px; }
.contact-status p { margin-top: 4px; }
@media (max-width: 720px) { .cta__inner { grid-template-columns: 1fr; gap: 32px; } }
</style>
