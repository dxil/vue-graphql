<template>
  <div class="container">
    <div class="row">
      <div class="center-block" style="width: 400px">
        <div class="form-group">
          <label for="Name">用户名</label>
          <input type="text" id="Name" ref="name" class="form-control">
          <label for="Password">密码</label>
          <input type="text" id="Password" ref="password" class="form-control">
        </div>
        <div class="modal-footer">
          <button class="btn btn-default" type="button">关闭</button>
          <button class="btn btn-success" @click="login()">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {users} from "../server/index"
  export default {
    data() {
      return {

      }
    },
    methods: {
      login() {
        users.login(this.$refs.name.value, this.$refs.password.value)
      }
    }

  }
</script>

