<template>
  <div class="pagenum" :class="tclass">
    <ul class="flex-item" @click="onPagerClick">
      <li
        v-if="pageCount > 0"
        :class="{ active: currentPage === 1, disabled }"
        class="number"
      >
        1
      </li>
      <li
        v-if="showPrevMore"
        class="el-icon more btn-quickprev number"
        :class="[quickprevIconClass, { disabled }]"
        @mouseenter="onMouseenter('left')"
        @mouseleave="quickprevIconClass = 'el-icon-more'"
      >
        &lt;
      </li>
      <li
        v-for="pager in pagers"
        :key="pager"
        :class="{ active: currentPage === pager, disabled }"
        class="number"
      >
        {{ pager }}
      </li>
      <li
        v-if="showNextMore"
        class="el-icon more btn-quicknext number"
        :class="[quicknextIconClass, { disabled }]"
        @mouseenter="onMouseenter('right')"
        @mouseleave="quicknextIconClass = 'el-icon-more'"
      >
        &gt;
      </li>
      <li
        v-if="pageCount > 1"
        :class="{ active: currentPage === pageCount, disabled }"
        class="number"
      >
        {{ pageCount }}
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.paging{ justify-content: space-between; background: #fff; padding: 10px 25px; margin: 20px 0}
li{ color: #333; cursor: pointer;}
.pagenum {
  .number{ display: block; width: 26px; line-height: 26px; background: #bfbfbf; border-radius: 50%; color: #333; margin: 0 10px; text-align: center; }
  .number:hover,.number.active{ background: #0c78b0; color: #fff;}
}
.paging.red{ background: #f5f5f5;
  .pagenum .number:hover,.pagenum .number.active{ background: #d10e0e; color: #fff;}
}
.pagenum.red{
  .number:hover,.number.active{ background: #d10e0e; color: #fff;}
}
@media (max-width: 767px) {
  .pagenum{
    .number:hover{ background: #bfbfbf; color: #333;}
    .number.active{ background: #0c78b0; color: #fff;}
  }
  .pagenum.red{
     .number:hover{ background: #bfbfbf; color: #333;}
     .number.active{ background: #d10e0e; color: #fff;}
  }
}
</style>
<script type="text/babel">
export default {
  name: 'ElPager',

  props: {
    currentPage: {
      type: Number,
      default: 0,
    },

    pageCount: {
      type: Number,
      default: 0,
    },

    pagerCount: {
      type: Number,
      default: 0,
    },
    tclass: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      current: null,
      quicknextIconClass: 'el-icon-more',
      quickprevIconClass: 'el-icon-more',
    }
  },
  computed: {
    pagers() {
      const pagerCount = this.pagerCount

      const currentPage = Number(this.currentPage)
      const pageCount = Number(this.pageCount)

      const showPrevMore = this.showPrevMore
      const showNextMore = this.showNextMore

      const array = []

      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2)
        for (let i = startPage; i < pageCount; i++) {
          array.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i)
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i)
        }
      }

      return array
    },
    showPrevMore() {
      const pagerCount = this.pagerCount
      const halfPagerCount = (pagerCount - 1) / 2

      const currentPage = Number(this.currentPage)
      const pageCount = Number(this.pageCount)

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          return true
        }
      }

      return false
    },
    showNextMore() {
      const pagerCount = this.pagerCount
      const halfPagerCount = (pagerCount - 1) / 2

      const currentPage = Number(this.currentPage)
      const pageCount = Number(this.pageCount)

      if (pageCount > pagerCount) {
        if (currentPage < pageCount - halfPagerCount) {
          return true
        }
      }

      return false
    },
  },
  watch: {
    showPrevMore(val) {
      if (!val) this.quickprevIconClass = 'el-icon-more'
    },

    showNextMore(val) {
      if (!val) this.quicknextIconClass = 'el-icon-more'
    },
  },

  methods: {
    onPagerClick(event) {
      const target = event.target
      if (target.tagName === 'UL' || this.disabled) {
        return
      }

      let newPage = Number(event.target.textContent)
      const pageCount = this.pageCount
      const currentPage = this.currentPage
      const pagerCountOffset = this.pagerCount - 2

      if (target.className.includes('more')) {
        if (target.className.includes('quickprev')) {
          newPage = currentPage - pagerCountOffset
        } else if (target.className.includes('quicknext')) {
          newPage = currentPage + pagerCountOffset
        }
      }

      /* istanbul ignore if */
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1
        }

        if (newPage > pageCount) {
          newPage = pageCount
        }
      }

      if (newPage !== currentPage) {
        this.$emit('change', newPage)
      }
    },

    onMouseenter(direction) {
      if (this.disabled) return
      if (direction === 'left') {
        this.quickprevIconClass = 'el-icon-d-arrow-left'
      } else {
        this.quicknextIconClass = 'el-icon-d-arrow-right'
      }
    },

  },

}
</script>
