<template>
  <main class="landing-shell">
    <div class="container">
      <p class="eyebrow">CreditFlow</p>
      <h1 class="landing-shell__title">Gestión de préstamos, créditos y deudas pendientes</h1>
      <p class="landing-shell__text">La landing page está en construcción.</p>
    </div>
  </main>
</template>

<style scoped>
.landing-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 48px 0;
}

.landing-shell__title {
  max-width: 700px;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
}

.landing-shell__text {
  margin-top: 18px;
  color: var(--text-soft);
}
</style>
