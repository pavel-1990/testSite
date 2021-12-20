<template>
  <footer class="site-footer">
    <div>
      <img src="/img/logo.svg" alt="" />
      <div class="adress">
        <img src="icon/marker.svg" alt="" /> {{ contaktInfo.adress }}
      </div>
      <div class="phone">
        <a v-bind:href="'tel:' + contaktInfo.phone">
          <img src="icon/phone.svg" alt="" />{{ contaktInfo.phone }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-site",
  props: {
    contaktInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>