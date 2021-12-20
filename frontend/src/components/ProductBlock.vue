<template>
  <div class="product-block">
    <img
      :src="`/img/products/product_${item.id}_mini.jpg`"
      alt=""
      @click="showPreview(e, item.id)"
    />
    <p>{{ item.name }}</p>
    <div class="product-order">
      <span>{{ item.price }} руб/комп</span>
      <span><input type="number" v-model="pieces" /> комп.</span>
    </div>
    <div class="buttonToCart">
      <button class="button_clear" @click="order(item.id, pieces, item.name)">
        Заказать
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-block",
  data() {
    return {
      pieces: 0,
    };
  },
  props: {
    item: {
      type: Object,
      default: () => [],
    },
  },
  methods: {
    showPreview(e, id) {
      this.$emit("update:preview", true);
      this.$emit("update:currentProduct", id);
    },
    order(id, pieces, nameProduct) {
      if (pieces <= 0) {
        alert("Укажите количество товара!");
        return;
      }
      this.$emit("order", id, pieces, nameProduct);
    },
  },
};
</script>

<style>
</style>