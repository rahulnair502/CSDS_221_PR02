<template>
  <div class="container" style="max-width: 1600px">
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
        <td>{{ task.tit }}</td>
        <td>{{ task.desc }}</td>
        <td>{{ task.dead }}</td>
        <td>{{ task.prior }}</td>
        <td class="text-center">
          <div>
            <input
              class="form-check-input"
              v-on:click="task.isHiddenCheck = !task.isHiddenCheck"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </td>
        <td class="text-center">
          <div class="span2">

            <button
              v-if="!task.isHiddenCheck"
              data-bs-toggle="modal"
             
              data-bs-target="#staticBackdrop" 
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
    id="staticBackdrop"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-center text-light">
          <h5 class="modal-title text-light text-center" id="exampleModalLabel">
            <i class="fa-solid fa-pen-to-square text-light"></i> Edit Task
          </h5>
        </div>

        <div class="container mb-3 mt-3">
          <form action="/action_page.php" class="was-validated">
            
              <input
                type="text"
                v-model="description"
                class="form-control"
                placeholder="Description"
                aria-label="Description"
                aria-describedby="basic-addon1"
                required
              />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please enter a description</div>
            </div>

            <div class="mb-3">
              <div class="input-group date" data-provide="datepicker">
                <input
                  v-model="deadline"
                  class="form-control py-2 border-right-0 border"
                  id="date-from"
                  type="text"
                  name="date-form"
                  required
                />
                <span class="input-group-append">
                  <div class="input-group-text bg-transparent">
                    <i class="fa fa-calendar"></i>
                  </div>
                </span>
              </div>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please enter a valid date</div>
            </div>
             </form>
            <div class="form-check mb-3">

             <div class="mt-2 text-center">
            <div><label for="priority">Priority</label></div>
            <div class="form-check form-check-inline">
              <input
                v-model="priority"
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Low"
              />
              <label class="form-check-label" for="inlineRadio1">Low</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="priority"
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Med"
              />
              <label class="form-check-label" for="inlineRadio2">Med</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="priority"
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="High"
              />
              <label class="form-check-label" for="inlineRadio3">High</label>
            </div>
          </div>
             
         
        </div>
       
         
          <div class="modal-footer">
            <button @click="editTask(index)" type="button" class="btn btn-primary">
              <i class="fa-solid fa-pen-to-square text-light"></i> Edit
            </button>
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
  </div>
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

        <div class="container mt-3">
          <form action="/action_page.php" class="was-validated">
            <div class="mb-3 mt-3">
              <input
                v-model="title"
                type="text"
                class="form-control"
                placeholder="Title"
                aria-label="Title"
                aria-describedby="basic-addon1"
                required
                
              />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please enter a valid title</div>
            </div>
            <div class="mb-3">
              <input
                type="text"
                v-model="description"
                class="form-control"
                placeholder="Description"
                aria-label="Description"
                aria-describedby="basic-addon1"
                required
              />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please enter a description</div>
            </div>

            <div class="mb-3">
              <div class="input-group date" data-provide="datepicker">
                <input
                  v-model="deadline"
                  class="form-control py-2 border-right-0 border"
                  id="date-from"
                  type="text"
                  name="date-form"
                  required
                />
                <span class="input-group-append">
                  <div class="input-group-text bg-transparent">
                    <i class="fa fa-calendar"></i>
                  </div>
                </span>
              </div>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please enter a valid date</div>
            </div>
             </form>
            <div class="form-check mb-3">

             <div class="mt-2 text-center">
            <div><label for="priority">Priority</label></div>
            <div class="form-check form-check-inline">
              <input
                v-model="priority"
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Low"
              />
              <label class="form-check-label" for="inlineRadio1">Low</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="priority"
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Med"
              />
              <label class="form-check-label" for="inlineRadio2">Med</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="priority"
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="High"
              />
              <label class="form-check-label" for="inlineRadio3">High</label>
            </div>
          </div>
             
         
        </div>
       
         
          <div class="modal-footer">
            <button @click="addTask" type="button" class="btn btn-primary">
              <i class="fa-solid fa-circle-plus"></i> Add
            </button>
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
</div>



  
</template>

<script>
export default {
      tit: '',
      desc: '',
      dead: '',
      prior: '',
      date: null,
      editedTask: null,
      show: false,
      isHiddenCheck: false,
  data() {
    return {
      description: '',
      title: '',
      deadline: '',
      priority:'',
     
      tasks: [ 
      ],
    };
  },
  methods: {
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
      toastr.success('Deleted Succesfully')
    },

   
    /**
     * Add / Update task
     */

    popUpModal() {
      $('#exampleModal').modal('show');
      $('.modal-dialog').css('max-width', '99%');
    },
    addTask() {
      if (this.title.length === 0) return;
      if (this.description.length === 0) return;

      if (this.priority.length === 0) return;
      /* We need to update the task */
      if (this.editedTask != null) {
        this.tasks[this.editedTask].Description = this.description;
        this.tasks[this.editedTask].Deadline = this.deadline;
        this.tasks[this.editedTask].Priority = this.priority;
        this.editedTask = null;
      } else {
        /* We need to add new task */
        this.tasks.push({
          tit: this.title,
          desc: this.description,
          dead: this.deadline,
          prior: this.priority,
        });
      }
      toastr.success('Added Succesfully')
      this.description = '';
      this.title = '';
      this.deadline = '';
      this.priority = '';
    },

     /**
     * Edit task
     */
    editTask(index) {
      this.tasks[index].description = this.description
 
      this.editedTask = index;
    },
   
  },

  
};
</script>
