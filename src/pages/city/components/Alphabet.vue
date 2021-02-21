<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item.id"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
  },
  computed: {
    letters() {
      const letters = [];
      Object.keys(this.cities).forEach((i) => {
        letters.push(i);
      });
      return letters;
    },
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  updated() {
    // eslint-disable-next-line dot-notation
    this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    width: 0.4rem;

    .item {
      line-height: 0.4rem;
      text-align: center;
      color: $bgColor;
    }
  }
</style>
