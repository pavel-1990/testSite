<template>
  <header class="site-header">
    <div>
      <img src="/img/logo.svg" alt="" />
      <nav class="site-nav" :class="{ hideMobile: menuHide }">
        <header-menu :menuList="menuList" @menuHideS="menuChange"/>
        <div class="contakt-block">
          <div>
            <img src="icon/marker.svg" alt="" />
            {{ contaktInfo.currentCity.name }}
          </div>

          <city-list
            :cityList="contaktInfo.cityList"
            @cityChange="(i) => $emit('cityChange', i)"
          />
        </div>
        <div class="contakt-block">
          <div class="phone">
            <a v-bind:href="'tel:' + contaktInfo.currentCity.phone"
              ><img src="icon/phone.svg" alt="" />{{
                contaktInfo.currentCity.phone
              }}</a
            >
          </div>
          <div>
            <a href="" @click.prevent="this.$emit('callBackVisible', true)"
              >Заказать звонок</a
            >
          </div>
        </div>
      </nav>

      <div class="hamburger-menu">
        <input id="menuToggle" type="checkbox" @input="menuChange" />
        <label class="menuToggleV" for="menuToggle">
          <span></span>
        </label>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      menuHide: true,
      menuList: [
        { url: "#products", name: "Каталог" },
        { url: "#order", name: "Рассчет стоимости" },
        { url: "#partners", name: "Партнеры" },
        { url: "#feedback", name: "Отзывы" },
      ],
    };
  },
  props: {
    contaktInfo: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    menuChange(e) {
      this.menuHide = !this.menuHide;
    },
  },
};
</script>

<style>
</style>