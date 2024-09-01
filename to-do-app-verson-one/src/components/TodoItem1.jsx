function TodoItem1() {
  let itemName = "Buy Milk";
  let date = "04/10/2024";
  return (
    <div class="container ">
      <div class="row toDoRow">
        <div class="col-6">{itemName}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger  toDoButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
