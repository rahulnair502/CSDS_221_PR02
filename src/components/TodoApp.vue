<template>

  <div class="container" style="max-width: 600px">
    <!-- Heading -->

    <div class="card  text-light bg-primary">
      <div class=" card-body text-center">
        
          <div class="fa-solid fa-bars d-inline-block "></div>
          <div class = "d-inline-block  "> FRAMEWORKS</div>
            <a-button type="primary d-inline-block float-end" @click="showModal"> <i class="fa-solid fa-circle-plus"></i>  Add </a-button>
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
          <td scope="col">Is Complete</td>
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
            <div>
              <input
                class="form-check-input"
                v-on:click="isHiddenCheck = !isHiddenCheck"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </td>
        <td class="text-center">
        
         <div class="span2">

  
            <button v-if="!isHiddenCheck"  @click="showModal" class=" text-light btn btn-sm btn-block bg-primary"><i class="fa-solid fa-pen-to-square text-light"></i> Update</button>
            <button @click="deleteTask(index)" class=" text-light btn btn-sm btn-block  bg-danger"><i class="fa-solid fa-circle-xmark text-light"></i> Delete  </button>
        
        </div>
          </td>
        </tr>
      </tbody>
    </table>

  <!--Modal-->

  <a-modal v-model:visible="visible" wrap-class-name="full-modal-to-xl">
  
       <template #footer>
   
        <a-button key="submit"  :loading="loading" @click="Task"
             class="btn btn-sm btn-block  bg-primary text-light"><i class="fa-solid fa-circle-plus text-light"></i> ADD </a-button>
         <a-button key="back"  :loading="loading" @click="Task"
             class="btn btn-sm btn-block  bg-danger text-light"><i class="fa-solid fa-circle-xmark text-light"></i> CANCEL</a-button>
      
      </template>  
      
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
      isHiddenCheck: false,
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
    addTask() {
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