<script>
export default {
  name: "Promo",
};
</script>

<template>
  <section class="container-promo">
    <section class="promo pizza">
      <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
      <p class="promo-text">
        Блюда из любимого ресторана привезет курьер в перчатках, маске и с
        антисептиком
      </p>
    </section>
  </section>
</template>

<style scoped>
.promo {
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
  padding: 68px 70px;
  margin-bottom: 56px;
}

.pizza {
  background: #fff1b8 url(~@/img/promo/pizza.png) no-repeat top -100px right -250px /
    830px;
}

.promo-title {
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  color: #302c34;
}

.promo-text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #302c34;
  max-width: 538px;
}
</style>
