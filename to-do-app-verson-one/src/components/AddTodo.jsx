function AddTodo() {
  return (
    <div class="container ">
      <div class="row toDoRow">
        <div class="col-6">
          <input type="text" placeholder="Enter todo here"></input>
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success  toDoButton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
