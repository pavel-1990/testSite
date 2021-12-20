<template>
  <my-dialog
    v-model:show="dialogVisible"
    @hideDialog="this.$emit('update:orderForm', false)"
  >
    <div class="callBack">
      <form @submit.prevent>
        <!-- <h3>ЗАКАЗ ТОВАРА</h3> -->
        <input v-model="name" name="name" type="text" placeholder="Ваше имя" />
        <input
          v-model="phone"
          name="phone"
          type="number"
          placeholder="Номер телефона"
        />
        <div class="currentOrder">
          <div>Наименовние товара:</div>
          <h3>{{ currentOrder.nameProduct }}</h3>
          <div>
            <span>{{ currentOrder.pieces }} комплект</span>
          </div>
        </div>
        <button class="button_green" @click="sendForm">Сделать заказ</button>
      </form>
    </div>
  </my-dialog>
</template>

<script>
import { fetchPost } from "@/myScript.js";

export default {
  name: "order-form",
  data() {
    return {
      phone: "",
      name: "",
    };
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => false,
    },
    currentOrder: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async sendForm() {
      if (!this.phone) {
        alert("Введите номер телефона!");
        return;
      }
      const body = new FormData();
      body.append("phone", this.phone);
      body.append("name", this.name);
      body.append("product", this.currentOrder.id);
      body.append("pieces", this.currentOrder.pieces);

      const send = await fetchPost("orders", body);
      if (send) {
        this.phone = "";
        this.name = "";
        alert("Спасибо! Мы перезвоним вам в ближайшее время!");
        this.$emit("update:orderForm", false);
        return;
      }
    },
  },
};
</script>

<style>
.callBack {
  width: min-content !important;
  height: min-content;
  background-color: white;
  padding: 10px;
}
.callBack h3 {
  font-size: 20px;
  width: 100%;
}

.callBack > form > * {
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  display: block;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
}
.callBack input {
  height: 6vh;
  box-sizing: border-box;
}
.currentOrder h3 {
  font-size: 16px;
}
</style>