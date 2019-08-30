<template>
  <form class="contact-form ">
    <p>
      <input class="text " placeholder="您的名字">
    </p>
    <p>
      <input class="text " placeholder="联系电话">
    </p>
    <p>
      <input class="text " placeholder="您所在地区">
    </p>
    <p>
      <input class="text " placeholder="您的邮箱">
    </p>
    <p>
      <input class="text " placeholder="您的建议意见或想要了解的内容">
    </p>
    <p>
      <input type="button" value="提交" class="form-btn">
    </p>
  </form>
</template>
<style lang="scss" scoped>
.contact-form{ padding: 60px 0 0 0;}
.text{ height: 48px; border: 1px solid #7d7d7d; padding: 0 10px; width: 100%; margin-bottom: 20px; background: none;}
.form-btn{ display: block; width: 100%; height:48px; background: #7d7d7d; color: #fff; border: 0; cursor: pointer;}
</style>
<script>
export default {

}
</script>
