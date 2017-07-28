<template>
  <div class="container">
    <div class="row">
      <div class="center-block" style="width: 400px">
        <div class="form-group">
          <p>Todo Lists</p>
        </div>
        <ul class="modal-footer">
          <li v-for="item, index in todos">{{index+1}}.<del>{{item.name}}</del></li>
        </ul>

        <div class="modal-footer">
          <input type="text" ref="todo">
          <button class="btn btn-info btn-sm">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {todos} from "../server/index"
  export default {
    data() {
      return {
        todos: [
          {
            name: '睡觉',
            completed: false
          }
        ]
      }
    },
    created () {
      this.init()
    },
    methods: {
      init() {
        let title = this.$refs.todo ? this.$refs.todo.value : ''
        todos.queryByTitle()
      }
    }

  }
</script>

