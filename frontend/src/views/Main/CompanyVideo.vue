<template>
  <main-block
    :header="blockParams.header"
    :className="blockParams.className"
    :idBlock="blockParams.idBlock"
  >
    <div>
      <video src="/videos/video.mp4" muted controls="controls"></video>
    </div>
  </main-block>
</template>

<script>
export default {
  name: "company-video",
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