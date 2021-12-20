<template>
  <div class="app">
    <div class="site">
      <call-back-form v-model:dialogVisible="callBackFormVisible" />
      <my-header
        :contaktInfo="contaktInfo"
        @cityChange="cityChange"
        @callBackVisible="callBackFormVisible = true"
      />
      <banner @callBackVisible="callBackFormVisible = true" />
      <main-site
        :products="products"
        :feedBack="feedBack"
        :geo="{
          current: contaktInfo.currentCity.position,
          cityList: contaktInfo.cityList,
        }"
        :callBackFormVisible="callBackFormVisible"
      />
      <footer-site :contaktInfo="contaktInfo.currentCity" />
    </div>
  </div>
</template>


<script>
import { fetchGet } from "@/myScript.js";

export default {
  data() {
    return {
      contaktInfo: {
        cityList: [],
        currentCity: {
          id: "",
          name: "",
          phone: "",
          adress: "",
        },
      },
      products: [],
      feedBack: [],
      callBackFormVisible: false,
    };
  },
  methods: {
    async fetchContakt() {
      const data = await fetchGet("city");
      this.contaktInfo.cityList = data.city;
      const currentCity = localStorage.getItem("cityNum") || 0;
      this.contaktInfo.currentCity = data.city[currentCity];
    },
    async fetchFeedBack() {
      const data = await fetchGet("feedback");
      this.feedBack = data.feedback;
    },
    async fetchProducts() {
      const data = await fetchGet("product");
      this.products = data.product;
    },
    cityChange(i) {
      localStorage.setItem("cityNum", i);
      this.contaktInfo.currentCity = this.contaktInfo.cityList[i];
    },
  },
  mounted() {
    this.fetchContakt();
    this.fetchProducts();
    this.fetchFeedBack();
  },
};
</script>
<style>
</style>
