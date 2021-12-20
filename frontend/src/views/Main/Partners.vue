<template>
  <main-block
    :header="blockParams.header"
    :className="blockParams.className"
    :idBlock="blockParams.idBlock"
  >
    <div>
      <img src="/img/partner/severstal.png" alt="" />
      <img src="/img/partner/zgt.png" alt="" />
      <img src="/img/partner/gf.png" alt="" />
    </div>
  </main-block>
</template>

<script>
export default {
  name: "partners",
  props: {
    blockParams: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>