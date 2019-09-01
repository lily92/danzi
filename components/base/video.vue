<template>
  <div class="video-master animated slideInRight flex-item">
    <img src="~/assets/images/btn-close.png" alt="" srcset="" class="close-btn" @click="closeVideo">
    <video
      class="animated flipInX video"
      autoplay="autoplay"
      controls
      :src="video.url"
      :poster="video.poster"
    />
  </div>
</template>
<style lang="scss" scoped>
.video-master{ background: rgba(0, 0, 0, 0.6); position: fixed; width: 100%; height: 100%; left: 0; top: 0; z-index: 99;}
.video{ max-width: 1000px; width:90%; background:#000;animation-delay: 1.5s}
.close-btn{ position: fixed; right: 20px; top: 20px; z-index: 100; cursor: pointer;}
</style>
<script>
export default {
  props: ['video'],
  mounted() {
    // const video = document.getElementsByClassName('video')
    // video.play()
  },
  methods: {
    closeVideo() {
      this.$emit('close', 'close')
    },
  },
}
</script>
