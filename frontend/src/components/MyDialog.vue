<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("hideDialog");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  max-width: 100vw;
  z-index: 20;
  padding: 0px;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  /* min-width: 100px;
  min-height: 100px; */
  padding: 5px;
  z-index: 21;
  width: initial !important;
}
</style>