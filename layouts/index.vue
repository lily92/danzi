<template>
  <div>
    <Headers />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Headers from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Headers,
    Footer,
  },
  props: ['navi'],
}
</script>

