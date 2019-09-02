<template>
  <form class="contact-form">
    <p class="marginb20">
      <input v-model="name" class="text" placeholder="您的名字" @change="checkname">
      <span class="color-red">{{ msgame }}</span>
    </p>
    <p class="marginb20">
      <input v-model="phone" class="text" placeholder="联系电话" @change="checkphone">
      <span class="color-red">{{ msgphone }}</span>
    </p>
    <p class="marginb20">
      <input v-model="city" class="text" placeholder="您所在地区">
    </p>
    <p class="marginb20">
      <input v-model="mail" class="text" placeholder="您的邮箱" @change="checkemail">
      <span class="color-red">{{ msgmail }}</span>
    </p>

    <p class="marginb20">
      <input v-model="addvice" class="text" placeholder="您的建议意见或想要了解的内容" @change="checkaddvice">
      <span class="color-red">{{ msgaddvice }}</span>
    </p>
    <p class>
      <input type="button" value="提交" class="form-btn" @click="submitForm">
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
  components: {

  },
  data() {
    return {
      msgame: '',
      msgmail: '',
      msgphone: '',
      msgaddvice: '',
      phone: '',
      mail: '',
      name: '',
      addvice: '',
      city: '',
      isVal: false,
    }
  },
  methods: {
    checkname() {
      if (this.name === '') {
        this.msgame = '用户名不能为空'
        this.isVal = false
      } else {
        this.msgame = ''
      }
    },
    checkemail() {
      const regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      console.log(this.mail)
      if (this.mail === '') {
        this.msgmail = '请输入邮箱'
        this.isVal = false
      } else if (!regEmail.test(this.mail)) {
        console.log(this.mail)
        this.msgmail = '邮箱格式不正确'
        this.isVal = false
      }
    },
    checkphone() {
      const _this = this
      const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
      if (this.phone === '') {
        this.msgphone = '手机号不能为空'
        this.isVal = false
      } else if (!myreg.test(_this.phone)) {
        this.msgphone = '请输入有效的手机号码'
        this.isVal = false
      } else {
        this.msgphone = ''
      }
    },
    checkaddvice() {
      if (this.addvice === '') {
        this.msgaddvice = '建议不能为空'
        this.isVal = false
      } else {
        this.msgaddvice = ''
      }
    },
    submitForm() {
      if (
        this.msgame === '' &&
        this.msgmail === '' &&
        this.msgphone === '' &&
        this.msgaddvice === '' &&
        this.isVal
      ) {
        console.log('校验通过')
      } else {
        console.log('校验失败')
      }
    },
  },
}
</script>
