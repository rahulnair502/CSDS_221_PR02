<template>
  <div class="container" style="max-width: 600px">
    <!-- Heading -->

    <div class="card  text-light bg-primary">
      <div class=" card-body text-center">
        
          <div class="fa-solid fa-bars d-inline-block "></div>
          <div class = "d-inline-block  "> FRAMEWORKS</div>
        
               <button class="btn text-light text-right d-inline float-end "><i class="fa fa-circle-plus text-light d-inline"></i> Add</button>
         
        </div>
      </div>
    </div>

    <!-- Task table -->
    <table class="table table-hover mt-3">
      <thead>
        <tr class = text-center>
          <td scope="col">Title </td>
          <td scope="col">Description</td>
          <td scope="col">Deadline</td>
          <td scope="col">Priority</td>
          <td scope="col">IsComplete</td>
          <td scope="col">Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{ task.Title }}</td>
          <td>{{ task.Description }}</td>
          <td>{{ task.Deadline }}</td>
          <td>{{ task.Priority }}</td>
          <td class="text-center">
            <div @click="isComplete(index)">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </td>
        <td class="text-center">
        
         <div class="span2">
            <button  @click="isUpdate(index)" class="btn btn-sm btn-block bg-primary"><i class="fa-solid fa-pen-to-square"></i> Update</button>
            <button @click="isDelete(index)" class="btn btn-sm btn-block  bg-danger"><i class="fa-solid fa-circle-xmark"></i> Delete  </button>
          </div>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      task: '',
      editedTask: null,

      tasks: [
        {
          Title: '221 projects',
          Description: 'to-do',
          Deadline: 'today',
          Priority: 'Low',
        },
      ],
    };
  },
  methods: {
    /**
     * Capitalize first character
     */
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    /**
     * Change status of task by index
     */
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },
    /**
     * Deletes task by index
     */
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    /**
     * Edit task
     */
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    /**
     * Add / Update task
     */
    submitTask() {
      if (this.task.length === 0) return;
      /* We need to update the task */
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        /* We need to add new task */
        this.tasks.push({
          name: this.task,
          status: 'todo',
        });
      }
      this.task = '';
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.line-through {
  text-decoration: line-through;
}
</style>
