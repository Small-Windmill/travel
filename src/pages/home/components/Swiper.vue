<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        autoplay: 5000,
        loop: true,
        pagination: '.swiper-pagination',
        clickable: true,
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg',
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg',
      }],
    };
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
