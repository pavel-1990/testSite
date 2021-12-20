<template>
  <div :class="className" :id="idBlock">
    <h2>{{ header }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "main-block",
  props: {
    header: {
      type: String,
      default: () => "",
    },
    className: {
      type: String,
      default: () => "",
    },
    idBlock: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style>
</style>