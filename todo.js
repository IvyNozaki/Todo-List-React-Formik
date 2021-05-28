function Todo({todo, index, remove}) {
  function handle(){
    remove(index); //referencing the removeTodo() inside index.js
  }

  return <div className="todo" onClick={handle}> - {todo.text}</div>
}