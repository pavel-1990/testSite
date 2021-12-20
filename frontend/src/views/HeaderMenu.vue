<template>
  <ul>
    <li v-for="(link, i) in menuList" :key="i">
      <a v-bind:href="link.url" @click.prevent="scrolTo(link.url)">{{
        link.name
      }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "header-menu",
  props: {
    menuList: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    scrolTo(id) {
    console.log(id);
      document
        .querySelector(id).scrollIntoView({block: "center", behavior: "smooth"});
        this.$emit('menuHideS');
    },
  },
};
</script>

<style>
</style>