const ToDoList = (props) => {
  return (
    <div>
      <h4>To Do List: </h4>
      <ul>
        {props.todos.map((t) => (
          <li>
            <input type = 'checkbox'/>
            <b>{t}</b></li>
        ))}
      </ul>
    </div>
  );
};
