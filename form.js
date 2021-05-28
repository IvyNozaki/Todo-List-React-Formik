function TodoForm({addTodo}) {
  const[value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    // const newTodos = [...todos, {text:value, isCompleted:false}];
    // setTodos(newTodos); //these values (todos) are not within this file
    addTodo(value); //uses the addTodo() in index.js to get access to the values
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Type & press Enter to add"
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}