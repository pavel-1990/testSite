<template>
  <div>
    <a href="#" @click="cityListToggle">Все города</a>

    <div v-if="!cityListHide" class="sity-list">
      <ul>
        <li v-for="(city, i) in cityList" :key="i" @click="cityChange(i)">
          <a href="#">{{ city.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "city-list",
  data() {
    return {
      cityListHide: true,
    };
  },
  props: {
    cityList: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    cityChange(i) {
      this.$emit("cityChange", i);
      this.cityListHide = true;
    },
    cityListToggle() {
      this.cityListHide = !this.cityListHide;
    },
  },
};
</script>

<style>
</style>