<script>
import IconEdit from "@/components/svg-icons/icon-edit/IconEdit.vue";
import IconDelete from "@/components/svg-icons/icon-delete/IconDelete.vue";
import IconFile from "@/components/svg-icons/icon-file/IconFile.vue";

export default {
  name: "TodoApp",
  components:{
    IconFile,
    IconEdit,
    IconDelete
  },
  data() {
    return {
      task: '',
      category: '',
      editedTask: null,
      taskMessage: '',
      taskStatus: '',
      tasks: [],
    }
  },
  mounted() {
    if(localStorage.tasks){
      this.tasks = JSON.parse(localStorage.tasks)
    }
    let that = this;
    setTimeout(function (){
      that.removeToast();
    },5000)
  },
  watch:{
    tasks: {
      deep: true,
      handler(newTasks) {
        localStorage.tasks = JSON.stringify(newTasks)
      }
    }
  },
  methods:{
    addTaskHandler() {
      if(this.task === '' || this.category === '') {
        this.taskMessage = 'Please add task';
        this.taskStatus = 'task-empty';
        return false
      }
      if(this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          category: this.category
        });
        this.task = '';
        this.category = '';
        this.taskMessage = 'Task Added Successfully';
        this.taskStatus = 'task-add';
      }
      else {
        this.tasks[this.editedTask].name = this.task;
        this.tasks[this.editedTask].category = this.category;
        this.editedTask = null;
        this.task = '';
        this.category = '';
        this.taskMessage = 'Task Update Successfully';
        this.taskStatus = 'task-update';
      }
    },
    editTaskHandler(index) {
      this.task = this.tasks[index].name
      this.category = this.tasks[index].category
      this.editedTask = index;
    },
    deleteTaskHandler(index) {
      this.tasks.splice(index,1);
      this.taskMessage = 'Task Delete Successfully';
      this.taskStatus = 'task-delete';
    },
    removeToast(){
      this.taskMessage = ''
    }
  },

}
</script>
<template src="./TodoApp.html"></template>
