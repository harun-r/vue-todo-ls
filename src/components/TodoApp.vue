<template src="./TodoApp.html"></template>
<script>

export default {
  name: "TodoApp",
  data() {
    return{
      task: '',
      category: '',
      editedTask: null,
      tasks: []
    }
  },
  methods:{
    addTaskHandler() {

      if(this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          category: this.category
        });
      }
      else {
        this.tasks[this.editedTask].name = this.task;
        this.tasks[this.editedTask].category = this.category;
        this.editedTask = null;
      }

      this.task = '';
      this.category = '';
    },
    editTaskHandler(index) {
      this.task = this.tasks[index].name
      this.category = this.tasks[index].category
      this.editedTask = index
    },
    deleteTaskHandler(index) {
      this.tasks.splice(index,1)
    }
  }
}
</script>
