<template>
  <main-block
    :header="blockParams.header"
    :className="blockParams.className"
    :idBlock="blockParams.idBlock"
  >
    <my-ya-maps v-if="geo.current" :geo="geo" :key="geo.current" />
  </main-block>
</template>

<script >
export default {
  name: "maps",

  props: {
    blockParams: {
      type: Object,
      default: () => {},
    },
    geo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>