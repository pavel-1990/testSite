<template>
  <my-dialog
    v-model:show="dialogVisible"
    @hideDialog="this.$emit('update:dialogVisible', false)"
  >
    <div class="callBack">
      <form @submit.prevent>
        <h3>ОБРАТНЫЙ ЗВОНОК</h3>
        <input v-model="name" name="name" type="text" placeholder="Ваше имя" />
        <input
          v-model="phone"
          name="phone"
          type="number"
          placeholder="Номер телефона"
        />
        <button class="button_green" @click="sendForm">
          Запрос обратного звонка
        </button>
      </form>
    </div>
  </my-dialog>
</template>

<script>
import { fetchPost } from "@/myScript.js";

export default {
  name: "call-back-form",
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
      const send = await fetchPost("callback", body);
      console.log(send);
      if (send) {
        this.phone = "";
        this.name = "";
        alert("Спасибо! Мы перезвоним вам в ближайшее время!");
        this.$emit("update:dialogVisible", false);
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
  font-family: "Open Sans", sans-serif;
}

.callBack > form > * {
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  display: block;
  text-align: center;
}
.callBack input {
  height: 6vh;
  box-sizing: border-box;
}
</style>