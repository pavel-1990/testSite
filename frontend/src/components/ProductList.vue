<template>
  <main-block
    :header="blockParams.header"
    :className="blockParams.className"
    :idBlock="blockParams.idBlock"
  >
    <my-dialog v-model:show="preview" @hideDialog="hidePreview">
      <img
        class="img_preview"
        :src="`/img/products/product_${currentProduct}.jpg`"
        alt=""
        @click="hidePreview"
      />
    </my-dialog>
    <order-form
      :dialogVisible="orderForm"
      v-model:orderForm="orderForm"
      :currentOrder="currentOrder"
    />
    <div>
      <product-block
        v-for="(item, i) in products"
        :key="i"
        :item="item"
        v-model:preview="preview"
        v-model:currentProduct="currentProduct"
        @order="order"
      />
    </div>
  </main-block>
</template>

<script>
export default {
  name: "product-list",
  data() {
    return {
      preview: false,
      currentProduct: "",
      orderForm: false,
      currentOrder: {
        id: "",
        pieces: 0,
        nameProduct: "",
      },
    };
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    blockParams: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    showPreview(id) {
      this.preview = true;
      this.currentProduct = id;
    },
    hidePreview() {
      this.preview = false;
    },
    order(id, pieces, nameProduct) {
      this.currentOrder = { id: id, pieces: pieces, nameProduct: nameProduct };
      this.orderForm = true;
    },
  },
};
</script>

<style>
.img_preview {
  max-width: 95vw;
  max-height: 95vh;
}
</style>


