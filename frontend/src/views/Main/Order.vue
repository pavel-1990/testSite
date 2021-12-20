<template>
  <main-block
    :header="blockParams.header"
    :className="blockParams.className"
    :idBlock="blockParams.idBlock"
  >
    <div>
      <form @submit.prevent>
        <div class="order-form">
          <h3>ОСТАВИТЬ ЗАЯВКУ</h3>
          <h4>на рассчет стоимости</h4>
          <div class="icon">
            <img src="/icon/phone2.svg" />

            <input
              v-model="phone"
              name="phone"
              type="number"
              placeholder="Номер телефона"
            />
          </div>
          <div class="icon">
            <img src="/icon/mail.svg" />
            <input
              v-model="mail"
              name="mail"
              type="text"
              placeholder="e-mail"
            />
          </div>

          <button class="button_green" @click="sendForm">
            Заказать рассчет цены
          </button>
          <label for="">
            <input v-model="conditions" type="checkbox" />Соглашаюсь с
            <a href="#">условиями передачи данных</a><br />
          </label>
        </div>
      </form>
    </div>
  </main-block>
</template>

<script>
import { fetchPost } from "@/myScript.js";

export default {
  name: "order",
  data() {
    return {
      phone: "",
      mail: "",
      conditions: "",
    };
  },
  props: {
    blockParams: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async sendForm() {
      if (!this.conditions) {
        this.conditions = false;
        alert("Вы должны принять условия передачи данных!");
        return;
      }
      if (!this.phone && !this.mail) {
        alert("Введите контактные данные!");
        return;
      }
      const body = new FormData();
      body.append("phone", this.phone);
      body.append("mail", this.mail);
      const send = await fetchPost("callback", body);
      if (send) {
        this.phone = "";
        this.mail = "";
        alert("Спасибо за обращение мы свяжемся с вами в ближайшее время");
        return;
      }
    },
  },
};
</script>

<style>
.icon > img {
  position: absolute;
  top: 25%;
  left: 10px;
  height: 40%;
}
.icon {
  position: relative;
  display: flex !important;
}
.icon input {
  width: 100%;
  /* padding-left: 30px; */
  padding-left: 25%;
}
</style>