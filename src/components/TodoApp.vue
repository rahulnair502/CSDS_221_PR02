<template>

  <div class="container" style="max-width: 600px">
    <!-- Heading -->

    <div class="card  text-light bg-primary">
      <div class=" card-body text-center">
        
          <div class="fa-solid fa-bars d-inline-block "></div>
          <div class = "d-inline-block  "> FRAMEWORKS</div>
        <div>
   
  </div>
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
            <button  @click="editTask(index)" class="btn btn-sm btn-block bg-primary"><i class="fa-solid fa-pen-to-square"></i> Update</button>
            <button @click="deleteTask(index)" class="btn btn-sm btn-block  bg-danger"><i class="fa-solid fa-circle-xmark"></i> Delete  </button>
          </div>

          </td>
        </tr>
      </tbody>
    </table>
  <a-button type="primary" @click="showModal">Open</a-button>
  <a-modal v-model:visible="visible" wrap-class-name="full-modal-to-xl">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };
    return { visible, showModal };
  },

   data() {
    
    return {
      task: '',
      editedTask: null,
      show: false,
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

     closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
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
});
</script>