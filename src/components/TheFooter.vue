<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const year = new Date().getFullYear()
const columns = computed(() => t('footer.columns'))
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <a class="brand" href="#inicio">
          <span class="brand__mark">CF</span>
          <span>CreditFlow</span>
        </a>
        <p class="footer__text">{{ t('footer.text') }}</p>
      </div>

      <div v-for="column in columns" :key="column.title" class="footer__col">
        <p class="footer__title">{{ column.title }}</p>
        <ul>
          <li v-for="link in column.links" :key="link"><a href="#">{{ link }}</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer__bottom">
      <p>{{ t('footer.rights', { year }) }}</p>
      <div class="footer__legal">
        <a href="#">{{ t('footer.terms') }}</a>
        <a href="#">{{ t('footer.privacy') }}</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg);
  color: rgba(238, 242, 255, 0.72);
  padding: 64px 0 28px;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 32px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-weight: 800;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--brand), #7c3aed);
  font-size: 0.8rem;
}

.footer__text {
  margin-top: 14px;
  max-width: 320px;
  line-height: 1.6;
  font-size: 0.92rem;
}

.footer__title {
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.footer__col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 9px;
  font-size: 0.92rem;
}

.footer__col a:hover {
  color: #fff;
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 44px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.85rem;
}

.footer__legal {
  display: flex;
  gap: 18px;
}

@media (max-width: 860px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 520px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
