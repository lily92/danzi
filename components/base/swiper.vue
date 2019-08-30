<template>
  <div class="swiper-container">
    <slot />
  </div>
</template>
<script>
import load from '@/helper/load'
export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        direction: 'vertical',
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      }),
    },
  },
  created() {
    this.init()
  },
  updated() {
    if (this.instance) {
      this.instance.update()
    }
  },
  beforeDestroy() {
    if (this.instance) {
      // this.instance.destroy()
    }
  },
  methods: {
    async init() {
      if (!process.client) return
      await load([
        '/js/swiper.min.js',
        '/css/swiper.min.css',
      ], 'swiper')

      const Swiper = window.Swiper

      this.instance = new Swiper(this.$el, {
        ...this.options,
      })
    },
  },
}
</script>
