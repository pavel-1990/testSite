<template>
  <main-block
    :header="blockParams.header"
    :className="blockParams.className"
    :idBlock="blockParams.idBlock"
  >
    <div>
      <div class="adv_block" v-for="(item, i) in adv" :key="i">
        <img v-bind:src="'/img/advantage/' + item.img" alt="" />
        <h3>{{ item.header }}</h3>
        <p v-html="item.descript"></p>
      </div>
    </div>
  </main-block>
</template>

<script>
export default {
  name: "advantage",
  props: {
    adv: {
      type: Array,
      default: () => [],
    },
    blockParams: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>