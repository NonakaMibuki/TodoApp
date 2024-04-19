import React from 'react'

const List = ({todo, setTodo}) => {

  const completed = (id) => {
    setTodo(todo.map((task) => {
        if(id === task.id) {
            return {
                ...task,
                completed: !task.completed 
            };
        }
        return task;
    }));
  }

  const deleted = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  }

  return (
    <div className='todoList'>
        {todo.map((task) =>{
            return(
                <div className={`todo ${task.completed ? "completed" : ""}`} key={task.id}>
                    <div className="listTitle">
                        <span>{task.text}</span>
                    </div>
                    <div className="listButton">
                        <button onClick={() => completed(task.id)}>完了</button>
                        <button onClick={() => deleted(task.id)}>削除</button>
                    </div>
                </div>
            );
        })}

    </div>
  )
}

export default List;