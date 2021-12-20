<template>
  <main class="site-main">
    <advantage
      :blockParams="{
        header: 'ПРЕИМУЩЕСТВА СИСТЕМЫ',
        className: 'advantage system',
        idBlock: 'advantage-system',
      }"
      :adv="advantageSystem"
    />

    <product-list
      :blockParams="{
        header: 'ВСЕГДА В НАЛИЧИИ',
        className: 'product-list',
        idBlock: 'products',
      }"
      :products="products"
    />

    <advantage
      :blockParams="{
        header: 'ПОЧЕМУ МЫ?',
        className: 'advantage company',
        idBlock: 'advantage-company',
      }"
      :adv="advantageCompany"
    />

    <company-video
      :blockParams="{
        header: 'НАШЕ ПРОИЗВОДСТВО',
        className: 'company-video',
        idBlock: 'company-video',
      }"
    />
    <order
      :blockParams="{
        header: '',
        className: 'order',
        idBlock: 'order',
      }"
    />

    <partners
      :blockParams="{
        header: 'НАШИ ПАРТНЕРЫ',
        className: 'partner',
        idBlock: 'partners',
      }"
    />

    <feedback
      :blockParams="{
        header: 'ОТЗЫВЫ КЛИЕНТОВ',
        className: 'feedBack',
        idBlock: 'feedback',
      }"
      :feedBack="feedBack"
    />

    <maps
      :blockParams="{
        header: 'МЫ НА КАРТЕ',
        className: 'maps',
        idBlock: 'maps',
      }"
      :geo="geo"
    />
  </main>
</template>

<script>
export default {
  name: "main-site",
  data() {
    return {
      advantageSystem: [
        {
          img: "Vector.png",
          header: "Высокая прочность, жёсткость и надёжность",
          descript:
            "По прочности соединение с помощью краб-системы ничем не уступает сварке",
        },
        {
          img: "Vector2.png",
          header: "Низкая стоимость",
          descript:
            "Цена конструкции относительна низка, так как:  <ul>           <li>Вам не нужно использовать сварочный аппарат</li>            <li>работу Вы можете сделать своими руками</li>          </ul>",
        },
        {
          img: "Vector3.png",
          header: "Возможность многоразового использования",
          descript:
            "Система соединения позволяет перестроить конструкцию – уменьшить,  увеличить размеры",
        },
        {
          img: "Vector4.png",
          header: "Простота монтажа",
          descript:
            "Для выполнения работ Вам не требуется специальных знаний, Краб-система     закрепляется при помощи болтов и гаек",
        },
      ],
      advantageCompany: [
        {
          img: "Vector5.png",
          header: "Собственное производство",
          descript:
            "Мы изготавливаем элементы краб-системы на собственном производстве в Вологде, уделяя особое внимание качеству.",
        },
        {
          img: "Vector6.png",
          header: "Доставка по всей России",
          descript: "Мы осуществляем доставку нашей продукции по всей России.",
        },
        {
          img: "Vector7.png",
          header: "Доступные цены",
          descript:
            "Так как мы являемся производителем, мы предлагаем нашу продукцию без лишних наценок.",
        },
        {
          img: "Vector8.png",
          header: "Гарантия качества",
          descript:
            "Мы уделяем особое внимание качеству нашей продукции и дорожим нашими           клиентами.",
        },
      ],
    };
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    products: {
      type: Array,
      default: () => [],
    },
    feedBack: {
      type: Array,
      default: () => [],
    },
    geo: {
      type: Object,
      default: () => [],
    },
  },
};
</script>

<style>
</style>