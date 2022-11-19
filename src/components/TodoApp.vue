<template>
  <div class="container" style="max-width: 600px">
    <!-- Heading -->

    <div class="card text-light bg-primary">
      <div class="card-body text-center">
        <div class="fa-solid fa-bars d-inline-block"></div>
        <div class="d-inline-block">FRAMEWORKS</div>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa-solid fa-circle-plus"></i> Add
        </button>
        <div></div>
      </div>
    </div>
  </div>

  <!-- Task table -->
  <table class="table table-hover mt-3">
    <thead>
      <tr class="text-center">
        <td scope="col">Title</td>
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
            <button
              v-if="!isHiddenCheck"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="text-light btn btn-sm btn-block bg-primary"
            >
              <i class="fa-solid fa-pen-to-square text-light"></i> Update
            </button>
            <button
              @click="deleteTask(index)"
              class="text-light btn btn-sm btn-block bg-danger"
            >
              <i class="fa-solid fa-circle-xmark text-light"></i> Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-center text-light">
          <h5 class="modal-title text-light text-center" id="exampleModalLabel">
            <i class="fa-solid fa-circle-plus"></i> Add Task
          </h5>
        </div>

        <div class="modal-body">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              aria-label="Title"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Description"
              aria-label="Description"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group date" data-provide="datepicker">
            <input
              class="form-control py-2 border-right-0 border"
              type="search"
              id="date"
            />
            <span class="input-group-append">
              <div class="input-group-text bg-transparent">
                <i class="fa fa-calendar"></i>
              </div>
            </span>
          </div>
        </div>
        
         <div class = "mt-2 text-center">
          <div> <label for="priority">Priority</label> </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label" for="inlineRadio1">Low</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">Med</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          
          />
          <label class="form-check-label" for="inlineRadio3"
            >High</label
          >
        </div>
        </div>
        <div class="modal-footer">

          <button type="button" class="btn btn-primary"> <i class="fa-solid fa-circle-plus"></i> Add</button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            <i class="fa-solid fa-cancel"></i> Cancel
          </button>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      date: null,
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
      document.querySelector('body').classList.remove('overflow-hidden');
    },
    openModal() {
      this.show = true;
      document.querySelector('body').classList.add('overflow-hidden');
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
};
</script>
