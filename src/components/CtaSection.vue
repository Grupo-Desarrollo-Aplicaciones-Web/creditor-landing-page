<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const form = reactive({ nombre: '', email: '', empresa: '' })
const enviado = ref(false)
const error = ref('')

const submit = () => {
  error.value = ''
  if (!form.nombre.trim() || !form.email.trim()) {
    error.value = t('cta.errorRequired')
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    error.value = t('cta.errorEmail')
    return
  }
  // TODO: conectar con el endpoint del backend (ASP.NET), p. ej. POST /api/demo-requests
  enviado.value = true
}
</script>

<template>
  <section id="demo" class="cta">
    <div class="container cta__inner">
      <div class="cta__copy">
        <h2 class="cta__title">{{ t('cta.title') }}</h2>
        <p class="cta__text">{{ t('cta.text') }}</p>
      </div>

      <form v-if="!enviado" class="cta__form" novalidate @submit.prevent="submit">
        <input v-model="form.nombre" type="text" :placeholder="t('cta.name')" />
        <input v-model="form.email" type="email" :placeholder="t('cta.email')" />
        <input v-model="form.empresa" type="text" :placeholder="t('cta.company')" />
        <button class="btn btn--light" type="submit">{{ t('cta.submit') }}</button>
        <p v-if="error" class="cta__error">{{ error }}</p>
        <p class="cta__legal">{{ t('cta.legal') }}</p>
      </form>

      <div v-else class="cta__success">
        <p class="cta__success-title">{{ t('cta.successTitle', { name: form.nombre.split(' ')[0] }) }}</p>
        <p>{{ t('cta.successText', { email: form.email }) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: 80px 0;
  background: linear-gradient(120deg, var(--brand-dark), #6d28d9);
  color: #fff;
}

.cta__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.cta__title {
  font-size: clamp(1.8rem, 3.4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.cta__text {
  margin-top: 14px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.65;
  max-width: 460px;
}

.cta__form {
  display: grid;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: var(--radius);
  padding: 26px;
}

.cta__form input {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.96);
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  font: inherit;
  font-size: 0.95rem;
  color: var(--text);
}

.cta__form input:focus {
  outline: 2px solid #fff;
  outline-offset: 1px;
}

.cta__error {
  font-size: 0.85rem;
  color: #fecaca;
  font-weight: 600;
}

.cta__legal {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.7);
}

.cta__success {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--radius);
  padding: 32px;
  line-height: 1.6;
}

.cta__success-title {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 6px;
}

@media (max-width: 900px) {
  .cta__inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
