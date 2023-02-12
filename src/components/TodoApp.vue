<script>
import IconEdit from "@/components/svg-icons/icon-edit/IconEdit.vue";
import IconDelete from "@/components/svg-icons/icon-delete/IconDelete.vue";
import IconFile from "@/components/svg-icons/icon-file/IconFile.vue";
import IconCheck from "@/components/svg-icons/icon-check/IconCheck.vue";
export default {
  name: "TodoApp",
  components:{
    IconFile,
    IconEdit,
    IconDelete,
    IconCheck
  },
  data() {
    return {
      task: '',
      category: '',
      editedTask: null,
      taskMessage: '',
      taskStatus: '',
      tasks: [],
      isEditEnable: false,
      isComplete: false
    }
  },
  mounted() {
    if(localStorage.tasks){
      this.tasks = JSON.parse(localStorage.tasks)
    }
    let that = this;
    setInterval(function (){
      that.removeToast();
    },10000)
  },
  watch:{
    tasks: {
      deep: true,
      handler(newTasks) {
        localStorage.tasks = JSON.stringify(newTasks)
      }
    }
  },
  methods: {
    addTaskHandler() {
      if( this.task === '' ) {
        this.taskMessage = 'Add a task name';
        this.taskStatus = 'task-empty';
        return false
      }
      if( this.category === '' ){
        this.taskMessage = 'Add a task category';
        this.taskStatus = 'task-empty';
        return false
      }

      if(this.editedTask === null) {
        this.tasks.unshift({
          name: this.task,
          cat: this.category,
          status: this.isComplete
        });
        this.task = '';
        this.category = '';
        this.taskMessage = 'Task added successfully';
        this.taskStatus = 'task-add';
      }
      else {
        this.tasks[this.editedTask].name = this.task;
        this.tasks[this.editedTask].category = this.category;
        this.editedTask = null;
        this.task = '';
        this.category = '';
        this.taskMessage = 'Task update successfully';
        this.taskStatus = 'task-add';
        this.isEditEnable = false
      }
    },
    completeTaskHandler(index) {
      this.tasks[index].status = true
    },
    editTaskHandler(index) {
      this.task = this.tasks[index].name
      this.category = this.tasks[index].category
      this.editedTask = index
      this.isEditEnable = true
    },
    deleteTaskHandler(index) {
      this.tasks.splice(index,1);
      this.taskMessage = 'Task delete successfully';
      this.taskStatus = 'task-delete';
    },
    removeToast(){
      this.taskMessage = ''
    }
  },

}
</script>
<template src="./TodoApp.html"></template>
