<template>
  <main-block
    :header="blockParams.header"
    :className="blockParams.className"
    :idBlock="blockParams.idBlock"
  >
    <div class="feedBack_list">
      <div class="feedback_block" v-for="(item, i) in feedBack" :key="i">
        <img :src="`/img/feedBack/feedBack_${item.id}.png`" alt="" />
        <h3>{{ item.author }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </main-block>
</template>

<script>
export default {
  name: "feedback",
  props: {
    feedBack: {
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


