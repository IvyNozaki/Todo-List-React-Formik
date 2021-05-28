function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react & lists',
      isCompleted: false, 
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'click todo to delete',
      isCompleted: false,
    }
  ]);

  // const[value, setValue] = React.useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if(!value) return;
  //   const newTodos = [...todos, {text:value, isCompleted:false}];
  //   setTodos(newTodos);
  //   setValue('');
  // };
  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo,i) => 
          //  <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>
          <Todo index={i} key={i} todo={todo} remove={removeTodo}/>
        )}
     
        {/* <form onSubmit={handleSubmit}>
          <input type="text" className='input' value={value} placeholder='Type todo & press Enter to Add' onChange={e => setValue(e.target.value)}/>
        </form> */}
        <TodoForm addTodo={addTodo}/> 
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);