<template>
  <div class="site-banner">
    <div class="banner-content">
      <div>
        <h2>КРАБ - СИСТЕМА</h2>
        <p>Для быстровозводимых<br />каркасных конструкций</p>

        <button
          class="button_green"
          @click.prevent="this.$emit('callBackVisible', true)"
        >
          Получить консультацию
        </button>
      </div>
    </div>
    <img src="/img/banner@2x.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style>
</style>