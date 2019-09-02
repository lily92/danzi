<template>
  <form class="contact-form" @submit.prevent="submitFrom">
    <p class="marginb20">
      <input v-model="formData.name" class="text" placeholder="您的名字" required>
    </p>
    <p class="marginb20">
      <input
        v-model="formData.phone"
        class="text"
        type="text"
        placeholder="联系电话"
        required
        @change="checkphone"
      >
      <span class="color-red">{{ msgphone }}</span>
    </p>
    <p class="marginb20">
      <input v-model="formData.city" class="text" placeholder="您所在地区">
    </p>
    <p class="marginb20">
      <input v-model="formData.mail" type="email" class="text" placeholder="您的邮箱" required>
    </p>

    <p class="marginb20">
      <input v-model="formData.addvice" class="text" placeholder="您的建议意见或想要了解的内容" required>
    </p>
    <p class>
      <input type="submit" value="提交" class="form-btn">
    </p>
  </form>
</template>
<style lang="scss" scoped>
.marginb20 {
  margin-bottom: 20px;
}
.contact-form {
  padding: 60px 0 0 0;
}
.text {
  height: 48px;
  border: 1px solid #7d7d7d;
  padding: 0 10px;
  width: 100%;
  // margin-bottom: 20px;
  background: none;
}
.form-btn {
  display: block;
  width: 100%;
  height: 48px;
  background: #7d7d7d;
  color: #fff;
  border: 0;
  cursor: pointer;
}
.color-red {
  color: #ff0000;
}
</style>
<script>
export default {
  components: {},
  data() {
    return {
      msgphone: '',
      isVal: false,
      formData: {
        name: '',
        phone: '',
        city: '',
        mail: '',
        addvice: '',
      },
    }
  },
  methods: {
    checkphone() {
      const _this = this
      const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
      if (this.phone === '') {
        this.msgphone = '手机号不能为空'
        this.isVal = false
      } else if (!myreg.test(_this.formData.phone)) {
        this.msgphone = '请输入有效的手机号码'
        this.isVal = false
      } else {
        this.msgphone = ''
        this.isVal = true
      }
    },
    submitFrom() {
      // about/commit
      console.log(this.formData)
      this.$axios.$post('about/commit', this.formData).then((res) => {
        if (res.code === '1001') {
          alert(res.msg)
          this.formData = {
            name: '',
            phone: '',
            city: '',
            mail: '',
            addvice: '',
          }
        } else {
          alert(res.msg)
        }
      })
    },
  },
}
</script>
