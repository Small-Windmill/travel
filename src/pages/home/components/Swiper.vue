<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: 5000,
        pagination: '.swiper-pagination',
        clickable: true,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
  },
};

</script>
<style scoped lang="scss">
// 深度作用选择器 >>> 但如果是sass/less的话可能无法识别，这时候需要使用 /deep/ 选择器
/deep/.swiper-pagination-bullet-active {
  background-color: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 30.47%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}

// .swiper-slide {
//   width: 3.75rem;
// }
</style>
